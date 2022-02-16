
// let factions_to_join = ["CSEC", "I.I.I.I", "avmnite-02h", "run4theh111z"];


/** @param {import(".").NS } ns */
async function get_all_hostnames(ns){
    var s = ['home'];
    var discovered = [];
    while(s.length > 0){
        var v = s.pop();
        if (!discovered.includes(v)){
            discovered.push(v);
            var edges = ns.scan(v);
            for (var i = 0; i < edges.length; ++i){
                s.push(edges[i]);
            }
        }
    }
    return discovered;
}

/** @param {import(".").NS } ns */
async function connect_to_target(ns, target){
    var s = ['home'];
    var discovered = [];
    while(s.length > 0){
        var v = s.pop();
        // Naive way to do this, but it works. Need to be adjacent to target host to connect.
        ns.connect(v);
        if (v == target){
            ns.tprint(`Connected to ${target}`);
            return;
        }
        if (!discovered.includes(v)){
            discovered.push(v);
            var edges = ns.scan(v);
            for (var i = 0; i < edges.length; ++i){
                s.push(edges[i]);
            }
        }
    }
}


/** @param {import(".").NS } ns */
export async function main(ns) {
    let hosts = await get_all_hostnames(ns);
    let my_hack_level = ns.getHackingLevel();
    ns.tprint(hosts);
    for (let i in hosts){
        let host = hosts[i];
        if (my_hack_level < ns.getServerRequiredHackingLevel(host)
        || !ns.hasRootAccess(host)
        || host.includes("pserv")
        || host == "home"){
            continue;
        }
        connect_to_target(ns, host);
        await ns.sleep(1_000);
        ns.hackAnalyze
        let success = await ns.installBackdoor();
        ns.tprint(success);
        if (success) {
            //TODO: This always gets marked as failure even if the backdoor attempt succeeded. Check docs to verify this returns a bool
            ns.tprint(`Backdoor installed on ${host}`);
        } else {
            ns.tprint("Backdoor failed");
        }
        ns.connect("home");
    }
}
