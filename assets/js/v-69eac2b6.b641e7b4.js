"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[19586],{425152:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-69eac2b6","path":"/devices/ZG-227ZL.html","title":"TuYa ZG-227ZL control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa ZG-227ZL control via MQTT","description":"Integrate your TuYa ZG-227ZL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-11-09T12:35:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"Reading and Setting Values","slug":"reading-and-setting-values","link":"#reading-and-setting-values","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Unit of temperature (enum)","slug":"unit-of-temperature-enum","link":"#unit-of-temperature-enum","children":[]},{"level":3,"title":"Calibration of temperature (numeric)","slug":"calibration-of-temperature-numeric","link":"#calibration-of-temperature-numeric","children":[]},{"level":3,"title":"Calibration of humidity (numeric)","slug":"calibration-of-humidity-numeric","link":"#calibration-of-humidity-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1692945927000},"filePathRelative":"devices/ZG-227ZL.md"}')},395992:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var a=i(166252);const r=(0,a.uE)('<h1 id="tuya-zg-227zl" tabindex="-1"><a class="header-anchor" href="#tuya-zg-227zl" aria-hidden="true">#</a> TuYa ZG-227ZL</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZG-227ZL</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Temperature &amp; humidity LCD sensor</td></tr><tr><td>Exposes</td><td>temperature, humidity, battery, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZG-227ZL.jpg" alt="TuYa ZG-227ZL"></td></tr></tbody></table>',2),o=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),n=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h3 id="reading-and-setting-values" tabindex="-1"><a class="header-anchor" href="#reading-and-setting-values" aria-hidden="true">#</a> Reading and Setting Values</h3><p>As a low power device, the sensor isn&#39;t reachable most of the time, but only when active (e.g. because it Update temperature and humidity). Therefore, requests to read or set values (i.e. <code>Unit of temperature</code> or <code>Calibration of temperature</code>) will only work when the sensor.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="unit-of-temperature-enum" tabindex="-1"><a class="header-anchor" href="#unit-of-temperature-enum" aria-hidden="true">#</a> Unit of temperature (enum)</h3><p>A unit of temperature. Value can be found in the published state on the <code>temperature_unit</code> property. It&#39;s possible to read (<code>/get</code>) or write (<code>/set</code>) this value. Enum &#39;Celsius&#39;:0 or &#39;Fahrenheit&#39;:1.</p><h3 id="calibration-of-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-of-temperature-numeric" aria-hidden="true">#</a> Calibration of temperature (numeric)</h3><p>Calibration of temperature Value can be found in the published state on the <code>temp_calibration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-2.0</code> and the maximum value is <code>+2.0</code>. The unit of this value is <code>℃</code>.</p><h3 id="calibration-of-humidity-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-of-humidity-numeric" aria-hidden="true">#</a> Calibration of humidity (numeric)</h3><p>Calibration of humidity Value can be found in the published state on the <code>hum_calibration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-30%</code> and the maximum value is <code>+30%</code>. The unit of this value is <code>℃</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),d={},u=(0,i(983744).Z)(d,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),r,(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,a.kq)(" Notes END: Do not edit below this line "),o,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),n])}]])}}]);