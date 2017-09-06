import React, {PropTypes} from 'react';
import {
	Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
	List, ListItem
} from 'framework7-react';
import firebase from '../core/FirebaseApp';
var removeLocalStorage = () => {
	localStorage.removeItem("case_token");
	firebase.auth().signOut();
	window.location = "";
}
const RightPanel = (props, context) => (
	<Panel right cover layout="dark">
		<View id="right-panel-view" navbarThrough dynamicNavbar={true}>
			{context.framework7AppContext.theme.ios ? <Navbar title="Menu" sliding /> : null}
			<Pages>
				<Page>
					{context.framework7AppContext.theme.material ? <Navbar title="Menu" sliding /> : null}
					<List>
						<ListItem title="Sign Out" onClick={()=>{removeLocalStorage()}} linkClosePanel></ListItem>
					</List>
				</Page>
			</Pages>
		</View>
	</Panel>
);

RightPanel.contextTypes = {
	framework7AppContext: PropTypes.object
};
export default RightPanel;
