# ArcPi Proxy Guide

ArcPi Proxy allows PiCapes capes to be displayed in clients that support OptiFine capes, making it a useful option for older Minecraft versions and players who cannot use the PiCapes Fabric mod.

## How it Works?
When a client requests an OptiFine cape, the request would normally be sent to the OptiFine cape servers. ArcPi Proxy uses a DNS or hosts-file redirect to reroute these requests to the PiCapes servers instead.

![ArcPi Proxy](/assets/installation/how_arcpi_proxy_works.png)

PiCapes then serves your cape in an OptiFine-compatible format. Since the client still believes it is communicating with the OptiFine cape servers, the cape is displayed normally without requiring the PiCapes Fabric mod.

## Installation
To set up ArcPi Proxy, you can either modify your system's hosts file or use a DNS service that supports custom records. Below are the preferred methods for each platform:

::: tip INFO
ArcPi Proxy is under testing and will come soon.
:::

<!--### Hosts File Method (Windows/Linux/MacOS)
1. Open your system's hosts file with administrative privileges:
   - Windows: `C:\Windows\System32\drivers\etc\hosts`
   - Linux/MacOS: `/etc/hosts`
2. Add the following line to the file:
   ```
   138.252.100.17 s.optifine.net
   ```
3. Save the file and close it.

### DNS Method-->