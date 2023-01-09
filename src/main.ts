import * as Gtk from 'gtk'
import * as GObject from 'gobject'

Gtk.init(null)

const MyWindow = GObject.registerClass(
  class MyWindow extends Gtk.Window {
    button: Gtk.Button | null = null

    _init() {
      super._init({
        title: 'Hello',
        defaultWidth: 400,
        defaultHeight: 400,
      })
      this.button = new Gtk.Button({ label: 'Click here' })
      this.button.connect('clicked', MyWindow.onButtonClicked)
      this.add(this.button)
    }

    static onButtonClicked() {
      print('Hello world')
    }
  }
)

const win = new MyWindow()
win.connect('delete-event', () => {
  Gtk.main_quit()
})
win.show_all()
Gtk.main()
