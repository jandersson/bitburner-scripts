/**
 *
 * @param {'.'}.NS ns
 */
export async function main(ns){
    var server = ns.args[0];
    if (!ns.args[0]){
        ns.tprint("Usage: run " + ns.getScriptName() + " <host>");
        ns.exit();
    }
    if (!ns.serverExists(server)){
        ns.tprint(server + " doesn't exist! Exiting...");
        ns.exit();
    }

    ns.tprint(server);
    ns.tprint("-----");
    ns.tprint("Server base security level: " + ns.getServerBaseSecurityLevel(server));
    ns.tprint("Server current security level: " + ns.getServerSecurityLevel(server));
    ns.tprint("Server growth rate: " + ns.getServerGrowth(server));
    ns.tprint("Netscript hack() execution time: " +
        ns.getHackTime(server) / 1000 + " seconds");
    ns.tprint("Netscript grow() execution time: " +
        ns.getGrowTime(server) / 1000 + " seconds");
    ns.tprint("Netscript weaken() execution time: " +
        ns.getWeakenTime(server) / 1000 + " seconds");
    ns.tprint("Server money (avail/max): "
        + ns.nFormat(ns.getServerMoneyAvailable(server), '0.0a') + "/"
        + ns.nFormat(ns.getServerMaxMoney(server), '0.0a'));
    ns.tprint("Server RAM (Used/Max): " + ns.getServerUsedRam(server) + "/"
        + ns.getServerMaxRam(server));

}