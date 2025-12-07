// ==UserScript==
// @name         Manual Link Extractor (Fixed)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  grab youtube link to open
// @author       You
// @match        *://*.ewant.org/*
// @match        *://ewant.org/*
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
    'use strict';

    // 1. Make the Button
    const btn = document.createElement("button");
    btn.innerHTML = "👇 GET youtube LINK NOW";
    btn.style.position = "fixed";
    btn.style.top = "18px";
    btn.style.left = "70%";
    btn.style.zIndex = "9999999";
    btn.style.padding = "10px 20px";
    btn.style.backgroundColor = "#e00000"; // Bright Red
    btn.style.color = "white";
    btn.style.fontSize = "18px";
    btn.style.fontWeight = "bold";
    btn.style.border = "2px solid white";
    btn.style.borderRadius = "8px";
    btn.style.cursor = "pointer";
    btn.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.5)";

    // Add button to page
    document.body.appendChild(btn);

    // 2. The Logic (Exactly what worked in your console)
    btn.onclick = function() {
        var frames = document.querySelectorAll('iframe[src*="youtube.com"]');
        if(frames.length > 0){
            frames.forEach(f => {
                let cleanLink = f.src.split('?')[0].replace("embed/", "watch?v=");
                // Copy to clipboard automatically
                GM_setClipboard(cleanLink);
                alert("✅ SUCCESS!\nLink copied to clipboard:\n\n" + cleanLink);
            });
        } else {
            alert("❌ No YouTube video found yet.\n\nPlay the video first, wait 2 seconds, and click this button again!");
        }
    };

})();
