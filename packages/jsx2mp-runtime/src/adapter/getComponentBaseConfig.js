// eslint-disable-next-line import/no-extraneous-dependencies
import { isMiniApp, isWeChatMiniProgram, isByteDanceMicroApp } from 'universal-env';

export default function() {
  // For alibaba miniapp
  if (isMiniApp) {
    return {
      props: {},
      events: {}
    };
  }

  // For wechat miniprogram and bytedance microapp
  if (isWeChatMiniProgram || isByteDanceMicroApp) {
    return {
      properties: {
        __tagId: null,
        ref: null
      },
      options: {
        addGlobalClass: true,
        multipleSlots: true
      }
    };
  }
}
