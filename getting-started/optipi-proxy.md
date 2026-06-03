# OptiPi Proxy Guide

OptiPi Proxy allows PiCapes capes to be displayed in clients that support OptiFine capes, making it a useful option for older Minecraft versions and players who cannot use the PiCapes Fabric mod.

## How it Works?
When a client requests an OptiFine cape, the request would normally be sent to the OptiFine cape servers. OptiPi Proxy uses a DNS or hosts-file redirect to reroute these requests to the PiCapes servers instead.

![OptiPi Proxy](/assets/installation/how_optipi_works.png)

PiCapes then serves your cape in an OptiFine-compatible format. Since the client still believes it is communicating with the OptiFine cape servers, the cape is displayed normally without requiring the PiCapes Fabric mod.

## Installation
> [!NOTE]
> PiCapes OptiPi Proxy will be available in the future.
