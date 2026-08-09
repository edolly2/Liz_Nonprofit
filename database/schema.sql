-- PostgreSQL starter schema for the future verified relationship database.
-- This file is not automatically applied by the app.

CREATE TABLE species (
  id BIGSERIAL PRIMARY KEY,
  kind TEXT NOT NULL CHECK (kind IN ('butterfly', 'plant')),
  common_name TEXT NOT NULL,
  scientific_name TEXT NOT NULL UNIQUE,
  family_name TEXT,
  description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE host_relationships (
  id BIGSERIAL PRIMARY KEY,
  butterfly_species_id BIGINT NOT NULL REFERENCES species(id),
  plant_species_id BIGINT NOT NULL REFERENCES species(id),
  relationship_type TEXT NOT NULL CHECK (relationship_type IN ('egg_laying', 'larval_host', 'egg_laying_and_larval_host', 'nectar', 'shelter')),
  geographic_scope TEXT,
  source_title TEXT NOT NULL,
  source_url TEXT,
  verification_status TEXT NOT NULL DEFAULT 'pending' CHECK (verification_status IN ('pending', 'verified', 'rejected')),
  verified_by TEXT,
  verified_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (butterfly_species_id, plant_species_id, relationship_type, source_title)
);

CREATE TABLE donations (
  id BIGSERIAL PRIMARY KEY,
  stripe_session_id TEXT NOT NULL UNIQUE,
  amount_cents INTEGER NOT NULL CHECK (amount_cents > 0),
  currency TEXT NOT NULL DEFAULT 'usd',
  payment_status TEXT NOT NULL,
  donor_email TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_species_kind ON species(kind);
CREATE INDEX idx_relationship_butterfly ON host_relationships(butterfly_species_id);
CREATE INDEX idx_relationship_plant ON host_relationships(plant_species_id);
