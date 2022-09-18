const clientId = "1020937367525265408"; //APPLICATION ID || CLIENT ID
const DiscordRPC = require("discord-rpc");
const browser = typeof window !== 'undefined';
const RPC = new DiscordRPC.Client({ transport: browser ? "websocket" : "ipc"});

DiscordRPC.register(clientId);

async function setActivity() {
  if (!RPC) return;
  RPC.setActivity({
    details: `Peep poop`,
    state: `...👀`,
    startTimestamp: Date.now(),
    largeImageKey: `qiqi2`,
    largeImageText: `Hi~`,
    smallImageKey: `jutebi`,
    smallImageText: `Jutebi Jutebi!`,
    instance: false,
    buttons: [
      {
        label: `Get Source code`,
        url: `https://github.com/Notties/Discord-Rich-Presence-Status`,
      },
    ],
  });
}

RPC.on("ready", async () => {
  setActivity();

  setInterval(() => {
    setActivity();
  }, 6000 * 1000);
});

RPC.login({ clientId }).catch((err) => console.error(err));
