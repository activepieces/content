export type PieceBase = {
  name: string;
  displayName: string;
  logoUrl: string;
  description: string;
  version: string;
};

export type DetailedPiece = PieceBase & {
  triggers: Record<string, TriggerBase>,
  actions: Record<string, ActionBase>
};

export type ActionBase = {
  name: string;
  displayName: string;
  description: string;
  props: Record<string, any>
};

export type TriggerBase = ActionBase & {
  type: TriggerStrategy;
};

export enum TriggerStrategy {
  WEBHOOK = "WEBHOOK",
  POLLING = "POLLING",
}

export async function GetPieces() {
  const res = await fetch(
    `https://cloud.activepieces.com/api/v1/pieces`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}

export async function GetPiece(Name: string): Promise<DetailedPiece> {
  const res = await fetch(
    `https://cloud.activepieces.com/api/v1/pieces/${Name}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return {
    name: Name,
    version: data.version,
    displayName: data.displayName,
    description: data.description,
    logoUrl: data.logoUrl,
    triggers: data.triggers,
    actions: data.actions,
  };
}
