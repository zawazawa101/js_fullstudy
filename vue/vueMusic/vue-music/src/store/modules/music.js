import * as type from '../types'
import {findIndex} from '@/common/js/util'
const state = {
  playList: [],
  currentIndex: -1,
  playing: false,
  fullScreen: false
}
const mutations = {
  [type.SET_PLAYLIST](state, playlist) {
    state.playList = playlist 
  },
  [type.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  },
  [type.SET_PLAYING](state, status) {
    state.playing = status
  },
  [type.SET_FULL_SCREEN](state, status) {
    state.fullScreen = status
  }

}
const actions = {
  selectPlaySong({commit, state}, song) {
    let playlist = state.playList
    let currentIndex = state.currentIndex
    // 查找当前播放列表中是否有此刻点击播放的歌曲
    let fpIndex = findIndex(playlist, song)
    if(fpIndex > -1) {
      currentIndex = fpIndex
    }else {
      playlist = [song, ...playlist]
      currentIndex = 0
    }
    commit(type.SET_PLAYLIST, playlist)
    commit(type.SET_CURRENT_INDEX, currentIndex)
    commit(type.SET_FULL_SCREEN, true)
    commit(type.SET_PLAYING, true)
    
    console.log(state.playList)
  }
}

const getters = {
  currentSong: state => state.playList[state.currentIndex] || {}
}

export default {
  state,
  getters,
  actions,
  mutations
}