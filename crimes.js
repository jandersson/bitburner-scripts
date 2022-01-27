/** @param {import(".").NS } ns */
export async function main(ns) {
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

	var crimeSuccessThreshold = 0.05;

    while (true){
        for (var i = 0; i < crimes.length; ++i){
            if (ns.getCrimeChance(crimes[i]) > crimeSuccessThreshold){
                var time = ns.commitCrime(crimes[i]);
                await ns.sleep(time);
                while (ns.isBusy()){
                    await ns.sleep(1_000);
                }
            }
        }
    }
}