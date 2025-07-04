import './assets/main.css'
import 'animate.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from './components/Elements/BaseButton.vue'
import BaseTitle from './components/Elements/BaseTitle.vue'
import HeroTitle from './components/Elements/HeroTitle.vue'
import SubTitle from './components/Elements/SubTitle.vue'
import InputField from './components/Elements/InputField.vue'
import BaseImage from './components/Elements/BaseImage.vue'
import BaseParagraph from './components/Elements/BaseParagraph.vue'
import BaseTextArea from './components/Elements/BaseTextArea.vue'
import ListItem from './components/Elements/ListItem.vue'

const app = createApp(App)
app.use(router)

app.component('BaseButton', BaseButton)
app.component('BaseTitle', BaseTitle)
app.component('HeroTitle', HeroTitle)
app.component('SubTitle', SubTitle)
app.component('InputField', InputField)
app.component('BaseImage', BaseImage)
app.component('BaseParagraph', BaseParagraph)
app.component('BaseTextArea', BaseTextArea)
app.component('ListItem', ListItem)

app.mount('#app')
