/** @param {import(".").NS } ns */
export async function main(ns) {
    while (ns.getHackingLevel() < 10){
        ns.universityCourse('Rothman University', 'Study Computer Science', focus=false);
        await ns.sleep(60_000);
    }
	ns.run('map-network.js', 1);
	ns.run('join-factions.js', 1);
	ns.run('purchase-warez.js', 1);
	ns.run('purchase-servers.ns', 1, 'joesguns');
    if (ns.heart.break() > -54000){
        ns.tprint("Doing crime!");
        ns.run('homicide.js', 1);
    }
    ns.run('gang-recruiter.js', 1);
    ns.run('gang-ascender.js', 1);

    ns.run('startup.script', 1);
	// ns.run('crimes.js', 1);
}