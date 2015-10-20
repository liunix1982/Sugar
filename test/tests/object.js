package('Object', function () {
  "use strict";

  var definePropertySupport = !!(Object.defineProperty && Object.defineProperties);

  // The scope when none is set.
  var nullScope = (function() { return this; }).call();


  method('isObject', function() {
    var Person = function() {};
    var p = new Person();

    test(Object, [{}], true, '{}');
    test(Object, [run(Object, 'extended')], true, 'extended object');
    test(Object, [new Object({})], true, 'new Object()');
    test(Object, [[]], false, '[]');
    test(Object, [new Array(1,2,3)], false, 'new Array(1,2,3)');
    test(Object, [new RegExp()], false, 'new RegExp()');
    test(Object, [new Date()], false, 'new Date()');
    test(Object, [function() {}], false, 'function() {}');
    test(Object, [1], false, '1');
    test(Object, ['wasabi'], false, '"wasabi"');
    test(Object, [null], false, 'null');
    test(Object, [undefined], false, 'undefined');
    test(Object, [NaN], false, 'NaN');
    test(Object, [], false, 'blank');
    test(Object, [false], false, 'false');
    test(Object, [true], false, 'true');
    test(Object, [p], false, 'instance');
  });

  method('isArray', function() {
    test(Object, [{}], false, '{}');
    test(Object, [[]], true, '[]');
    test(Object, [new Array(1,2,3)], true, 'new Array(1,2,3)');
    test(Object, [new RegExp()], false, 'new RegExp()');
    test(Object, [new Date()], false, 'new Date()');
    test(Object, [function() {}], false, 'function() {}');
    test(Object, [1], false, '1');
    test(Object, ['wasabi'], false, '"wasabi"');
    test(Object, [null], false, 'null');
    test(Object, [undefined], false, 'undefined');
    test(Object, [NaN], false, 'NaN');
    test(Object, [], false, 'blank');
    test(Object, [false], false, 'false');
    test(Object, [true], false, 'true');
  });

  method('isBoolean', function() {
    test(Object, [{}], false, '{}');
    test(Object, [[]], false, '[]');
    test(Object, [new RegExp()], false, 'new RegExp()');
    test(Object, [new Date()], false, 'new Date()');
    test(Object, [function() {}], false, 'function() {}');
    test(Object, [1], false, '1');
    test(Object, ['wasabi'], false, '"wasabi"');
    test(Object, [null], false, 'null');
    test(Object, [undefined], false, 'undefined');
    test(Object, [NaN], false, 'NaN');
    test(Object, [], false, 'blank');
    test(Object, [false], true, 'false');
    test(Object, [true], true, 'true');
  });

  method('isDate', function() {
    test(Object, [{}], false, '{}');
    test(Object, [[]], false, '[]');
    test(Object, [new RegExp()], false, 'new RegExp()');
    test(Object, [new Date()], true, 'new Date()');
    test(Object, [function() {}], false, 'function() {}');
    test(Object, [1], false, '1');
    test(Object, ['wasabi'], false, '"wasabi"');
    test(Object, [null], false, 'null');
    test(Object, [undefined], false, 'undefined');
    test(Object, [NaN], false, 'NaN');
    test(Object, [], false, 'blank');
    test(Object, [false], false, 'false');
    test(Object, [true], false, 'true');
  });

  method('isFunction', function() {
    test(Object, [{}], false, '{}');
    test(Object, [[]], false, '[]');
    test(Object, [new RegExp()], false, 'new RegExp()');
    test(Object, [new Date()], false, 'new Date()');
    test(Object, [function() {}], true, 'function() {}');
    test(Object, [new Function()], true, 'new Function()');
    test(Object, [1], false, '1');
    test(Object, ['wasabi'], false, '"wasabi"');
    test(Object, [null], false, 'null');
    test(Object, [undefined], false, 'undefined');
    test(Object, [NaN], false, 'NaN');
    test(Object, [], false, 'blank');
    test(Object, [false], false, 'false');
    test(Object, [true], false, 'true');
  });


  method('isNumber', function() {
    test(Object, [{}], false, '{}');
    test(Object, [[]], false, '[]');
    test(Object, [new RegExp()], false, 'new RegExp()');
    test(Object, [new Date()], false, 'new Date()');
    test(Object, [function() {}], false, 'function() {}');
    test(Object, [new Function()], false, 'new Function()');
    test(Object, [1], true, '1');
    test(Object, [0], true, '0');
    test(Object, [-1], true, '-1');
    test(Object, [new Number('3')], true, 'new Number("3")');
    test(Object, ['wasabi'], false, '"wasabi"');
    test(Object, [null], false, 'null');
    test(Object, [undefined], false, 'undefined');
    test(Object, [NaN], true, 'NaN');
    test(Object, [], false, 'blank');
    test(Object, [false], false, 'false');
    test(Object, [true], false, 'true');
  });

  method('isString', function() {
    test(Object, [{}], false, '{}');
    test(Object, [[]], false, '[]');
    test(Object, [new RegExp()], false, 'new RegExp()');
    test(Object, [new Date()], false, 'new Date()');
    test(Object, [function() {}], false, 'function() {}');
    test(Object, [new Function()], false, 'new Function()');
    test(Object, [1], false, '1');
    test(Object, ['wasabi'], true, '"wasabi"');
    test(Object, [new String('wasabi')], true, 'new String("wasabi")');
    test(Object, [null], false, 'null');
    test(Object, [undefined], false, 'undefined');
    test(Object, [NaN], false, 'NaN');
    test(Object, [], false, 'blank');
    test(Object, [false], false, 'false');
    test(Object, [true], false, 'true');
  });

  method('isRegExp', function() {
    test(Object, [{}], false, '{}');
    test(Object, [[]], false, '[]');
    test(Object, [new RegExp()], true, 'new RegExp()');
    test(Object, [/afda/], true, '/afda/');
    test(Object, [new Date()], false, 'new Date()');
    test(Object, [function() {}], false, 'function() {}');
    test(Object, [new Function()], false, 'new Function()');
    test(Object, [1], false, '1');
    test(Object, ['wasabi'], false, '"wasabi"');
    test(Object, [null], false, 'null');
    test(Object, [undefined], false, 'undefined');
    test(Object, [NaN], false, 'NaN');
    test(Object, [], false, 'blank');
    test(Object, [false], false, 'false');
    test(Object, [true], false, 'true');
  });

  method('isNaN', function() {
    test(Object, [{}], false, '{}');
    test(Object, [[]], false, '[]');
    test(Object, [new RegExp()], false, 'new RegExp()');
    test(Object, [/afda/], false, '/afda/');
    test(Object, [new Date()], false, 'new Date()');
    test(Object, [function() {}], false, 'function() {}');
    test(Object, [new Function()], false, 'new Function()');
    test(Object, [1], false, '1');
    test(Object, ['wasabi'], false, '"wasabi"');
    test(Object, [null], false, 'null');
    test(Object, [undefined], false, 'undefined');
    test(Object, [NaN], true, 'NaN');
    test(Object, [], false, 'blank');
    test(Object, [false], false, 'false');
    test(Object, [true], false, 'true');
  });

  method('isArguments', function() {
    test(Object, [{}], false, '{}');
    test(Object, [[]], false, '[]');
    test(Object, [new Array(1,2,3)], false, 'new Array(1,2,3)');
    test(Object, [new RegExp()], false, 'new RegExp()');
    test(Object, [new Date()], false, 'new Date()');
    test(Object, [function() {}], false, 'function() {}');
    test(Object, [1], false, '1');
    test(Object, ['wasabi'], false, '"wasabi"');
    test(Object, [null], false, 'null');
    test(Object, [undefined], false, 'undefined');
    test(Object, [NaN], false, 'NaN');
    test(Object, [], false, 'blank');
    test(Object, [false], false, 'false');
    test(Object, [true], false, 'true');
    test(Object, [(function(){ return arguments; })()], true, 'arguments object with 0 length');
    test(Object, [(function(){ return arguments; })(1,2,3)], true, 'arguments object with 3 length');
  });

  method('extended', function() {
    var keys, values, obj, strippedValues, count;
    var d = new Date();

    equal(({}).keys, undefined, 'Object | native objects are not wrapped by default');
    equal(run(Object, 'extended'), run(Object, 'extended', [{}]), 'Object.extended | null argument same as empty object');

    obj = run(Object, 'extended', [{
      number: 3,
      person: 'jim',
      date: d
    }]);
    keys = ['number','person','date'];
    values = [3,'jim',d];
    equal(obj.keys(), keys, "returns object's keys");
    count = 0;
    obj.keys(function(key, value) {
      equal(key, keys[count], 'accepts a block');
      equal(value, values[count], 'value is also passed');
      equal(this, obj, '"this" is the object');
      count++;
    });

    equal(count, 3, 'accepts a block | iterated properly');

    equal(run(Object, 'extended').keys(), [], 'empty object');
    equal(run(Object, 'keys', [run(Object, 'extended')]), [], 'empty object');

    keys = ['number','person','date'];
    values = [3,'jim',d];
    equal(run(Object, 'keys', [obj]), keys, "Object.keys | returns object's keys");
    count = 0;
    run(Object, 'keys', [obj, function(key) {
      equal(key, keys[count], 'Object.keys | accepts a block');
      count++;
    }]);
    equal(count, 3, 'Object.keys | accepts a block | iterated properly');

    strippedValues = obj.values().filter(function(m) { return typeof m != 'function'; });
    equal(strippedValues, values, "returns object's values");
    count = 0;
    obj.values(function(value) {
      equal(value, values[count], 'accepts a block');
      count++;
    });

    equal(count, 3, 'accepts a block | iterated properly');

    strippedValues = run(Object, 'values', [obj]).filter(function(m) { return typeof m != 'function'; });
    equal(strippedValues, values, "Object.values | returns object's values");
    count = 0;
    run(Object, 'values', [obj, function(value) {
      equal(value, values[count], 'Object.values | accepts a block');
      count++;
    }]);
    equal(count, 3, 'Object.values | accepts a block | iterated properly');

    strippedValues = run(Object, 'extended').values().filter(function(m) { return typeof m != 'function'; });
    equal(strippedValues, [], 'empty object');

    strippedValues = run(Object, 'values', [run(Object, 'extended')]).filter(function(m) { return typeof m != 'function'; });
    equal(strippedValues, [], 'empty object');


    // Object.extended hasOwnProperty issue #97
    // see: http://www.devthought.com/2012/01/18/an-object-is-not-a-hash/
    run(Object, 'extended', [{ hasOwnProperty: true }]);

  });

  method('merge', function() {

    // Basic no-conflict merging

    testStaticAndInstance({a:'a'}, [{b:'b'}], {a:'a',b:'b'}, 'string');
    testStaticAndInstance({a:'a'}, [{b:8}], {a:'a',b:8}, 'number');
    testStaticAndInstance({a:'a'}, [{b:true}], {a:'a',b:true}, 'boolean');
    testStaticAndInstance({a:'a'}, [{b:null}], {a:'a',b:null}, 'null');
    testStaticAndInstance({a:'a'}, [{b:undefined}], {a:'a'}, 'undefined will not merge');
    testStaticAndInstance({a:'a'}, [{b:NaN}], {a:'a',b:NaN}, 'NaN');
    testStaticAndInstance({a:'a'}, [{b:Infinity}], {a:'a',b:Infinity}, 'NaN');

    testStaticAndInstance({a:'a'}, [{b:[1]}], {a:'a',b:[1]}, 'array');
    testStaticAndInstance({a:'a'}, [{b:{c:'c'}}], {a:'a',b:{c:'c'}}, 'object');

    testStaticAndInstance({a:'a'}, ['aha'], {a:'a',0:'a',1:'h',2:'a'}, 'string has enumerated properties');
    testStaticAndInstance({a:'a'}, [undefined], {a:'a'}, 'undefined has no properties');
    testStaticAndInstance({a:'a'}, [NaN], {a:'a'}, 'undefined has no properties');
    testStaticAndInstance({a:'a'}, [null], {a:'a'}, 'null has no properties');
    testStaticAndInstance({a:'a'}, [8], {a:'a'}, 'number has no properties');
    testStaticAndInstance({}, [{}], {}, 'empty object has no properties');


    // Merging with conflicts

    testStaticAndInstance({a:'a'}, [{a:'b'}], {a:'b'}, 'source should win by default');
    testStaticAndInstance({a:'a'}, [{a:null}], {a:null}, 'null wins');
    testStaticAndInstance({a:'a'}, [{a:false}], {a:false}, 'false wins');
    testStaticAndInstance({a:'a'}, [{a:''}], {a:''}, 'empty string wins');
    testStaticAndInstance({a:'a'}, [{a:[1]}], {a:[1]}, 'array wins');
    testStaticAndInstance({a:'a'}, [{a:{b:'b'}}], {a:{b:'b'}}, 'object wins');
    testStaticAndInstance({a:'a'}, [{a:undefined}], {a:'a'}, 'undefined does not win');

    testStaticAndInstance({a:[1]}, [{a:[2]}], {a:[2]}, 'deep source array wins');
    testStaticAndInstance({a:{b:'b'}}, [{a:{c:'c'}}], {a:{c:'c'}}, 'deep source object wins');

    testStaticAndInstance({a:undefined}, [{a:1}], {a:1}, 'target undefined, source wins');
    testStaticAndInstance({a:null}, [{a:1}], {a:1}, 'target null, source wins');
    testStaticAndInstance({a:false}, [{a:1}], {a:1}, 'target false, source wins');
    testStaticAndInstance({a:true}, [{a:1}], {a:1}, 'target true, source wins');
    testStaticAndInstance({a:''}, [{a:1}], {a:1}, 'target empty string, source wins');

    // Shallow merge, source wins

    var opts = { resolve: false };
    testStaticAndInstance({a:'a'}, [{a:'b'}, opts], {a:'a'}, 'target wins when resolve is false');
    testStaticAndInstance({a:undefined}, [{a:1}, opts], {a:1}, 'source wins when target is undefined');
    testStaticAndInstance({a:null}, [{a:1}, opts], {a:null}, 'target wins when null');
    testStaticAndInstance({a:false}, [{a:1}, opts], {a:false}, 'target wins when false');
    testStaticAndInstance({a:true}, [{a:1}, opts], {a:true}, 'target wins when true');
    testStaticAndInstance({a:''}, [{a:1}, opts], {a:''}, 'target wins when empty string');

    // Deep merge, target wins

    var opts = { deep: true };
    testStaticAndInstance({a:{b:'b'}}, [{a:{c:'c'}}, opts], {a:{b:'b',c:'c'}}, 'deeply merged');
    testStaticAndInstance({a:[1,2]}, [{a:['a']}, opts], {a:['a',2]}, 'array deeply merged');
    test([{a:'a'}], [[{b:'b'}], opts], [{a:'a',b:'b'}], 'objects in arrays deeply merged');

    // Internal object-types

    var d1 = new Date(2015, 9, 13);
    var d2 = new Date(2015, 9, 14);
    test(d1, [d2], d1, 'dates merged as objects have no enumerable properties');

    var obj1 = { d: d1 };
    var obj2 = { d: d2 };
    var result = run(Object, 'merge', [obj1, obj2]);
    equal(result.d, d2, 'dates in non-deep merge should be equal by reference');

    var obj1 = { d: d1 };
    var obj2 = { d: d2 };
    var opts = { deep: true };
    var result = run(Object, 'merge', [obj1, obj2, opts]);
    equal(result.d !== d2, true, 'dates in deep merge should not be equal by reference');
    equal(result.d.getTime(), d2.getTime(), 'dates in deep merge should be equal by value');

    var obj1 = { d: d1 };
    var obj2 = { d: d2 };
    var opts = { deep: true, resolve: false };
    var result = run(Object, 'merge', [obj1, obj2, opts]);
    equal(result.d === d1, true, 'resolve false should be original date');


    var r1 = /foo/gi;
    var r2 = /bar/gi;
    test(r1, [r2], r1, 'regexes merged as objects have no enumerable properties');

    var obj1 = { r: r1 };
    var obj2 = { r: r2 };
    var result = run(Object, 'merge', [obj1, obj2]);
    equal(result.r, r2, 'regexes in non-deep merge should be equal by reference');

    var obj1 = { r: r1 };
    var obj2 = { r: r2 };
    var opts = { deep: true };
    var result = run(Object, 'merge', [obj1, obj2, opts]);
    equal(result.r !== r2, true, 'regexes in deep merge should not be equal by reference');
    equal(result.r.source, r2.source, 'regexes in deep merge should have same source');
    equal(result.r.global, r2.global, 'regexes in deep merge should both have same global flag');
    equal(result.r.ignoreCase, r2.ignoreCase, 'regexes in deep merge should both have same ignoreCase flag');

    var obj1 = { r: r1 };
    var obj2 = { r: r2 };
    var opts = { deep: true, resolve: false };
    var result = run(Object, 'merge', [obj1, obj2, opts]);
    equal(result.r === r1, true, 'resolve false should be original regex');


    // Merging functions

    var fn = function() {};
    fn.foo = 'bar';
    var opts = {};
    var result = run(Object, 'merge', [function(){}, fn, opts])
    equal(result.foo, 'bar', 'functions properties are merged');

    var opts = { deep: true };
    var result = run(Object, 'merge', [{}, {a:{b:fn}}, opts])
    equal(result.a.b === fn, true, 'functions are not deep merged');
    equal(result.a.b.foo, 'bar', 'function property exists in merged object');


    // Merging nested functions

    var fn1 = function() {
      return 'a';
    };
    fn1.foo = 'a';
    var fn2 = function() {
      return 'b';
    };
    fn2.foo = 'b';
    var obj1 = { fn: fn1 };
    var obj2 = { fn: fn2 };
    var result = run(Object, 'merge', [obj1, obj2, { deep: true }]);
    equal(result.fn(), 'b', 'override merge should choose function b');
    equal(result.fn.foo, 'b', 'override merge should choose function b | fn property');


    var fn1 = function() {
      return 'a';
    };
    fn1.foo = 'a';
    var fn2 = function() {
      return 'b';
    };
    fn2.foo = 'b';
    var obj1 = { fn: fn1 };
    var obj2 = { fn: fn2 };
    var result = run(Object, 'merge', [obj1, obj2, { resolve: false }]);
    equal(result.fn(), 'a', 'non-override merge should choose function a');
    equal(result.fn.foo, 'a', 'non-override merge should choose function a | fn property');


    // Resolve functions

    var fn = function(key, a, b, target, source) {
      equal(key, 'count', 'First argument should be the key');
      equal(a, undefined, 'Second argument should be the object value');
      equal(b, 5, 'Third argument should be the source value');
      equal(target, {}, 'Fourth argument should be the target');
      equal(source, {count:5}, 'Fifth argument should be the target');
      equal(this, nullScope, 'No scope is set by default');
      return b * 2;
    }
    var opts = { resolve: fn };
    testStaticAndInstance({}, [{count:5}, opts], {count:10}, 'custom function is respected');

    var fn = function(key, a, b) { return a + b; };
    var opts = { resolve: fn };
    testStaticAndInstance({a:1}, [{a:2}, opts], {a:3}, 'custom function adds properties together');

    var fn = function(key, a, b) { return 0; };
    var opts = { resolve: fn };
    testStaticAndInstance({a:{b:'b'}}, [{a:{b:'c'}}, opts], {a:0}, '0 is respected as a return value');

    var fn = function(key, a, b) { return null; };
    var opts = { resolve: fn };
    testStaticAndInstance({a:{b:'b'}}, [{a:{b:'c'}}, opts], {a:null}, 'null is respected as a return value');

    var fn = function(key, a, b) { return undefined; };
    var opts = { resolve: fn };
    testStaticAndInstance({a:{b:'b'}}, [{a:{b:'c'}}, opts], {a:{b:'c'}}, 'undefined will be handled');

    var fn = function(key, a, b) { return a.concat(b); };
    var opts = { resolve: fn };
    testStaticAndInstance({a:[1]}, [{a:[2]}, opts], {a:[1,2]}, 'custom function concats arrays');

    var fn = function(key, a, b) {
      if (a && a.length && b && b.length) {
        return a.concat(b);
      }
    };
    var opts = { resolve: fn };
    testStaticAndInstance({a:[1]}, [{a:[2],b:'b'}, opts], {a:[1,2],b:'b'}, 'default merge is used if custom function returns undefined');

    var count = 0;
    var obj = {a:{a:{a:'a'}}};
    var fn = function(prop, a1, a2) {
      count++;
      return 1;
    }
    var opts = { deep: true, resolve: fn };
    var result = run(Object, 'merge', [{}, obj, opts]);
    equal(count, 1, 'resolve function should have been called once');
    equal(result, {a:1}, 'returning non-undefined in custom function should not traverse further into that object');


    var obj1 = {a:{b:{c:{one:5,two:10}}}};
    var obj2 = {a:{b:{c:{one:7,three:9}}}};
    var expected = {a:{b:{c:{one:12,two:10,three:9}}}};
    var fn = function(prop, a, b) {
      if(typeof a === 'number' || typeof b === 'number') {
        return (a || 0) + (b || 0);
      }
    }
    var opts = { deep: true, resolve: fn };
    testStaticAndInstance(obj1, [obj2, opts], expected, 'deep merge continues traversing into the object if the resolve function returns undefined');


    if (definePropertySupport) {

      // Merging by descriptor

      var opts = { descriptor: true };
      var obj = getAccessorObject();
      var result = run(Object, 'merge', [{}, obj]);
      result.data.label = 'bar';
      equal(result.label, 'foo', 'basic merge does not support property descriptors');

      var opts = { descriptor: true };
      var obj = getAccessorObject();
      var result = run(Object, 'merge',  [{}, obj, opts]);
      result.data.label = 'bar';
      equal(result.label, 'bar', 'property getter merged');
      result.label = 'car';
      equal(result.data.label, 'car', 'property setter merged');

      var opts = { deep: true, descriptor: true };
      var obj = { foo: getAccessorObject() }
      var result = run(Object, 'merge',  [{}, obj, opts]);
      equal(result.foo !== obj.foo, true, 'object was deeply merged');
      result.foo.label = 'bar';
      equal(result.foo.data.label, 'bar', 'deep property setter merged');

      var opts = { hidden: true };
      var obj1 = [1,2,3,4];
      var obj2 = [1,2,3];
      var result = run(Object, 'merge',  [obj1, obj2, opts]);
      equal(result, [1,2,3], 'merging non-enumerable properties includes array.length');

      var opts = { hidden: true, deep: true };
      var obj1 = { foo: [1,2,3,4] };
      var obj2 = { foo: [1,2,3] };
      var result = run(Object, 'merge',  [obj1, obj2, opts]);
      equal(result.foo, [1,2,3], 'deep merging non-enumerable properties includes array.length');

      // Non-enumerated properties

      var obj = getDescriptorObject();
      var result = run(Object, 'merge',  [{}, obj]);
      equal(result.foo, undefined, 'default non-enumerable property is not merged');

      var opts = { hidden: true };
      var obj = getDescriptorObject();
      var result = run(Object, 'merge',  [{}, obj, opts]);
      equal(result.foo, 'bar', 'non-enumerable property merged with hidden flag on');

      var opts = { hidden: true };
      var obj = {
        yo: getDescriptorObject()
      }
      var result = run(Object, 'merge',  [{}, obj, opts]);
      equal(result.yo.foo, 'bar', 'deep non-enumerable property merged with hidden flag on');

      var opts = { descriptor: true, hidden: true };
      var obj = getDescriptorObject();
      var result = run(Object, 'merge',  [{}, obj, opts]);
      raisesError(function() { result.foo = 'moo'; }, 're-assignment of non-writable property raises error');

      var obj1 = getDescriptorObject();
      var obj2 = { foo: 'bar' }
      raisesError(function() { run(Object, 'merge',  [obj1, obj2]); }, 'merging into read-only property raises error');

    }

    // Non-standard merges

    test('a', ['b'], 'a', 'two strings');
    test([1,2,3,4], [[4,5,6]], [4,5,6,4], 'two arrays');

    var a = [1];
    a.b = 'b';
    testStaticAndInstance({a:[1]}, [{a:{b:'b'}}, {deep:true}], {a:a}, 'mis-matched object types do not make an effort to override');

    var obj = {a:'a'};
    testStaticAndInstance({one:obj}, [{one:obj}], {one:obj}, 'should handle identical object conflicts');

    if (Object.create) {
      var obj = Object.create({ bar: 3 }, {
        foo: {
          value: 4,
          enumerable: true
        }
      });
      testStaticAndInstance({}, [obj], {foo:4}, 'should not merge inherited properties');
      testStaticAndInstance({}, [obj, {deep:true}], {foo:4}, 'should not merge deep inherited properties');
    }

    var Foo = function() {};
    raisesError(function(){ run(Object, 'merge', [{}, {x: new Foo}, {deep:true}]); }, 'should raise an error if clone is not a basic object type');

    var fn = function(key, a, b) {
      if (b instanceof Foo) {
        return b;
      }
    }
    var f = new Foo;
    var obj = {
      a: 'a',
      b: 'b',
      f: f
    }
    var opts = { deep: true, resolve: fn };
    testStaticAndInstance({}, [obj, opts], {a:'a',b:'b',f:f}, 'instead a resolve function can be passed to handle such cases');

    var Foo = function() {};
    Foo.prototype.bar = 3;
    testStaticAndInstance({}, [new Foo], {}, 'properties on the prototype are not merged');

    // Exceeding maximum call stack takes time so disable this on normal runs.
    // var a = {};
    // a.a = a;
    // var opts = { deep: true };
    // raisesError(function() { run(Object, 'merge', [{}, a, opts]); }, 'does not work on cyclical objects', RangeError);


    // Complex

    var fn1 = function() { return 'joe' };
    var fn2 = function() { return 'moe' };
    var date1 = new Date(2001, 1, 6);
    var date2 = new Date(2005, 1, 6);
    var inner1 = { foo: 'bar', hee: 'haw' }
    var inner2 = { foo: 'car', mee: 'maw' }

    var obj1 = {
      str: 'oolala',
      num: 18,
      fn: fn1,
      date: date1,
      prop1: 'next',
      inner: inner1,
      arr: [1,2,3,4]
    }

    var obj2 = {
      str: 'foofy',
      num: 67,
      fn: fn2,
      date: date2,
      prop2: 'beebop',
      inner: inner2,
      arr: [4,5,6]
    }

    var fn = function(key, a, b) {
      if(key == 'str') {
        return 'conflict!';
      } else if(key == 'num') {
        return a + b;
      } else {
        return b;
      }
    }

    var expected = {
      str: 'conflict!',
      num: 85,
      fn: fn2,
      date: date2,
      prop1: 'next',
      prop2: 'beebop',
      inner: {
        foo: 'car',
        mee: 'maw'
      },
      arr: definePropertySupport ? [4,5,6] : [4,5,6,4]
    }

    var opts = { deep: true, resolve: fn };
    testStaticAndInstance(obj1, [obj2, opts], expected, 'complex objects with resolve function');
    equal(obj1.fn(), 'moe', 'fn conflict resolved');
    equal(obj1.date.getTime(), new Date(2005, 1, 6).getTime(), 'date conflict resolved');


    var deepObject1 = {
      user: {
        firstName: 'Darth',
        lastName: 'Vader',
        helmetSize: 22,
        likes: 2
      }
    }

    var deepObject2 = {
      user: {
        firstName: 'Luke',
        lastName: 'Skywalker',
        handSize: 15,
        likes: 4
      }
    }

    var expectedDeepSourceWins = {
      user: {
        firstName: 'Luke',
        lastName: 'Skywalker',
        helmetSize: 22,
        handSize: 15,
        likes: 4
      }
    }

    var expectedDeepTargetWins = {
      user: {
        firstName: 'Darth',
        lastName: 'Vader',
        helmetSize: 22,
        handSize: 15,
        likes: 2
      }
    }

    var expectedDeepCombinator = {
      user: {
        firstName: 'Luke',
        lastName: 'Skywalker',
        helmetSize: 22,
        handSize: 15,
        likes: 6
      }
    }

    var expectedDeepConservativeCombinator = {
      user: {
        firstName: 'Darth',
        lastName: 'Vader',
        helmetSize: 22,
        handSize: 15,
        likes: 6
      }
    }

    var combinator = function(key, targetVal, sourceVal) {
      if (key === 'likes') {
        return targetVal + sourceVal;
      }
    }

    var conservativeCombinator = function(key, targetVal, sourceVal) {
      if (key === 'likes') {
        return targetVal + sourceVal;
      }
      // If the key is "user" then return undefined so that the default merge
      // will continue traversing into the object. Forcing the user to return
      // undefined to continue traversal is slightly awkward, however it is
      // simpler in implementation, more clear in function (returning anything
      // other than undefined will halt the merge) and avoids issues with
      // traversing into objects that are not basic data types, for example
      // MouseEvent, which cannot be re-created without knowing the original
      // constructor arguments.
      if (key !== 'user') {
        return targetVal;
      }
    }

    testStaticAndInstance(testClone(deepObject1), [deepObject2], deepObject2, 'standard shallow merge produces source');

    var opts = { resolve: false };
    testStaticAndInstance(testClone(deepObject1), [deepObject2, opts], deepObject1, 'standard shallow merge with resolve: false produces target');

    var opts = { deep: true };
    testStaticAndInstance(testClone(deepObject1), [deepObject2, opts], expectedDeepSourceWins, 'deep merge | source wins');

    var opts = { deep: true, resolve: false };
    testStaticAndInstance(testClone(deepObject1), [deepObject2, opts], expectedDeepTargetWins, 'deep merge | target wins');

    var opts = { deep: true, resolve: combinator };
    testStaticAndInstance(testClone(deepObject1), [deepObject2, opts], expectedDeepCombinator, 'deep merge | combinator function');

    var opts = { deep: true, resolve: conservativeCombinator };
    testStaticAndInstance(testClone(deepObject1), [deepObject2, opts], expectedDeepConservativeCombinator, 'deep merge | conservative combinator function');

    // Issue #335

    var opts = { deep: true, resolve: false };
    testStaticAndInstance({a:{b:1}}, [{a:{b:2,c:3} }, opts], {a:{b:1,c:3}}, 'two deep properties');

    // Issue #365 Object.merge can skip when source is object and target is not.

    var opts = { deep: true };
    test(Object, [{a:''}, {a:{b:1}}, opts], {a:{b:1}}, 'source object wins with empty string');
    test(Object, [{a:'1'}, {a:{b:1}}, opts], {a:{b:1}}, 'source object wins with number as string');

  });

  method('clone', function() {

    test('hardy', [], 'hardy', 'clone on a string');
    test(undefined, [], undefined, 'clone on undefined');
    test(null, [], null, 'clone on null');
    test([1,2,3], [], [1,2,3], 'clone on arrays');
    test(['a','b','c'], [], ['a','b','c'], 'clone on array of strings');

    testStaticAndInstance({a:'a'}, [], {a:'a'}, 'basic clone');
    testStaticAndInstance({a:'a',b:1,c:null}, [], {a:'a',b:1,c:null}, 'multiple clone');
    testStaticAndInstance({a:{b:'b'}}, [], {a:{b:'b'}}, 'deep clone');

    var arr1    = [1];
    var arr2    = [2];
    var arr3    = [3];
    var shallow = run(Object, 'clone', [[arr1,arr2,arr3]]);
    var deep    = run(Object, 'clone', [[arr1,arr2,arr3], true]);

    equal(shallow[0], arr1, 'shallow clone | index 0 is strictly equal');
    equal(shallow[1], arr2, 'shallow clone | index 1 is strictly equal');
    equal(shallow[2], arr3, 'shallow clone | index 2 is strictly equal');

    equal(deep[0], arr1, 'deep clone | index 0 is not strictly equal');
    equal(deep[1], arr2, 'deep clone | index 1 is not strictly equal');
    equal(deep[2], arr3, 'deep clone | index 2 is not strictly equal');

    var obj1, obj2, obj3;

    obj1 = {
      broken: 'wear',
      foo: {
        jumpy: 'jump',
        bucket: {
          reverse: true
        }
      }
    }
    obj2 = run(Object, 'clone', [obj1]);
    equal(obj1.foo.jumpy, 'jump', 'cloned object has nested attribute');
    obj1.foo.jumpy = 'hump';
    equal(obj1.foo.jumpy, 'hump', 'original object is modified');
    equal(obj2.foo.jumpy, 'hump', 'clone is shallow');

    obj1 = {
      foo: {
        bar: [1,2,3]
      }
    };
    obj2 = run(Object, 'clone', [obj1]);
    obj3 = run(Object, 'clone', [obj1, true]);

    obj1.foo.bar = ['a','b','c'];
    equal(obj1.foo.bar, ['a','b','c'], 'Object#clone | original object is modified');
    equal(obj2.foo.bar, ['a','b','c'], 'Object#clone | clone is shallow');


    obj1.foo.bar = ['a','b','c'];
    equal(obj3.foo.bar, [1,2,3], 'Object#clone | clone is deep');

    var arr1 = [obj1, obj1, obj1];
    var arr2 = run(Object, 'clone', [arr1, true]);

    equal(arr1.length, arr2.length, 'array deep | lengths should be equal');
    notEqual(arr2[0], obj1, 'array deep | obj1 is not equal');
    notEqual(arr2[1], obj2, 'array deep | obj2 is not equal');
    notEqual(arr2[2], obj3, 'array deep | obj3 is not equal');


    var obj1, obj2, obj3;

    obj1 = run(Object, 'extended', [{
      broken: 'wear',
      foo: {
        jumpy: 'jump',
        bucket: {
          reverse: true
        }
      }
    }]);
    obj2 = obj1.clone();
    obj3 = obj1.clone(true);

    equal(obj1.get('foo.jumpy'), 'jump', 'extended | cloned object has nested attribute');
    obj1.set('foo.jumpy', 'hump');
    equal(obj1.get('foo.jumpy'), 'hump', 'extended | original object is modified');
    equal(obj2.get('foo.jumpy'), 'hump', 'extended | clone is shallow');
    equal(obj3.get('foo.jumpy'), 'jump', 'extended | clone is deep');
    equal(obj2.keys().sort(), ['broken','foo'], 'extended | cloned objects are themselves extended');

    obj1 = run(Object, 'extended', [{
      foo: {
        bar: [1,2,3]
      }
    }]);
    obj2 = obj1.clone();
    obj3 = obj1.clone(true);

    obj1.set('foo.bar.1', 'b');
    equal(obj1.get('foo.bar'), [1,'b',3], 'extended | original object is modified');
    equal(obj3.get('foo.bar'), [1,2,3], 'extended | cloned object is not modified');

    // dates and regexes

    var obj1 = {
      d: new Date(2000, 5, 25),
      r: /dasfsa/gi
    }

    var obj2 = run(Object, 'clone', [obj1, true]);
    obj1.d.setDate(3);
    equal(obj2.d.getDate(), 25, 'Object.clone | deep cloning also clones dates');
    equal(obj2.r.source, 'dasfsa', 'Object.clone | deep cloning also clones regexes');

    var d = new Date(2000, 5, 25);
    // Simulate the Sugar date setUTC without actually requiring it
    d._utc = true;
    var result = run(Object, 'clone', [d]);
    equal(result._utc, true, 'date property should also be cloned');

    // Issue #396 cloning objects with accessors.

    if(definePropertySupport) {
      var template = {
        data: { label: 'original label' }
      };
      Object.defineProperty(template, 'label', {
        get: function() {
          return this.data.label;
        },
        set: function(value) {
          this.data.label = value;
        }
      });

      var template2 =  run(Object, 'clone', [template]);
      template2.label = 'next label';
      equal(template2.data.label, 'next label', 'data value should be updated');
    }

    // Issue #307 - Object.clone should error when cloning unknown types.

    var Foo = function() {};
    raisesError(function(){ run(Object, 'clone', [new Foo]); }, 'should raise an error if clone is not a basic object type');

  });

  method('isEqual', function() {

    test(Object, [{ broken: 'wear' }, { broken: 'wear' }], true, 'objects are equal');
    test(Object, [{ broken: 'wear' }, { broken: 'jumpy' }], false, 'objects are not equal');
    test(Object, [{}, {}], true, 'empty objects are equal');
    test(Object, [{}, { broken: 'wear' }], false, '1st empty');
    test(Object, [{ broken: 'wear' }, {}], false, '2nd empty');

    test(Object, [{x: 1, y: undefined}, {x: 1, z: 2}], false, 'undefined keys');

    equal(run(Object, 'extended', [{ broken: 'wear' }]).isEqual({ broken: 'wear' }), true, 'extended | are equal to plain objects');
    equal(run(Object, 'extended', [{ broken: 'wear' }]).isEqual({ broken: 'jumpy' }), false, 'extended | objects are not equal');
    equal(run(Object, 'extended', [{}]).isEqual({}), true, 'extended | empty extended objects are equal to empty plain objects');
    equal(run(Object, 'extended', [{}]).isEqual({ broken: 'wear' }), false, 'extended | 1st empty');
    equal(run(Object, 'extended', [{ broken: 'wear' }]).isEqual({}), false, 'extended | 2nd empty');

    var obj1 = { foo: 'bar' };
    test(Object, [{ a: obj1, b: obj1 }, { a: obj1, b: obj1 }], true, 'multiple references will not choke');

    var obj1 = { foo: 'bar' };
    obj1.moo = obj1;
    test(Object, [obj1, { foo: 'bar', moo: obj1 }], true, 'cyclical references handled');
    test(Object, [undefined, 'one'], false, 'string to undefined');

  });

  group('Extend All', function() {
    var obj1, obj2;

    storeNativeState();

    Sugar.Object.extend({
      objectInstance: true
    });

    var count = 0;

    equal(({ foo: 'bar' }).keys(function() { count++; }), ['foo'], 'Object#keys | Object.prototype');
    equal(({ foo: 'bar' }).values(function() { count++; }).sort(), ['bar'], 'Object#values | Object.prototype');

    equal(count, 2, 'Object | Object.prototype should have correctly called all functions');

    equal(({ foo: 'bar' }).isEqual({ foo: 'bar' }), true, 'Object#isEqual | Object.prototype');
    equal(({ foo: 'bar' }).merge({ moo: 'car' }), { foo: 'bar', moo: 'car' }, 'Object#merge | Object.prototype');

    obj1 = { foo: 'bar' };
    obj2 = obj1.clone();
    obj1.foo = 'mar';

    equal(obj2, { foo: 'bar' }, 'Object#clone | Object.prototype');

    equal(([1,2,3]).isArray(), true, 'Object#isArray | Object.prototype');
    equal(([1,2,3]).isBoolean(), false, 'Object#isBoolean | Object.prototype');
    equal(([1,2,3]).isDate(), false, 'Object#isDate | Object.prototype');
    equal(([1,2,3]).isFunction(), false, 'Object#isFunction | Object.prototype');
    equal(([1,2,3]).isNumber(), false, 'Object#isNumber | Object.prototype');
    equal(([1,2,3]).isString(), false, 'Object#isString | Object.prototype');
    equal(([1,2,3]).isRegExp(), false, 'Object#isRegExp | Object.prototype');
    equal(([1,2,3]).isNaN(), false, 'Object#isNaN | Object.prototype');
    equal((true).isArray(), false, 'Object#isArray | Object.prototype');
    equal((true).isBoolean(), true, 'Object#isBoolean | Object.prototype');
    equal((true).isDate(), false, 'Object#isDate | Object.prototype');
    equal((true).isFunction(), false, 'Object#isFunction | Object.prototype');
    equal((true).isNumber(), false, 'Object#isNumber | Object.prototype');
    equal((true).isString(), false, 'Object#isString | Object.prototype');
    equal((true).isRegExp(), false, 'Object#isRegExp | Object.prototype');
    equal((true).isNaN(), false, 'Object#isNaN | Object.prototype');
    equal((new Date()).isArray(), false, 'Object#isArray | Object.prototype');
    equal((new Date()).isBoolean(), false, 'Object#isBoolean | Object.prototype');
    equal((new Date()).isDate(), true, 'Object#isDate | Object.prototype');
    equal((new Date()).isFunction(), false, 'Object#isFunction | Object.prototype');
    equal((new Date()).isNumber(), false, 'Object#isNumber | Object.prototype');
    equal((new Date()).isString(), false, 'Object#isString | Object.prototype');
    equal((new Date()).isRegExp(), false, 'Object#isRegExp | Object.prototype');
    equal((new Date()).isNaN(), false, 'Object#isNaN | Object.prototype');
    equal((function() {}).isArray(), false, 'Object#isArray | Object.prototype');
    equal((function() {}).isBoolean(), false, 'Object#isBoolean | Object.prototype');
    equal((function() {}).isDate(), false, 'Object#isDate | Object.prototype');
    equal((function() {}).isFunction(), true, 'Object#isFunction | Object.prototype');
    equal((function() {}).isNumber(), false, 'Object#isNumber | Object.prototype');
    equal((function() {}).isString(), false, 'Object#isString | Object.prototype');
    equal((function() {}).isRegExp(), false, 'Object#isRegExp | Object.prototype');
    equal((function() {}).isNaN(), false, 'Object#isNaN | Object.prototype');
    equal((3).isArray(), false, 'Object#isArray | Object.prototype');
    equal((3).isBoolean(), false, 'Object#isBoolean | Object.prototype');
    equal((3).isDate(), false, 'Object#isDate | Object.prototype');
    equal((3).isFunction(), false, 'Object#isFunction | Object.prototype');
    equal((3).isNumber(), true, 'Object#isNumber | Object.prototype');
    equal((3).isString(), false, 'Object#isString | Object.prototype');
    equal((3).isRegExp(), false, 'Object#isRegExp | Object.prototype');
    equal((3).isNaN(), false, 'Object#isNaN | Object.prototype');
    equal(('wasabi').isArray(), false, 'Object#isArray | Object.prototype');
    equal(('wasabi').isBoolean(), false, 'Object#isBoolean | Object.prototype');
    equal(('wasabi').isDate(), false, 'Object#isDate | Object.prototype');
    equal(('wasabi').isFunction(), false, 'Object#isFunction | Object.prototype');
    equal(('wasabi').isNumber(), false, 'Object#isNumber | Object.prototype');
    equal(('wasabi').isString(), true, 'Object#isString | Object.prototype');
    equal(('wasabi').isRegExp(), false, 'Object#isRegExp | Object.prototype');
    equal(('wasabi').isNaN(), false, 'Object#isNaN | Object.prototype');
    equal((/wasabi/).isArray(), false, 'Object#isArray | Object.prototype');
    equal((/wasabi/).isBoolean(), false, 'Object#isBoolean | Object.prototype');
    equal((/wasabi/).isDate(), false, 'Object#isDate | Object.prototype');
    equal((/wasabi/).isFunction(), false, 'Object#isFunction | Object.prototype');
    equal((/wasabi/).isNumber(), false, 'Object#isNumber | Object.prototype');
    equal((/wasabi/).isString(), false, 'Object#isString | Object.prototype');
    equal((/wasabi/).isRegExp(), true, 'Object#isRegExp | Object.prototype');
    equal((/wasabi/).isNaN(), false, 'Object#isNaN | Object.prototype');
    equal((NaN).isArray(), false, 'Object#isArray | Object.prototype');
    equal((NaN).isBoolean(), false, 'Object#isBoolean | Object.prototype');
    equal((NaN).isDate(), false, 'Object#isDate | Object.prototype');
    equal((NaN).isFunction(), false, 'Object#isFunction | Object.prototype');
    equal((NaN).isNumber(), true, 'Object#isNumber | Object.prototype');
    equal((NaN).isString(), false, 'Object#isString | Object.prototype');
    equal((NaN).isRegExp(), false, 'Object#isRegExp | Object.prototype');
    equal((NaN).isNaN(), true, 'Object#isNaN | Object.prototype');


    // Object#watch

    if(definePropertySupport) {

      var obj = { foo: 'bar' }, ran = false;

      obj.watch('foo', function(prop, oldVal, newVal) {
        equal(this, obj, 'Object#watch | scope is the object');
        equal(prop, 'foo', 'Object#watch | first argument is the propety');
        equal(oldVal, 'bar', 'Object#watch | second argument is the old value');
        equal(newVal, 'howdy', 'Object#watch | third argument is the new value');
        ran = true;
        return newVal;
      });

      equal(obj.foo, 'bar', 'Object#watch | old property is retained');
      obj.foo = 'howdy';
      equal(obj.foo, 'howdy', 'Object#watch | property was set');
      equal(ran, true, 'Object#watch | setter ran');
      equal(propertyIsEnumerable(obj, 'foo'), true, 'Object#watch | property should be enumerable');

    } else {

      var obj = { foo: 'bar' }, ran = false, result;

      result = obj.watch('foo', function() { ran = true; });

      equal(result, false, 'Object#watch | should not have succeeded');
      equal(ran, false, 'Object#watch | setter function should not have run');

    }


    // Object#tap

    var fn = function(first) {
      equal(this, [1,2,3,4,5], 'Object#tap | context is the object');
      equal(first, [1,2,3,4,5], 'Object#tap | first argument is also the object');
      this.pop();
    }

    var map = function(n) {
      return n * 2;
    }

    var expected = [2,4,6,8];

    equal([1,2,3,4,5].tap(fn).map(map), expected, 'Object#tap | pop the array');
    equal([1,2,3,4,5].tap('pop').map(map), expected, 'Object#tap | string shortcut | pop the array');
    equal([1,2].tap(function() { this.push(3, 4); }).map(map), expected, 'Object#tap | push to the array');
    equal([1,2].tap('push', 3, 4).map(map), [2,4], 'Object#tap | string shortcut | passing arguments is not supported');
    equal([1,2,3,4].tap(function(){ if(this[this.length - 1] === 5) this.pop(); }).map(map), expected, 'Object#tap | checking last');


    var obj = { foo: 'bar' };
    equal(obj.tap(), obj, 'Object#tap | return value is strictly equal');


    equal(!!'foo'.fromQueryString, false, 'Object.fromQueryString should not be mapped');
    equal(!!'foo'.extended, false, 'Object.extended should not be mapped');

    restoreNativeState();

    equal(({foo:'bar'}).keys, undefined, 'keys no longer mapped');
    equal(({foo:'bar'}).values, undefined, 'values no longer mapped');
    equal(({foo:'bar'}).isEqual, undefined, 'isEqual no longer mapped');
    equal(({foo:'bar'}).merge, undefined, 'merge no longer mapped');
    equal(({foo:'bar'}).clone, undefined, 'clone no longer mapped');
    equal(({foo:'bar'}).isArray, undefined, 'isArray no longer mapped');
    equal(({foo:'bar'}).isBoolean, undefined, 'isBoolean no longer mapped');
    equal(({foo:'bar'}).isDate, undefined, 'isDate no longer mapped');
    equal(({foo:'bar'}).isFunction, undefined, 'isFunction no longer mapped');
    equal(({foo:'bar'}).isString, undefined, 'isString no longer mapped');
    equal(({foo:'bar'}).isRegExp, undefined, 'isRegExp no longer mapped');
    equal(({foo:'bar'}).isNaN, undefined, 'isNaN no longer mapped');
    equal(({foo:'bar'}).watch, undefined, 'watch no longer mapped');
    equal(({foo:'bar'}).tap, undefined, 'tap no longer mapped');
    equal(({foo:'bar'}).fromQueryString, undefined, 'fromQueryString no longer mapped');
    equal(({foo:'bar'}).extended, undefined, 'extended no longer mapped');

  });

  method('fromQueryString', function() {

    test(Object, ['foo=bar&moo=car'], {foo:'bar',moo:'car'}, 'basic');
    test(Object, ['foo=bar&moo=3'], {foo:'bar',moo:'3'}, 'with numbers');

    test(Object, ['foo=bar&moo=true'], {foo:'bar',moo:'true'}, 'with true');
    test(Object, ['foo=bar&moo=false'], {foo:'bar',moo:'false'}, 'with false');

    test(Object, ['foo=bar&moo=true', true], {foo:'bar',moo:true}, 'coerced | with true');
    test(Object, ['foo=bar&moo=false', true], {foo:'bar',moo:false}, 'coerced | with false');

    test(Object, ['foo=bar3'], { foo: 'bar3' }, 'number in back');
    test(Object, ['foo=3bar'], { foo: '3bar' }, 'number up front');
    test(Object, ['foo=345'], { foo: '345' }, 'numbers only');
    test(Object, ['foo=&bar='], { foo: '', bar: '' }, 'undefined params');
    test(Object, ['foo[]=bar&foo[]=car'], { foo: ['bar','car'] }, 'handles array params');
    test(Object, ['foo[bar]=tee&foo[car]=hee'], { foo: { bar: 'tee', car: 'hee' } }, 'handles hash params');
    test(Object, ['foo[0]=a&foo[1]=b&foo[2]=c'], { foo: ['a','b','c'] }, 'handles array indexes');

    test(Object, ['foo[cap][map]=3'], { foo: { cap: { map: '3' } } }, 'handles array indexes');
    test(Object, ['foo[cap][map][]=3'], { foo: { cap: { map: ['3'] } } }, 'nested with trailing array');
    test(Object, ['foo[moo]=1&bar[far]=2'], { foo: { moo: '1' }, bar: { far: '2' }}, 'sister objects');

    test(Object, ['f[]=a&f[]=b&f[]=c&f[]=d&f[]=e&f[]=f'], { f: ['a','b','c','d','e','f'] }, 'large array');
    test(Object, ['foo[0][]=a&foo[1][]=b'], { foo: [['a'],['b']] }, 'nested arrays separate');
    test(Object, ['foo[0][0]=3&foo[0][1]=4'], { foo: [['3','4']] }, 'nested arrays together');
    test(Object, ['foo[][]=3&foo[][]=4'], { foo: [['3'],['4']] }, 'nested arrays');

    var qs = 'foo[cap][map]=true&foo[cap][pap]=false';
    test(Object, [qs], {foo:{cap:{ map:'true',pap:'false'}}}, 'nested boolean without coercion');
    test(Object, [qs, true], {foo:{cap:{map:true,pap:false}}}, 'nested boolean with coercion');

    var sparse = [];
    sparse[3] = 'hardy';
    sparse[10] = 'har har';
    test(Object, ['foo[3]=hardy&foo[10]=har har'], { foo: sparse }, 'constructed arrays can be sparse');

    test(Object, ['text=What%20is%20going%20on%20here%3f%3f&url=http://animalsbeingdicks.com/page/2'], { text: 'What is going on here??', url: 'http://animalsbeingdicks.com/page/2' }, 'handles partially escaped params');
    test(Object, ['text=What%20is%20going%20on%20here%3f%3f&url=http%3A%2F%2Fanimalsbeingdicks.com%2Fpage%2F2'], { text: 'What is going on here??', url: 'http://animalsbeingdicks.com/page/2' }, 'handles fully escaped params');

    test(Object, ['url=http%3A%2F%2Fwww.site.com%2Fslug%3Fin%3D%2Fuser%2Fjoeyblake'], { url: 'http://www.site.com/slug?in=/user/joeyblake' }, 'equal must be escaped as well');

    test(Object, ['http://fake.com?foo=bar'], { foo: 'bar' }, 'handles whole URLs');
    test(Object, {}, 'will not die if no arguments');
    equal(run(Object, 'fromQueryString', ['foo=bar&moo=car']).keys(), ['foo', 'moo'], 'should be extended');

    if(typeof window !== 'undefined') {
      equal(Array.isArray(run(Object, 'fromQueryString', [window.location]).keys()), true, 'can handle just window.location');
    }

    test(Object, ['foo=3.14156'], { foo: '3.14156' }, 'float values are not coerced');
    test(Object, ['foo=127.0.0.1'], { foo: '127.0.0.1' }, 'IP addresses not treated as numbers');
    test(Object, ['zip=00165'], { zip: '00165' }, 'zipcodes are not treated as numbers');
    test(Object, ['foo[=bar'], { 'foo[': 'bar' }, 'opening bracket does not trigger deep parameters');
  });

  method('watch', function() {

    if(definePropertySupport) {

      var obj = { foo: 'bar' }, ran = false, result;

      result = run(Object, 'watch', [obj, 'foo', function(prop, oldVal, newVal) {
        equal(this, obj, 'scope is the object');
        equal(prop, 'foo', 'first argument is the propety');
        equal(oldVal, 'bar', 'second argument is the old value');
        equal(newVal, 'howdy', 'third argument is the new value');
        ran = true;
        return newVal;
      }]);

      equal(result, true, 'should have succeeded');
      equal(obj.foo, 'bar', 'old property is retained');
      obj.foo = 'howdy';
      equal(obj.foo, 'howdy', 'property was set');
      equal(ran, true, 'setter ran');
      equal(propertyIsEnumerable(obj, 'foo'), true, 'property should be enumerable');

      // Non-enumerable
      var obj = {}, result;
      Object.defineProperty(obj, 'foo', {
        enumerable: false,
        value: 3
      });
      result = run(Object, 'watch', [obj, 'foo', function(){}]);
      equal(propertyIsEnumerable(obj, 'foo'), false, 'property should not be enumerable if originally non-enumerable');

      // Non-configurable
      var obj = {}, result;
      Object.defineProperty(obj, 'foo', {
        writable: false,
        enumerable: false,
        configurable: false,
        value: 3
      });
      result = run(Object, 'watch', [obj, 'foo', function(){}]);

      equal(result, false, 'should not have succeeded');
      try {
        obj.foo = 4;
      } catch(e) {}


      var obj = {}, result, getCounter = 0, setCounter = 0, newSetCounter = 0;
      Object.defineProperty(obj, 'foo', {
        get: function() {
          getCounter++;
        },
        set: function() {
          setCounter++;
        }
      });

      result = run(Object, 'watch', [obj, 'foo', function(){
        newSetCounter++;
      }]);

      try {
        obj.foo;
        obj.foo = 4;
      } catch(e) {}

      equal(result, false, 'should not have succeeded');
      equal(getCounter, 1, 'original getter should be preserved');
      equal(setCounter, 1, 'original setter should be preserved');
      equal(newSetCounter, 0, 'new setter should be active as well');


      // Undefined property

      var obj = {}, ran = false, result;

      result = run(Object, 'watch', [obj, 'foo', function(prop, oldVal, newVal) {
        equal(this, obj, 'scope is the object');
        equal(prop, 'foo', 'first argument is the propety');
        equal(oldVal, undefined, 'second argument is the old value');
        equal(newVal, 'howdy', 'third argument is the new value');
        ran = true;
        return newVal;
      }]);

      equal(result, true, 'should have succeeded');
      equal(obj.foo, undefined, 'old property should be undefined');
      obj.foo = 'howdy';
      equal(obj.foo, 'howdy', 'property was set');
      equal(ran, true, 'setter ran');
      equal(propertyIsEnumerable(obj, 'foo'), true, 'property should be enumerable');

    } else {

      var obj = { foo: 'bar' }, ran = false, result;

      result = run(Object, 'watch', [obj, 'foo', function() {
        ran = true;
      }]);

      obj.foo = 'howdy';

      equal(result, false, 'should not succeeded');
      equal(ran, false, 'setter function should not have run');

    }

  });

  method('unwatch', function() {

    if(definePropertySupport) {

      // Successful watch of undefined property

      var count = 0, obj = {}, fn;

      fn = function(prop, before, after) {
        count++;
        return after;
      };

      var result = run(Object, 'watch', [obj, 'foo', fn]);
      equal(result, true, 'watch called on non-existent property should succeed');

      obj.foo = 'a';

      equal(count, 1, 'watch function should have been called');

      var result = run(Object, 'unwatch', [obj, 'foo']);
      equal(result, true, 'property now exists so unwatch should succeed');
      equal(obj.foo, 'a', 'property should now be exposed');

      obj.foo = 'b';

      equal(count, 1, 'watch function should only have run once');
      equal(obj.foo, 'b', 'property should have been overridden');

      // Successful watch of existing property

      var count = 0, obj = { foo: 3 }, fn;

      fn = function(prop, before, after) {
        count++;
        return after;
      };

      var result = run(Object, 'watch', [obj, 'foo', fn]);
      equal(result, true, 'successful watch function should return true');

      obj.foo = 'a';

      var result = run(Object, 'unwatch', [obj, 'foo']);
      equal(result, true, 'successful unwatch function should return true');
      equal(obj.foo, 'a', 'property should now be "a"');

      obj.foo = 'b';

      equal(obj.foo, 'b', 'property should now be "b"');
      equal(count, 1, 'watch function should only have run once');


      // Non-configurable property

      var count = 0, obj = {}, fn;

      Object.defineProperty(obj, 'foo', {
        value: 3,
        configurable: false
      });

      fn = function() {
        count++;
      };

      var result = run(Object, 'watch', [obj, 'foo', fn]);
      equal(result, false, 'unsuccessful watch function should return false');
      try {
        obj.foo = 'a';
      } catch (e) {}

      var result = run(Object, 'unwatch', [obj, 'foo']);
      equal(result, false, 'unsuccessful unwatch function should return false');

      try {
        obj.foo = 'a';
      } catch(e) {}

      equal(obj.foo, 3, 'property should still be 3');
      equal(count, 0, 'watch function should not have run on non-configurable property');


      // Unwatch on undefined property

      var obj = {};
      var result = run(Object, 'unwatch', [obj, 'foo']);
      equal(result, false, 'unwatch should be unsuccessful when used on undefined property');

      // Unwatch on plain property

      var obj = { foo: 3 };
      var result = run(Object, 'unwatch', [obj, 'foo']);
      equal(result, false, 'unwatch should be unsuccessful when used on undefined property');
      equal(obj.foo, 3, 'value should still be 3');

    } else {

      var count = 0, obj = { foo: 3 }, fn;

      fn = function() {
        count++;
      };

      run(Object, 'watch', [obj, 'foo', fn]);
      obj.foo = 'a';
      run(Object, 'unwatch', [obj, 'foo']);

      obj.foo = 'a';
      equal(count, 0, 'watch function should never have run');


    }

  });

  method('tap', function() {

    var fn = function(first) {
      equal(this, [1,2,3,4,5], 'context is the object');
      equal(first, [1,2,3,4,5], 'first argument is also the object');
      this.pop();
    }

    var map = function(n) {
      return n * 2;
    }

    var expected = [2,4,6,8];

    equal(run(Object, 'tap', [[1,2,3,4,5], fn]).map(map), expected, 'pop the array');
    equal(run(Object, 'tap', [[1,2,3,4,5], 'pop']).map(map), expected, 'string shortcut | pop the array');
    equal(run(Object, 'tap', [[1,2], function() { this.push(3, 4); }]).map(map), expected, 'push to the array');
    equal(run(Object, 'tap', [[1,2], 'push', 3, 4]).map(map), [2,4], 'string shortcut | not supported');
    equal(run(Object, 'tap', [[1,2,3,4], function(){ if(this[this.length - 1] === 5) this.pop(); }]).map(map), expected, 'checking last');


    var obj = { foo: 'bar' };
    test(Object, [obj], obj, 'return value is strictly equal');

  });

  method('has', function() {
    test(Object, [{ foo: 'bar' }, 'foo'], true, 'finds a property');
    test(Object, [{ foo: 'bar' }, 'baz'], false, 'does not find a nonexistant property');
    test(Object, [{ hasOwnProperty: true, foo: 'bar' }, 'foo'], true, 'local hasOwnProperty is ignored');
  });


  method('select', function() {

    var obj = {
      one:    1,
      two:    2,
      three:  3,
      four:   4,
      five:   5
    };

    var obj2 = { foo: obj };

    var obj3 = run(Object, 'extended', [obj]);

    testStaticAndInstance(obj, ['one'], { one: 1 }, 'one key');
    testStaticAndInstance(obj, ['foo'], {}, 'nonexistent key');
    testStaticAndInstance(obj, ['one', 'two'], { one: 1 }, 'does not accept enumerated arguments');
    testStaticAndInstance(obj, [['four', 'two']], { two: 2, four: 4 }, 'accepts multiple from array');
    testStaticAndInstance(obj, [['one', 'foo']], { one: 1 }, 'one existing one non-existing');
    testStaticAndInstance(obj, [['four', 'two']], { two: 2, four: 4 }, 'keys out of order');
    testStaticAndInstance(obj, [/o/], { one: 1, two: 2, four: 4 }, 'regex');
    testStaticAndInstance(obj, [/o$/], { two: 2 }, 'regex $');
    testStaticAndInstance(obj, [/^o/], { one: 1 }, '^ regex');
    testStaticAndInstance(obj, [/z/], {}, 'non-matching regex');
    testStaticAndInstance(obj, [{ one: 1 }], { one: 1 }, 'comparing object');
    testStaticAndInstance(obj, [{ one: 'foobar' }], {}, 'should not match with different values');
    testStaticAndInstance(obj, [{}], {}, 'empty object');
    testStaticAndInstance(obj, [[/^o/, /^f/]], { one: 1, four: 4, five: 5 }, 'complex nested array of regexes');

    equal(run(Object, 'select', [obj2, 'foo']).foo, obj, 'selected values should be equal by reference');

    equal(typeof run(Object, 'select', [obj,  'one']).select, 'undefined', 'non-Hash should return non Hash');
    equal(typeof run(Object, 'select', [obj,  ['two', 'three']]).select, 'undefined', 'non-Hash should return non Hash');
    equal(typeof run(Object, 'select', [obj3, 'one']).select, 'function', 'Hash should return Hash');
    equal(typeof run(Object, 'select', [obj3, ['two', 'three']]).select, 'function', 'Hash should return Hash');
  });

  method('reject', function() {

    var obj = {
      one:    1,
      two:    2,
      three:  3,
      four:   4,
      five:   5
    };

    var obj2 = { foo: obj };

    testStaticAndInstance(obj, ['one'], { two: 2, three: 3, four: 4, five: 5 }, 'one key');
    testStaticAndInstance(obj, ['foo'], obj, 'nonexistent key');
    testStaticAndInstance(obj, ['one', 'two'], { two: 2, three: 3, four: 4, five: 5 }, 'does not accept enumerated arguments');
    testStaticAndInstance(obj, [['four', 'two']], { one: 1, three: 3, five: 5 }, 'accepts multiple from array');
    testStaticAndInstance(obj, [['one', 'foo']], { two: 2, three: 3, four: 4, five: 5 }, 'one existing one non-existing');
    testStaticAndInstance(obj, [['four', 'two']], { one: 1, three: 3, five: 5 }, 'keys out of order');
    testStaticAndInstance(obj, [/o/], { three: 3, five: 5 }, 'regex');
    testStaticAndInstance(obj, [/o$/], { one: 1, three: 3, four: 4, five: 5 }, 'regex $');
    testStaticAndInstance(obj, [/^o/], { two: 2, three: 3, four: 4, five: 5 }, '^ regex');
    testStaticAndInstance(obj, [/z/], obj, 'non-matching regex');
    testStaticAndInstance(obj, [{ one: 1 }], { two: 2, three: 3, four: 4, five: 5 }, 'comparing object');
    testStaticAndInstance(obj, [{ one: 'foobar' }], obj, 'comparing object with different values');
    testStaticAndInstance(obj, [{}], obj, 'empty object');
    testStaticAndInstance(obj, [[/^o/, /^f/]], { two: 2, three: 3 }, 'complex nested array of regexes');

    equal(run(Object, 'reject', [obj2, 'moo']).foo, obj, 'rejected values should be equal by reference');
  });


  method('clone', function() {

    // Issue #256
    if(Sugar.Date.clone) {
      var date = Sugar.Date.setUTC(new Date(), true);
      equal(date._utc, true, 'utc flag is set');
      equal(run(Object, 'clone', [date])._utc, true, 'should preserve utc flag when set');
    }

  });

  method('toQueryString', function() {

    var date = new Date(2012, 8, 25);

    function getExpected(str) {
      return str.replace(/\[/g, '%5B').replace(/\]/g, '%5D');
    }

    function assertQueryStringGenerated(obj, args, expected, message) {
      testStaticAndInstance(obj, args, getExpected(expected), message);
    }

    assertQueryStringGenerated({foo:'bar'}, [], 'foo=bar', 'basic string');
    assertQueryStringGenerated({foo:'bar',moo:'car'}, [], 'foo=bar&moo=car', 'two keys');
    assertQueryStringGenerated({foo:'bar',moo:8}, [], 'foo=bar&moo=8', 'one string one numeric');
    assertQueryStringGenerated({foo:'bar3'}, [], 'foo=bar3', 'number in back');
    assertQueryStringGenerated({foo:'3bar'}, [], 'foo=3bar', 'number in front');
    assertQueryStringGenerated({foo: 3}, [], 'foo=3', 'basic number');
    assertQueryStringGenerated({foo: true}, [], 'foo=true', 'basic boolean');
    assertQueryStringGenerated({foo: /reg/}, [], 'foo=%2Freg%2F', 'regexp');
    assertQueryStringGenerated({foo:'a b'}, [], 'foo=a%20b', 'should escape string');
    assertQueryStringGenerated({foo: date}, [], 'foo=' + date.getTime(), 'should stringify date');
    assertQueryStringGenerated({foo:['a','b','c']}, [], 'foo[0]=a&foo[1]=b&foo[2]=c', 'basic array');
    assertQueryStringGenerated({foo:{bar:'tee',car:'hee'}}, [], 'foo[bar]=tee&foo[car]=hee', 'basic object');

    assertQueryStringGenerated({foo:undefined}, [], 'foo=', 'undefined');
    assertQueryStringGenerated({foo:false}, [], 'foo=false', 'false');
    assertQueryStringGenerated({foo:null}, [], 'foo=', 'null');
    assertQueryStringGenerated({foo:NaN}, [], 'foo=', 'NaN');
    assertQueryStringGenerated({foo:''}, [], 'foo=', 'empty string');
    assertQueryStringGenerated({foo:0}, [], 'foo=0', '0');
    assertQueryStringGenerated({foo:[['fap','cap']]}, [], 'foo[0][0]=fap&foo[0][1]=cap', 'array double nested');
    assertQueryStringGenerated({foo:[['fap'],['cap']]}, [], 'foo[0][0]=fap&foo[1][0]=cap', 'array horizonal nested');
    assertQueryStringGenerated({foo:{bar:{map:'fap'}}}, [], 'foo[bar][map]=fap', 'object double nested');

    assertQueryStringGenerated({foo:'bar'}, ['paw'], 'paw[foo]=bar', 'namespace | basic string');
    assertQueryStringGenerated({foo:'bar',moo:'car'}, ['paw'], 'paw[foo]=bar&paw[moo]=car', 'namespace | two keys');
    assertQueryStringGenerated({foo:'bar',moo:8}, ['paw'], 'paw[foo]=bar&paw[moo]=8', 'namespace | one string one numeric');
    assertQueryStringGenerated({foo:'bar3'}, ['paw'], 'paw[foo]=bar3', 'namespace | number in back');
    assertQueryStringGenerated({foo:'3bar'}, ['paw'], 'paw[foo]=3bar', 'namespace | number in front');
    assertQueryStringGenerated({foo: 3}, ['paw'], 'paw[foo]=3', 'namespace | basic number');
    assertQueryStringGenerated({foo: true}, ['paw'], 'paw[foo]=true', 'namespace | basic boolean');
    assertQueryStringGenerated({foo: /reg/}, ['paw'], 'paw[foo]=%2Freg%2F', 'namespace | regexp');
    assertQueryStringGenerated({foo:'a b'}, ['paw'], 'paw[foo]=a%20b', 'namespace | should escape string');
    assertQueryStringGenerated({foo: date}, ['paw'], 'paw[foo]=' + date.getTime(), 'namespace | should stringify date');
    assertQueryStringGenerated({foo:['a','b','c']}, ['paw'], 'paw[foo][0]=a&paw[foo][1]=b&paw[foo][2]=c', 'namespace | basic array');
    assertQueryStringGenerated({foo:{bar:'tee',car:'hee'}}, ['paw'], 'paw[foo][bar]=tee&paw[foo][car]=hee', 'namespace | basic object');

    assertQueryStringGenerated({foo:undefined}, ['paw'], 'paw[foo]=', 'namespace | undefined');
    assertQueryStringGenerated({foo:false}, ['paw'], 'paw[foo]=false', 'namespace | false');
    assertQueryStringGenerated({foo:null}, ['paw'], 'paw[foo]=', 'namespace | null');
    assertQueryStringGenerated({foo:NaN}, ['paw'], 'paw[foo]=', 'namespace | NaN');
    assertQueryStringGenerated({foo:''}, ['paw'], 'paw[foo]=', 'namespace | empty string');
    assertQueryStringGenerated({foo:0}, ['paw'], 'paw[foo]=0', 'namespace | 0');
    assertQueryStringGenerated({foo:[['fap','cap']]}, ['paw'], 'paw[foo][0][0]=fap&paw[foo][0][1]=cap', 'namespace | array double nested');
    assertQueryStringGenerated({foo:[['fap'],['cap']]}, ['paw'], 'paw[foo][0][0]=fap&paw[foo][1][0]=cap', 'namespace | array horizonal nested');
    assertQueryStringGenerated({foo:{bar:{map:'fap'}}}, ['paw'], 'paw[foo][bar][map]=fap', 'namespace | object double nested');

    assertQueryStringGenerated({'hello there': 'bar'}, [], 'hello%20there=bar', 'spaces in key');
    assertQueryStringGenerated({'"/+': 'bar'}, [], '%22%2F%2B=bar', 'key requires encoding');
    assertQueryStringGenerated({'時刻': 'bar'}, [], '%E6%99%82%E5%88%BB=bar', 'Japanese key');
    assertQueryStringGenerated({'%20': 'bar'}, [], '%2520=bar', '%20');

    assertQueryStringGenerated(['a','b','c'], [], '0=a&1=b&2=c', 'straight array no namespace');
    assertQueryStringGenerated(8, [], '', 'straight number no namespace');
    assertQueryStringGenerated(date, [], '', 'straight date no namespace');
    assertQueryStringGenerated({foo:'bar'}, ['萬'], '%E8%90%AC[foo]=bar', 'Japanese characters in the namespace');

    equal(run(Object, 'toQueryString', ['foo']), '', 'straight string no namespace');

    var obj = {
      toString: function() {
        return 'hardyhar';
      }
    }

    assertQueryStringGenerated({foo: obj}, [], 'foo=hardyhar', 'toString object member');

    var Foo = function() {};
    Foo.prototype.toString = function() {
      return 'custom';
    }

    test(Object, [{foo: new Foo}], getExpected('foo=custom'), 'toString inherited method');

  });

  method('map', function() {
    var obj1 = {
      foo: 3,
      bar: 4,
      moo: 5,
      car: 6
    }

    var obj2 = {
     foo: { age: 11 },
     bar: { age: 22 },
     moo: { age: 33 },
     car: { age: 44 }
    }

    testStaticAndInstance(obj1, [function(k, v) { return v * 2; }], {foo:6,bar:8,moo:10,car:12}, 'function');
    testStaticAndInstance(obj1, ['toString'], {foo:'3',bar:'4',moo:'5',car:'6'}, 'string shortcut');
    testStaticAndInstance(obj1, [], obj1, 'no args');
    testStaticAndInstance(obj2, [function(k, v) { return v.age; }], {foo:11,bar:22,moo:33,car:44}, 'mapping nested properties');
    testStaticAndInstance(obj2, ['age'], {foo:11,bar:22,moo:33,car:44}, 'mapping nested properties with string shortcut');

    var obj = {
     foo:{a:{b:{c:11}}},
     bar:{a:{b:{c:22}}},
     moo:{a:{b:{c:33}}},
     car:{a:{b:{c:44}}}
    }

    testStaticAndInstance(obj, ['a.b.c'], {foo:11,bar:22,moo:33,car:44}, 'mapping shortcut can go deep with dot syntax');

  });

  method('size', function() {
    testStaticAndInstance({}, [], 0, 'empty object');
    testStaticAndInstance({foo:'bar'}, [], 1, '1 property');
    testStaticAndInstance({foo:'bar',moo:'car'}, [], 2, '2 properties');
    testStaticAndInstance({foo:1}, [], 1, 'numbers');
    testStaticAndInstance({foo:/bar/}, [], 1, 'regexes');
    testStaticAndInstance({foo:function(){}}, [], 1, 'functions');
    testStaticAndInstance({foo:{bar:'car'}}, [], 1, 'nested object');
    testStaticAndInstance({foo:[1]}, [], 1, 'nested array');
    testStaticAndInstance(['a'], [], 1, 'array');
    testStaticAndInstance(['a','b'], [], 2, 'array 2 elements');
    testStaticAndInstance(['a','b','c'], [], 3, 'array 3 elements');
    testStaticAndInstance('foo', [], 3, 'string primitive');
    testStaticAndInstance(new String('foo'), [], 3, 'string object');
    testStaticAndInstance(1, [], 0, 'number primitive');
    testStaticAndInstance(new Number(1), [], 0, 'number object');
    testStaticAndInstance(true, [], 0, 'boolean primitive');
    testStaticAndInstance(new Boolean(true), [], 0, 'boolean object');
    testStaticAndInstance(null, [], 0, 'null');
    testStaticAndInstance(undefined, [], 0, 'undefined');

    var Foo = function(){};
    testStaticAndInstance(new Foo, [], 0, 'class instances');

    var Foo = function(a){ this.a = a; };
    testStaticAndInstance(new Foo, [], 1, 'class instances with a single property');
  });

  method('each', function() {
    var fn = function () {}, callback, result;
    var d = new Date();
    var obj = {
      number: 3,
      person: 'jim',
      date: d,
      func: fn
    };

    var keys = ['number','person','date','func'];
    var values = [3, 'jim', d, fn];
    var count = 0;

    count = 0;
    callback = function(key, value, o) {
      equal(key, keys[count], 'accepts a block');
      equal(value, values[count], 'accepts a block');
      equal(o, obj, 'accepts a block | object is third param');
      count++;
    }
    result = run(Object, 'each', [obj, callback]);
    equal(count, 4, 'accepts a block | iterated properly');
    equal(result, obj, 'accepts a block | result should equal object passed in');

    raisesError(function(){
      run(Object, 'each', [{foo:'bar'}]);
    }, 'no iterator raises an error');

    testStaticAndInstance(obj, [function () {}], obj, 'each returns itself');
  });

  method('get', function() {

    var obj = {
      'a.b.c': 'surprise',
      a: {
        b: {
          c: {
            foo: 'bar'
          },
          str: 'hi',
          num: 5,
          und: undefined,
          nul: null,
          arr: [1]
        },
        str: 'hi',
        num: 5,
        und: undefined,
        nul: null,
        arr: [1]
      },
      str: 'hi',
      num: 5,
      und: undefined,
      nul: null,
      arr: [1]
    };

    testStaticAndInstance(obj, ['str'], 'hi', 'flat string');
    testStaticAndInstance(obj, ['num'], 5, 'flat number');
    testStaticAndInstance(obj, ['und'], undefined, 'flat undefined');
    testStaticAndInstance(obj, ['nul'], null, 'flat null');
    testStaticAndInstance(obj, ['arr'], [1], 'flat array');
    testStaticAndInstance(obj, ['non'], undefined, 'flat non-existent');

    testStaticAndInstance(obj, ['a.str'], 'hi', 'one level | string');
    testStaticAndInstance(obj, ['a.num'], 5, 'one level | number');
    testStaticAndInstance(obj, ['a.und'], undefined, 'one level | undefined');
    testStaticAndInstance(obj, ['a.nul'], null, 'one level | null');
    testStaticAndInstance(obj, ['a.arr'], [1], 'one level | array');
    testStaticAndInstance(obj, ['a.non'], undefined, 'one level | non-existent');

    testStaticAndInstance(obj, ['a.b.str'], 'hi', 'two levels | string');
    testStaticAndInstance(obj, ['a.b.num'], 5, 'two levels | number');
    testStaticAndInstance(obj, ['a.b.und'], undefined, 'two levels | undefined');
    testStaticAndInstance(obj, ['a.b.nul'], null, 'two levels | null');
    testStaticAndInstance(obj, ['a.b.arr'], [1], 'two levels | array');
    testStaticAndInstance(obj, ['a.b.non'], undefined, 'two levels | non-existent');

    testStaticAndInstance(obj, ['arr.0'], 1, 'flat array property');
    testStaticAndInstance(obj, ['a.arr.0'], 1, 'one level | array property');
    testStaticAndInstance(obj, ['a.b.arr.0'], 1, 'two levels | array property');

    testStaticAndInstance(obj, ['a.b.c'], { foo: 'bar' }, 'deep inner object');
    equal(obj['a.b.c'], 'surprise', 'flat shadowing property can still be accessed');

    testStaticAndInstance(obj, ['a.b.c.foo'], 'bar', 'deep');
    testStaticAndInstance(obj, ['a.b.b'], undefined, 'deep last non-existent');
    testStaticAndInstance(obj, ['c.b.a'], undefined, 'deep none exist');

    testStaticAndInstance(obj, ['.'], undefined, 'single dot');
    testStaticAndInstance(obj, ['..'], undefined, 'two dots');
    testStaticAndInstance(obj, ['...'], undefined, 'three dots');

    testStaticAndInstance({}, [], undefined, 'no arguments');
    testStaticAndInstance({undefined:1}, [undefined], undefined, 'undefined should not be coerced to string');
    testStaticAndInstance({null:1}, [null], undefined, 'null should not be coerced to string');
    testStaticAndInstance({3:1}, [3], 1, 'number should be coerced to string');
    testStaticAndInstance({'[object Object]':1}, [{foo:'bar'}], 1, 'object should be coerced to string');
    testStaticAndInstance({undefined:1}, ['undefined'], 1, '"undefined" is found');
    testStaticAndInstance({null:1}, ['null'], 1, '"null" is found');

    testStaticAndInstance({'':1}, [''], 1, 'empty string as key');
    testStaticAndInstance({'':{'':2}}, ['.'], 2, 'nested empty string as key');
    testStaticAndInstance({'':{'':{'':3}}}, ['..'], 3, 'twice nested empty string as key');

    testStaticAndInstance(undefined, ['a'], undefined, 'flat property on undefined');
    testStaticAndInstance(undefined, ['a.b'], undefined, 'deep property on undefined');
    testStaticAndInstance(null, ['a'], undefined, 'flat property on null');
    testStaticAndInstance(null, ['a.b'], undefined, 'deep property on null');
    testStaticAndInstance({}, ['a'], undefined, 'flat property on empty object');
    testStaticAndInstance({}, ['a.b'], undefined, 'deep property on empty object');
    testStaticAndInstance(NaN, ['a'], undefined, 'flat property on NaN');
    testStaticAndInstance(NaN, ['a.b'], undefined, 'deep property on NaN');
    testStaticAndInstance('foo', ['a'], undefined, 'flat property on string');
    testStaticAndInstance('foo', ['a.b'], undefined, 'flat property on string');

    testStaticAndInstance(['a','b'], [0], 'a', 'array property found');
    testStaticAndInstance(['a','b'], [1], 'b', 'array property found');
    testStaticAndInstance(['a','b'], ['0'], 'a', 'array property found by string');
    testStaticAndInstance(['a','b'], ['1'], 'b', 'array property found by string');

    testStaticAndInstance([{foo:'bar'}], ['0.foo'], 'bar', 'array deep property');
    testStaticAndInstance({foo:['bar']}, ['foo.0'], 'bar', 'object array property');
    testStaticAndInstance([[['bar']]], ['0.0.0'], 'bar', 'deep array');

    var Foo = function() {};
    var Bar = function() { this.c = 'inst-c'; };

    Foo.a = 'class-a';
    Foo.prototype.a = 'foo-a';
    Foo.prototype.b = 'foo-b';
    Foo.prototype.c = 'foo-c';

    Bar.prototype = new Foo;
    Bar.prototype.b = 'bar-b';

    var instFoo = new Foo();
    var instBar = new Bar();

    test(Object, [Foo, 'a'], 'class-a', 'Class method class-a');

    test(Object, [Foo.prototype, 'a'], 'foo-a', 'Foo.prototype.a');
    test(Object, [Bar.prototype, 'a'], 'foo-a', 'Bar.prototype.a');
    test(Object, [Foo.prototype, 'b'], 'foo-b', 'Foo.prototype.b');
    test(Object, [Bar.prototype, 'b'], 'bar-b', 'Bar.prototype.b');

    test(Object, [instFoo, 'a'], 'foo-a', 'foo.a');
    test(Object, [instBar, 'a'], 'foo-a', 'bar.a');
    test(Object, [instFoo, 'b'], 'foo-b', 'foo.b');
    test(Object, [instBar, 'b'], 'bar-b', 'bar.b');
    test(Object, [instFoo, 'c'], 'foo-c', 'foo.c');
    test(Object, [instBar, 'c'], 'inst-c', 'bar.c');

    test(Object, [Array, 'prototype.every'], Array.prototype.every, 'works on built-ins');

    if (definePropertySupport) {
      // Non-enumerable
      var obj = {};
      Object.defineProperty(obj, 'foo', {
        enumerable: false,
        value: 3
      });
      Object.defineProperty(obj, 'bar', {
        enumerable: false,
        value: {}
      });
      Object.defineProperty(obj.bar, 'car', {
        enumerable: false,
        value: 'hi'
      });
      test(Object, [obj, 'foo'], 3, 'works on non-enumerable properties');
      test(Object, [obj, 'bar.car'], 'hi', 'works on deep non-enumerable properties');
    }

  });

  method('set', function() {

    var obj = {};
    var result = run(Object, 'set', [obj, 'foo', 'bar']);
    equal(obj.foo, 'bar', 'Basic flat property is set on original object');
    equal(result === obj, true, 'returned value is the original object');

    var obj = {};
    run(Object, 'set', [obj, 'foo.bar', 'car']);
    equal(obj.foo.bar, 'car', 'Basic flat property is set on original object');


    testStaticAndInstance({}, ['str', 'hi'], {str:'hi'}, 'flat string');
    testStaticAndInstance({}, ['num', 5], {num:5}, 'flat number');
    testStaticAndInstance({}, ['und', undefined], {und:undefined}, 'flat undefined');
    testStaticAndInstance({}, ['nul', null], {nul:null}, 'flat null');
    testStaticAndInstance({}, ['arr', [1]], {arr:[1]}, 'flat array');
    testStaticAndInstance({}, ['obj', {a:'b'}], {obj:{a:'b'}}, 'flat object');

    testStaticAndInstance({}, ['a.str', 'hi'], {a:{str:'hi'}}, 'one level | string');
    testStaticAndInstance({}, ['a.num', 5], {a:{num:5}}, 'one level | number');
    testStaticAndInstance({}, ['a.und', undefined], {a:{und:undefined}}, 'one level | undefined');
    testStaticAndInstance({}, ['a.nul', null], {a:{nul:null}}, 'one level | null');
    testStaticAndInstance({}, ['a.arr', [1]], {a:{arr:[1]}}, 'one level | array');
    testStaticAndInstance({}, ['a.obj', {a:'b'}], {a:{obj:{a:'b'}}}, 'one level | object');

    testStaticAndInstance({}, ['a.b.str', 'hi'], {a:{b:{str:'hi'}}}, 'two levels | string');
    testStaticAndInstance({}, ['a.b.num', 5], {a:{b:{num:5}}}, 'two levels | number');
    testStaticAndInstance({}, ['a.b.und', undefined], {a:{b:{und:undefined}}}, 'two levels | undefined');
    testStaticAndInstance({}, ['a.b.nul', null], {a:{b:{nul:null}}}, 'two levels | null');
    testStaticAndInstance({}, ['a.b.arr', [1]], {a:{b:{arr:[1]}}}, 'two levels | array');
    testStaticAndInstance({}, ['a.b.obj', {a:'b'}], {a:{b:{obj:{a:'b'}}}}, 'two levels | object');

    testStaticAndInstance({}, ['0', 'x'], {0:'x'}, 'numeric index on object');
    testStaticAndInstance({}, ['0.foo', 'x'], {0:{foo:'x'}}, 'keyword after numeric index');
    testStaticAndInstance({}, ['foo.0', 'x'], {foo:{0:'x'}}, 'numeric index after keyword');
    testStaticAndInstance({}, ['foo.bar.0', 'x'], {foo:{bar:{0:'x'}}}, 'numeric index two deep');
    testStaticAndInstance({}, ['foo.0.bar', 'x'], {foo:{0:{bar:'x'}}}, 'numeric index in the middle');

    testStaticAndInstance({}, ['a','x'], {a:'x'}, 'flat property on empty object');
    testStaticAndInstance({}, ['a.b','x'], {a:{b:'x'}}, 'deep property on empty object');

    // Array tests won't make sense on an extended object.
    test(Object, [[], '0', 'x'], ['x'], 'numeric index on array');
    test(Object, [['a','b'], 0,'x'], ['x','b'], 'array property set');
    test(Object, [['a','b'], 1,'x'], ['a','x'], 'array property set');
    test(Object, [['a','b'], '0','x'], ['x','b'], 'array property set by string');
    test(Object, [['a','b'], '1','x'], ['a','x'], 'array property set by string');

    test(Object, [[{foo:'bar'}], '0.foo', 'x'], [{foo:'x'}], 'array deep property');
    test(Object, [{foo:['bar']}, 'foo.0','x'], {foo:['x']}, 'object array property');
    test(Object, [[[['bar']]], '0.0.0', 'x'], [[['x']]], 'deep array');

    var obj = {
      a: {
        b: {
          c: 'bar'
        }
      }
    };

    testStaticAndInstance(testClone(obj), ['a.b.c', 'x'], {a:{b:{c:'x'}}}, 'deep');
    testStaticAndInstance(testClone(obj), ['a.b.b', 'x'], {a:{b:{c:'bar',b:'x'}}}, 'deep last non-existent');
    testStaticAndInstance(testClone(obj), ['c.b.a', 'x'], {a:{b:{c:'bar'}},c:{b:{a:'x'}}}, 'deep none exist');

    testStaticAndInstance({}, ['.','x'], {'':{'':'x'}}, 'single dot');
    testStaticAndInstance({}, ['..','x'], {'':{'':{'':'x'}}}, 'two dots');
    testStaticAndInstance({}, ['...','x'], {'':{'':{'':{'':'x'}}}}, 'three dots');

    testStaticAndInstance({}, [], {}, 'no arguments');
    testStaticAndInstance({}, [undefined, 'x'], {}, 'undefined should be ignored');
    testStaticAndInstance({}, [null, 'x'], {}, 'null should ignored');
    testStaticAndInstance({}, [3, 'x'], {3:'x'}, 'number should be coerced to string');
    testStaticAndInstance({}, [{foo:'bar'}, 'x'], {'[object Object]': 'x'}, 'object should be coerced to string');
    testStaticAndInstance({3:1}, [3,'x'], {3:'x'}, 'coerced number is set');
    testStaticAndInstance({'[object Object]':1}, [{foo:'bar'}, 'x'], {'[object Object]':'x'}, 'coerced object is set');

    testStaticAndInstance({'':1}, ['','x'], {'':'x'}, 'empty string as key');
    testStaticAndInstance({'':{'':2}}, ['.','x'], {'':{'':'x'}}, 'nested empty string as key');
    testStaticAndInstance({'':{'':{'':3}}}, ['..','x'], {'':{'':{'':'x'}}}, 'twice nested empty string as key');

    raisesError(function(){ run(Object, 'set', [undefined, 'a', 'x']); }, 'should raise error on undefined');
    raisesError(function(){ run(Object, 'set', [null, 'a', 'x']); }, 'should raise error on null');
    raisesError(function(){ run(Object, 'set', [NaN, 'a', 'x']); }, 'should raise error on NaN');
    raisesError(function(){ run(Object, 'set', ['foo', 'a', 'x']); }, 'should raise error on string');

    raisesError(function(){ run(Object, 'set', [{a:undefined}, 'a.b', 'x']); }, 'should raise error on undefined deep');
    raisesError(function(){ run(Object, 'set', [{a:null}, 'a.b', 'x']); }, 'should raise error on null deep');
    raisesError(function(){ run(Object, 'set', [{a:NaN}, 'a.b', 'x']); }, 'should raise error on NaN deep');
    raisesError(function(){ run(Object, 'set', [{a:'foo'}, 'a.b', 'x']); }, 'should raise error on string deep');


    var Foo = function() { this.a = 'a'; };
    var Bar = function() { this.b = 'b'; };

    Foo.prototype = new Bar;
    Bar.prototype.c = 'c';

    var f = new Foo();

    equal(f.hasOwnProperty('a'), true,  'instance setup | a is own');
    equal(f.hasOwnProperty('b'), false, 'instance setup | b is not own');
    equal(f.hasOwnProperty('c'), false, 'instance setup | c is not own');

    run(Object, 'set', [f, 'a', 'x']);
    run(Object, 'set', [f, 'b', 'x']);
    run(Object, 'set', [f, 'c', 'x']);

    equal(f.hasOwnProperty('a'), true, 'a is set');
    equal(f.hasOwnProperty('b'), true, 'b is set');
    equal(f.hasOwnProperty('c'), true, 'c is set');

    if (f.__proto__) {
      equal(f.__proto__.b, 'b', 'b is shadowed');
      equal(f.__proto__.c, 'c', 'c is shadowed');
    }

    run(Object, 'set', [Array, 'prototype.whee', 'x']);
    equal(Array.prototype.whee, 'x', 'works on built-ins');
    delete Array.prototype['whee'];

    if (definePropertySupport) {
      // Non-enumerable
      var obj = {};
      Object.defineProperty(obj, 'foo', {
        writable: true,
        enumerable: false,
        value: 3
      });
      Object.defineProperty(obj, 'bar', {
        writable: true,
        enumerable: false,
        value: {}
      });
      Object.defineProperty(obj.bar, 'car', {
        writable: true,
        enumerable: false,
        value: 'hi'
      });
      run(Object, 'set', [obj, 'foo', 'x']);
      equal(obj.foo, 'x', 'Non-enumerable property set');
      equal(obj.bar.car, 'hi', 'deep non-enumerable property exists');

      run(Object, 'set', [obj, 'bar.car', 'x']);
      equal(obj.bar.car, 'x', 'deep non-enumerable property set');
    }

  });

});
