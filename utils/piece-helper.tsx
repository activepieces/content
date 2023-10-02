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

type PieceMetaData = (PieceBase & {
  actions: number;
  triggers: number;
});

export async function GetPieces(): Promise<PieceMetaData[] | null> {
  const res = await fetch(
    `https://cloud.activepieces.com/api/v1/pieces`,
    {
      cache: "force-cache"
    }
  );
  if (!res.ok) {
    console.error("Failed to fetch pieces ")
    return null;
  }
  const resJson: PieceMetaData[] = await res.json();
  return resJson.filter(p => p.name !== "@activepieces/piece-instagram-business" && p.name !== "@activepieces/piece-shopify" && p.name !== "@activepieces/piece-facebook-pages");
}

export async function GetPiece(pieceName: string): Promise<DetailedPiece | null> {
  const res = await fetch(
    `https://cloud.activepieces.com/api/v1/pieces/${pieceName}`,
    {
      cache: "force-cache"
    }
  );
  if (!res.ok) {
    console.error("Failed to fetch piece " + pieceName)
    return null;
  }

  const data = await res.json();
  return {
    name: pieceName,
    version: data.version,
    displayName: data.displayName,
    description: data.description,
    logoUrl: data.logoUrl,
    triggers: data.triggers,
    actions: data.actions,
  };
}
