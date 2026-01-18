import type { EnergyAsset, PageMeta } from "~/types";
import type { Route } from "./+types/index";
import { useLoaderData } from "react-router";
import { useState } from "react";
import DamModal from "~/components/DamModal";

export interface ApiLoaderData {
  metadata: PageMeta[];
  energyAssets: EnergyAsset[];
}

export async function clientLoader({
  request,
}: Route.ClientLoaderArgs): Promise<ApiLoaderData> {
  const headers = {
    Authorization: `Basic ${btoa(import.meta.env.VITE_BASIC_AUTH)}`,
    "Content-Type": "application/json",
  };

  const [metadataRes, energyAssetsRes] = await Promise.all([
    fetch("http://164.52.201.69/neepco/api/v1/metadata", { headers }),
    fetch("http://164.52.201.69/neepco/api/v1/energy-assets", { headers }),
  ]);

  if (!metadataRes.ok || !energyAssetsRes.ok) {
    throw new Response("API request failed", { status: 500 });
  }
  return {
    metadata: await metadataRes.json(),
    energyAssets: await energyAssetsRes.json(),
  };
}

// ADD HYDRATE FALLBACK
export function HydrateFallback() {
  return <div>Loading API data...</div>;
}

const ApiPage = ({}) => {
  const [selectedDam, setSelectedDam] = useState<EnergyAsset | null>(null);
  const { metadata, energyAssets } = useLoaderData<ApiLoaderData>();
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {energyAssets.map((dam) => (
          <div
            onClick={() => setSelectedDam(dam)}
            key={dam.nid}
            className="group rounded-xl border shadow-sm transition cursor-pointer hover:ring-white/10 hover:shadow-lg"
          >
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}${dam.field_image_banner}`}
                alt={dam.title}
                className="w-full h-48 object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h1 className="text-lg font-semibold mb-2">{dam.title}</h1>
              <p>{dam.field_location_assets}</p>
            </div>
          </div>
        ))}
      </div>
      <DamModal selectedDam={selectedDam} setSelectedDam={setSelectedDam} />
    </section>
  );
};

export default ApiPage;
