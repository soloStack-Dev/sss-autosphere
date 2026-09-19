"use client";

import { useEffect, useRef } from "react";
import type { Map as MapLibreMap } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const STYLE_URL = "https://tiles.openfreemap.org/styles/liberty";

export function LocationMap({
  lat,
  lng,
  name,
  address,
  phone,
  hours,
}: {
  lat: number;
  lng: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: MapLibreMap | undefined;
    let cancelled = false;

    (async () => {
      const maplibregl = await import("maplibre-gl");
      if (cancelled || !containerRef.current) return;

      map = new maplibregl.Map({
        container: containerRef.current,
        style: STYLE_URL,
        center: [lng, lat],
        zoom: 15,
        attributionControl: false,
      });

      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
      map.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-right");

      const marker = new maplibregl.Marker({ color: "#1749D1" })
        .setLngLat([lng, lat])
        .setPopup(
          new maplibregl.Popup({ offset: 28, closeButton: false })
            .setHTML(
              `<strong style="display:block;font-size:14px;">${name}</strong>` +
                `<span style="display:block;margin-top:4px;font-size:12px;color:#0B1B35;max-width:220px;">${address}</span>` +
                `<span style="display:block;margin-top:4px;font-size:12px;color:#5b6470;">${phone} · ${hours}</span>`,
            ),
        )
        .addTo(map);

      new maplibregl.Popup({ offset: 28 })
        .setLngLat([lng, lat])
        .setHTML(
          `<strong style="display:block;font-size:14px;">${name}</strong>` +
            `<span style="display:block;margin-top:4px;font-size:12px;color:#0B1B35;max-width:220px;">${address}</span>`,
        )
        .addTo(map);

      marker.togglePopup();
    })();

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [lat, lng, name, address, phone, hours]);

  return (
    <div
      ref={containerRef}
      className="h-[380px] w-full overflow-hidden rounded-3xl sm:h-[480px]"
      aria-label={`Map showing ${name} location`}
      role="region"
    />
  );
}