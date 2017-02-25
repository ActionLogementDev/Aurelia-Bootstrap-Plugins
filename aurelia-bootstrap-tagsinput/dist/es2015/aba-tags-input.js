var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { inject, bindable, bindingMode } from 'aurelia-framework';
import $ from 'jquery';
import 'bootstrap-tagsinput/dist/bootstrap-tagsinput';
import 'bootstrap-tagsinput/dist/bootstrap-tagsinput.css';
import 'bootstrap-tagsinput/dist/bootstrap-tagsinput-typeahead.css';

export let AbaTagsInputCustomElement = (_dec = inject(Element), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = class AbaTagsInputCustomElement {

  constructor(elm) {
    _initDefineProp(this, 'element', _descriptor, this);

    _initDefineProp(this, 'model', _descriptor2, this);

    _initDefineProp(this, 'allowDuplicates', _descriptor3, this);

    _initDefineProp(this, 'cancelConfirmKeysOnEmpty', _descriptor4, this);

    _initDefineProp(this, 'confirmKeys', _descriptor5, this);

    _initDefineProp(this, 'focusClass', _descriptor6, this);

    _initDefineProp(this, 'freeInput', _descriptor7, this);

    _initDefineProp(this, 'itemValue', _descriptor8, this);

    _initDefineProp(this, 'itemText', _descriptor9, this);

    _initDefineProp(this, 'maxTags', _descriptor10, this);

    _initDefineProp(this, 'maxChars', _descriptor11, this);

    _initDefineProp(this, 'onTagExists', _descriptor12, this);

    _initDefineProp(this, 'tagClass', _descriptor13, this);

    _initDefineProp(this, 'trimValue', _descriptor14, this);

    _initDefineProp(this, 'typeahead', _descriptor15, this);

    _initDefineProp(this, 'onBeforeItemAdd', _descriptor16, this);

    _initDefineProp(this, 'onBeforeItemRemove', _descriptor17, this);

    _initDefineProp(this, 'onItemAdded', _descriptor18, this);

    _initDefineProp(this, 'onItemAddedOnInit', _descriptor19, this);

    _initDefineProp(this, 'onItemRemoved', _descriptor20, this);

    this.events = {};
    this.methods = {};
    this.options = {};

    this.elm = elm;
  }

  attached() {
    this.domElm = $(this.elm);

    this.attachOptions();
    this.applyExposeEvents();
    this.exposeMethods();

    this.domElm.tagsinput(this.options);

    this.element = {
      events: this.events,
      options: this.options,
      methods: this.methods
    };
  }

  attachOptions() {
    let options = {
      allowDuplicates: this.allowDuplicates,
      cancelConfirmKeysOnEmpty: this.cancelConfirmKeysOnEmpty,
      confirmKeys: this.confirmKeys,
      focusClass: this.focusClass,
      freeInput: this.freeInput,
      maxChars: this.maxChars,
      maxTags: this.maxTags,
      tagClass: this.tagClass,
      trimValue: this.trimValue,
      typeahead: this.typeahead
    };

    if (this.itemValue) {
      options.itemValue = this.itemValue;
    }
    if (this.itemText) {
      options.itemText = this.itemText;
    }
    if (this.onTagExists) {
      options.onTagExists = this.onTagExists;
    }

    this.options = options;
  }

  applyExposeEvents() {
    this.domElm.on('beforeItemAdd', e => {
      if (typeof this.onBeforeItemAdd === 'function') {
        this.onBeforeItemAdd(e);
      }
      if (typeof this.events.onBeforeItemAdd === 'function') {
        this.events.onBeforeItemAdd(e);
      }
    });

    this.domElm.on('beforeItemRemove', e => {
      if (typeof this.onBeforeItemRemove === 'function') {
        this.onBeforeItemRemove(e);
      }
      if (typeof this.events.onBeforeItemRemove === 'function') {
        this.events.onBeforeItemRemove(e);
      }
    });

    this.domElm.on('itemAdded', e => {
      this.model = this.domElm.tagsinput('items');
      if (typeof this.onItemAdded === 'function') {
        this.onItemAdded(e);
      }
      if (typeof this.events.onItemAdded === 'function') {
        this.events.onItemAdded(e);
      }
    });

    this.domElm.on('itemAddedOnInit', e => {
      if (typeof this.onItemAddedOnInit === 'function') {
        this.onItemAddedOnInit(e);
      }
      if (typeof this.events.onItemAddedOnInit === 'function') {
        this.events.onItemAddedOnInit(e);
      }
    });

    this.domElm.on('itemRemoved', e => {
      this.model = this.domElm.tagsinput('items');
      if (typeof this.onItemRemoved === 'function') {
        this.onItemRemoved(e);
      }
      if (typeof this.events.onItemRemoved === 'function') {
        this.events.onItemRemoved(e);
      }
    });
  }

  exposeMethods() {
    let methods = {
      add: value => this.domElm.tagsinput('add', value),
      destroy: () => this.domElm.tagsinput('destroy'),
      focus: () => this.domElm.tagsinput('focus'),
      input: () => {
        return this.domElm.tagsinput('input');
      },
      refresh: () => this.domElm.tagsinput('refresh'),
      remove: value => this.domElm.tagsinput('remove', value),
      removeAll: () => this.domElm.tagsinput('removeAll')
    };

    this.methods = methods;
  }

  detached() {
    this.domElm.tagsinput('destroy');
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'element', [_dec2], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'model', [_dec3], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'allowDuplicates', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'cancelConfirmKeysOnEmpty', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'confirmKeys', [bindable], {
  enumerable: true,
  initializer: function () {
    return [13, 44];
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'focusClass', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'focus';
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'freeInput', [bindable], {
  enumerable: true,
  initializer: function () {
    return true;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'itemValue', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'itemText', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'maxTags', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'maxChars', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'onTagExists', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'tagClass', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'label label-info';
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'trimValue', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'typeahead', [bindable], {
  enumerable: true,
  initializer: function () {
    return null;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'onBeforeItemAdd', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'onBeforeItemRemove', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'onItemAdded', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'onItemAddedOnInit', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'onItemRemoved', [bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class);