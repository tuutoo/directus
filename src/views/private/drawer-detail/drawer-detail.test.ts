import { mount, createLocalVue } from '@vue/test-utils';
import VueCompositionAPI, { ref } from '@vue/composition-api';
import DrawerDetail from './drawer-detail.vue';
import * as GroupableComposition from '@/compositions/groupable';
import VIcon from '@/components/v-icon';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);
localVue.component('v-icon', VIcon);

describe('Drawer Detail', () => {
	it('Uses the useGroupable composition', () => {
		jest.spyOn(GroupableComposition, 'useGroupable');

		mount(DrawerDetail, {
			localVue,
			propsData: {
				icon: 'person',
				title: 'Users'
			},
			provide: {
				'drawer-open': ref(false),
				'item-group': {
					register: () => {},
					unregister: () => {},
					toggle: () => {}
				}
			}
		});
		expect(GroupableComposition.useGroupable).toHaveBeenCalled();
	});

	it('Passes the title prop as selection value', () => {
		jest.spyOn(GroupableComposition, 'useGroupable');

		mount(DrawerDetail, {
			localVue,
			propsData: {
				icon: 'person',
				title: 'Users'
			},
			provide: {
				'drawer-open': ref(false),
				'item-group': {
					register: () => {},
					unregister: () => {},
					toggle: () => {}
				}
			}
		});
		expect(GroupableComposition.useGroupable).toHaveBeenCalledWith('Users');
	});
});
