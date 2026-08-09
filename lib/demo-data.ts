export type Relationship = {
  commonName: string;
  scientificName: string;
  relationship: "Larval host" | "Egg-laying / larval host" | "Nectar source";
  note: string;
};

export type IdentificationResult = {
  commonName: string;
  scientificName: string;
  confidence: number;
  kind: "butterfly" | "plant";
  relationships: Relationship[];
};

export const demoButterflyResult: IdentificationResult = {
  commonName: "Monarch",
  scientificName: "Danaus plexippus",
  confidence: 0.94,
  kind: "butterfly",
  relationships: [
    {
      commonName: "Common milkweed",
      scientificName: "Asclepias syriaca",
      relationship: "Egg-laying / larval host",
      note: "One of several milkweed species used by monarch larvae.",
    },
    {
      commonName: "Swamp milkweed",
      scientificName: "Asclepias incarnata",
      relationship: "Egg-laying / larval host",
      note: "A milkweed associated with wetter soils and monarch reproduction.",
    },
    {
      commonName: "Butterfly weed",
      scientificName: "Asclepias tuberosa",
      relationship: "Larval host",
      note: "A native milkweed that can support monarch caterpillars.",
    },
  ],
};

export const demoPlantResult: IdentificationResult = {
  commonName: "Common milkweed",
  scientificName: "Asclepias syriaca",
  confidence: 0.91,
  kind: "plant",
  relationships: [
    {
      commonName: "Monarch",
      scientificName: "Danaus plexippus",
      relationship: "Egg-laying / larval host",
      note: "Monarch caterpillars depend on milkweeds as host plants.",
    },
  ],
};
