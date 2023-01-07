import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	accounts: {},
	user_assets: [],
};

const accountSlice = createSlice({
	name: "accounts",
	initialState,
	reducers: {
		setAccounts: (state, action) => {
			for (let i = 0; i < action.payload.length; i++) {
				let element = action.payload[i];
				if (state.accounts.hasOwnProperty(element.item_id)) {
					state.accounts[element.item_id].name = element.name;
					state.accounts[element.item_id].accounts = element.accounts;
					state.accounts[element.item_id].balance = element.balance;
					state.accounts[element.item_id].transactions = element.transactions;
					state.accounts[element.item_id].liabilities = element.liabilities;
					state.accounts[element.item_id].accounts = element.accounts;
				} else {
					state.accounts[element.item_id] = {
						name: element.name,
						balance: element.balance,
						accounts: element.accounts,
						transactions: element.transactions,
						access_token: element.access_token,
						liabilities: element.liabilities,
					};
				}
			}
		},
		setTransactions: (state, action) => {
			for (let i = 0; i < action.payload.length; i++) {
				let element = action.payload[i];
				state.accounts[element.item_id].transactions = element.transactions;
			}
		},
		addAsset: (state, action) => {
			state.user_assets.push({
				name: action.payload.name,
				value: action.payload.value,
			});
		},
		setAssets: (state, action) => {
			state.user_assets = action.payload;
		},
		removeAccount: (state, action) => {
			if (state.accounts.hasOwnProperty(action.payload.item_id)) {
				delete state.accounts[action.payload.item_id];
			} else {
				console.log(
					"either account with that id doesnt exist anymore or invalid id"
				);
			}
		},
		resetAccountSlice: (state, action) => {
			state.accounts = {}
			state.user_assets =  []
		},
	},
});

export default accountSlice.reducer;

export const {
	setAccounts,
	setTransactions,
	removeAccount,
	addAsset,
	setAssets,
  resetAccountSlice
} = accountSlice.actions;
