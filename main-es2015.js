(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    <img src=\"assets/img/blockchain-logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    &nbsp;BlockChain POC\n  </a>\n\n  <div>\n    <button routerLink=\"/new/transaction/pending\" class=\"btn btn-outline-light\" *ngIf=\"thereArePendingTransactions()\">\n      Pending transactions\n      <span class=\"badge badge-light\">{{blockchain.pendingTransactions.length}}</span>\n    </button>\n    &nbsp;\n    <button routerLink=\"/settings\" class=\"btn btn-outline-light\">\n      Settings\n    </button>\n    &nbsp;\n    <button routerLink=\"/new/transaction\" class=\"btn btn-outline-light\">\n      Create transaction\n    </button>\n  </div>\n</nav>\n\n<br>\n\n<!-- <div class=\"container\" *ngIf=\"showInfoMessage === true\">\n  <div class=\"alert alert-primary alert-dismissible fade show\" role=\"alert\">\n    <h4 class=\"alert-heading\">First things first.</h4>\n    This tool gives you the ability to look behind-the-scenes of a blockchain. You can create transactions, mine blocks and see how they all work together. Go ahead, make some transactions, mine a block, tweak the settings and see the effects of your actions in real-time.\n    <hr>\n    <a href=\"https://github.com/Savjee/savjeecoin-frontend\">Source code</a> - Based on <a href=\"https://github.com/SavjeeTutorials/SavjeeCoin\">my Javascript blockchain</a>.\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"dismissInfoMessage()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</div> -->\n\n<router-outlet></router-outlet>\n\n<!-- <footer class=\"text-muted text-center\" style=\"margin-top: 150px;\">\n  <small>For educational purposes only.<br>\n  <a href=\"https://github.com/Savjee/savjeecoin-frontend\" target=\"_blank\">Source code</a></small>\n</footer> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/block-view/block-view.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/block-view/block-view.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [class.border-primary]=\"isSelectedBlock()\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Block {{ getBlockNumber() }} <small class=\"text-muted\" *ngIf=\"block.previousHash == 0\">(Genesis block)</small></h5>\n    </div>\n\n     <ul class=\"list-group list-group-flush\">\n\t    <li class=\"list-group-item\">\n\t    \t<span class=\"\">Hash</span>\n\t    \t<br>\n\t    \t<div class=\"text-truncate\" [style.color]=\"'#' + block.hash.substring(0,6)\">\n\t    \t\t<small>{{ block.hash }}</small>\n\t    \t</div>\n\n\t\t\t<br>\n\t\t\t<span class=\"\">Hash of previous block</span>\n\t    \t<br>\n\n\t    \t<div class=\"text-truncate\" [style.color]=\"'#' + block.previousHash.substring(0,6)\">\n\t    \t\t<small>{{ block.previousHash }}</small>\n\t    \t</div>\n\t    </li>\n\n\t    <li class=\"list-group-item\">\n\t    \t<span class=\"\">Nonce</span><br>\n\t    \t<div class=\"text-truncate text-muted\">\n\t    \t\t<small>{{ block.nonce }}</small>\n\t    \t</div>\n\t    </li>\n\n\t    <li class=\"list-group-item\">\n\t    \t<span class=\"\">Timestamp</span><br>\n\t    \t<div class=\"text-truncate text-muted\">\n\t    \t\t<small>{{ block.timestamp }}</small>\n\t    \t</div>\n\t    </li>\n\t  </ul>\n\n\t  <!-- <div class=\"card-body\"> -->\n\t  \t<!-- <span class=\"card-link\" *ngIf=\"!blockHasTx()\">Block has no transactions</span> -->\n\t  \t<!-- <span class=\"card-link\" *ngIf=\"blockHasTx()\">Contains {{block.transactions.length}} transactions</span> -->\n\t  <!-- </div> -->\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/transactions-table/transactions-table.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/transactions-table/transactions-table.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p *ngIf=\"transactions.length === 0\">This block has no transactions</p> -->\n\n<table class=\"table table-hover table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">From</th>\n      <th scope=\"col\">To</th>\n      <th scope=\"col\">Amount</th>\n      <th scope=\"col\">Timestamp</th>\n      <th scope=\"col\">Valid?</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngIf=\"transactions.length === 0\" class=\"text-center\">\n      <td colspan=\"6\">This block has no transactions</td>\n    </tr>\n    \n    <tr *ngFor=\"let tx of transactions; index as index\">\n      <td>{{index}}</td>\n      <td class=\"text-truncate\" style=\"max-width: 100px;\">\n\n        <a [routerLink]=\"['/wallet', tx.fromAddress]\" *ngIf=\"tx.fromAddress !== null\">{{tx.fromAddress}}</a>\n\n        <span *ngIf=\"tx.fromAddress === null\">System</span>\n\n        <span class=\"text-muted\" *ngIf=\"blockchainService.addressIsFromCurrentUser(tx.fromAddress)\">\n          <br><small>(That's yours!)</small>\n        </span>\n      </td>\n      <td class=\"text-truncate\" style=\"max-width: 100px;\">\n          <a [routerLink]=\"['/wallet', tx.toAddress]\">{{tx.toAddress}}</a>\n\n          <span class=\"text-muted\" *ngIf=\"blockchainService.addressIsFromCurrentUser(tx.toAddress)\">\n            <br><small>(That's yours!)</small>\n          </span>\n      </td>\n      <td>\n        {{tx.amount}}\n        <span *ngIf=\"tx.fromAddress === null\" class=\"text-muted\"><br><small>(Block reward)</small></span>\n      </td>\n      <td>\n        {{tx.timestamp}}<br>\n        <span class=\"text-muted\"><small>{{tx.timestamp |date:'MMM d, y, HH:mm'}}</small></span>\n      </td>\n      <td style=\"max-width: 40px;\">\n        <span *ngIf=\"tx.isValid()\">✓</span>\n        <span *ngIf=\"!tx.isValid()\">✗</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/blockchain-viewer/blockchain-viewer.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/blockchain-viewer/blockchain-viewer.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>Blocks in chain</h1>\n\t<p>Each card represents a block on the chain. Click on a block to see the transactions stored inside.</p>\n</div>\n\n<div class=\"container\" style=\"overflow-x: scroll;white-space: nowrap;\">\n\t<app-block-view \n\t\t*ngFor=\"let block of blocks\" \n\t\t[block]=\"block\" \n\t\t[selectedBlock]=\"selectedBlock\"\n\t\t(click)=\"showTransactions(block)\"\n\t></app-block-view>\n</div>\n\n<br><br>\n\n<div class=\"container\">\n\t<h1>Transactions inside block {{ getBlockNumber(selectedBlock) }}</h1>\n\n\t<app-transactions-table\n\t\t[transactions]=\"selectedBlock.transactions\"\n\t></app-transactions-table>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/create-transaction/create-transaction.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/create-transaction/create-transaction.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>Create transaction</h1>\n\t<p>Transfer some money to someone!</p>\n\n\t<br>\n\n\t<div class=\"form-group\">\n\t    <label for=\"fromAddress\">From address</label>\n\t    <input type=\"text\" class=\"form-control\" id=\"fromAddress\" aria-describedby=\"fromAddressHelp\" [(ngModel)]=\"ownWalletKey.publicKey\" disabled>\n\t    <small id=\"fromAddressHelp\" class=\"form-text text-muted\">\n\t    \tThis is your wallet address. You cannot change it because you can only spend your own coins.\n\t    </small>\n  \t</div>\n\n  \t<div class=\"form-group\">\n\t    <label for=\"toAddress\">To address</label>\n\t    <input type=\"text\" class=\"form-control\" id=\"toAddress\" aria-describedby=\"toAddressHelp\" [(ngModel)]=\"newTx.toAddress\">\n\t    <small id=\"toAddressHelp\" class=\"form-text text-muted\">\n\t    \tThe address of the wallet where you want to send the money to. You can type random text here (if you are not interested in recovering the funds)\n\t    </small>\n  \t</div>\n\n  \t<div class=\"form-group\">\n\t    <label for=\"amount\">Amount</label>\n\t    <input type=\"number\" class=\"form-control\" id=\"amount\" aria-describedby=\"amountHelp\" [(ngModel)]=\"newTx.amount\">\n\t    <small id=\"amountHelp\" class=\"form-text text-muted\">\n\t    \tYou can transfer any amount. Account balance is not checked in this demo. Have at it!\n\t    </small>\n  \t</div>\n\n  \t<button (click)=\"createTransaction()\" type=\"submit\" class=\"btn btn-primary\">Sign & create transaction</button>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pending-transactions/pending-transactions.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pending-transactions/pending-transactions.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\t<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"justAddedTx\">\n\t\tTransaction created successfully!\n\t</div>\n\n\t<h1>Pending transactions</h1>\n\t<p>These transactions are waiting to be included in the next block. Next block is created when you start the mining process.</p>\n\n\t<app-transactions-table\n\t\t[transactions]=\"pendingTransactions\">\n\t</app-transactions-table>\n\n\t <button class=\"btn btn-primary\" *ngIf=\"pendingTransactions.length > 0 && miningInProgress === false\" (click)=\"minePendingTransactions()\">\n     \tStart mining\n    </button>\n\n    <div *ngIf=\"miningInProgress === true\">\n    \tMining block.. Hang on...\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/settings/settings.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/settings/settings.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Settings</h1>\n  <p>Control how the blockchain behaves when new transactions or blocks are created. Changes are automatically saved.</p>\n\n  <br>\n\n  <div class=\"form-group\">\n    <label for=\"difficulty\">Difficulty</label>\n    <input type=\"number\" class=\"form-control\" id=\"difficulty\" aria-describedby=\"difficultyHelp\" [(ngModel)]=\"blockchain.difficulty\">\n    <small id=\"difficultyHelp\" class=\"form-text text-muted\">\n    \tDifficulty controls how long the mining process takes. Higher numbers will make mining a lot slower!\n    \t<br>Default: 2\n    </small>\n  </div>\n\n  <br>\n\n  <div class=\"form-group\">\n    <label for=\"miningReward\">Mining reward</label>\n    <input type=\"number\" class=\"form-control\" id=\"miningReward\" aria-describedby=\"miningRewardHelp\" [(ngModel)]=\"blockchain.miningRewards\">\n    <small id=\"miningRewardHelp\" class=\"form-text text-muted\">\n\t\tHow much \"coins\" a miner receives for successfully creating a new block for the chain.\n\t\t<br>Default: 100\n    </small>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/wallet-balance/wallet-balance.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/wallet-balance/wallet-balance.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>Wallet details</h1>\n\n\t<p style=\"word-wrap:break-word;\">\n\t\t<strong>Address:</strong>\n\t\t<br>\n\t\t{{walletAddress}}\n\t</p>\n\n\t<p>\n\t\t<strong>Balance:</strong>\n\t\t<br>\n\t\t{{ balance }}\n\t</p>\n\n\t<hr>\n\n\t<h1>Transactions</h1>\n\t<p *ngIf=\"transactions.length === 0\">This wallet has made no transactions (yet)</p>\n\t<app-transactions-table\n\t\t[transactions]=\"transactions\"\n\t\t*ngIf=\"transactions.length > 0\"\n\t></app-transactions-table>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/blockchain-viewer/blockchain-viewer.component */ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");
/* harmony import */ var _pages_create_transaction_create_transaction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/create-transaction/create-transaction.component */ "./src/app/pages/create-transaction/create-transaction.component.ts");
/* harmony import */ var _pages_pending_transactions_pending_transactions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/pending-transactions/pending-transactions.component */ "./src/app/pages/pending-transactions/pending-transactions.component.ts");
/* harmony import */ var _pages_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/wallet-balance/wallet-balance.component */ "./src/app/pages/wallet-balance/wallet-balance.component.ts");








const routes = [
    { path: '', component: _pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_3__["BlockchainViewerComponent"] },
    { path: 'settings', component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"] },
    { path: 'new/transaction', component: _pages_create_transaction_create_transaction_component__WEBPACK_IMPORTED_MODULE_5__["CreateTransactionComponent"] },
    { path: 'new/transaction/pending', component: _pages_pending_transactions_pending_transactions_component__WEBPACK_IMPORTED_MODULE_6__["PendingTransactionsComponent"] },
    { path: 'wallet/:address', component: _pages_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_7__["WalletBalanceComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/blockchain.service */ "./src/app/services/blockchain.service.ts");



let AppComponent = class AppComponent {
    // public showInfoMessage = true;
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
        this.blockchain = blockchainService.blockchainInstance;
    }
    ngOnInit() {
    }
    thereArePendingTransactions() {
        return this.blockchain.pendingTransactions.length > 0;
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_block_view_block_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/block-view/block-view.component */ "./src/app/components/block-view/block-view.component.ts");
/* harmony import */ var _pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/blockchain-viewer/blockchain-viewer.component */ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.ts");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/blockchain.service */ "./src/app/services/blockchain.service.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");
/* harmony import */ var _components_transactions_table_transactions_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/transactions-table/transactions-table.component */ "./src/app/components/transactions-table/transactions-table.component.ts");
/* harmony import */ var _pages_create_transaction_create_transaction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/create-transaction/create-transaction.component */ "./src/app/pages/create-transaction/create-transaction.component.ts");
/* harmony import */ var _pages_pending_transactions_pending_transactions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/pending-transactions/pending-transactions.component */ "./src/app/pages/pending-transactions/pending-transactions.component.ts");
/* harmony import */ var _pages_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/wallet-balance/wallet-balance.component */ "./src/app/pages/wallet-balance/wallet-balance.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_block_view_block_view_component__WEBPACK_IMPORTED_MODULE_6__["BlockViewComponent"],
            _pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_7__["BlockchainViewerComponent"],
            _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"],
            _components_transactions_table_transactions_table_component__WEBPACK_IMPORTED_MODULE_10__["TransactionsTableComponent"],
            _pages_create_transaction_create_transaction_component__WEBPACK_IMPORTED_MODULE_11__["CreateTransactionComponent"],
            _pages_pending_transactions_pending_transactions_component__WEBPACK_IMPORTED_MODULE_12__["PendingTransactionsComponent"],
            _pages_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_13__["WalletBalanceComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ],
        providers: [
            _services_blockchain_service__WEBPACK_IMPORTED_MODULE_8__["BlockchainService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/block-view/block-view.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/block-view/block-view.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 18rem;\n  display: inline-block;\n  margin: 0 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nlei1yc2kyMTktdWJ1bnR1L0RvY3VtZW50cy9CbG9ja0NoYWluL2Jsb2NrY2hhaW4tYXBwL3NyYy9hcHAvY29tcG9uZW50cy9ibG9jay12aWV3L2Jsb2NrLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmxvY2stdmlldy9ibG9jay12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvY2stdmlldy9ibG9jay12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG5cdHdpZHRoOiAxOHJlbTsgXG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrOyBcblx0bWFyZ2luOiAwIDEwcHggMCAwO1xufSIsIi5jYXJkIHtcbiAgd2lkdGg6IDE4cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/block-view/block-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/block-view/block-view.component.ts ***!
  \***************************************************************/
/*! exports provided: BlockViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockViewComponent", function() { return BlockViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");



let BlockViewComponent = class BlockViewComponent {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
        this.blocksInChain = blockchainService.blockchainInstance.chain;
    }
    ngOnInit() {
    }
    blockHasTx() {
        return this.block.transactions.length > 0;
    }
    isSelectedBlock() {
        return this.block === this.selectedBlock;
    }
    getBlockNumber() {
        return this.blocksInChain.indexOf(this.block) + 1;
    }
};
BlockViewComponent.ctorParameters = () => [
    { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BlockViewComponent.prototype, "block", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BlockViewComponent.prototype, "selectedBlock", void 0);
BlockViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-view',
        template: __webpack_require__(/*! raw-loader!./block-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/block-view/block-view.component.html"),
        styles: [__webpack_require__(/*! ./block-view.component.scss */ "./src/app/components/block-view/block-view.component.scss")]
    })
], BlockViewComponent);



/***/ }),

/***/ "./src/app/components/transactions-table/transactions-table.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/transactions-table/transactions-table.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNhY3Rpb25zLXRhYmxlL3RyYW5zYWN0aW9ucy10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/transactions-table/transactions-table.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/transactions-table/transactions-table.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TransactionsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsTableComponent", function() { return TransactionsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");



let TransactionsTableComponent = class TransactionsTableComponent {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
        this.transactions = [];
    }
    ngOnInit() {
    }
};
TransactionsTableComponent.ctorParameters = () => [
    { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TransactionsTableComponent.prototype, "transactions", void 0);
TransactionsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transactions-table',
        template: __webpack_require__(/*! raw-loader!./transactions-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/transactions-table/transactions-table.component.html"),
        styles: [__webpack_require__(/*! ./transactions-table.component.scss */ "./src/app/components/transactions-table/transactions-table.component.scss")]
    })
], TransactionsTableComponent);



/***/ }),

/***/ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/blockchain-viewer/blockchain-viewer.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jsb2NrY2hhaW4tdmlld2VyL2Jsb2NrY2hhaW4tdmlld2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/blockchain-viewer/blockchain-viewer.component.ts ***!
  \************************************************************************/
/*! exports provided: BlockchainViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainViewerComponent", function() { return BlockchainViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");



let BlockchainViewerComponent = class BlockchainViewerComponent {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
        this.blocks = [];
        this.selectedBlock = null;
        this.blocks = blockchainService.blockchainInstance.chain;
        this.selectedBlock = this.blocks[0];
        console.log(this.blocks);
    }
    ngOnInit() {
    }
    showTransactions(block) {
        console.log(block);
        this.selectedBlock = block;
        return false;
    }
    blockHasTx(block) {
        return block.transactions.length > 0;
    }
    selectedBlockHasTx() {
        return this.blockHasTx(this.selectedBlock);
    }
    isSelectedBlock(block) {
        return this.selectedBlock === block;
    }
    getBlockNumber(block) {
        return this.blocks.indexOf(block) + 1;
    }
};
BlockchainViewerComponent.ctorParameters = () => [
    { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] }
];
BlockchainViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blockchain-viewer',
        template: __webpack_require__(/*! raw-loader!./blockchain-viewer.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/blockchain-viewer/blockchain-viewer.component.html"),
        styles: [__webpack_require__(/*! ./blockchain-viewer.component.scss */ "./src/app/pages/blockchain-viewer/blockchain-viewer.component.scss")]
    })
], BlockchainViewerComponent);



/***/ }),

/***/ "./src/app/pages/create-transaction/create-transaction.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/create-transaction/create-transaction.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS10cmFuc2FjdGlvbi9jcmVhdGUtdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/create-transaction/create-transaction.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/create-transaction/create-transaction.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTransactionComponent", function() { return CreateTransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");
/* harmony import */ var blockchainpoc_src_blockchain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! blockchainpoc/src/blockchain */ "./node_modules/blockchainpoc/src/blockchain.js");
/* harmony import */ var blockchainpoc_src_blockchain__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(blockchainpoc_src_blockchain__WEBPACK_IMPORTED_MODULE_4__);





let CreateTransactionComponent = class CreateTransactionComponent {
    constructor(blockchainService, router) {
        this.blockchainService = blockchainService;
        this.router = router;
        this.newTx = new blockchainpoc_src_blockchain__WEBPACK_IMPORTED_MODULE_4__["Transaction"]();
        this.newTx = new blockchainpoc_src_blockchain__WEBPACK_IMPORTED_MODULE_4__["Transaction"]();
        this.ownWalletKey = blockchainService.walletKeys[0];
    }
    ngOnInit() {
    }
    createTransaction() {
        const newTx = this.newTx;
        // Set the FROM address and sign the transaction
        newTx.fromAddress = this.ownWalletKey.publicKey;
        newTx.signTransaction(this.ownWalletKey.keyObj);
        try {
            this.blockchainService.addTransaction(this.newTx);
        }
        catch (e) {
            alert(e);
            return;
        }
        this.router.navigate(['/new/transaction/pending', { addedTx: true }]);
        this.newTx = new blockchainpoc_src_blockchain__WEBPACK_IMPORTED_MODULE_4__["Transaction"]();
    }
};
CreateTransactionComponent.ctorParameters = () => [
    { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_3__["BlockchainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CreateTransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-transaction',
        template: __webpack_require__(/*! raw-loader!./create-transaction.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/create-transaction/create-transaction.component.html"),
        styles: [__webpack_require__(/*! ./create-transaction.component.scss */ "./src/app/pages/create-transaction/create-transaction.component.scss")]
    })
], CreateTransactionComponent);



/***/ }),

/***/ "./src/app/pages/pending-transactions/pending-transactions.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/pending-transactions/pending-transactions.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlbmRpbmctdHJhbnNhY3Rpb25zL3BlbmRpbmctdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/pending-transactions/pending-transactions.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/pending-transactions/pending-transactions.component.ts ***!
  \******************************************************************************/
/*! exports provided: PendingTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingTransactionsComponent", function() { return PendingTransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");




let PendingTransactionsComponent = class PendingTransactionsComponent {
    constructor(blockchainService, router, route) {
        this.blockchainService = blockchainService;
        this.router = router;
        this.route = route;
        this.pendingTransactions = [];
        this.miningInProgress = false;
        this.justAddedTx = false;
        this.pendingTransactions = blockchainService.getPendingTransactions();
    }
    ngOnInit() {
        if (this.route.snapshot.paramMap.get('addedTx')) {
            this.justAddedTx = true;
            setTimeout(() => {
                this.justAddedTx = false;
            }, 4000);
        }
    }
    minePendingTransactions() {
        this.miningInProgress = true;
        this.blockchainService.minePendingTransactions();
        this.miningInProgress = false;
        this.router.navigate(['/']);
    }
};
PendingTransactionsComponent.ctorParameters = () => [
    { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_3__["BlockchainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PendingTransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pending-transactions',
        template: __webpack_require__(/*! raw-loader!./pending-transactions.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pending-transactions/pending-transactions.component.html"),
        styles: [__webpack_require__(/*! ./pending-transactions.component.scss */ "./src/app/pages/pending-transactions/pending-transactions.component.scss")]
    })
], PendingTransactionsComponent);



/***/ }),

/***/ "./src/app/pages/settings/settings.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/settings/settings.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");



let SettingsComponent = class SettingsComponent {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
        this.blockchain = blockchainService.blockchainInstance;
    }
    ngOnInit() {
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/pages/settings/settings.component.scss")]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/pages/wallet-balance/wallet-balance.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/wallet-balance/wallet-balance.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhbGxldC1iYWxhbmNlL3dhbGxldC1iYWxhbmNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/wallet-balance/wallet-balance.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/wallet-balance/wallet-balance.component.ts ***!
  \******************************************************************/
/*! exports provided: WalletBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletBalanceComponent", function() { return WalletBalanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");




let WalletBalanceComponent = class WalletBalanceComponent {
    constructor(route, blockchainService) {
        this.route = route;
        this.blockchainService = blockchainService;
        this.walletAddress = '';
        this.balance = 0;
        this.transactions = [];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.walletAddress = params['address'];
            const blockchain = this.blockchainService.blockchainInstance;
            this.balance = blockchain.checkBalance(this.walletAddress);
            this.transactions = blockchain.getAllTransactionsForWallet(this.walletAddress);
        });
    }
};
WalletBalanceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_3__["BlockchainService"] }
];
WalletBalanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wallet-balance',
        template: __webpack_require__(/*! raw-loader!./wallet-balance.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/wallet-balance/wallet-balance.component.html"),
        styles: [__webpack_require__(/*! ./wallet-balance.component.scss */ "./src/app/pages/wallet-balance/wallet-balance.component.scss")]
    })
], WalletBalanceComponent);



/***/ }),

/***/ "./src/app/services/blockchain.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/blockchain.service.ts ***!
  \************************************************/
/*! exports provided: BlockchainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainService", function() { return BlockchainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var blockchainpoc_src_blockchain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blockchainpoc/src/blockchain */ "./node_modules/blockchainpoc/src/blockchain.js");
/* harmony import */ var blockchainpoc_src_blockchain__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blockchainpoc_src_blockchain__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! elliptic */ "./node_modules/elliptic/lib/elliptic.js");
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_3__);



console.log('Blockchain', blockchainpoc_src_blockchain__WEBPACK_IMPORTED_MODULE_2__["Blockchain"]);

let BlockchainService = class BlockchainService {
    constructor() {
        this.blockchainInstance = new blockchainpoc_src_blockchain__WEBPACK_IMPORTED_MODULE_2__["Blockchain"]();
        this.walletKeys = [];
        this.blockchainInstance.difficulty = 1;
        this.blockchainInstance.minePendingTransactionsBlock('hi');
        this.generateWalletKeys();
    }
    minePendingTransactions() {
        this.blockchainInstance.minePendingTransactionsBlock(this.walletKeys[0].publicKey);
    }
    addressIsFromCurrentUser(address) {
        return address === this.walletKeys[0].publicKey;
    }
    generateWalletKeys() {
        const ec = new elliptic__WEBPACK_IMPORTED_MODULE_3___default.a.ec('secp256k1');
        const key = ec.genKeyPair();
        this.walletKeys.push({
            keyObj: key,
            publicKey: key.getPublic('hex'),
            privateKey: key.getPrivate('hex'),
        });
        console.log(this.walletKeys);
    }
    getPendingTransactions() {
        return this.blockchainInstance.pendingTransactions;
    }
    addTransaction(tx) {
        this.blockchainInstance.addTransaction(tx);
    }
};
BlockchainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BlockchainService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sez-rsi219-ubuntu/Documents/BlockChain/blockchain-app/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map