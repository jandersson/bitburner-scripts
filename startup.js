

var servers0port = [
	"joesguns",
	"n00dles",
	"sigma-cosmetics",
	"nectar-net",
	"hong-fang-tea",
	"harakiri-sushi",
	"foodnstuff"
];

var servers1port = [
	"neo-net",
	"zer0",
	"max-hardware",
	"iron-gym",
	"CSEC"
];

var servers2port = [
	"phantasy",
	"omega-net",
	"silver-helix",
	"the-hub",
	"avmnite-02h",
	"crush-fitness",
	"johnson-ortho"
];

var servers3port = [
	"rothman-uni",
	"rho-construction",
	"summit-uni",
	"millenium-fitness",
	"comptek",
	"netlink",
	"catalyst",
	"I.I.I.I"
];

var servers4port = [
	"snap-fitness",
	"unitalife",
	"zb-def",
	"nova-med",
	"alpha-ent",
	"syscore",
	"lexo-corp",
	"aevum-police",
	"univ-energy",
	"global-pharm",
	"run4theh111z",
	"applied-energetics",
	"."
];

var servers5port = [
	"zb-institute",
	"defcomm",
	"infocomm",
	"galactic-cyber",
	"omnia",
	"solaris",
	"deltaone",
	"icarus",
	"taiyang-digital",
	"zeus-med",
	"aerocorp",
	"darkweb",
	"b-and-a",
	"The-Cave",
	"w0r1d_d43m0n",
	"fulcrumtech",
	"microdyne",
	"vitalife",
	"helios",
	"titan-labs",
	"omnitek",
	"blade",
	"nwo",
	"clarkinc",
	"nwo",
	"4sigma",
	"powerhouse-fitness",
	"stormtech",
	"kuai-gong",
	"ecorp",
	"megacorp",
	"fulcrumassets"
];

var crimes = [
	"shoplift",
	"rob store",
	"mug",
	"larceny",
	"deal drugs",
	"bond forgery",
	"traffick arms",
	"homicide",
	"grand theft auto",
	"kidnap",
	"assassinate",
	"heist"
];



/** @param {NS} ns **/
/** @param {import(".").NS } ns */
export async function main(ns) {
    while (ns.getHackingLevel() < 10){
        ns.universityCourse('Rothman University', 'Study Computer Science', focus=false);
        await ns.sleep(60_000);
    }
    ns.run('startup.script', 1);
	ns.run('purchase-servers.ns', 1, 'joesguns');
	ns.run('purchase-warez.js', 1);
	ns.run('crimes.js', 1);

}