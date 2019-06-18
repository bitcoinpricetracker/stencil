import { h, FunctionalComponent } from "@stencil/core";

export const BitcoinCard: FunctionalComponent<BitcoinCardInfo> = ({
  detail
}) => (
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>{detail.code}</ion-card-subtitle>
      <ion-card-title>{detail.rate_float}</ion-card-title>
    </ion-card-header>
  </ion-card>
);

interface BitcoinCardInfo {
  detail: BitcoinCardInfoDetail;
}
interface BitcoinCardInfoDetail {
  code: string;
  rate_float: string;
}
