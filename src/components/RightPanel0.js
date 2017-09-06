import React, {PropTypes} from 'react';
import {
	Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
	List, ListItem
} from 'framework7-react';
var removeLocalStorage = () => {
	localStorage.removeItem("case_token");
	window.location = "";
}
const RightPanel = (props, context) => (
	<Panel right cover layout="dark">
		<View id="right-panel-view" navbarThrough dynamicNavbar={true}>
			{context.framework7AppContext.theme.ios ? <Navbar title="Right Panel" sliding /> : null}
			<Pages>
				<Page>
					{context.framework7AppContext.theme.material ? <Navbar title="Right Panel" sliding /> : null}
					<ContentBlock>
						<p>Right panel content goes here</p>
					</ContentBlock>
					<ContentBlockTitle>Load page in panel</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About"></ListItem>
						<ListItem link="/form/" title="Form"></ListItem>
					</List>
					<ContentBlockTitle>Load page in main view</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel></ListItem>
						<ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
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
