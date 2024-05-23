import React, { LazyExoticComponent } from "react";

export enum Modals {
    ContactFormModal,
}

export const modalsConfig: Record<Modals, LazyExoticComponent<any>> = {
    [Modals.ContactFormModal]: React.lazy(() => import('../contact-form-modal')),
}
