import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { UploadFile } from '../type'

@Component
export default class UploadItem extends Vue {
  @Prop() file!: UploadFile

  @Emit() close (file: UploadFile) {}

  @Emit() preview (file: UploadFile) {}
}
