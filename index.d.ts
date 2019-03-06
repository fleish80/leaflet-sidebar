import * as L from 'leaflet';

declare module 'leaflet' {

    namespace Sidebar {
        type SidebarPosition = 'right' | 'left';

        interface SidebarOptions {
            closeButton?: boolean;
            position?: SidebarPosition;
            autoPan?: boolean;
        }

        class SidebarControl extends L.Evented {
            constructor();
            addTo(map: L.Map): this;
            toggle(): void;
        }

        export function sidebar(placeholder: string, options?: SidebarOptions): SidebarControl;

    }
}