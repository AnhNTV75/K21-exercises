// tạo class team chua thuoc tinh name, players (mang cau thu)
class Team {
    name: string;
    players: string[];

    constructor(name:string) {
        this.name = name;
        this.players = [];
    }
   // them danh sach cau thu
    addPlayers(playerName:string): void {
        this.players.push(playerName);
        console.log(`Da them cau thu: ${playerName} vao doi ${this.name}`);
    }
    // liet ke cau thu
    listPlayers(): void{
        console.log(`---Danh sach cau thu doi ${this.name} ---`);
        if (this.players.length === 0) {
            console.log("Chua co cau thu nao.");
        } else {
            this.players.forEach((player, index) => {
                console.log(`${index +1}. ${player}`);
            });
        }
    }
}
//Run
    const team = new Team("Ha Noi");
    team.addPlayers("Dinh Bac");
    team.listPlayers();
