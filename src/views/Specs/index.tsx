import React from "react";

import { useClassName } from "~/views/Layout";

export default function Specs(): React.ReactElement {
  return (
    <div className={useClassName()}>
      <h1>Specs</h1>

      <h2>Overview</h2>

      <h3>Hardware Specs</h3>

      <ul>
        <li>CPU: Intel Core i9-14900K (13th Gen)</li>
        <li>RAM: 64GB DDR5-5600</li>
        <li>Cooling: Noctua Active Cooling</li>
        <li>HDD: 1TB NVMe</li>
        <li>PSU: 500W 1+1 Redundant Dual Module PSU</li>
      </ul>

      <h3>Audio Connectivity</h3>

      <ul>
        <li>24 Bit / 384 kHz Resolution</li>
        <li>2x MADI I/O (256 channels)</li>
        <li>2x MIDI I/O</li>
        <li>WordClock I/O</li>
        <li>Available with either Optical SC or Coaxial BNC</li>
        <li>Single Mode Transceiver (1300nm) available (optional extra)</li>
      </ul>

      <h3>Wireless Connectivity</h3>

      <ul>
        <li>Intel Wi-Fi 6E module</li>
        <li>Bluetooth 5.3</li>
      </ul>

      <h3>Operating System</h3>

      <ul>
        <li>OS: Microsoft Windows 11</li>
        <li>Host Option 1: Audioström Live Professor (recommended)</li>
        <li>Host Option 2: Waves SuperRack Performer Host</li>
        <li>Option 3: Gig Performer</li>
      </ul>

      <h2>ADDITIONAL SPECIFICATION</h2>

      <h3>Technical Specifications</h3>

      <ul>
        <li>Sample Rates of 44.1kHz to 384 kHz</li>
        <li>Sample Resolutions of 8 to 24 Bit</li>
        <li>MIDI over MADI</li>
      </ul>

      <h3>Digital Inputs</h3>

      <ul>
        <li>2x MADI (BNC or SC)</li>
        <li>128 Channels @ 48 kHz</li>
        <li>64 Channels @ 96 kHz</li>
        <li>32 Channels @ 192 kHz</li>
        <li>16 Channels @ 384 kHz</li>
        <li>BNC WordClock</li>
        <li>2x MIDI</li>
      </ul>

      <h3>Digital Outputs</h3>

      <ul>
        <li>2x MADI (BNC or SC)</li>
        <li>128 Channels @ 48 kHz</li>
        <li>64 Channels @ 96 kHz</li>
        <li>32 Channels @ 192 kHz</li>
        <li>16 Channels @ 384 kHz</li>
        <li>BNC WordClock</li>
        <li>2x MIDI</li>
      </ul>

      <h3>A Note on Sample Rates</h3>

      <p>
        Although the MADI card will support sample rates of up to 384kHz, the
        actually sample rate you are able to operate at depends on your plugin
        host.
      </p>
      <p>
        Audioström Live Professor will support a maximum sample rate of 192kHz.
      </p>
      <p>
        Waves SuperRack Performer will support a maximum sample rate of 96kHz.
      </p>

      <h3>PHYSICAL SPECIFICATION & CONNECTIVITY</h3>

      <h3>Front</h3>

      <ul>
        <li>1x USB 3.2 Type C (5Gbps)</li>
        <li>2x USB 3.2 Type A (5Gbps)</li>
        <li>1x 16mm Power Button</li>
        <li>1x Power Status LED</li>
      </ul>

      <h3>Rear</h3>

      <ul>
        <li>1x 2.5Gbps LAN port</li>
        <li>2x USB 2.0 Type-A </li>
        <li>2x USB 3.2 Gen 1 (5Gbps)</li>
        <li>2x USB 3.2 Gen 2 (10Gbps)</li>
        <li>2x HDMI 2.1</li>
        <li>2x DisplayPort 1.4</li>
      </ul>

      <h3>Material</h3>

      <ul>
        <li>Chassis: 20 Gauge Galvanised Steel</li>
        <li>Front Panels: 18 Gauge Galvanised Steel</li>
        <li>Rack Ears: 14 Gauge Galvanised Steel</li>
      </ul>

      <h3>Finish</h3>

      <ul>
        <li>Semi-gloss fine texture powder coat finish (white)</li>
        <li>Powder coat is an outdoor architectural grade polyester epoxy</li>
      </ul>

      <h3>Dimensions</h3>

      <ul>
        <li>382mm x 432mm x 132.5mm [DxWxH]</li>
        <li>Depth from front rack post is 378mm</li>
      </ul>
    </div>
  );
}
