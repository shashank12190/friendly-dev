export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
  featured: boolean;
  date: string;
};

export interface EnergyAsset {
  nid: string;
  title: string;
  created: string; // "2024-06-20"
  changed: string; // "2025-11-06"
  field_project_name: string;
  field_category_page_assets: string;
  field_status: "Completed" | "Ongoing" | string;
  field_plant_size: string; // "291"
  field_installed_capacity_mw: string;
  field_location_assets: string;
  field_completed_date: string;
  field_energy_assets_link: string;
  field_energy_assets_imgae: string;
  field_image_banner: string;
  field_photo_gallery: string; // comma-separated URLs
  field_video_gallery: string;
  field_introduction: string; // HTML string
  field_education: string; // HTML string
  field_entrepreneurship_developme: string; // HTML string
  field_medical_health_care_and_sa: string; // HTML string
  field_swachh_bharat_and_swachh_v: string; // HTML string
}

export interface PageMeta {
  title: string;

  field_page_url: string;

  field_description: string;
  field_keywords: string;

  field_breadcrum_banner_image: string;
}
