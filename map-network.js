
/** @param {import(".").NS } ns */
async function map_network_details(ns){
    var s = ['home'];
    var discovered = [];
    var details = {}
    while(s.length > 0){
        var v = s.pop();
        if (!discovered.includes(v)){
            discovered.push(v);
            var edges = ns.scan(v);
            for (var i = 0; i < edges.length; ++i){
                s.push(edges[i]);
            }

            // Update the details
            details[v] = {
                'hacking_level':ns.getServerRequiredHackingLevel(v),
                'num_ports': ns.getServerNumPortsRequired(v),
                'have_root': ns.hasRootAccess(v),
                'security_level': ns.getServerSecurityLevel(v),
                'weaken_time': ns.getWeakenTime(v),
                'current_money': ns.getServerMoneyAvailable(v),
                'max_money': ns.getServerMaxMoney(v)
            };
        }
    }
    await ns.write('server_details.txt', details, 'w');
    return details;
}

/** @param {import(".").NS } ns */
async function countHackPrograms(ns){
    var hack_programs = [
        'brutessh.exe',
        'ftpcrack.exe',
        'sqlinject.exe',
        'httpworm.exe',
        'relaysmtp.exe'
    ];
    var count = 0;
    for (var i = 0; i < hack_programs.length; ++i){
        if (ns.fileExists(hack_programs[i])){
            count++;
        }
    }
    return count;
}

/** @param {import(".").NS } ns */
export async function main(ns){
    var details = await map_network_details(ns);
    var num_hack_programs = await countHackPrograms(ns);


    var all_rooted = false;
    var num_machines = Object.keys(details).length;
    while(!all_rooted){

        var num_root_count = 0;
        details = await map_network_details(ns);
        for (const [key, value] of Object.entries(details)) {
            if (value['have_root']){
                num_root_count++;
            }
            if (!value['have_root'] & (value['num_ports'] <= num_hack_programs)){
                if (ns.fileExists('brutessh.exe')){
                    ns.brutessh(key);
                }
                if (ns.fileExists('ftpcrack.exe')){
                    ns.ftpcrack(key);
                }
                if (ns.fileExists('sqlinject.exe')){
                    ns.sqlinject(key);
                }
                if (ns.fileExists('httpworm.exe')){
                    ns.httpworm(key);
                }
                if (ns.fileExists('relaysmtp.exe')){
                    ns.relaysmtp(key);
                }
                ns.nuke(key);
                ns.tprint(key, " hacked!");
            }
            if (num_machines == num_root_count){
                all_rooted = true;
                ns.tprint("All machines rooted!");
            }
        }

        await ns.sleep(10_000);

    }

}