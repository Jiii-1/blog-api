'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-tutorial documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-b6c12a496195a44a0658d369af300966961f1008a5e21be02aaec7053b59feeab4df96c4d790f84143f39717ef876d1521cb88a7eeb8da862bb53594a9a56279"' : 'data-bs-target="#xs-controllers-links-module-AppModule-b6c12a496195a44a0658d369af300966961f1008a5e21be02aaec7053b59feeab4df96c4d790f84143f39717ef876d1521cb88a7eeb8da862bb53594a9a56279"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-b6c12a496195a44a0658d369af300966961f1008a5e21be02aaec7053b59feeab4df96c4d790f84143f39717ef876d1521cb88a7eeb8da862bb53594a9a56279"' :
                                            'id="xs-controllers-links-module-AppModule-b6c12a496195a44a0658d369af300966961f1008a5e21be02aaec7053b59feeab4df96c4d790f84143f39717ef876d1521cb88a7eeb8da862bb53594a9a56279"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-b6c12a496195a44a0658d369af300966961f1008a5e21be02aaec7053b59feeab4df96c4d790f84143f39717ef876d1521cb88a7eeb8da862bb53594a9a56279"' : 'data-bs-target="#xs-injectables-links-module-AppModule-b6c12a496195a44a0658d369af300966961f1008a5e21be02aaec7053b59feeab4df96c4d790f84143f39717ef876d1521cb88a7eeb8da862bb53594a9a56279"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-b6c12a496195a44a0658d369af300966961f1008a5e21be02aaec7053b59feeab4df96c4d790f84143f39717ef876d1521cb88a7eeb8da862bb53594a9a56279"' :
                                        'id="xs-injectables-links-module-AppModule-b6c12a496195a44a0658d369af300966961f1008a5e21be02aaec7053b59feeab4df96c4d790f84143f39717ef876d1521cb88a7eeb8da862bb53594a9a56279"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-0b64d181a1861852e60b85239f0fa3c875a37b077f8de79573a645518aff036561cd139e8c9aede56e5f789e62356983d0541438883ee9696613d116235e6251"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-0b64d181a1861852e60b85239f0fa3c875a37b077f8de79573a645518aff036561cd139e8c9aede56e5f789e62356983d0541438883ee9696613d116235e6251"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-0b64d181a1861852e60b85239f0fa3c875a37b077f8de79573a645518aff036561cd139e8c9aede56e5f789e62356983d0541438883ee9696613d116235e6251"' :
                                            'id="xs-controllers-links-module-AuthModule-0b64d181a1861852e60b85239f0fa3c875a37b077f8de79573a645518aff036561cd139e8c9aede56e5f789e62356983d0541438883ee9696613d116235e6251"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-0b64d181a1861852e60b85239f0fa3c875a37b077f8de79573a645518aff036561cd139e8c9aede56e5f789e62356983d0541438883ee9696613d116235e6251"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-0b64d181a1861852e60b85239f0fa3c875a37b077f8de79573a645518aff036561cd139e8c9aede56e5f789e62356983d0541438883ee9696613d116235e6251"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-0b64d181a1861852e60b85239f0fa3c875a37b077f8de79573a645518aff036561cd139e8c9aede56e5f789e62356983d0541438883ee9696613d116235e6251"' :
                                        'id="xs-injectables-links-module-AuthModule-0b64d181a1861852e60b85239f0fa3c875a37b077f8de79573a645518aff036561cd139e8c9aede56e5f789e62356983d0541438883ee9696613d116235e6251"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' :
                                            'id="xs-controllers-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' :
                                        'id="xs-injectables-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-77ae4a295cade75018b9f91c027996d84acad2105c7ed84f630796651cb2e82cbe67d9c3a0ff888e89e888aaeb8d3513787414f7da20ba6bd7c9af30bd42ff5a"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-77ae4a295cade75018b9f91c027996d84acad2105c7ed84f630796651cb2e82cbe67d9c3a0ff888e89e888aaeb8d3513787414f7da20ba6bd7c9af30bd42ff5a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-77ae4a295cade75018b9f91c027996d84acad2105c7ed84f630796651cb2e82cbe67d9c3a0ff888e89e888aaeb8d3513787414f7da20ba6bd7c9af30bd42ff5a"' :
                                            'id="xs-controllers-links-module-UsersModule-77ae4a295cade75018b9f91c027996d84acad2105c7ed84f630796651cb2e82cbe67d9c3a0ff888e89e888aaeb8d3513787414f7da20ba6bd7c9af30bd42ff5a"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-77ae4a295cade75018b9f91c027996d84acad2105c7ed84f630796651cb2e82cbe67d9c3a0ff888e89e888aaeb8d3513787414f7da20ba6bd7c9af30bd42ff5a"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-77ae4a295cade75018b9f91c027996d84acad2105c7ed84f630796651cb2e82cbe67d9c3a0ff888e89e888aaeb8d3513787414f7da20ba6bd7c9af30bd42ff5a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-77ae4a295cade75018b9f91c027996d84acad2105c7ed84f630796651cb2e82cbe67d9c3a0ff888e89e888aaeb8d3513787414f7da20ba6bd7c9af30bd42ff5a"' :
                                        'id="xs-injectables-links-module-UsersModule-77ae4a295cade75018b9f91c027996d84acad2105c7ed84f630796651cb2e82cbe67d9c3a0ff888e89e888aaeb8d3513787414f7da20ba6bd7c9af30bd42ff5a"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDTO.html" data-type="entity-link" >CreateUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUsersDto.html" data-type="entity-link" >PatchUsersDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});