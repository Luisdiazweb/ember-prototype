import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';

export default class HomeRoute extends Route {
  @service('user') userService;
  @service('chat') chatService;
  @service router;

  beforeModel(transition) {
    if (!this.userService.verifyUser()) {
      let loginController = this.controllerFor('login');
      loginController.previousTransition = transition;
      this.router.transitionTo('login');
    }
  }

  /* Setting up data */
  setupController(controller, model){
    super.setupController(controller,model);

    let chatController = getOwner(this).lookup('controller:home/chats');
    let rawChatList = this.chatService.getChatList();

    
    /* Setting up chat template controller */
    chatController.chatList = rawChatList;
    this.chatService.currentChat = rawChatList.length > 0? rawChatList[0] : null;
  }
}
