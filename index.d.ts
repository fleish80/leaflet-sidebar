import * as L from 'leaflet';

declare module 'leaflet' {

    namespace Control {
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


    }
    namespace control {
        function sidebar(placeholder: string, options?: Control.SidebarOptions): Control.SidebarControl;
    }
}
