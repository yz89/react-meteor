MySideNav = React.createClass({

    render: function() {
        var nav = [
            {key: 'landing', title: 'Dashboard', 'iconClassName': 'fa fa-dashboard'},
            {key: 'channels', title: 'Channels', 'iconClassName': 'fa fa-exchange'},
            {key: 'fleet', title: 'Fleet', 'iconClassName': 'fa fa-truck'},
            {key: 'products', title: 'Products', 'iconClassName': 'fa fa-cubes'},
            {key: 'inventory', title: 'Inventory', 'iconClassName': 'fa fa-database'}
        ];
        return (
            <SideNav.Menu itemHeight="32px" >
                <SideNav.MenuItem itemKey="truck">
                    <SideNav.ILeftItem className="fa fa-truck">
                        Truck
                    </SideNav.ILeftItem>
                </SideNav.MenuItem>
                <SideNav.MenuItem itemKey="bed">
                    <SideNav.ILeftItem className="fa fa-bed">
                        Bed
                    </SideNav.ILeftItem>
                </SideNav.MenuItem>
                <SideNav.MenuItem itemKey="camera">
                    <SideNav.ILeftItem className="fa fa-camera">
                        Camera
                    </SideNav.ILeftItem>
                </SideNav.MenuItem>
            </SideNav.Menu>
        );
    }

});
