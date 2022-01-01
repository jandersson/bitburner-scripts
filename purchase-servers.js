/** @param {NS} ns **/
export async function main(ns) {
    var exp = 1;
    var target = ns.args[0];
    var serverLimit = ns.getPurchasedServerLimit();
    ns.tprint("server limit: " + serverLimit);
    var maxRam = ns.getPurchasedServerMaxRam();
    ns.tprint("purchased server max ram: " + maxRam);
    ns.tprint("log2(" + maxRam + ") = " + Math.log2(maxRam));
    ns.tprint(ns.getPurchasedServerCost(2 ** exp));
    // if not at max servers, purchase minimum to reach capacity
    while (ns.getPurchasedServers().length < serverLimit){
        while(ns.getServerMoneyAvailable("home") < ns.getPurchasedServerCost(2 ** exp)){
            await ns.sleep(6000);
        }
        ns.tprint("Purchasing server with " + (2 ** exp) + "GB memory");
        var host = ns.purchaseServer("pserv", 2 ** exp);
        ns.tprint(host + " purchased");
        
        if (exp === 1){
            var scriptName = "low-mem-early-hack-template.ns";
        } else {
            var scriptName = "early-hack-template.ns";
        }
        await ns.scp(scriptName, "home", host);
        ns.exec(scriptName, host, 1, target);
    }
    ns.tprint("Max servers reached!");
    // ++exp;
    var servers = ns.getPurchasedServers();
    ns.tprint("debug: " + 2 ** exp + " > " + ns.getServerMaxRam(servers[0]));
    for (exp; exp < Math.log2(ns.getPurchasedServerMaxRam()); ++exp){
        for (var i = 0; i < servers.length; ++i){
            if ( (2 ** exp) > ns.getServerMaxRam(servers[i])){
                while(ns.getServerMoneyAvailable("home") < ns.getPurchasedServerCost(2 ** exp)){
                    await ns.sleep(60000);
                }
                ns.killall(servers[i]);
                ns.tprint("Deleting server " + servers[i]);
                ns.deleteServer(servers[i]);
                ns.tprint("Purchasing server with " + (2 ** exp) + "GB memory");
                var host = ns.purchaseServer("pserv", 2 ** exp);
                ns.tprint(host + " purchased");
                var scriptName = "early-hack-template.ns";
                if (exp === 1){
                    var scriptName = "low-mem-early-hack-template.ns";
                } 
                await ns.scp(scriptName, "home", host);
                var numThreads = Math.floor(ns.getServerMaxRam(host) / ns.getScriptRam(scriptName))
                ns.tprint("Executing hack script with " + numThreads + " threads");
                ns.exec(scriptName, host, numThreads, target);
            }    
        }
    }
}