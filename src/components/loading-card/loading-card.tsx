import { h } from "@stencil/core";

export const LoadingCard = () => (
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>
        <ion-skeleton-text class="loading-card__currency-name" animated />
      </ion-card-subtitle>
      <ion-card-title>
        <ion-skeleton-text class="loading-card__currency-value" animated />
      </ion-card-title>
    </ion-card-header>
  </ion-card>
);
