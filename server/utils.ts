import * as os from 'os';

export function getServerIp() {
  const ifaces = os.networkInterfaces();
  let ip = '';
  Object.keys(ifaces).forEach((ifname) => {
    ifaces[ifname]?.forEach((iface) => {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        return;
      }
      ip = iface.address;
    });
  });

  return ip;
}
