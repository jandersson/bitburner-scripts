var programs = [
	{
		'name': 'bruteSSH.exe',
		'cost': 250_000
	},
	{
		'name': 'ftpcrack.exe',
		'cost': 1_500_000
	},
	{
		'name': 'relaySMTP.exe',
		'cost': 5_000_000
	},
	{
		'name': 'HTTPWorm.exe',
		'cost': 30_000_000
	},
	{
		'name': 'SQLInject.exe',
		'cost': 250_000_000
	},
	{
		'name': 'ServerProfiler.exe',
		'cost': 500_000
	},
	{
		'name': 'DeepscanV1.exe',
		'cost': 500_000,
	},
	{
		'name': 'DeepscanV2.exe',
		'cost': 25_000_000
	},
	{
		'name': 'AutoLink.exe',
		'cost': 1_000_000
	},
	{
		'name': 'Formulas.exe',
		'cost': 5_000_000_000
	}
];

var haveTor = false;


function buyThings(ns){
    if (programs.length == 0){
        return false;
    }
	var money = ns.getServerMoneyAvailable('home');
	if (!haveTor & money > 200_000){
		ns.purchaseTor();
		haveTor = true;
	}
	if (haveTor & programs.length > 0){
		for (var i = 0; i < programs.length; ++i){
			var name = programs[i].name;
			var cost = programs[i].cost;
			if (ns.fileExists(name)){
				programs.slice(i, 1);
				// i--;
				continue;
			}
			if (!ns.fileExists(name) & (money > cost)){
				ns.purchaseProgram(name);
			}
		}
	}
    return true;
}

/** @param {import(".").NS } ns */
export async function main(ns) {
    while(true){
        await buyThings(ns);
        // await buyThings();
        await ns.sleep(10_000);
    }
}