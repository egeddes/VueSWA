import Vue from 'vue'
import App from './App.vue'
import { Providers, Msal2Provider } from '@microsoft/mgt';

Providers.globalProvider = new Msal2Provider({
	clientId: "b19122ad-f0be-4d76-8cc9-1e93b098b198"
	/* tenantId: "a78b182d-94e4-4507-a9a9-330dcb148164" */
});

function component() {
	const element = document.createElement('div');
	element.innerHTML = '<mgt-login></mgt-login>';
	return element;
}

document.body.appendChild(component());




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
