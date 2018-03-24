declare module 'phaser' {
  export { Phaser };
}

declare class Phaser {
}

declare namespace Phaser {
  class Actions {
    static Angle(items: any[], value: number): any[];

    static Call(items: any[], callback: any, thisArg: any): any[];

    static GetFirst(items: any[], compare: any, index: number): any[];

    static GridAlign(items: any[], options: any): any[];

    static IncAlpha(items: any[], value: number): any[];

    static IncX(items: any[], value: number): any[];

    static IncXY(items: any[], x: number, y: number): any[];

    static IncY(items: any[], value: number): any[];

    static PlaceOnCircle(items: any[], circle: Phaser.Geom.Circle, startAngle: number, endAngle: number): any[];

    static PlaceOnEllipse(items: any[], ellipse: Phaser.Geom.Ellipse, startAngle: number, endAngle: number): any[];

    static PlaceOnLine(items: any[], line: Phaser.Geom.Line): any[];

    static PlaceOnRectangle(items: any[], rect: Phaser.Geom.Rectangle, shift: number): any[];

    static PlaceOnTriangle(items: any[], triangle: Phaser.Geom.Triangle, stepRate: number): any[];

    static PlayAnimation(items: any[], key: string, startFrame: string | number): any[];

    static RandomCircle(items: any[], circle: Phaser.Geom.Circle): any[];

    static RandomEllipse(items: any[], ellipse: Phaser.Geom.Ellipse): any[];

    static RandomLine(items: any[], line: Phaser.Geom.Line): any[];

    static RandomRectangle(items: any[], rect: Phaser.Geom.Rectangle): any[];

    static RandomTriangle(items: any[], triangle: Phaser.Geom.Triangle): any[];

    static Rotate(items: any[], value: number, step: number): any[];

    static RotateAround(items: any[], point: any, angle: number): any[];

    static RotateAroundDistance(items: any[], point: any, angle: number, distance: number): any[];

    static ScaleX(items: any[], value: number): any[];

    static ScaleXY(items: any[], x: number, y: number): any[];

    static ScaleY(items: any[], value: number): any[];

    static SetAlpha(items: any[], value: number, step: number): any[];

    static SetBlendMode(items: any[], value: number): any[];

    static SetDepth(items: any[], value: number, step: number): any[];

    static SetHitArea(items: any[], hitArea: any, hitAreaCallback: any): any[];

    static SetOrigin(items: any[], x: number, y: number): any[];

    static SetRotation(items: any[], value: number, step: number): any[];

    static SetScale(items: any[], x: number, y: number, stepX: number, stepY: number): any[];

    static SetScaleX(items: any[], value: number, step: number): any[];

    static SetScaleY(items: any[], value: number, step: number): any[];

    static SetTint(items: any[], topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): any[];

    static SetVisible(items: any[], value: boolean): any[];

    static SetX(items: any[], value: number, step: number): any[];

    static SetXY(items: any[], x: number, y: number, stepX: number, stepY: number): any[];

    static SetY(items: any[], value: number, step: number): any[];

    static ShiftPosition(items: any[], x: number, y: number, direction: number, output: Phaser.Math.Vector2 | any): any[];

    static Shuffle(items: any[]): any[];

    static SmootherStep(items: any[], property: string, min: number, max: number, inc: number): any[];

    static SmoothStep(items: any[], property: string, min: number, max: number, inc: number): any[];

    static Spread(items: any[], property: string, min: number, max: number, inc: number): any[];

    static ToggleVisible(items: any[]): any[];

  }

  namespace Actions {
  }

  class Animations {
  }

  namespace Animations {
    class Animation {
      manager: Phaser.Animations.AnimationManager;

      key: string;

      key: string;

      frames: any[];

      frameRate: number;

      duration: number;

      msPerFrame: number;

      skipMissedFrames: boolean;

      delay: number;

      repeat: number;

      repeatDelay: number;

      yoyo: boolean;

      showOnStart: boolean;

      hideOnComplete: boolean;

      callbackScope: any;

      onStart: any;

      onStartParams: any[];

      onRepeat: any;

      onRepeatParams: any[];

      onUpdate: any;

      onUpdateParams: any[];

      onComplete: any;

      onCompleteParams: any[];

      paused: boolean;

      addFrame(config: any): Phaser.Animations.Animation;

      addFrameAt(index: number, config: any): Phaser.Animations.Animation;

      checkFrame(index: number): boolean;

      completeAnimation(component: Phaser.GameObjects.Components.Animation): void;

      getFirstTick(component: Phaser.GameObjects.Components.Animation, includeDelay: boolean): void;

      getFrameAt(index: number): Phaser.Animations.AnimationFrame;

      getFrames(textureManager: any, frames: any): Array.<Phaser.Animations.AnimationFrame>;

      getNextTick(component: Phaser.GameObjects.Components.Animation): void;

      load(component: Phaser.GameObjects.Components.Animation, startFrame: number): void;

      nextFrame(component: Phaser.GameObjects.Components.Animation): void;

      previousFrame(component: Phaser.GameObjects.Components.Animation): void;

      removeFrame(frame: Phaser.Animations.AnimationFrame): Phaser.Animations.Animation;

      removeFrameAt(index: number): Phaser.Animations.Animation;

      repeatAnimation(component: Phaser.GameObjects.Components.Animation): void;

      setFrame(component: Phaser.GameObjects.Components.Animation): void;

      toJSON(): any;

      updateFrameSequence(): Phaser.Animations.Animation;

      pause(): Phaser.Animations.Animation;

      resume(): Phaser.Animations.Animation;

      destroy(): void;

      parent: Phaser.GameObjects.GameObject;

      animationManager: Phaser.Animations.AnimationManager;

      isPlaying: boolean;

      currentAnim: Phaser.Animations.Animation;

      currentFrame: Phaser.Animations.AnimationFrame;

      _timeScale: number;

      frameRate: number;

      duration: number;

      msPerFrame: number;

      skipMissedFrames: boolean;

      _delay: number;

      _repeat: number;

      _repeatDelay: number;

      _yoyo: boolean;

      forward: boolean;

      accumulator: number;

      nextTick: number;

      repeatCounter: number;

      pendingRepeat: boolean;

      _paused: boolean;

      _wasPlaying: boolean;

      _callbackArgs: any[];

      _updateParams: any[];

      delay(value: number): Phaser.GameObjects.GameObject;

      delayedPlay(delay: any, key: any, startFrame: any): Phaser.GameObjects.GameObject;

      getCurrentKey(): any;

      load(key: any, startFrame: any): Phaser.GameObjects.GameObject;

      pause(atFrame: any): Phaser.GameObjects.GameObject;

      paused(value: any): any;

      play(key: any, ignoreIfPlaying: any, startFrame: any): Phaser.GameObjects.GameObject;

      progress(value: any): any;

      remove(event: any): void;

      repeat(value: any): any;

      repeatDelay(value: any): any;

      restart(includeDelay: any): Phaser.GameObjects.GameObject;

      resume(fromFrame: any): Phaser.GameObjects.GameObject;

      stop(dispatchCallbacks: any): Phaser.GameObjects.GameObject;

      timeScale(value: any): any;

      totalFrames(): any;

      totalProgres(): void;

      update(timestamp: any, delta: any): void;

      updateFrame(animationFrame: any): void;

      yoyo(value: any): any;

      destroy(): void;

    }

    namespace Animation {
    }

    class AnimationFrame {
      textureKey: string;

      textureFrame: string;

      index: number;

      frame: Phaser.Textures.Frame;

      isFirst: boolean;

      isLast: boolean;

      prevFrame: Phaser.Animations.AnimationFrame;

      nextFrame: Phaser.Animations.AnimationFrame;

      duration: number;

      progress: number;

      onUpdate: any;

      toJSON(): any;

      destroy(): void;

    }

    namespace AnimationFrame {
    }

    class AnimationManager {
      game: Phaser.Game;

      textureManager: Phaser.Textures.TextureManager;

      globalTimeScale: number;

      anims: Phaser.Structs.Map;

      paused: boolean;

      name: string;

      boot(): void;

      add(key: string, animation: Phaser.Animations.Animation): Phaser.Animations.AnimationManager;

      create(config: any): Phaser.Animations.Animation;

      fromJSON(data: string | any, clearCurrentAnimations: boolean): Array.<Phaser.Animations.Animation>;

      generateFrameNames(key: string, config: any): Array.<object>;

      generateFrameNumbers(key: string, config: any): Array.<object>;

      get(key: string): Phaser.Animations.Animation;

      load(child: Phaser.GameObjects.GameObject, key: string, startFrame: string | number): Phaser.GameObjects.GameObject;

      pauseAll(): Phaser.Animations.AnimationManager;

      play(key: string, child: Phaser.GameObjects.GameObject): Phaser.Animations.AnimationManager;

      remove(key: string): Phaser.Animations.Animation;

      resumeAll(): Phaser.Animations.AnimationManager;

      staggerPlay(key: string, child: Phaser.GameObjects.GameObject, stagger: number): Phaser.Animations.AnimationManager;

      toJSON(key: string): any;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

    }

    namespace AnimationManager {
    }

  }

  class Cache {
  }

  namespace Cache {
    class BaseCache {
      entries: Phaser.Structs.Map;

      events: EventEmitter;

      add(key: string, data: any): Phaser.Cache.BaseCache;

      has(key: string): boolean;

      get(key: string): any;

      remove(key: string): Phaser.Cache.BaseCache;

      destroy(): void;

    }

    namespace BaseCache {
    }

    class CacheManager {
      game: Phaser.Game;

      binary: Phaser.Cache.BaseCache;

      bitmapFont: Phaser.Cache.BaseCache;

      json: Phaser.Cache.BaseCache;

      physics: Phaser.Cache.BaseCache;

      shader: Phaser.Cache.BaseCache;

      audio: Phaser.Cache.BaseCache;

      text: Phaser.Cache.BaseCache;

      obj: Phaser.Cache.BaseCache;

      tilemap: Phaser.Cache.BaseCache;

      xml: Phaser.Cache.BaseCache;

      custom: object.<Phaser.Cache.BaseCache>;

      addCustom(key: string): Phaser.Cache.BaseCache;

      destroy(): void;

    }

    namespace CacheManager {
    }

  }

  class Cameras {
  }

  namespace Cameras {
    class Scene2D {
    }

    namespace Scene2D {
    }

    class Controls {
    }

    namespace Controls {
      class SmoothedKeyControl {
        camera: Phaser.Cameras.Scene2D.Camera;

        left: Phaser.Input.Keyboard;

        right: Phaser.Input.Keyboard;

        up: Phaser.Input.Keyboard;

        down: Phaser.Input.Keyboard;

        zoomIn: Phaser.Input.Keyboard;

        zoomOut: Phaser.Input.Keyboard;

        zoomSpeed: number;

        accelX: number;

        accelY: number;

        dragX: number;

        dragY: number;

        maxSpeedX: number;

        maxSpeedY: number;

        _speedX: number;

        _speedY: number;

        _zoom: number;

        active: boolean;

        start(): Phaser.Cameras.Controls.SmoothedKeyControl;

        stop(): Phaser.Cameras.Controls.SmoothedKeyControl;

        setCamera(camera: Phaser.Cameras.Scene2D.Camera): Phaser.Cameras.Controls.SmoothedKeyControl;

        update(delta: any): void;

        destroy(): void;

      }

      namespace SmoothedKeyControl {
      }

    }

    class Sprite3D {
    }

    namespace Sprite3D {
      class OrthographicCamera {
        viewportWidth: number;

        viewportHeight: number;

        _zoom: number;

        near: number;

        setToOrtho(yDown: any, viewportWidth: any, viewportHeight: any): any;

        update(): any;

        zoom: number;

        setPosition(x: number, y: number, z: number): Phaser.Cameras.Sprite3D.Camera;

        setScene(scene: Phaser.Scene): Phaser.Cameras.Sprite3D.Camera;

        setPixelScale(value: any): Phaser.Cameras.Sprite3D.Camera;

        add(sprite3D: any): any;

        remove(child: any): Phaser.Cameras.Sprite3D.Camera;

        clear(): Phaser.Cameras.Sprite3D.Camera;

        getChildren(): any[];

        create(x: any, y: any, z: any, key: any, frame: any, visible: any): any;

        createMultiple(quantity: any, key: any, frame: any, visible: any): any;

        createRect(size: any, spacing: any, key: any, frame: any): any;

        randomSphere(radius: any, sprites: any): Phaser.Cameras.Sprite3D.Camera;

        randomCube(scale: any, sprites: any): Phaser.Cameras.Sprite3D.Camera;

        translateChildren(vec3: any, sprites: any): Phaser.Cameras.Sprite3D.Camera;

        transformChildren(mat4: any, sprites: any): Phaser.Cameras.Sprite3D.Camera;

        setViewport(width: number, height: number): Phaser.Cameras.Sprite3D.Camera;

        translate(x: any, y: any, z: any): Phaser.Cameras.Sprite3D.Camera;

        lookAt(x: any, y: any, z: any): Phaser.Cameras.Sprite3D.Camera;

        rotate(radians: any, axis: any): Phaser.Cameras.Sprite3D.Camera;

        rotateAround(point: any, radians: any, axis: any): Phaser.Cameras.Sprite3D.Camera;

        project(vec: any, out: any): any;

        unproject(vec: any, out: any): any;

        getPickRay(x: any, y: any): any;

        updateChildren(): Phaser.Cameras.Sprite3D.Camera;

        updateBillboardMatrix(): void;

        getPointSize(vec: any, size: any, out: any): any;

        destroy(): void;

        setX(value: any): Phaser.Cameras.Sprite3D.Camera;

        setY(value: any): Phaser.Cameras.Sprite3D.Camera;

        setZ(value: any): Phaser.Cameras.Sprite3D.Camera;

        x: number;

        y: number;

        z: number;

      }

      namespace OrthographicCamera {
      }

      class PerspectiveCamera {
        viewportWidth: number;

        viewportHeight: number;

        fieldOfView: number;

        setFOV(value: any): any;

        update(): any;

        setPosition(x: number, y: number, z: number): Phaser.Cameras.Sprite3D.Camera;

        setScene(scene: Phaser.Scene): Phaser.Cameras.Sprite3D.Camera;

        setPixelScale(value: any): Phaser.Cameras.Sprite3D.Camera;

        add(sprite3D: any): any;

        remove(child: any): Phaser.Cameras.Sprite3D.Camera;

        clear(): Phaser.Cameras.Sprite3D.Camera;

        getChildren(): any[];

        create(x: any, y: any, z: any, key: any, frame: any, visible: any): any;

        createMultiple(quantity: any, key: any, frame: any, visible: any): any;

        createRect(size: any, spacing: any, key: any, frame: any): any;

        randomSphere(radius: any, sprites: any): Phaser.Cameras.Sprite3D.Camera;

        randomCube(scale: any, sprites: any): Phaser.Cameras.Sprite3D.Camera;

        translateChildren(vec3: any, sprites: any): Phaser.Cameras.Sprite3D.Camera;

        transformChildren(mat4: any, sprites: any): Phaser.Cameras.Sprite3D.Camera;

        setViewport(width: number, height: number): Phaser.Cameras.Sprite3D.Camera;

        translate(x: any, y: any, z: any): Phaser.Cameras.Sprite3D.Camera;

        lookAt(x: any, y: any, z: any): Phaser.Cameras.Sprite3D.Camera;

        rotate(radians: any, axis: any): Phaser.Cameras.Sprite3D.Camera;

        rotateAround(point: any, radians: any, axis: any): Phaser.Cameras.Sprite3D.Camera;

        project(vec: any, out: any): any;

        unproject(vec: any, out: any): any;

        getPickRay(x: any, y: any): any;

        updateChildren(): Phaser.Cameras.Sprite3D.Camera;

        updateBillboardMatrix(): void;

        getPointSize(vec: any, size: any, out: any): any;

        destroy(): void;

        setX(value: any): Phaser.Cameras.Sprite3D.Camera;

        setY(value: any): Phaser.Cameras.Sprite3D.Camera;

        setZ(value: any): Phaser.Cameras.Sprite3D.Camera;

        x: number;

        y: number;

        z: number;

      }

      namespace PerspectiveCamera {
      }

    }

  }

  class Class {
  }

  namespace Class {
  }

  class Create {
    static GenerateTexture(config: any): HTMLCanvasElement;

  }

  namespace Create {
    class Palettes {
      JMP: any;

      MSX: any;

    }

    namespace Palettes {
    }

  }

  class Curves {
  }

  namespace Curves {
    class CubicBezierCurve {
      p0: Phaser.Math.Vector2;

      p1: Phaser.Math.Vector2;

      p2: Phaser.Math.Vector2;

      p3: Phaser.Math.Vector2;

      getStartPoint(out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getResolution(divisions: any): any;

      getPoint(t: any, out: any): any;

      draw(graphics: Phaser.GameObjects.Graphics, pointsTotal: number): Phaser.GameObjects.Graphics;

      toJSON(): any;

      type: string;

      defaultDivisions: number;

      arcLengthDivisions: number;

      cacheArcLengths: any[];

      needsUpdate: boolean;

      active: boolean;

      _tmpVec2A: Phaser.Math.Vector2;

      _tmpVec2B: Phaser.Math.Vector2;

      getBounds(out: Phaser.Geom.Rectangle, accuracy: number): Phaser.Geom.Rectangle;

      getDistancePoints(distance: number): Array.<Phaser.Geom.Point>;

      getEndPoint(out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getLength(): number;

      getLengths(divisions: number): Array.<number>;

      getPointAt(u: number, out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getPoints(divisions: number): Array.<Phaser.Math.Vector2>;

      getRandomPoint(out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getSpacedPoints(divisions: number): Array.<Phaser.Math.Vector2>;

      getTangent(t: number, out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getTangentAt(u: number, out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getTFromDistance(distance: number, divisions: number): number;

      getUtoTmapping(u: number, distance: number, divisions: number): number;

      updateArcLengths(): void;

    }

    namespace CubicBezierCurve {
    }

    class Curve {
      type: string;

      defaultDivisions: number;

      arcLengthDivisions: number;

      cacheArcLengths: any[];

      needsUpdate: boolean;

      active: boolean;

      _tmpVec2A: Phaser.Math.Vector2;

      _tmpVec2B: Phaser.Math.Vector2;

      draw(graphics: Phaser.GameObjects.Graphics, pointsTotal: number): Phaser.GameObjects.Graphics;

      getBounds(out: Phaser.Geom.Rectangle, accuracy: number): Phaser.Geom.Rectangle;

      getDistancePoints(distance: number): Array.<Phaser.Geom.Point>;

      getEndPoint(out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getLength(): number;

      getLengths(divisions: number): Array.<number>;

      getPointAt(u: number, out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getPoints(divisions: number): Array.<Phaser.Math.Vector2>;

      getRandomPoint(out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getSpacedPoints(divisions: number): Array.<Phaser.Math.Vector2>;

      getStartPoint(out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getTangent(t: number, out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getTangentAt(u: number, out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getTFromDistance(distance: number, divisions: number): number;

      getUtoTmapping(u: number, distance: number, divisions: number): number;

      updateArcLengths(): void;

    }

    namespace Curve {
    }

    class EllipseCurve {
      p0: Phaser.Math.Vector2;

      _xRadius: number;

      _yRadius: number;

      _startAngle: number;

      _endAngle: number;

      _clockwise: boolean;

      _rotation: number;

      getStartPoint(out: any): any;

      getResolution(divisions: any): any;

      getPoint(t: any, out: any): any;

      setXRadius(value: any): any;

      setYRadius(value: any): any;

      setWidth(value: any): any;

      setHeight(value: any): any;

      setStartAngle(value: any): any;

      setEndAngle(value: any): any;

      setClockwise(value: any): any;

      setRotation(value: any): any;

      x: number;

      y: number;

      xRadius: number;

      yRadius: number;

      startAngle: number;

      endAngle: number;

      clockwise: number;

      rotation: number;

      toJSON(): any;

      type: string;

      defaultDivisions: number;

      arcLengthDivisions: number;

      cacheArcLengths: any[];

      needsUpdate: boolean;

      active: boolean;

      _tmpVec2A: Phaser.Math.Vector2;

      _tmpVec2B: Phaser.Math.Vector2;

      draw(graphics: Phaser.GameObjects.Graphics, pointsTotal: number): Phaser.GameObjects.Graphics;

      getBounds(out: Phaser.Geom.Rectangle, accuracy: number): Phaser.Geom.Rectangle;

      getDistancePoints(distance: number): Array.<Phaser.Geom.Point>;

      getEndPoint(out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getLength(): number;

      getLengths(divisions: number): Array.<number>;

      getPointAt(u: number, out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getPoints(divisions: number): Array.<Phaser.Math.Vector2>;

      getRandomPoint(out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getSpacedPoints(divisions: number): Array.<Phaser.Math.Vector2>;

      getTangent(t: number, out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getTangentAt(u: number, out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getTFromDistance(distance: number, divisions: number): number;

      getUtoTmapping(u: number, distance: number, divisions: number): number;

      updateArcLengths(): void;

    }

    namespace EllipseCurve {
    }

    class LineCurve {
      p0: Phaser.Math.Vector2;

      getBounds(out: any): any;

      getStartPoint(out: any): any;

      getResolution(): number;

      getPoint(t: any, out: any): any;

      getPointAt(u: any, out: any): any;

      getTangent(): any;

      draw(graphics: any): any;

      toJSON(): any;

      type: string;

      defaultDivisions: number;

      arcLengthDivisions: number;

      cacheArcLengths: any[];

      needsUpdate: boolean;

      active: boolean;

      _tmpVec2A: Phaser.Math.Vector2;

      _tmpVec2B: Phaser.Math.Vector2;

      getDistancePoints(distance: number): Array.<Phaser.Geom.Point>;

      getEndPoint(out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getLength(): number;

      getLengths(divisions: number): Array.<number>;

      getPoints(divisions: number): Array.<Phaser.Math.Vector2>;

      getRandomPoint(out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getSpacedPoints(divisions: number): Array.<Phaser.Math.Vector2>;

      getTangentAt(u: number, out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getTFromDistance(distance: number, divisions: number): number;

      getUtoTmapping(u: number, distance: number, divisions: number): number;

      updateArcLengths(): void;

    }

    namespace LineCurve {
    }

    class MoveTo {
      active: boolean;

      p0: Phaser.Math.Vector2;

      getPoint(t: any, out: any): any;

      getPointAt(u: any, out: any): any;

      getResolution(): any;

      getLength(): any;

      toJSON(): any;

    }

    namespace MoveTo {
    }

    class Path {
      name: string;

      curves: any[];

      cacheLengths: any[];

      autoClose: boolean;

      startPoint: Phaser.Math.Vector2;

      _tmpVec2A: Phaser.Math.Vector2;

      _tmpVec2B: Phaser.Math.Vector2;

      add(curve: Phaser.Curves.Curve): Phaser.Curves.Path;

      circleTo(radius: number, clockwise: boolean, rotation: number): Phaser.Curves.Path;

      closePath(): Phaser.Curves.Path;

      cubicBezierTo(x: number, y: number, control1X: Phaser.Math.Vector2, control1Y: Phaser.Math.Vector2, control2X: Phaser.Math.Vector2, control2Y: Phaser.Math.Vector2): Phaser.Curves.Path;

      destroy(): void;

      draw(graphics: Phaser.GameObjects.Graphics, pointsTotal: number): Phaser.GameObjects.Graphics;

      ellipseTo(xRadius: number, yRadius: number, startAngle: number, endAngle: number, clockwise: boolean, rotation: number): Phaser.Curves.Path;

      fromJSON(data: any): Phaser.Curves.Path;

      getBounds(out: Phaser.Geom.Rectangle, accuracy: number): Phaser.Geom.Rectangle;

      getCurveLengths(): any[];

      getEndPoint(out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getLength(): number;

      getPoint(t: number, out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getPoints(divisions: number): Array.<Phaser.Math.Vector2>;

      getRandomPoint(out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getSpacedPoints(divisions: number): Array.<Phaser.Math.Vector2>;

      getStartPoint(out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      lineTo(x: number | Phaser.Math.Vector2, y: number): Phaser.Curves.Path;

      splineTo(points: any): Phaser.Curves.Path;

      moveTo(x: number, y: number): Phaser.Curves.Path;

      toJSON(): any;

      updateArcLengths(): void;

    }

    namespace Path {
    }

    class SplineCurve {
      points: Array.<Phaser.Math.Vector2>;

      addPoints(points: any): any;

      addPoint(x: any, y: any): any;

      getStartPoint(out: any): any;

      getResolution(divisions: any): any;

      getPoint(t: any, out: any): any;

      toJSON(): any;

      type: string;

      defaultDivisions: number;

      arcLengthDivisions: number;

      cacheArcLengths: any[];

      needsUpdate: boolean;

      active: boolean;

      _tmpVec2A: Phaser.Math.Vector2;

      _tmpVec2B: Phaser.Math.Vector2;

      draw(graphics: Phaser.GameObjects.Graphics, pointsTotal: number): Phaser.GameObjects.Graphics;

      getBounds(out: Phaser.Geom.Rectangle, accuracy: number): Phaser.Geom.Rectangle;

      getDistancePoints(distance: number): Array.<Phaser.Geom.Point>;

      getEndPoint(out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getLength(): number;

      getLengths(divisions: number): Array.<number>;

      getPointAt(u: number, out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getPoints(divisions: number): Array.<Phaser.Math.Vector2>;

      getRandomPoint(out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getSpacedPoints(divisions: number): Array.<Phaser.Math.Vector2>;

      getTangent(t: number, out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getTangentAt(u: number, out: Phaser.Math.Vector2): Phaser.Math.Vector2;

      getTFromDistance(distance: number, divisions: number): number;

      getUtoTmapping(u: number, distance: number, divisions: number): number;

      updateArcLengths(): void;

    }

    namespace SplineCurve {
    }

  }

  class Data {
  }

  namespace Data {
    class DataManager {
      parent: any;

      events: EventEmitter;

      list: any;

      blockSet: boolean;

      _frozen: boolean;

      get(key: string): any;

      getAll(): any;

      query(search: string): any;

      set(key: string, data: any): Phaser.Data.DataManager;

      each(callback: any, scope: any, arguments: *): Phaser.Data.DataManager;

      merge(data: any, overwrite: boolean): Phaser.Data.DataManager;

      remove(key: string): Phaser.Data.DataManager;

      pop(key: string): any;

      has(key: string): boolean;

      setFreeze(value: boolean): Phaser.Data.DataManager;

      reset(): Phaser.Data.DataManager;

      destroy(): void;

      freeze: boolean;

      count: number;

    }

    namespace DataManager {
    }

    class DataManagerPlugin {
      scene: Phaser.Scene;

      systems: Phaser.Scenes.Systems;

      boot(): void;

      shutdownPlugin(): void;

      destroyPlugin(): void;

      parent: any;

      events: EventEmitter;

      list: any;

      blockSet: boolean;

      _frozen: boolean;

      get(key: string): any;

      getAll(): any;

      query(search: string): any;

      set(key: string, data: any): Phaser.Data.DataManager;

      each(callback: any, scope: any, arguments: *): Phaser.Data.DataManager;

      merge(data: any, overwrite: boolean): Phaser.Data.DataManager;

      remove(key: string): Phaser.Data.DataManager;

      pop(key: string): any;

      has(key: string): boolean;

      setFreeze(value: boolean): Phaser.Data.DataManager;

      reset(): Phaser.Data.DataManager;

      destroy(): void;

      freeze: boolean;

      count: number;

    }

    namespace DataManagerPlugin {
    }

  }

  class Display {
  }

  namespace Display {
    class Align {
    }

    namespace Align {
      class To {
        static LeftBottom(gameObject: Phaser.GameObjects.GameObject, alignTo: Phaser.GameObjects.GameObject, offsetX: number, offsetY: number): Phaser.GameObjects.GameObject;

        static LeftCenter(gameObject: Phaser.GameObjects.GameObject, alignTo: Phaser.GameObjects.GameObject, offsetX: number, offsetY: number): Phaser.GameObjects.GameObject;

        static LeftTop(gameObject: Phaser.GameObjects.GameObject, alignTo: Phaser.GameObjects.GameObject, offsetX: number, offsetY: number): Phaser.GameObjects.GameObject;

        static RightBottom(gameObject: Phaser.GameObjects.GameObject, alignTo: Phaser.GameObjects.GameObject, offsetX: number, offsetY: number): Phaser.GameObjects.GameObject;

        static RightCenter(gameObject: Phaser.GameObjects.GameObject, alignTo: Phaser.GameObjects.GameObject, offsetX: number, offsetY: number): Phaser.GameObjects.GameObject;

        static RightTop(gameObject: Phaser.GameObjects.GameObject, alignTo: Phaser.GameObjects.GameObject, offsetX: number, offsetY: number): Phaser.GameObjects.GameObject;

        static TopCenter(gameObject: Phaser.GameObjects.GameObject, alignTo: Phaser.GameObjects.GameObject, offsetX: number, offsetY: number): Phaser.GameObjects.GameObject;

        static TopLeft(gameObject: Phaser.GameObjects.GameObject, alignTo: Phaser.GameObjects.GameObject, offsetX: number, offsetY: number): Phaser.GameObjects.GameObject;

        static TopRight(gameObject: Phaser.GameObjects.GameObject, alignTo: Phaser.GameObjects.GameObject, offsetX: number, offsetY: number): Phaser.GameObjects.GameObject;

      }

      namespace To {
      }

    }

    class Bounds {
      static SetBottom(gameObject: Phaser.GameObjects.GameObject, value: number): Phaser.GameObjects.GameObject;

      static SetCenterX(gameObject: Phaser.GameObjects.GameObject, x: number): Phaser.GameObjects.GameObject;

      static SetCenterY(gameObject: Phaser.GameObjects.GameObject, y: number): Phaser.GameObjects.GameObject;

      static SetLeft(gameObject: Phaser.GameObjects.GameObject, value: number): Phaser.GameObjects.GameObject;

      static SetRight(gameObject: Phaser.GameObjects.GameObject, value: number): Phaser.GameObjects.GameObject;

      static SetTop(gameObject: Phaser.GameObjects.GameObject, value: number): Phaser.GameObjects.GameObject;

      static wrap(objectBounds: Matter.Bounds, bounds: Matter.Bounds): Matter.Vector;

    }

    namespace Bounds {
    }

    class Canvas {
      static TouchAction(canvas: HTMLCanvasElement, value: string): HTMLCanvasElement;

      static UserSelect(canvas: HTMLCanvasElement, value: string): HTMLCanvasElement;

      static BlitImage(dx: number, dy: number, frame: Phaser.Textures.Frame): void;

      static DrawImage(src: Phaser.GameObjects.GameObject, camera: Phaser.Cameras.Scene2D.Camera): void;

      static GetBlendModes(): any[];

    }

    namespace Canvas {
      class Smoothing {
        static getPrefix(context: any): string;

        static enable(context: any): any;

        static disable(context: any): any;

        static isEnabled(context: any): boolean;

      }

      namespace Smoothing {
      }

      class CanvasRenderer {
        game: Phaser.Game;

        type: number;

        drawCount: number;

        width: number;

        height: number;

        config: any;

        scaleMode: number;

        gameCanvas: HTMLCanvasElement;

        gameContext: CanvasRenderingContext2D;

        currentContext: CanvasRenderingContext2D;

        drawImage: any;

        blitImage: any;

        blendModes: any[];

        currentAlpha: number;

        currentBlendMode: number;

        currentScaleMode: number;

        snapshotCallback: any;

        snapshotType: any;

        snapshotEncoder: any;

        init(): void;

        resize(width: number, height: number): void;

        onContextLost(callback: any): void;

        onContextRestored(callback: any): void;

        resetTransform(): void;

        setBlendMode(blendMode: any): any;

        setAlpha(alpha: number): number;

        preRender(): void;

        render(scene: Phaser.Scene, children: Phaser.GameObjects.DisplayList, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

        postRender(): void;

        snapshot(callback: any, type: any, encoderOptions: any): void;

        destroy(): void;

      }

      namespace CanvasRenderer {
      }

    }

    class Color {
      r: number;

      g: number;

      b: number;

      a: number;

      gl: any[];

      _color: number;

      _color32: number;

      _rgba: string;

      transparent(): Phaser.Display.Color;

      setTo(red: number, green: number, blue: number, alpha: number): Phaser.Display.Color;

      setGLTo(red: number, green: number, blue: number, alpha: number): Phaser.Display.Color;

      setFromRGB(color: any): Phaser.Display.Color;

      update(): Phaser.Display.Color;

      clone(): Phaser.Display.Color;

      color: number;

      color32: number;

      rgba: string;

      redGL: number;

      greenGL: number;

      blueGL: number;

      alphaGL: number;

      red: number;

      green: number;

      blue: number;

      alpha: number;

      static ColorToRGBA(color: number): ColorObject;

      static ComponentToHex(color: number): string;

      static GetColor(red: number, green: number, blue: number): number;

      static GetColor32(red: number, green: number, blue: number, alpha: number): number;

      static HexStringToColor(hex: string): Phaser.Display.Color;

      static HSLToColor(h: number, s: number, l: number): Phaser.Display.Color;

      static HSVColorWheel(s: number, v: number): any[];

      static HSVToRGB(h: number, s: number, v: number): ColorObject;

      static HueToComponent(p: number, q: number, t: number): number;

    }

    namespace Color {
    }

    class Color {
      static IntegerToColor(input: number): Phaser.Display.Color;

      static IntegerToRGB(input: number): ColorObject;

      static ObjectToColor(input: any): Phaser.Display.Color;

      static RandomRGB(min: number, max: number): Phaser.Display.Color;

      static RGBStringToColor(rgb: string): Phaser.Display.Color;

      static RGBToHSV(r: number, g: number, b: number): any;

      static RGBToString(r: number, g: number, b: number, a: number, prefix: string): string;

      static ValueToColor(input: string | number | any): Phaser.Display.Color;

    }

    namespace Color {
      class Interpolate {
        static RGBWithRGB(r1: number, g1: number, b1: number, r2: number, g2: number, b2: number, length: number, index: number): ColorObject;

        static ColorWithColor(color1: Phaser.Display.Color, color2: Phaser.Display.Color, length: number, index: number): ColorObject;

        static ColorWithRGB(color1: Phaser.Display.Color, r: number, g: number, b: number, length: number, index: number): ColorObject;

      }

      namespace Interpolate {
      }

    }

    class Masks {
    }

    namespace Masks {
    }

  }

  class DOM {
    static AddToDOM(element: any, parent: string | any, overflowHidden: boolean): any;

    static DOMContentLoaded(callback: any): void;

    static ParseXML(data: string): any;

    static RemoveFromDOM(element: any): void;

  }

  namespace DOM {
    class RequestAnimationFrame {
      isRunning: boolean;

      callback: any;

      tick: DOMHighResTimeStamp;

      isSetTimeOut: boolean;

      timeOutID: number;

      lastTime: number;

      step: any;

      stepTimeout: any;

      start(callback: any, forceSetTimeOut: boolean): void;

      stop(): void;

      destroy(): void;

    }

    namespace RequestAnimationFrame {
    }

  }

  class EventEmitter {
    shutdown(): void;

    destroy(): void;

    eventNames(): any[];

    listeners(event: string | symbol): any[];

    listenerCount(event: string | symbol): number;

    emit(event: string | symbol): Boolean;

    on(event: string | symbol, fn: any, context: *): EventEmitter;

    addListener(event: string | symbol, fn: any, context: *): EventEmitter;

    once(event: string | symbol, fn: any, context: *): EventEmitter;

    removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

    off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

    removeAllListeners(event: string | symbol): EventEmitter;

    eventNames(): any[];

    listeners(event: string | symbol): any[];

    listenerCount(event: string | symbol): number;

    emit(event: string | symbol): Boolean;

    on(event: string | symbol, fn: any, context: *): EventEmitter;

    addListener(event: string | symbol, fn: any, context: *): EventEmitter;

    once(event: string | symbol, fn: any, context: *): EventEmitter;

    removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

    off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

    removeAllListeners(event: string | symbol): EventEmitter;

  }

  namespace EventEmitter {
  }

  class Game {
    config: Phaser.Boot.Config;

    renderer: Phaser.Renderer.Canvas.CanvasRenderer;

    canvas: HTMLCanvasElement;

    context: CanvasRenderingContext2D;

    isBooted: boolean;

    isRunning: boolean;

    events: EventEmitter;

    anims: Phaser.Animations.AnimationManager;

    textures: Phaser.Textures.TextureManager;

    cache: Phaser.Cache.CacheManager;

    registry: Phaser.Data.DataManager;

    input: Phaser.Input.InputManager;

    scene: Phaser.Scenes.SceneManager;

    device: Phaser.Device;

    sound: Phaser.BaseSoundManager;

    loop: Phaser.Boot.TimeStep;

    plugins: Phaser.Boot.PluginManager;

    onStepCallback: any;

    boot(): void;

    start(): void;

    step(time: number, delta: number): void;

    onHidden(): void;

    onVisible(): void;

    onBlur(): void;

    onFocus(): void;

    destroy(): void;

  }

  namespace Game {
  }

  class GameObjects {
  }

  namespace GameObjects {
    class DynamicBitmapText {
      font: string;

      fontData: any;

      text: string;

      fontSize: number;

      _bounds: any;

      scrollX: number;

      scrollY: number;

      cropWidth: number;

      cropHeight: number;

      "displayCallback;": any;

      setSize(width: number, height: number): Phaser.GameObjects.DynamicBitmapText;

      setDisplayCallback(callback: any): Phaser.GameObjects.DynamicBitmapText;

      setFontSize(size: number): Phaser.GameObjects.DynamicBitmapText;

      setText(text: string | Array.<string>): Phaser.GameObjects.DynamicBitmapText;

      setScrollX(value: number): Phaser.GameObjects.DynamicBitmapText;

      setScrollY(value: number): Phaser.GameObjects.DynamicBitmapText;

      getTextBounds(round: boolean): any;

      width: number;

      height: number;

      toJSON(): any;

      renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.GameObjects.DynamicBitmapText, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, gameObject: Phaser.GameObjects.DynamicBitmapText, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      willRender(): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

      clearAlpha(): Phaser.GameObjects.GameObject;

      setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      alpha: number;

      alphaTopLeft: number;

      alphaTopRight: number;

      alphaBottomLeft: number;

      alphaBottomRight: number;

      blendMode: number;

      setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

      depth: number;

      setDepth(value: number): Phaser.GameObjects.GameObject;

      originX: number;

      originY: number;

      displayOriginX: number;

      displayOriginY: number;

      setOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      setOriginFromFrame(): Phaser.GameObjects.GameObject;

      setDisplayOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      updateDisplayOrigin(): Phaser.GameObjects.GameObject;

      defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      initPipeline(pipelineName: string): boolean;

      setPipeline(pipelineName: string): boolean;

      resetPipeline(): boolean;

      getPipelineName(): string;

      texture: Phaser.Textures.Texture;

      frame: Phaser.Textures.Frame;

      setTexture(key: string, frame: string | number): Phaser.GameObjects.GameObject;

      setFrame(frame: string | number): Phaser.GameObjects.GameObject;

      clearTint(): Phaser.GameObjects.GameObject;

      setTint(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      tintTopLeft: number;

      tintTopRight: number;

      tintBottomLeft: number;

      tintBottomRight: number;

      tint: number;

      x: number;

      y: number;

      z: number;

      w: number;

      scaleX: number;

      scaleY: number;

      angle: number;

      rotation: number;

      setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

      setRotation(radians: number): Phaser.GameObjects.GameObject;

      setAngle(degrees: number): Phaser.GameObjects.GameObject;

      setScale(x: number, y: number): Phaser.GameObjects.GameObject;

      setX(value: number): Phaser.GameObjects.GameObject;

      setY(value: number): Phaser.GameObjects.GameObject;

      setZ(value: number): Phaser.GameObjects.GameObject;

      setW(value: number): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

      scrollFactorX: number;

      scrollFactorY: number;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

    }

    namespace DynamicBitmapText {
    }

    class BitmapText {
      font: string;

      fontData: any;

      text: string;

      fontSize: number;

      _bounds: any;

      setFontSize(size: number): Phaser.GameObjects.BitmapText;

      setText(text: string | Array.<string>): Phaser.GameObjects.BitmapText;

      getTextBounds(round: boolean): any;

      width: number;

      height: number;

      toJSON(): any;

      renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.GameObjects.BitmapText, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, gameObject: Phaser.GameObjects.BitmapText, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      willRender(): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

      clearAlpha(): Phaser.GameObjects.GameObject;

      setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      alpha: number;

      alphaTopLeft: number;

      alphaTopRight: number;

      alphaBottomLeft: number;

      alphaBottomRight: number;

      blendMode: number;

      setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

      depth: number;

      setDepth(value: number): Phaser.GameObjects.GameObject;

      originX: number;

      originY: number;

      displayOriginX: number;

      displayOriginY: number;

      setOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      setOriginFromFrame(): Phaser.GameObjects.GameObject;

      setDisplayOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      updateDisplayOrigin(): Phaser.GameObjects.GameObject;

      defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      initPipeline(pipelineName: string): boolean;

      setPipeline(pipelineName: string): boolean;

      resetPipeline(): boolean;

      getPipelineName(): string;

      scaleMode: number;

      setScaleMode(value: number): Phaser.GameObjects.GameObject;

      texture: Phaser.Textures.Texture;

      frame: Phaser.Textures.Frame;

      setTexture(key: string, frame: string | number): Phaser.GameObjects.GameObject;

      setFrame(frame: string | number): Phaser.GameObjects.GameObject;

      clearTint(): Phaser.GameObjects.GameObject;

      setTint(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      tintTopLeft: number;

      tintTopRight: number;

      tintBottomLeft: number;

      tintBottomRight: number;

      tint: number;

      x: number;

      y: number;

      z: number;

      w: number;

      scaleX: number;

      scaleY: number;

      angle: number;

      rotation: number;

      setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

      setRotation(radians: number): Phaser.GameObjects.GameObject;

      setAngle(degrees: number): Phaser.GameObjects.GameObject;

      setScale(x: number, y: number): Phaser.GameObjects.GameObject;

      setX(value: number): Phaser.GameObjects.GameObject;

      setY(value: number): Phaser.GameObjects.GameObject;

      setZ(value: number): Phaser.GameObjects.GameObject;

      setW(value: number): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

      scrollFactorX: number;

      scrollFactorY: number;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

    }

    namespace BitmapText {
    }

    class Blitter {
      children: Phaser.GameObjects.DisplayList;

      renderList: any[];

      create(x: number, y: number, frame: string | number | Phaser.Textures.Frame, visible: boolean, index: number): Phaser.GameObjects.Blitter.Bob;

      createFromCallback(callback: any, quantity: number, frame: string, visible: boolean): Array.<Phaser.GameObjects.Blitter.Bob>;

      createMultiple(quantity: number, frame: string, visible: boolean): Array.<Phaser.GameObjects.Blitter.Bob>;

      childCanRender(child: Phaser.GameObjects.Blitter.Bob): boolean;

      getRenderList(): any;

      clear(): void;

      renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.GameObjects.Blitter, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, gameObject: Phaser.GameObjects.Blitter, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      toJSON(): any;

      willRender(): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

      clearAlpha(): Phaser.GameObjects.GameObject;

      setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      alpha: number;

      alphaTopLeft: number;

      alphaTopRight: number;

      alphaBottomLeft: number;

      alphaBottomRight: number;

      blendMode: number;

      setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

      depth: number;

      setDepth(value: number): Phaser.GameObjects.GameObject;

      defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      initPipeline(pipelineName: string): boolean;

      setPipeline(pipelineName: string): boolean;

      resetPipeline(): boolean;

      getPipelineName(): string;

      scaleMode: number;

      setScaleMode(value: number): Phaser.GameObjects.GameObject;

      scrollFactorX: number;

      scrollFactorY: number;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

      width: number;

      height: number;

      displayWidth: number;

      displayHeight: number;

      setSizeToFrame(frame: Phaser.Textures.Frame): Phaser.GameObjects.GameObject;

      setSize(width: number, height: number): Phaser.GameObjects.GameObject;

      setDisplaySize(width: number, height: number): Phaser.GameObjects.GameObject;

      texture: Phaser.Textures.Texture;

      frame: Phaser.Textures.Frame;

      setTexture(key: string, frame: string | number): Phaser.GameObjects.GameObject;

      setFrame(frame: string | number): Phaser.GameObjects.GameObject;

      x: number;

      y: number;

      z: number;

      w: number;

      scaleX: number;

      scaleY: number;

      angle: number;

      rotation: number;

      setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

      setRotation(radians: number): Phaser.GameObjects.GameObject;

      setAngle(degrees: number): Phaser.GameObjects.GameObject;

      setScale(x: number, y: number): Phaser.GameObjects.GameObject;

      setX(value: number): Phaser.GameObjects.GameObject;

      setY(value: number): Phaser.GameObjects.GameObject;

      setZ(value: number): Phaser.GameObjects.GameObject;

      setW(value: number): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

    }

    namespace Blitter {
      class Bob {
        parent: Phaser.GameObjects.Blitter;

        x: number;

        y: number;

        frame: string;

        data: any;

        _visible: boolean;

        _alpha: number;

        flipX: boolean;

        flipY: boolean;

        setFrame(frame: any): Phaser.GameObjects.Blitter.Bob;

        resetFlip(): Phaser.GameObjects.Blitter.Bob;

        reset(x: any, y: any, frame: any): Phaser.GameObjects.Blitter.Bob;

        setFlipX(value: any): Phaser.GameObjects.Blitter.Bob;

        setFlipY(value: any): Phaser.GameObjects.Blitter.Bob;

        setFlip(x: any, y: any): Phaser.GameObjects.Blitter.Bob;

        setVisible(value: any): Phaser.GameObjects.Blitter.Bob;

        setAlpha(value: any): Phaser.GameObjects.Blitter.Bob;

        destroy(): void;

        visible: boolean;

        alpha: number;

      }

      namespace Bob {
      }

    }

    class Components {
      Origin: any;

      Pipeline: any;

      ScaleMode: any;

      ScrollFactor: any;

      Size: any;

      Texture: any;

      Tint: any;

      Transform: any;

      Visible: any;

      Acceleration: any;

      Angular: any;

      Bounce: any;

      Debug: any;

      Drag: any;

      Enable: any;

      Friction: any;

      Gravity: any;

      Immovable: any;

      Mass: any;

      Size: any;

      Velocity: any;

      Acceleration: any;

      BodyScale: any;

      BodyType: any;

      Bounce: any;

      CheckAgainst: any;

      Collides: any;

      Debug: any;

      Friction: any;

      Gravity: any;

      Offset: any;

      SetGameObject: any;

      Velocity: any;

      Bounce: any;

      Collision: any;

      Force: any;

      Friction: any;

      Gravity: any;

      Mass: any;

      Sensor: any;

      SetBody: any;

      Sleep: any;

      Static: any;

      Transform: any;

      Velocity: any;

      static CalculateFacesAt(tileX: number, tileY: number, layer: Phaser.Tilemaps.LayerData): void;

      static CalculateFacesWithin(tileX: number, tileY: number, width: number, height: number, layer: Phaser.Tilemaps.LayerData): void;

      static Copy(srcTileX: number, srcTileY: number, width: number, height: number, destTileX: number, destTileY: number, destTileY: number, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): void;

      static CreateFromTiles(indexes: number | any[], replacements: number | any[], spriteConfig: any, scene: Phaser.Scene, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Array.<Phaser.GameObjects.Sprite>;

      static CullTiles(layer: Phaser.Tilemaps.LayerData, camera: Phaser.Cameras.Scene2D.Camera, outputArray: any[]): Array.<Phaser.Tilemaps.Tile>;

      static Fill(index: number, tileX: number, tileY: number, width: number, height: number, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): void;

      static FilterTiles(callback: any, context: any, tileX: number, tileY: number, width: number, height: number, filteringOptions: any, layer: Phaser.Tilemaps.LayerData): Array.<Phaser.Tilemaps.Tile>;

      static FindByIndex(index: number, skip: number, reverse: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

      static FindTile(callback: any, context: any, tileX: number, tileY: number, width: number, height: number, filteringOptions: any, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

      static ForEachTile(callback: any, context: any, tileX: number, tileY: number, width: number, height: number, filteringOptions: any, layer: Phaser.Tilemaps.LayerData): void;

      static GetTileAt(tileX: number, tileY: number, nonNull: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

      static GetTileAtWorldXY(worldX: number, worldY: number, nonNull: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

      static GetTilesWithin(tileX: number, tileY: number, width: number, height: number, filteringOptions: any, layer: Phaser.Tilemaps.LayerData): Array.<Phaser.Tilemaps.Tile>;

      static GetTilesWithinShape(shape: Phaser.Geom.Circle | Phaser.Geom.Line | Phaser.Geom.Rectangle | Phaser.Geom.Triangle, filteringOptions: any, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Array.<Phaser.Tilemaps.Tile>;

      static GetTilesWithinWorldXY(worldX: number, worldY: number, width: number, height: number, filteringOptions: any, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Array.<Phaser.Tilemaps.Tile>;

      static HasTileAt(tileX: number, tileY: number, layer: Phaser.Tilemaps.LayerData): boolean;

      static HasTileAtWorldXY(worldX: number, worldY: number, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): boolean;

    }

    namespace Components {
      class TransformMatrix {
        matrix: Float32Array;

        decomposedMatrix: any;

        loadIdentity(): Phaser.GameObjects.Components.TransformMatrix;

        translate(x: number, y: number): Phaser.GameObjects.Components.TransformMatrix;

        scale(x: number, y: number): Phaser.GameObjects.Components.TransformMatrix;

        rotate(radian: number): Phaser.GameObjects.Components.TransformMatrix;

        multiply(rhs: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

        transform(a: number, b: number, c: number, d: number, tx: number, ty: number): Phaser.GameObjects.Components.TransformMatrix;

        transformPoint(x: number, y: number, point: Phaser.Geom.Point | Phaser.Math.Vec2 | any): Phaser.Geom.Point;

        invert(): Phaser.GameObjects.Components.TransformMatrix;

        setTransform(a: number, b: number, c: number, d: number, tx: number, ty: number): Phaser.GameObjects.Components.TransformMatrix;

        decomposeMatrix(): any;

        applyITRS(x: number, y: number, rotation: number, scaleX: number, scaleY: number): Phaser.GameObjects.Components.TransformMatrix;

      }

      namespace TransformMatrix {
      }

      class TextStyle {
        parent: Phaser.GameObjects.Text;

        fontFamily: string;

        fontSize: string;

        fontStyle: string;

        backgroundColor: string;

        color: string;

        stroke: string;

        strokeThickness: number;

        shadowOffsetX: number;

        shadowOffsetY: number;

        shadowColor: string;

        shadowBlur: number;

        shadowStroke: boolean;

        shadowFill: boolean;

        align: string;

        maxLines: number;

        fixedWidth: number;

        fixedHeight: number;

        rtl: boolean;

        testString: string;

        _font: string;

        setStyle(style: any, updateText: any): void;

        syncFont(canvas: any, context: any): void;

        syncStyle(canvas: any, context: any): void;

        syncShadow(context: any, enabled: any): void;

        update(recalculateMetrics: boolean): Phaser.GameObjects.Text;

        setFont(font: string | any): Phaser.GameObjects.Text;

        setFontFamily(family: any): Phaser.GameObjects.Text;

        setFontStyle(style: any): Phaser.GameObjects.Text;

        setFontSize(size: any): Phaser.GameObjects.Text;

        setTestString(string: any): Phaser.GameObjects.Text;

        setFixedSize(width: number, height: number): Phaser.GameObjects.Text;

        setBackgroundColor(): Phaser.GameObjects.Text;

        setFill(color: string): Phaser.GameObjects.Text;

        setColor(color: string): Phaser.GameObjects.Text;

        setStroke(color: string, thickness: number): Phaser.GameObjects.Text;

        setShadow(x: number, y: number, color: string, blur: number, shadowStroke: boolean, shadowFill: boolean): Phaser.GameObjects.Text;

        setShadowOffset(x: number, y: number): Phaser.GameObjects.Text;

        setShadowColor(color: string): Phaser.GameObjects.Text;

        setShadowBlur(blur: number): Phaser.GameObjects.Text;

        setShadowStroke(enabled: boolean): Phaser.GameObjects.Text;

        setShadowFill(enabled: boolean): Phaser.GameObjects.Text;

        setWordWrapWidth(width: number, useAdvancedWrap: boolean): Phaser.GameObjects.Text;

        setWordWrapCallback(callback: any, scope: any): Phaser.GameObjects.Text;

        setAlign(align: string): Phaser.GameObjects.Text;

        setMaxLines(max: number): Phaser.GameObjects.Text;

        getTextMetrics(): any;

        toJSON(): any;

        destroy(): void;

      }

      namespace TextStyle {
      }

    }

    class DisplayList {
      sortChildrenFlag: boolean;

      scene: Phaser.Scene;

      systems: Phaser.Scenes.Systems;

      boot(): void;

      queueDepthSort(): void;

      depthSort(): void;

      sortByDepth(childA: Phaser.GameObjects.GameObject, childB: Phaser.GameObjects.GameObject): number;

      sortGameObjects(gameObjects: Array.<Phaser.GameObjects.GameObject>): any[];

      getTopGameObject(gameObjects: Array.<Phaser.GameObjects.GameObject>): Phaser.GameObjects.GameObject;

      parent: any;

      list: any[];

      position: number;

      add(child: any): any;

      addAt(child: any, index: number): any;

      addMultiple(children: any[]): any[];

      getAt(index: number): any;

      getIndex(child: any): number;

      sort(children: any[]): any[];

      sortIndexHandler(childA: any, childB: any): number;

      getByKey(property: string, value: any): any;

      getByName(name: string): any;

      getRandom(startIndex: number, length: number): any;

      getFirst(property: any, value: any, startIndex: any, endIndex: any): any;

      getAll(property: string, value: any, startIndex: number, endIndex: number): any[];

      count(property: string, value: any): number;

      swap(child1: any, child2: any): void;

      moveTo(child: any, index: number): any;

      remove(child: any): any;

      removeAt(index: number): any;

      removeBetween(beginIndex: number, endIndex: number): any[];

      removeAll(): Phaser.Structs.List;

      bringToTop(child: any): any;

      sendToBack(child: any): any;

      moveUp(child: any): any;

      moveDown(child: any): any;

      reverse(): Phaser.Structs.List;

      shuffle(): Phaser.Structs.List;

      replace(oldChild: any, newChild: any): any;

      exists(child: any): boolean;

      setAll(key: string, value: any): void;

      each(callback: any, thisArg: any, arguments: *): void;

      shutdown(): void;

      destroy(): void;

      length: number;

      first: number;

      last: number;

      next: number;

      previous: number;

    }

    namespace DisplayList {
    }

    class GameObject {
      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      toJSON(): any;

      willRender(): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

    }

    namespace GameObject {
    }

    class GameObjectCreator {
      scene: Phaser.Scene;

      systems: Phaser.Scenes.Systems;

      displayList: Phaser.GameObjects.DisplayList;

      "updateList;": Phaser.GameObjects.UpdateList;

      boot(): void;

      shutdown(): void;

      destroy(): void;

      graphics(config: any): Phaser.GameObjects.Graphics;

      group(config: any): Phaser.GameObjects.Group;

      image(config: any): Phaser.GameObjects.Image;

      mesh(config: any): Phaser.GameObjects.Mesh;

      particles(config: any): Phaser.GameObjects.Particles.ParticleEmitterManager;

      quad(config: any): Phaser.GameObjects.Quad;

      sprite(config: any): Phaser.GameObjects.Sprite;

      sprite3D(config: any): Phaser.GameObjects.Sprite3D;

      text(config: any): Phaser.GameObjects.Text;

      tileSprite(config: any): Phaser.GameObjects.TileSprite;

      zone(config: any): Phaser.GameObjects.Zone;

      tilemap(config: any): Phaser.Tilemaps.Tilemap;

      tween(config: any): Phaser.Tweens.Tween;

    }

    namespace GameObjectCreator {
    }

    class GameObjectFactory {
      scene: Phaser.Scene;

      systems: Phaser.Scenes.Systems;

      displayList: Phaser.GameObjects.DisplayList;

      "updateList;": Phaser.GameObjects.UpdateList;

      boot(): void;

      existing(child: Phaser.GameObjects.GameObject): Phaser.GameObjects.GameObject;

      shutdown(): void;

      destroy(): void;

      graphics(config: any): Phaser.GameObjects.Graphics;

      group(children: any[] | any, config: any): Phaser.GameObjects.Group;

      image(x: number, y: number, texture: string, frame: string | number): Phaser.GameObjects.Image;

      mesh(x: number, y: number, vertices: any[], uv: any[], colors: any[], alphas: any[], texture: string, frame: string | number): Phaser.GameObjects.Mesh;

      particles(texture: string, frame: string | number | any, emitters: any): Phaser.GameObjects.Particles.ParticleEmitterManager;

      follower(path: Phaser.Curves.Path, x: number, y: number, texture: string, frame: string | number): Phaser.GameObjects.PathFollower;

      quad(x: number, y: number, texture: string, frame: string | number): Phaser.GameObjects.Quad;

      sprite(x: number, y: number, texture: string, frame: string | number): Phaser.GameObjects.Sprite;

      sprite3D(x: number, y: number, z: number, texture: string, frame: string | number): Phaser.GameObjects.Sprite3D;

      text(x: number, y: number, text: string | Array.<string>, style: any): Phaser.GameObjects.Text;

      tileSprite(x: number, y: number, width: number, height: number, texture: string, frame: string | number): Phaser.GameObjects.TileSprite;

      zone(x: number, y: number, width: number, height: number): Phaser.GameObjects.Zone;

      tilemap(key: string, tileWidth: number, tileHeight: number, width: number, height: number, data: Array.<Array.<integer>>, insertNull: boolean): Phaser.Tilemaps.Tilemap;

      tween(config: any): Phaser.Tweens.Tween;

    }

    namespace GameObjectFactory {
    }

    class Graphics {
      displayOriginX: number;

      displayOriginY: number;

      commandBuffer: any[];

      defaultFillColor: number;

      defaultFillAlpha: number;

      defaultStrokeWidth: number;

      defaultStrokeColor: number;

      defaultStrokeAlpha: number;

      _lineWidth: number;

      setDefaultStyles(options: any): Phaser.GameObjects.Graphics;

      lineStyle(lineWidth: number, color: number, alpha: number): Phaser.GameObjects.Graphics;

      fillStyle(color: number, alpha: number): Phaser.GameObjects.Graphics;

      beginPath(): Phaser.GameObjects.Graphics;

      closePath(): Phaser.GameObjects.Graphics;

      fillPath(): Phaser.GameObjects.Graphics;

      strokePath(): Phaser.GameObjects.Graphics;

      fillCircleShape(circle: Phaser.Geom.Circle): Phaser.GameObjects.Graphics;

      strokeCircleShape(circle: Phaser.Geom.Circle): Phaser.GameObjects.Graphics;

      fillCircle(x: number, y: number, radius: number): Phaser.GameObjects.Graphics;

      strokeCircle(x: number, y: number, radius: number): Phaser.GameObjects.Graphics;

      fillRectShape(rect: Phaser.Geom.Rectangle): Phaser.GameObjects.Graphics;

      strokeRectShape(rect: Phaser.Geom.Rectangle): Phaser.GameObjects.Graphics;

      fillRect(x: number, y: number, width: number, height: number): Phaser.GameObjects.Graphics;

      strokeRect(x: number, y: number, width: number, height: number): Phaser.GameObjects.Graphics;

      fillPointShape(point: Phaser.Geom.Point | Phaser.Math.Vector2 | any, size: number): Phaser.GameObjects.Graphics;

      fillPoint(x: number, y: number, size: number): Phaser.GameObjects.Graphics;

      fillTriangleShape(triangle: Phaser.Geom.Triangle): Phaser.GameObjects.Graphics;

      strokeTriangleShape(triangle: Phaser.Geom.Triangle): Phaser.GameObjects.Graphics;

      fillTriangle(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): Phaser.GameObjects.Graphics;

      strokeTriangle(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): Phaser.GameObjects.Graphics;

      strokeLineShape(line: Phaser.Geom.Line): Phaser.GameObjects.Graphics;

      lineBetween(x1: number, y1: number, x2: number, y2: number): Phaser.GameObjects.Graphics;

      lineTo(x: number, y: number): Phaser.GameObjects.Graphics;

      moveTo(x: number, y: number): Phaser.GameObjects.Graphics;

      lineFxTo(x: number, y: number, width: number, rgb: number): Phaser.GameObjects.Graphics;

      moveFxTo(x: number, y: number, width: number, rgb: number): Phaser.GameObjects.Graphics;

      strokePoints(points: any[] | Array.<Phaser.Geom.Point>, autoClose: boolean, endIndex: number): Phaser.GameObjects.Graphics;

      fillPoints(points: any[] | Array.<Phaser.Geom.Point>, autoClose: boolean, endIndex: number): Phaser.GameObjects.Graphics;

      strokeEllipseShape(ellipse: Phaser.Geom.Ellipse, smoothness: number): Phaser.GameObjects.Graphics;

      strokeEllipse(x: number, y: number, width: number, height: number, smoothness: number): Phaser.GameObjects.Graphics;

      fillEllipseShape(ellipse: Phaser.Geom.Ellipse, smoothness: number): Phaser.GameObjects.Graphics;

      fillEllipse(x: number, y: number, width: number, height: number, smoothness: number): Phaser.GameObjects.Graphics;

      arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): Phaser.GameObjects.Graphics;

      save(): Phaser.GameObjects.Graphics;

      restore(): Phaser.GameObjects.Graphics;

      translate(x: number, y: number): Phaser.GameObjects.Graphics;

      scale(x: number, y: number): Phaser.GameObjects.Graphics;

      rotate(radians: number): Phaser.GameObjects.Graphics;

      clear(): Phaser.GameObjects.Graphics;

      generateTexture(key: string | HTMLCanvasElement, width: number, height: number): Phaser.GameObjects.Graphics;

      renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.GameObjects.Graphics, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera, renderTargetCtx: any, allowClip: boolean): void;

      renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, graphics: Phaser.GameObjects.Graphics, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      toJSON(): any;

      willRender(): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

      clearAlpha(): Phaser.GameObjects.GameObject;

      setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      alpha: number;

      alphaTopLeft: number;

      alphaTopRight: number;

      alphaBottomLeft: number;

      alphaBottomRight: number;

      blendMode: number;

      setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

      depth: number;

      setDepth(value: number): Phaser.GameObjects.GameObject;

      defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      initPipeline(pipelineName: string): boolean;

      setPipeline(pipelineName: string): boolean;

      resetPipeline(): boolean;

      getPipelineName(): string;

      x: number;

      y: number;

      z: number;

      w: number;

      scaleX: number;

      scaleY: number;

      angle: number;

      rotation: number;

      setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

      setRotation(radians: number): Phaser.GameObjects.GameObject;

      setAngle(degrees: number): Phaser.GameObjects.GameObject;

      setScale(x: number, y: number): Phaser.GameObjects.GameObject;

      setX(value: number): Phaser.GameObjects.GameObject;

      setY(value: number): Phaser.GameObjects.GameObject;

      setZ(value: number): Phaser.GameObjects.GameObject;

      setW(value: number): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

      scrollFactorX: number;

      scrollFactorY: number;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

    }

    namespace Graphics {
    }

    class Group {
      scene: Phaser.Scene;

      children: Phaser.Structs.Set;

      isParent: boolean;

      classType: any;

      active: boolean;

      maxSize: number;

      defaultKey: string;

      defaultFrame: string;

      runChildUpdate: boolean;

      createCallback: any;

      removeCallback: any;

      createMultipleCallback: any;

      create(x: number, y: number, texture: string, frame: string | number, visible: boolean): Phaser.GameObjects.GameObject;

      createMultiple(config: any): Array.<Phaser.GameObjects.GameObject>;

      createFromConfig(options: any): Array.<Phaser.GameObjects.GameObject>;

      preUpdate(time: number, delta: number): void;

      add(child: Phaser.GameObjects.GameObject, addToScene: boolean): Phaser.GameObjects.Group;

      addMultiple(children: Array.<Phaser.GameObjects.GameObject>, addToScene: boolean): Phaser.GameObjects.Group;

      remove(child: Phaser.GameObjects.GameObject, removeFromScene: boolean): Phaser.GameObjects.Group;

      clear(removeFromScene: boolean): Phaser.GameObjects.Group;

      contains(child: Phaser.GameObjects.GameObject): boolean;

      getChildren(): Array.<Phaser.GameObjects.GameObject>;

      getLength(): number;

      getFirst(state: boolean, createIfNull: boolean, x: number, y: number, texture: string, frame: string | number, visible: boolean): Phaser.GameObjects.GameObject;

      get(x: number, y: number, texture: string, frame: string | number, visible: boolean): Phaser.GameObjects.GameObject;

      getFirstAlive(createIfNull: boolean, x: number, y: number, texture: string, frame: string | number, visible: boolean): Phaser.GameObjects.GameObject;

      getFirstDead(createIfNull: boolean, x: number, y: number, texture: string, frame: string | number, visible: boolean): Phaser.GameObjects.GameObject;

      playAnimation(key: string, startFrame: string): Phaser.GameObjects.Group;

      isFull(): boolean;

      countActive(value: boolean): number;

      getTotalUsed(): number;

      getTotalFree(): number;

      setDepth(value: number, step: number): Phaser.GameObjects.Group;

      kill(gameObject: Phaser.GameObjects.GameObject): void;

      killAndHide(gameObject: Phaser.GameObjects.GameObject): void;

      toggleVisible(): Phaser.GameObjects.Group;

      destroy(): void;

    }

    namespace Group {
    }

    class Image {
      renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.GameObjects.Image, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, src: Phaser.GameObjects.Image, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      toJSON(): any;

      willRender(): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

      clearAlpha(): Phaser.GameObjects.GameObject;

      setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      alpha: number;

      alphaTopLeft: number;

      alphaTopRight: number;

      alphaBottomLeft: number;

      alphaBottomRight: number;

      blendMode: number;

      setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

      depth: number;

      setDepth(value: number): Phaser.GameObjects.GameObject;

      flipX: boolean;

      flipY: boolean;

      toggleFlipX(): Phaser.GameObjects.GameObject;

      toggleFlipY(): Phaser.GameObjects.GameObject;

      setFlipX(value: boolean): Phaser.GameObjects.GameObject;

      setFlipY(value: boolean): Phaser.GameObjects.GameObject;

      setFlip(x: boolean, y: boolean): Phaser.GameObjects.GameObject;

      resetFlip(): Phaser.GameObjects.GameObject;

      getCenter(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBounds(output: Phaser.Geom.Rectangle | any): Phaser.Geom.Rectangle;

      originX: number;

      originY: number;

      displayOriginX: number;

      displayOriginY: number;

      setOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      setOriginFromFrame(): Phaser.GameObjects.GameObject;

      setDisplayOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      updateDisplayOrigin(): Phaser.GameObjects.GameObject;

      defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      initPipeline(pipelineName: string): boolean;

      setPipeline(pipelineName: string): boolean;

      resetPipeline(): boolean;

      getPipelineName(): string;

      scaleMode: number;

      setScaleMode(value: number): Phaser.GameObjects.GameObject;

      scrollFactorX: number;

      scrollFactorY: number;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

      width: number;

      height: number;

      displayWidth: number;

      displayHeight: number;

      setSizeToFrame(frame: Phaser.Textures.Frame): Phaser.GameObjects.GameObject;

      setSize(width: number, height: number): Phaser.GameObjects.GameObject;

      setDisplaySize(width: number, height: number): Phaser.GameObjects.GameObject;

      texture: Phaser.Textures.Texture;

      frame: Phaser.Textures.Frame;

      setTexture(key: string, frame: string | number): Phaser.GameObjects.GameObject;

      setFrame(frame: string | number): Phaser.GameObjects.GameObject;

      clearTint(): Phaser.GameObjects.GameObject;

      setTint(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      tintTopLeft: number;

      tintTopRight: number;

      tintBottomLeft: number;

      tintBottomRight: number;

      tint: number;

      x: number;

      y: number;

      z: number;

      w: number;

      scaleX: number;

      scaleY: number;

      angle: number;

      rotation: number;

      setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

      setRotation(radians: number): Phaser.GameObjects.GameObject;

      setAngle(degrees: number): Phaser.GameObjects.GameObject;

      setScale(x: number, y: number): Phaser.GameObjects.GameObject;

      setX(value: number): Phaser.GameObjects.GameObject;

      setY(value: number): Phaser.GameObjects.GameObject;

      setZ(value: number): Phaser.GameObjects.GameObject;

      setW(value: number): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

      renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.GameObjects.Image, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, src: Phaser.GameObjects.Image, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      toJSON(): any;

      willRender(): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

      clearAlpha(): Phaser.GameObjects.GameObject;

      setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      alpha: number;

      alphaTopLeft: number;

      alphaTopRight: number;

      alphaBottomLeft: number;

      alphaBottomRight: number;

      blendMode: number;

      setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

      depth: number;

      setDepth(value: number): Phaser.GameObjects.GameObject;

      flipX: boolean;

      flipY: boolean;

      toggleFlipX(): Phaser.GameObjects.GameObject;

      toggleFlipY(): Phaser.GameObjects.GameObject;

      setFlipX(value: boolean): Phaser.GameObjects.GameObject;

      setFlipY(value: boolean): Phaser.GameObjects.GameObject;

      setFlip(x: boolean, y: boolean): Phaser.GameObjects.GameObject;

      resetFlip(): Phaser.GameObjects.GameObject;

      getCenter(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBounds(output: Phaser.Geom.Rectangle | any): Phaser.Geom.Rectangle;

      originX: number;

      originY: number;

      displayOriginX: number;

      displayOriginY: number;

      setOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      setOriginFromFrame(): Phaser.GameObjects.GameObject;

      setDisplayOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      updateDisplayOrigin(): Phaser.GameObjects.GameObject;

      defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      initPipeline(pipelineName: string): boolean;

      setPipeline(pipelineName: string): boolean;

      resetPipeline(): boolean;

      getPipelineName(): string;

      scaleMode: number;

      setScaleMode(value: number): Phaser.GameObjects.GameObject;

      scrollFactorX: number;

      scrollFactorY: number;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

      width: number;

      height: number;

      displayWidth: number;

      displayHeight: number;

      setSizeToFrame(frame: Phaser.Textures.Frame): Phaser.GameObjects.GameObject;

      setSize(width: number, height: number): Phaser.GameObjects.GameObject;

      setDisplaySize(width: number, height: number): Phaser.GameObjects.GameObject;

      texture: Phaser.Textures.Texture;

      frame: Phaser.Textures.Frame;

      setTexture(key: string, frame: string | number): Phaser.GameObjects.GameObject;

      setFrame(frame: string | number): Phaser.GameObjects.GameObject;

      clearTint(): Phaser.GameObjects.GameObject;

      setTint(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      tintTopLeft: number;

      tintTopRight: number;

      tintBottomLeft: number;

      tintBottomRight: number;

      tint: number;

      x: number;

      y: number;

      z: number;

      w: number;

      scaleX: number;

      scaleY: number;

      angle: number;

      rotation: number;

      setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

      setRotation(radians: number): Phaser.GameObjects.GameObject;

      setAngle(degrees: number): Phaser.GameObjects.GameObject;

      setScale(x: number, y: number): Phaser.GameObjects.GameObject;

      setX(value: number): Phaser.GameObjects.GameObject;

      setY(value: number): Phaser.GameObjects.GameObject;

      setZ(value: number): Phaser.GameObjects.GameObject;

      setW(value: number): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

      setAcceleration(x: any, y: any): any;

      setAccelerationX(value: any): any;

      setAccelerationY(value: any): any;

      setAngularVelocity(value: any): any;

      setAngularAcceleration(value: any): any;

      setAngularDrag(value: any): any;

      setBounce(x: any, y: any): any;

      setBounceX(value: any): any;

      setBounceY(value: any): any;

      setCollideWorldBounds(value: any): any;

      setDebug(showBody: any, showVelocity: any, bodyColor: any): any;

      setDebugBodyColor(value: any): any;

      debugShowBody: any;

      debugShowVelocity: any;

      debugBodyColor: any;

      setDrag(x: any, y: any): any;

      setDragX(value: any): any;

      setDragY(value: any): any;

      enableBody(reset: any, x: any, y: any, enableGameObject: any, showGameObject: any): any;

      disableBody(disableGameObject: any, hideGameObject: any): any;

      setFriction(x: any, y: any): any;

      setFrictionX(x: any): any;

      setFrictionY(y: any): any;

      setGravity(x: any, y: any): any;

      setGravityX(x: any): any;

      setGravityY(y: any): any;

      setImmovable(value: any): any;

      setMass(value: any): any;

      setOffset(x: any, y: any): any;

      setCircle(radius: any, offsetX: any, offsetY: any): any;

      setVelocity(x: any, y: any): any;

      setVelocityX(x: any): any;

      setVelocityY(y: any): any;

      setMaxVelocity(x: any, y: any): any;

    }

    namespace Image {
    }

    class Light {
      x: number;

      y: number;

      radius: number;

      r: number;

      g: number;

      b: number;

      intensity: number;

      scrollFactorX: number;

      scrollFactorY: number;

      set(x: number, y: number, radius: number, r: number, g: number, b: number, intensity: number): Phaser.GameObjects.Light;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.Light;

      setColor(rgb: number): Phaser.GameObjects.Light;

      setIntensity(intensity: number): Phaser.GameObjects.Light;

      setPosition(x: number, y: number): Phaser.GameObjects.Light;

      setRadius(radius: number): Phaser.GameObjects.Light;

    }

    namespace Light {
    }

    class LightsManager {
      lightPool: any[];

      lights: any[];

      culledLights: any[];

      ambientColor: Object;

      active: boolean;

      enable(): Phaser.GameObjects.LightsManager;

      disable(): Phaser.GameObjects.LightsManager;

      cull(camera: Phaser.Cameras.Scene2D.Camera): Array.<Phaser.GameObjects.Light>;

      forEachLight(callback: any): Phaser.GameObjects.LightsManager;

      setAmbientColor(rgb: any): Phaser.GameObjects.LightsManager;

      getMaxVisibleLights(): number;

      getLightCount(): number;

      addLight(x: number, y: number, radius: number, rgb: number, intensity: number): Phaser.GameObjects.Light;

      removeLight(light: Phaser.GameObjects.Light): Phaser.GameObjects.LightsManager;

      shutdown(): void;

      destroy(): void;

    }

    namespace LightsManager {
    }

    class LightsPlugin {
      scene: Phaser.Scene;

      systems: Phaser.Scenes.Systems;

      boot(): void;

      destroy(): void;

      lightPool: any[];

      lights: any[];

      culledLights: any[];

      ambientColor: Object;

      active: boolean;

      enable(): Phaser.GameObjects.LightsManager;

      disable(): Phaser.GameObjects.LightsManager;

      cull(camera: Phaser.Cameras.Scene2D.Camera): Array.<Phaser.GameObjects.Light>;

      forEachLight(callback: any): Phaser.GameObjects.LightsManager;

      setAmbientColor(rgb: any): Phaser.GameObjects.LightsManager;

      getMaxVisibleLights(): number;

      getLightCount(): number;

      addLight(x: number, y: number, radius: number, rgb: number, intensity: number): Phaser.GameObjects.Light;

      removeLight(light: Phaser.GameObjects.Light): Phaser.GameObjects.LightsManager;

      shutdown(): void;

    }

    namespace LightsPlugin {
    }

    class Mesh {
      vertices: Float32Array;

      uv: Float32Array;

      colors: Uint32Array;

      alphas: Float32Array;

      renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.GameObjects.Mesh, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, src: Phaser.GameObjects.Mesh, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      toJSON(): any;

      willRender(): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

      clearAlpha(): Phaser.GameObjects.GameObject;

      setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      alpha: number;

      alphaTopLeft: number;

      alphaTopRight: number;

      alphaBottomLeft: number;

      alphaBottomRight: number;

      blendMode: number;

      setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

      depth: number;

      setDepth(value: number): Phaser.GameObjects.GameObject;

      flipX: boolean;

      flipY: boolean;

      toggleFlipX(): Phaser.GameObjects.GameObject;

      toggleFlipY(): Phaser.GameObjects.GameObject;

      setFlipX(value: boolean): Phaser.GameObjects.GameObject;

      setFlipY(value: boolean): Phaser.GameObjects.GameObject;

      setFlip(x: boolean, y: boolean): Phaser.GameObjects.GameObject;

      resetFlip(): Phaser.GameObjects.GameObject;

      getCenter(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBounds(output: Phaser.Geom.Rectangle | any): Phaser.Geom.Rectangle;

      originX: number;

      originY: number;

      displayOriginX: number;

      displayOriginY: number;

      setOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      setOriginFromFrame(): Phaser.GameObjects.GameObject;

      setDisplayOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      updateDisplayOrigin(): Phaser.GameObjects.GameObject;

      defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      initPipeline(pipelineName: string): boolean;

      setPipeline(pipelineName: string): boolean;

      resetPipeline(): boolean;

      getPipelineName(): string;

      scaleMode: number;

      setScaleMode(value: number): Phaser.GameObjects.GameObject;

      width: number;

      height: number;

      displayWidth: number;

      displayHeight: number;

      setSizeToFrame(frame: Phaser.Textures.Frame): Phaser.GameObjects.GameObject;

      setSize(width: number, height: number): Phaser.GameObjects.GameObject;

      setDisplaySize(width: number, height: number): Phaser.GameObjects.GameObject;

      texture: Phaser.Textures.Texture;

      frame: Phaser.Textures.Frame;

      setTexture(key: string, frame: string | number): Phaser.GameObjects.GameObject;

      setFrame(frame: string | number): Phaser.GameObjects.GameObject;

      x: number;

      y: number;

      z: number;

      w: number;

      scaleX: number;

      scaleY: number;

      angle: number;

      rotation: number;

      setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

      setRotation(radians: number): Phaser.GameObjects.GameObject;

      setAngle(degrees: number): Phaser.GameObjects.GameObject;

      setScale(x: number, y: number): Phaser.GameObjects.GameObject;

      setX(value: number): Phaser.GameObjects.GameObject;

      setY(value: number): Phaser.GameObjects.GameObject;

      setZ(value: number): Phaser.GameObjects.GameObject;

      setW(value: number): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

      scrollFactorX: number;

      scrollFactorY: number;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

    }

    namespace Mesh {
    }

    class Particles {
    }

    namespace Particles {
      class Particle {
        emitter: Phaser.GameObjects.Particles.ParticleEmitter;

        frame: Phaser.Texture.Frame;

        index: number;

        x: number;

        y: number;

        velocityX: number;

        velocityY: number;

        accelerationX: number;

        accelerationY: number;

        maxVelocityX: number;

        maxVelocityY: number;

        bounce: number;

        scaleX: number;

        scaleY: number;

        alpha: number;

        angle: number;

        rotation: number;

        scrollFactorX: number;

        scrollFactorY: number;

        tint: number;

        color: number;

        life: number;

        lifeCurrent: number;

        delayCurrent: number;

        lifeT: number;

        data: any;

        isAlive(): boolean;

        fire(x: number, y: number): void;

        computeVelocity(emitter: Phaser.GameObjects.Particles.ParticleEmitter, delta: number, step: number, processors: any[]): void;

        checkBounds(emitter: Phaser.GameObjects.Particles.ParticleEmitter): void;

        update(delta: number, step: number, processors: any[]): boolean;

      }

      namespace Particle {
      }

      class ParticleEmitter {
        manager: Phaser.GameObjects.Particles.ParticleEmitterManager;

        texture: Phaser.Textures.Texture;

        frames: Array.<Phaser.Textures.Frame>;

        defaultFrame: Phaser.Textures.Frame;

        configFastMap: any;

        configOpMap: any;

        name: string;

        particleClass: Phaser.GameObjects.Particles.Particle;

        x: number;

        y: number;

        radial: boolean;

        gravityX: number;

        gravityY: number;

        acceleration: boolean;

        accelerationX: number;

        accelerationY: number;

        maxVelocityX: number;

        maxVelocityY: number;

        speedX: number;

        speedY: number;

        moveTo: boolean;

        moveToX: number;

        moveToY: number;

        bounce: number;

        scaleX: number;

        scaleY: number;

        tint: number;

        alpha: number;

        lifespan: number;

        angle: number;

        rotate: number;

        emitCallback: any;

        emitCallbackScope: any;

        deathCallback: any;

        deathCallbackScope: any;

        maxParticles: number;

        quantity: number;

        delay: number;

        frequency: number;

        on: boolean;

        particleBringToTop: boolean;

        timeScale: number;

        emitZone: any;

        deathZone: any;

        bounds: Phaser.Geom.Rectangle;

        collideLeft: boolean;

        collideRight: boolean;

        collideTop: boolean;

        collideBottom: boolean;

        active: boolean;

        visible: boolean;

        blendMode: number;

        follow: any;

        followOffset: Phaser.Math.Vector2;

        trackVisible: boolean;

        currentFrame: number;

        randomFrame: boolean;

        frameQuantity: number;

        dead: any[];

        alive: any[];

        _counter: number;

        _frameCounter: number;

        fromJSON(config: any): Phaser.GameObjects.Particles.ParticleEmitter;

        toJSON(output: any): any;

        startFollow(target: any, offsetX: number, offsetY: number, trackVisible: boolean): Phaser.GameObjects.Particles.ParticleEmitter;

        stopFollow(): Phaser.GameObjects.Particles.ParticleEmitter;

        getFrame(): Phaser.Textures.Frame;

        setFrame(frames: any[] | string | number | any, pickRandom: boolean, quantity: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setRadial(value: boolean): Phaser.GameObjects.Particles.ParticleEmitter;

        setPosition(x: number, y: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setBounds(x: number | any, y: number, width: number, height: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setSpeedX(value: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setSpeedY(value: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setSpeed(value: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setScaleX(value: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setScaleY(value: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setScale(value: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setGravityX(value: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setGravityY(value: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setGravity(x: number, y: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setAlpha(value: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setEmitterAngle(value: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setAngle(value: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setLifespan(value: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setQuantity(quantity: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setFrequency(frequency: number, quantity: number): Phaser.GameObjects.Particles.ParticleEmitter;

        setEmitZone(zoneConfig: any): Phaser.GameObjects.Particles.ParticleEmitter;

        setDeathZone(zoneConfig: any): Phaser.GameObjects.Particles.ParticleEmitter;

        reserve(particleCount: number): Phaser.GameObjects.Particles.ParticleEmitter;

        getAliveParticleCount(): number;

        getDeadParticleCount(): number;

        getParticleCount(): number;

        atLimit(): boolean;

        onParticleEmit(callback: any, context: any): Phaser.GameObjects.Particles.ParticleEmitter;

        onParticleDeath(callback: any, context: any): Phaser.GameObjects.Particles.ParticleEmitter;

        killAll(): Phaser.GameObjects.Particles.ParticleEmitter;

        forEachAlive(callback: any, thisArg: any): Phaser.GameObjects.Particles.ParticleEmitter;

        forEachDead(callback: any, thisArg: any): Phaser.GameObjects.Particles.ParticleEmitter;

        start(): Phaser.GameObjects.Particles.ParticleEmitter;

        pause(): Phaser.GameObjects.Particles.ParticleEmitter;

        resume(): Phaser.GameObjects.Particles.ParticleEmitter;

        depthSort(): Phaser.GameObjects.Particles.ParticleEmitter;

        flow(frequency: number, count: number): Phaser.GameObjects.Particles.ParticleEmitter;

        explode(count: number, x: number, y: number): Phaser.GameObjects.Particles.Particle;

        emitParticleAt(x: number, y: number, count: number): Phaser.GameObjects.Particles.Particle;

        emitParticle(count: number, x: number, y: number): Phaser.GameObjects.Particles.Particle;

        preUpdate(time: any, delta: any): void;

        depthSortCallback(a: any, b: any): number;

        indexSortCallback(a: any, b: any): number;

        setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

        scrollFactorX: number;

        scrollFactorY: number;

        setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

        setVisible(value: boolean): Phaser.GameObjects.GameObject;

      }

      namespace ParticleEmitter {
      }

      class ParticleEmitterManager {
        blendMode: number;

        timeScale: number;

        texture: Phaser.Textures.Texture;

        frame: Phaser.Textures.Frame;

        frameNames: any[];

        emitters: Phaser.Structs.List;

        wells: Phaser.Structs.List;

        setTexture(key: string, frame: string | number): Phaser.GameObjects.Particles.ParticleEmitterManager;

        setFrame(frame: string | number): Phaser.GameObjects.Particles.ParticleEmitterManager;

        setEmitterFrames(frames: any, emitter: any): Phaser.GameObjects.Particles.ParticleEmitterManager;

        addEmitter(emitter: Phaser.GameObjects.Particles.ParticleEmitter): Phaser.GameObjects.Particles.ParticleEmitter;

        createEmitter(config: any): Phaser.GameObjects.Particles.ParticleEmitter;

        addGravityWell(well: Phaser.GameObjects.Particles.GravityWell): Phaser.GameObjects.Particles.GravityWell;

        createGravityWell(config: any): Phaser.GameObjects.Particles.GravityWell;

        emitParticle(count: number, x: number, y: number): Phaser.GameObjects.Particles.ParticleEmitterManager;

        emitParticleAt(x: number, y: number, count: number): Phaser.GameObjects.Particles.ParticleEmitterManager;

        pause(): Phaser.GameObjects.Particles.ParticleEmitterManager;

        resume(): Phaser.GameObjects.Particles.ParticleEmitterManager;

        getProcessors(): any;

        preUpdate(time: any, delta: any): void;

      }

      namespace ParticleEmitterManager {
      }

    }

    class PathFollower {
      path: Phaser.Curves.Path;

      rotateToPath: boolean;

      pathRotationVerticalAdjust: boolean;

      pathRotationOffset: number;

      pathOffset: Phaser.Math.Vector2;

      pathVector: Phaser.Math.Vector2;

      pathTween: null;

      pathConfig: any;

      _prevDirection: number;

      setPath(path: Phaser.Curves.Path, config: any): Phaser.GameObjects.PathFollower;

      setRotateToPath(value: any, offset: any, verticalAdjust: any): Phaser.GameObjects.PathFollower;

      isFollowing(): boolean;

      start(config: any, startAt: number): Phaser.GameObjects.PathFollower;

      pause(): Phaser.GameObjects.PathFollower;

      resume(): Phaser.GameObjects.PathFollower;

      stop(): Phaser.GameObjects.PathFollower;

      preUpdate(time: any, delta: any): void;

      anims: any;

      play(key: string, ignoreIfPlaying: boolean, startFrame: number | string): any;

      toJSON(): any;

      renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.GameObjects.Sprite, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, src: Phaser.GameObjects.Sprite, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      willRender(): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

      clearAlpha(): Phaser.GameObjects.GameObject;

      setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      alpha: number;

      alphaTopLeft: number;

      alphaTopRight: number;

      alphaBottomLeft: number;

      alphaBottomRight: number;

      parent: Phaser.GameObjects.GameObject;

      animationManager: Phaser.Animations.AnimationManager;

      isPlaying: boolean;

      currentAnim: Phaser.Animations.Animation;

      currentFrame: Phaser.Animations.AnimationFrame;

      _timeScale: number;

      frameRate: number;

      duration: number;

      msPerFrame: number;

      skipMissedFrames: boolean;

      _delay: number;

      _repeat: number;

      _repeatDelay: number;

      _yoyo: boolean;

      forward: boolean;

      accumulator: number;

      nextTick: number;

      repeatCounter: number;

      pendingRepeat: boolean;

      _paused: boolean;

      _wasPlaying: boolean;

      _callbackArgs: any[];

      _updateParams: any[];

      delay(value: number): Phaser.GameObjects.GameObject;

      delayedPlay(delay: any, key: any, startFrame: any): Phaser.GameObjects.GameObject;

      getCurrentKey(): any;

      load(key: any, startFrame: any): Phaser.GameObjects.GameObject;

      paused(value: any): any;

      progress(value: any): any;

      remove(event: any): void;

      repeat(value: any): any;

      repeatDelay(value: any): any;

      restart(includeDelay: any): Phaser.GameObjects.GameObject;

      timeScale(value: any): any;

      totalFrames(): any;

      totalProgres(): void;

      updateFrame(animationFrame: any): void;

      yoyo(value: any): any;

      blendMode: number;

      setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

      depth: number;

      setDepth(value: number): Phaser.GameObjects.GameObject;

      flipX: boolean;

      flipY: boolean;

      toggleFlipX(): Phaser.GameObjects.GameObject;

      toggleFlipY(): Phaser.GameObjects.GameObject;

      setFlipX(value: boolean): Phaser.GameObjects.GameObject;

      setFlipY(value: boolean): Phaser.GameObjects.GameObject;

      setFlip(x: boolean, y: boolean): Phaser.GameObjects.GameObject;

      resetFlip(): Phaser.GameObjects.GameObject;

      getCenter(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBounds(output: Phaser.Geom.Rectangle | any): Phaser.Geom.Rectangle;

      originX: number;

      originY: number;

      displayOriginX: number;

      displayOriginY: number;

      setOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      setOriginFromFrame(): Phaser.GameObjects.GameObject;

      setDisplayOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      updateDisplayOrigin(): Phaser.GameObjects.GameObject;

      defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      initPipeline(pipelineName: string): boolean;

      setPipeline(pipelineName: string): boolean;

      resetPipeline(): boolean;

      getPipelineName(): string;

      scaleMode: number;

      setScaleMode(value: number): Phaser.GameObjects.GameObject;

      scrollFactorX: number;

      scrollFactorY: number;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

      width: number;

      height: number;

      displayWidth: number;

      displayHeight: number;

      setSizeToFrame(frame: Phaser.Textures.Frame): Phaser.GameObjects.GameObject;

      setSize(width: number, height: number): Phaser.GameObjects.GameObject;

      setDisplaySize(width: number, height: number): Phaser.GameObjects.GameObject;

      texture: Phaser.Textures.Texture;

      frame: Phaser.Textures.Frame;

      setTexture(key: string, frame: string | number): Phaser.GameObjects.GameObject;

      setFrame(frame: string | number): Phaser.GameObjects.GameObject;

      clearTint(): Phaser.GameObjects.GameObject;

      setTint(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      tintTopLeft: number;

      tintTopRight: number;

      tintBottomLeft: number;

      tintBottomRight: number;

      tint: number;

      x: number;

      y: number;

      z: number;

      w: number;

      scaleX: number;

      scaleY: number;

      angle: number;

      rotation: number;

      setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

      setRotation(radians: number): Phaser.GameObjects.GameObject;

      setAngle(degrees: number): Phaser.GameObjects.GameObject;

      setScale(x: number, y: number): Phaser.GameObjects.GameObject;

      setX(value: number): Phaser.GameObjects.GameObject;

      setY(value: number): Phaser.GameObjects.GameObject;

      setZ(value: number): Phaser.GameObjects.GameObject;

      setW(value: number): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

    }

    namespace PathFollower {
    }

    class Quad {
      topLeftX: number;

      topLeftY: number;

      topRightX: number;

      topRightY: number;

      bottomLeftX: number;

      bottomLeftY: number;

      bottomRightX: number;

      bottomRightY: number;

      topLeftAlpha: number;

      topRightAlpha: number;

      bottomLeftAlpha: number;

      bottomRightAlpha: number;

      topLeftColor: number;

      topRightColor: number;

      bottomLeftColor: number;

      bottomRightColor: number;

      setTopLeft(x: number, y: number): Phaser.GameObjects.Quad;

      setTopRight(x: number, y: number): Phaser.GameObjects.Quad;

      setBottomLeft(x: number, y: number): Phaser.GameObjects.Quad;

      setBottomRight(x: number, y: number): Phaser.GameObjects.Quad;

      resetPosition(): Phaser.GameObjects.Quad;

      resetAlpha(): Phaser.GameObjects.Quad;

      resetColors(): Phaser.GameObjects.Quad;

      reset(): Phaser.GameObjects.Quad;

      vertices: Float32Array;

      uv: Float32Array;

      colors: Uint32Array;

      alphas: Float32Array;

      renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.GameObjects.Mesh, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, src: Phaser.GameObjects.Mesh, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      toJSON(): any;

      willRender(): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

      clearAlpha(): Phaser.GameObjects.GameObject;

      setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      alpha: number;

      alphaTopLeft: number;

      alphaTopRight: number;

      alphaBottomLeft: number;

      alphaBottomRight: number;

      blendMode: number;

      setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

      depth: number;

      setDepth(value: number): Phaser.GameObjects.GameObject;

      flipX: boolean;

      flipY: boolean;

      toggleFlipX(): Phaser.GameObjects.GameObject;

      toggleFlipY(): Phaser.GameObjects.GameObject;

      setFlipX(value: boolean): Phaser.GameObjects.GameObject;

      setFlipY(value: boolean): Phaser.GameObjects.GameObject;

      setFlip(x: boolean, y: boolean): Phaser.GameObjects.GameObject;

      resetFlip(): Phaser.GameObjects.GameObject;

      getCenter(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBounds(output: Phaser.Geom.Rectangle | any): Phaser.Geom.Rectangle;

      originX: number;

      originY: number;

      displayOriginX: number;

      displayOriginY: number;

      setOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      setOriginFromFrame(): Phaser.GameObjects.GameObject;

      setDisplayOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      updateDisplayOrigin(): Phaser.GameObjects.GameObject;

      defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      initPipeline(pipelineName: string): boolean;

      setPipeline(pipelineName: string): boolean;

      resetPipeline(): boolean;

      getPipelineName(): string;

      scaleMode: number;

      setScaleMode(value: number): Phaser.GameObjects.GameObject;

      width: number;

      height: number;

      displayWidth: number;

      displayHeight: number;

      setSizeToFrame(frame: Phaser.Textures.Frame): Phaser.GameObjects.GameObject;

      setSize(width: number, height: number): Phaser.GameObjects.GameObject;

      setDisplaySize(width: number, height: number): Phaser.GameObjects.GameObject;

      texture: Phaser.Textures.Texture;

      frame: Phaser.Textures.Frame;

      setTexture(key: string, frame: string | number): Phaser.GameObjects.GameObject;

      setFrame(frame: string | number): Phaser.GameObjects.GameObject;

      x: number;

      y: number;

      z: number;

      w: number;

      scaleX: number;

      scaleY: number;

      angle: number;

      rotation: number;

      setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

      setRotation(radians: number): Phaser.GameObjects.GameObject;

      setAngle(degrees: number): Phaser.GameObjects.GameObject;

      setScale(x: number, y: number): Phaser.GameObjects.GameObject;

      setX(value: number): Phaser.GameObjects.GameObject;

      setY(value: number): Phaser.GameObjects.GameObject;

      setZ(value: number): Phaser.GameObjects.GameObject;

      setW(value: number): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

      scrollFactorX: number;

      scrollFactorY: number;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

    }

    namespace Quad {
    }

    class Sprite {
      anims: any;

      preUpdate(time: number, delta: number): void;

      play(key: string, ignoreIfPlaying: boolean, startFrame: number | string): any;

      toJSON(): any;

      renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.GameObjects.Sprite, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, src: Phaser.GameObjects.Sprite, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      willRender(): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

      clearAlpha(): Phaser.GameObjects.GameObject;

      setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      alpha: number;

      alphaTopLeft: number;

      alphaTopRight: number;

      alphaBottomLeft: number;

      alphaBottomRight: number;

      parent: Phaser.GameObjects.GameObject;

      animationManager: Phaser.Animations.AnimationManager;

      isPlaying: boolean;

      currentAnim: Phaser.Animations.Animation;

      currentFrame: Phaser.Animations.AnimationFrame;

      _timeScale: number;

      frameRate: number;

      duration: number;

      msPerFrame: number;

      skipMissedFrames: boolean;

      _delay: number;

      _repeat: number;

      _repeatDelay: number;

      _yoyo: boolean;

      forward: boolean;

      accumulator: number;

      nextTick: number;

      repeatCounter: number;

      pendingRepeat: boolean;

      _paused: boolean;

      _wasPlaying: boolean;

      _callbackArgs: any[];

      _updateParams: any[];

      delay(value: number): Phaser.GameObjects.GameObject;

      delayedPlay(delay: any, key: any, startFrame: any): Phaser.GameObjects.GameObject;

      getCurrentKey(): any;

      load(key: any, startFrame: any): Phaser.GameObjects.GameObject;

      pause(atFrame: any): Phaser.GameObjects.GameObject;

      paused(value: any): any;

      progress(value: any): any;

      remove(event: any): void;

      repeat(value: any): any;

      repeatDelay(value: any): any;

      restart(includeDelay: any): Phaser.GameObjects.GameObject;

      resume(fromFrame: any): Phaser.GameObjects.GameObject;

      stop(dispatchCallbacks: any): Phaser.GameObjects.GameObject;

      timeScale(value: any): any;

      totalFrames(): any;

      totalProgres(): void;

      updateFrame(animationFrame: any): void;

      yoyo(value: any): any;

      blendMode: number;

      setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

      depth: number;

      setDepth(value: number): Phaser.GameObjects.GameObject;

      flipX: boolean;

      flipY: boolean;

      toggleFlipX(): Phaser.GameObjects.GameObject;

      toggleFlipY(): Phaser.GameObjects.GameObject;

      setFlipX(value: boolean): Phaser.GameObjects.GameObject;

      setFlipY(value: boolean): Phaser.GameObjects.GameObject;

      setFlip(x: boolean, y: boolean): Phaser.GameObjects.GameObject;

      resetFlip(): Phaser.GameObjects.GameObject;

      getCenter(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBounds(output: Phaser.Geom.Rectangle | any): Phaser.Geom.Rectangle;

      originX: number;

      originY: number;

      displayOriginX: number;

      displayOriginY: number;

      setOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      setOriginFromFrame(): Phaser.GameObjects.GameObject;

      setDisplayOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      updateDisplayOrigin(): Phaser.GameObjects.GameObject;

      defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      initPipeline(pipelineName: string): boolean;

      setPipeline(pipelineName: string): boolean;

      resetPipeline(): boolean;

      getPipelineName(): string;

      scaleMode: number;

      setScaleMode(value: number): Phaser.GameObjects.GameObject;

      scrollFactorX: number;

      scrollFactorY: number;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

      width: number;

      height: number;

      displayWidth: number;

      displayHeight: number;

      setSizeToFrame(frame: Phaser.Textures.Frame): Phaser.GameObjects.GameObject;

      setSize(width: number, height: number): Phaser.GameObjects.GameObject;

      setDisplaySize(width: number, height: number): Phaser.GameObjects.GameObject;

      texture: Phaser.Textures.Texture;

      frame: Phaser.Textures.Frame;

      setTexture(key: string, frame: string | number): Phaser.GameObjects.GameObject;

      setFrame(frame: string | number): Phaser.GameObjects.GameObject;

      clearTint(): Phaser.GameObjects.GameObject;

      setTint(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      tintTopLeft: number;

      tintTopRight: number;

      tintBottomLeft: number;

      tintBottomRight: number;

      tint: number;

      x: number;

      y: number;

      z: number;

      w: number;

      scaleX: number;

      scaleY: number;

      angle: number;

      rotation: number;

      setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

      setRotation(radians: number): Phaser.GameObjects.GameObject;

      setAngle(degrees: number): Phaser.GameObjects.GameObject;

      setScale(x: number, y: number): Phaser.GameObjects.GameObject;

      setX(value: number): Phaser.GameObjects.GameObject;

      setY(value: number): Phaser.GameObjects.GameObject;

      setZ(value: number): Phaser.GameObjects.GameObject;

      setW(value: number): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

      anims: any;

      preUpdate(time: number, delta: number): void;

      play(key: string, ignoreIfPlaying: boolean, startFrame: number | string): any;

      toJSON(): any;

      renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.GameObjects.Sprite, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, src: Phaser.GameObjects.Sprite, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      willRender(): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

      clearAlpha(): Phaser.GameObjects.GameObject;

      setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      alpha: number;

      alphaTopLeft: number;

      alphaTopRight: number;

      alphaBottomLeft: number;

      alphaBottomRight: number;

      parent: Phaser.GameObjects.GameObject;

      animationManager: Phaser.Animations.AnimationManager;

      isPlaying: boolean;

      currentAnim: Phaser.Animations.Animation;

      currentFrame: Phaser.Animations.AnimationFrame;

      _timeScale: number;

      frameRate: number;

      duration: number;

      msPerFrame: number;

      skipMissedFrames: boolean;

      _delay: number;

      _repeat: number;

      _repeatDelay: number;

      _yoyo: boolean;

      forward: boolean;

      accumulator: number;

      nextTick: number;

      repeatCounter: number;

      pendingRepeat: boolean;

      _paused: boolean;

      _wasPlaying: boolean;

      _callbackArgs: any[];

      _updateParams: any[];

      delay(value: number): Phaser.GameObjects.GameObject;

      delayedPlay(delay: any, key: any, startFrame: any): Phaser.GameObjects.GameObject;

      getCurrentKey(): any;

      load(key: any, startFrame: any): Phaser.GameObjects.GameObject;

      pause(atFrame: any): Phaser.GameObjects.GameObject;

      paused(value: any): any;

      progress(value: any): any;

      remove(event: any): void;

      repeat(value: any): any;

      repeatDelay(value: any): any;

      restart(includeDelay: any): Phaser.GameObjects.GameObject;

      resume(fromFrame: any): Phaser.GameObjects.GameObject;

      stop(dispatchCallbacks: any): Phaser.GameObjects.GameObject;

      timeScale(value: any): any;

      totalFrames(): any;

      totalProgres(): void;

      updateFrame(animationFrame: any): void;

      yoyo(value: any): any;

      blendMode: number;

      setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

      depth: number;

      setDepth(value: number): Phaser.GameObjects.GameObject;

      flipX: boolean;

      flipY: boolean;

      toggleFlipX(): Phaser.GameObjects.GameObject;

      toggleFlipY(): Phaser.GameObjects.GameObject;

      setFlipX(value: boolean): Phaser.GameObjects.GameObject;

      setFlipY(value: boolean): Phaser.GameObjects.GameObject;

      setFlip(x: boolean, y: boolean): Phaser.GameObjects.GameObject;

      resetFlip(): Phaser.GameObjects.GameObject;

      getCenter(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBounds(output: Phaser.Geom.Rectangle | any): Phaser.Geom.Rectangle;

      originX: number;

      originY: number;

      displayOriginX: number;

      displayOriginY: number;

      setOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      setOriginFromFrame(): Phaser.GameObjects.GameObject;

      setDisplayOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      updateDisplayOrigin(): Phaser.GameObjects.GameObject;

      defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      initPipeline(pipelineName: string): boolean;

      setPipeline(pipelineName: string): boolean;

      resetPipeline(): boolean;

      getPipelineName(): string;

      scaleMode: number;

      setScaleMode(value: number): Phaser.GameObjects.GameObject;

      scrollFactorX: number;

      scrollFactorY: number;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

      width: number;

      height: number;

      displayWidth: number;

      displayHeight: number;

      setSizeToFrame(frame: Phaser.Textures.Frame): Phaser.GameObjects.GameObject;

      setSize(width: number, height: number): Phaser.GameObjects.GameObject;

      setDisplaySize(width: number, height: number): Phaser.GameObjects.GameObject;

      texture: Phaser.Textures.Texture;

      frame: Phaser.Textures.Frame;

      setTexture(key: string, frame: string | number): Phaser.GameObjects.GameObject;

      setFrame(frame: string | number): Phaser.GameObjects.GameObject;

      clearTint(): Phaser.GameObjects.GameObject;

      setTint(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      tintTopLeft: number;

      tintTopRight: number;

      tintBottomLeft: number;

      tintBottomRight: number;

      tint: number;

      x: number;

      y: number;

      z: number;

      w: number;

      scaleX: number;

      scaleY: number;

      angle: number;

      rotation: number;

      setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

      setRotation(radians: number): Phaser.GameObjects.GameObject;

      setAngle(degrees: number): Phaser.GameObjects.GameObject;

      setScale(x: number, y: number): Phaser.GameObjects.GameObject;

      setX(value: number): Phaser.GameObjects.GameObject;

      setY(value: number): Phaser.GameObjects.GameObject;

      setZ(value: number): Phaser.GameObjects.GameObject;

      setW(value: number): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

      setAcceleration(x: any, y: any): any;

      setAccelerationX(value: any): any;

      setAccelerationY(value: any): any;

      setAngularVelocity(value: any): any;

      setAngularAcceleration(value: any): any;

      setAngularDrag(value: any): any;

      setBounce(x: any, y: any): any;

      setBounceX(value: any): any;

      setBounceY(value: any): any;

      setCollideWorldBounds(value: any): any;

      setDebug(showBody: any, showVelocity: any, bodyColor: any): any;

      setDebugBodyColor(value: any): any;

      debugShowBody: any;

      debugShowVelocity: any;

      debugBodyColor: any;

      setDrag(x: any, y: any): any;

      setDragX(value: any): any;

      setDragY(value: any): any;

      enableBody(reset: any, x: any, y: any, enableGameObject: any, showGameObject: any): any;

      disableBody(disableGameObject: any, hideGameObject: any): any;

      setFriction(x: any, y: any): any;

      setFrictionX(x: any): any;

      setFrictionY(y: any): any;

      setGravity(x: any, y: any): any;

      setGravityX(x: any): any;

      setGravityY(y: any): any;

      setImmovable(value: any): any;

      setMass(value: any): any;

      setOffset(x: any, y: any): any;

      setCircle(radius: any, offsetX: any, offsetY: any): any;

      setVelocity(x: any, y: any): any;

      setVelocityX(x: any): any;

      setVelocityY(y: any): any;

      setMaxVelocity(x: any, y: any): any;

    }

    namespace Sprite {
    }

    class Sprite3D {
      gameObject: Phaser.GameObjects.GameObject;

      position: Phaser.Math.Vector4;

      size: Phaser.Math.Vector2;

      scale: Phaser.Math.Vector2;

      adjustScaleX: boolean;

      adjustScaleY: boolean;

      _visible: boolean;

      project(camera: Phaser.Cameras.Sprite3D.Camera): void;

      setVisible(value: boolean): Phaser.GameObjects.Sprite3D;

      visible: boolean;

      x: number;

      y: number;

      z: number;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      toJSON(): any;

      willRender(): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

    }

    namespace Sprite3D {
    }

    class Text {
      canvas: HTMLCanvasElement;

      context: CanvasRenderingContext2D;

      style: Phaser.GameObjects.Components.TextStyle;

      autoRound: boolean;

      splitRegExp: any;

      text: string;

      resolution: number;

      padding: any;

      width: number;

      height: number;

      canvasTexture: any;

      dirty: boolean;

      initRTL(): void;

      runWordWrap(text: string): string;

      advancedWordWrap(text: string, context: CanvasRenderingContext2D, wordWrapWidth: number): string;

      basicWordWrap(text: string, context: CanvasRenderingContext2D, wordWrapWidth: number): string;

      getWrappedText(text: string): Array.<string>;

      setText(value: string | Array.<string>): Phaser.GameObjects.Text;

      setStyle(style: any): Phaser.GameObjects.Text;

      setFont(font: string): Phaser.GameObjects.Text;

      setFontFamily(family: string): Phaser.GameObjects.Text;

      setFontSize(size: number): Phaser.GameObjects.Text;

      setFontStyle(style: string): Phaser.GameObjects.Text;

      setFixedSize(width: number, height: number): Phaser.GameObjects.Text;

      setBackgroundColor(color: string): Phaser.GameObjects.Text;

      setFill(color: string): Phaser.GameObjects.Text;

      setColor(color: string): Phaser.GameObjects.Text;

      setStroke(color: string, thickness: number): Phaser.GameObjects.Text;

      setShadow(x: number, y: number, color: string, blur: number, shadowStroke: boolean, shadowFill: boolean): Phaser.GameObjects.Text;

      setShadowOffset(x: number, y: number): Phaser.GameObjects.Text;

      setShadowColor(color: string): Phaser.GameObjects.Text;

      setShadowBlur(blur: number): Phaser.GameObjects.Text;

      setShadowStroke(enabled: boolean): Phaser.GameObjects.Text;

      setShadowFill(enabled: boolean): Phaser.GameObjects.Text;

      setWordWrapWidth(width: number | null, useAdvancedWrap: boolean): Phaser.GameObjects.Text;

      setWordWrapCallback(callback: any, scope: any): Phaser.GameObjects.Text;

      setAlign(align: string): Phaser.GameObjects.Text;

      setPadding(left: number | any, top: number, right: number, bottom: number): Phaser.GameObjects.Text;

      setMaxLines(max: number): Phaser.GameObjects.Text;

      updateText(): Phaser.GameObjects.Text;

      getTextMetrics(): any;

      toJSON(): any;

      preDestroy(): void;

      renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.GameObjects.Text, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, src: Phaser.GameObjects.Text, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      willRender(): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

      clearAlpha(): Phaser.GameObjects.GameObject;

      setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      alpha: number;

      alphaTopLeft: number;

      alphaTopRight: number;

      alphaBottomLeft: number;

      alphaBottomRight: number;

      blendMode: number;

      setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

      depth: number;

      setDepth(value: number): Phaser.GameObjects.GameObject;

      flipX: boolean;

      flipY: boolean;

      toggleFlipX(): Phaser.GameObjects.GameObject;

      toggleFlipY(): Phaser.GameObjects.GameObject;

      setFlipX(value: boolean): Phaser.GameObjects.GameObject;

      setFlipY(value: boolean): Phaser.GameObjects.GameObject;

      setFlip(x: boolean, y: boolean): Phaser.GameObjects.GameObject;

      resetFlip(): Phaser.GameObjects.GameObject;

      getCenter(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBounds(output: Phaser.Geom.Rectangle | any): Phaser.Geom.Rectangle;

      originX: number;

      originY: number;

      displayOriginX: number;

      displayOriginY: number;

      setOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      setOriginFromFrame(): Phaser.GameObjects.GameObject;

      setDisplayOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      updateDisplayOrigin(): Phaser.GameObjects.GameObject;

      defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      initPipeline(pipelineName: string): boolean;

      setPipeline(pipelineName: string): boolean;

      resetPipeline(): boolean;

      getPipelineName(): string;

      scaleMode: number;

      setScaleMode(value: number): Phaser.GameObjects.GameObject;

      scrollFactorX: number;

      scrollFactorY: number;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

      clearTint(): Phaser.GameObjects.GameObject;

      setTint(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      tintTopLeft: number;

      tintTopRight: number;

      tintBottomLeft: number;

      tintBottomRight: number;

      tint: number;

      x: number;

      y: number;

      z: number;

      w: number;

      scaleX: number;

      scaleY: number;

      angle: number;

      rotation: number;

      setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

      setRotation(radians: number): Phaser.GameObjects.GameObject;

      setAngle(degrees: number): Phaser.GameObjects.GameObject;

      setScale(x: number, y: number): Phaser.GameObjects.GameObject;

      setX(value: number): Phaser.GameObjects.GameObject;

      setY(value: number): Phaser.GameObjects.GameObject;

      setZ(value: number): Phaser.GameObjects.GameObject;

      setW(value: number): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

    }

    namespace Text {
    }

    class TileSprite {
      tilePositionX: number;

      tilePositionY: number;

      dirty: boolean;

      tileTexture: any;

      renderer: any;

      potWidth: number;

      potHeight: number;

      canvasPattern: CanvasPattern;

      canvasBuffer: HTMLCanvasElement;

      canvasBufferCtx: CanvasRenderingContext2D;

      updateTileTexture(): void;

      destroy(): void;

      renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.GameObjects.TileSprite, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, src: Phaser.GameObjects.TileSprite, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      toJSON(): any;

      willRender(): boolean;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

      clearAlpha(): Phaser.GameObjects.GameObject;

      setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      alpha: number;

      alphaTopLeft: number;

      alphaTopRight: number;

      alphaBottomLeft: number;

      alphaBottomRight: number;

      blendMode: number;

      setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

      depth: number;

      setDepth(value: number): Phaser.GameObjects.GameObject;

      flipX: boolean;

      flipY: boolean;

      toggleFlipX(): Phaser.GameObjects.GameObject;

      toggleFlipY(): Phaser.GameObjects.GameObject;

      setFlipX(value: boolean): Phaser.GameObjects.GameObject;

      setFlipY(value: boolean): Phaser.GameObjects.GameObject;

      setFlip(x: boolean, y: boolean): Phaser.GameObjects.GameObject;

      resetFlip(): Phaser.GameObjects.GameObject;

      getCenter(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBounds(output: Phaser.Geom.Rectangle | any): Phaser.Geom.Rectangle;

      originX: number;

      originY: number;

      displayOriginX: number;

      displayOriginY: number;

      setOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      setOriginFromFrame(): Phaser.GameObjects.GameObject;

      setDisplayOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      updateDisplayOrigin(): Phaser.GameObjects.GameObject;

      defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      initPipeline(pipelineName: string): boolean;

      setPipeline(pipelineName: string): boolean;

      resetPipeline(): boolean;

      getPipelineName(): string;

      scaleMode: number;

      setScaleMode(value: number): Phaser.GameObjects.GameObject;

      scrollFactorX: number;

      scrollFactorY: number;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

      width: number;

      height: number;

      displayWidth: number;

      displayHeight: number;

      setSizeToFrame(frame: Phaser.Textures.Frame): Phaser.GameObjects.GameObject;

      setSize(width: number, height: number): Phaser.GameObjects.GameObject;

      setDisplaySize(width: number, height: number): Phaser.GameObjects.GameObject;

      texture: Phaser.Textures.Texture;

      frame: Phaser.Textures.Frame;

      setTexture(key: string, frame: string | number): Phaser.GameObjects.GameObject;

      setFrame(frame: string | number): Phaser.GameObjects.GameObject;

      clearTint(): Phaser.GameObjects.GameObject;

      setTint(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      tintTopLeft: number;

      tintTopRight: number;

      tintBottomLeft: number;

      tintBottomRight: number;

      tint: number;

      x: number;

      y: number;

      z: number;

      w: number;

      scaleX: number;

      scaleY: number;

      angle: number;

      rotation: number;

      setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

      setRotation(radians: number): Phaser.GameObjects.GameObject;

      setAngle(degrees: number): Phaser.GameObjects.GameObject;

      setScale(x: number, y: number): Phaser.GameObjects.GameObject;

      setX(value: number): Phaser.GameObjects.GameObject;

      setY(value: number): Phaser.GameObjects.GameObject;

      setZ(value: number): Phaser.GameObjects.GameObject;

      setW(value: number): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

    }

    namespace TileSprite {
    }

    class UpdateList {
      scene: Phaser.Scene;

      systems: Phaser.Scenes.Systems;

      _list: any[];

      _pendingInsertion: any[];

      _pendingRemoval: any[];

      boot(): void;

      add(child: Phaser.GameObjects.GameObject): Phaser.GameObjects.GameObject;

      preUpdate(time: number, delta: number): void;

      update(time: number, delta: number): void;

      remove(child: Phaser.GameObjects.GameObject): Phaser.GameObjects.GameObject;

      removeAll(): Phaser.GameObjects.UpdateList;

      shutdown(): void;

      destroy(): void;

    }

    namespace UpdateList {
    }

    class Zone {
      width: number;

      height: number;

      blendMode: number;

      displayWidth: number;

      displayHeight: number;

      setSize(width: number, height: number, resizeInput: boolean): Phaser.GameObjects.Zone;

      setDisplaySize(width: number, height: number): Phaser.GameObjects.Zone;

      setCircleDropZone(radius: number): Phaser.GameObjects.Zone;

      setRectangleDropZone(width: number, height: number): Phaser.GameObjects.Zone;

      setDropZone(shape: any, callback: any): Phaser.GameObjects.Zone;

      renderCanvas(): void;

      renderWebGL(): void;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      toJSON(): any;

      willRender(): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

      getCenter(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBounds(output: Phaser.Geom.Rectangle | any): Phaser.Geom.Rectangle;

      originX: number;

      originY: number;

      displayOriginX: number;

      displayOriginY: number;

      setOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      setOriginFromFrame(): Phaser.GameObjects.GameObject;

      setDisplayOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      updateDisplayOrigin(): Phaser.GameObjects.GameObject;

      scaleMode: number;

      setScaleMode(value: number): Phaser.GameObjects.GameObject;

      x: number;

      y: number;

      z: number;

      w: number;

      scaleX: number;

      scaleY: number;

      angle: number;

      rotation: number;

      setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

      setRotation(radians: number): Phaser.GameObjects.GameObject;

      setAngle(degrees: number): Phaser.GameObjects.GameObject;

      setScale(x: number, y: number): Phaser.GameObjects.GameObject;

      setX(value: number): Phaser.GameObjects.GameObject;

      setY(value: number): Phaser.GameObjects.GameObject;

      setZ(value: number): Phaser.GameObjects.GameObject;

      setW(value: number): Phaser.GameObjects.GameObject;

      scrollFactorX: number;

      scrollFactorY: number;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

    }

    namespace Zone {
    }

  }

  class Geom {
  }

  namespace Geom {
    class Circle {
      x: number;

      y: number;

      _radius: number;

      _diameter: number;

      contains(x: number, y: number): boolean;

      getPoint(position: number, out: Phaser.Geom.Point | any): Phaser.Geom.Point;

      getPoints(quantity: number, stepRate: number, output: any[]): Array.<Phaser.Geom.Point>;

      getRandomPoint(point: Phaser.Geom.Point | any): Phaser.Geom.Point;

      setTo(x: number, y: number, radius: number): Phaser.Geom.Circle;

      setEmpty(): Phaser.Geom.Circle;

      setPosition(x: number, y: number): Phaser.Geom.Circle;

      isEmpty(): boolean;

      radius: number;

      diameter: number;

      left: number;

      right: number;

      top: number;

      bottom: number;

      static Circumference(circle: Phaser.Geom.Circle): number;

      static CircumferencePoint(circle: Phaser.Geom.Circle, angle: number, out: Phaser.Geom.Point | any): Phaser.Geom.Point;

      static Clone(source: Phaser.Geom.Circle | any): Phaser.Geom.Circle;

      static Contains(circle: Phaser.Geom.Circle, x: number, y: number): boolean;

      static ContainsPoint(circle: Phaser.Geom.Circle, point: Phaser.Geom.Point | any): boolean;

      static ContainsRect(circle: Phaser.Geom.Circle, rect: Phaser.Geom.Rectangle | any): boolean;

      static CopyFrom(source: Phaser.Geom.Circle, dest: Phaser.Geom.Circle): Phaser.Geom.Circle;

      static Equals(circle: Phaser.Geom.Circle, toCompare: Phaser.Geom.Circle): boolean;

      static GetBounds(circle: Phaser.Geom.Circle, out: Phaser.Geom.Rectangle | any): Phaser.Geom.Rectangle;

      static GetPoint(circle: Phaser.Geom.Circle, position: number, out: Phaser.Geom.Point | any): Phaser.Geom.Point;

      static GetPoints(circle: Phaser.Geom.Circle, quantity: number, stepRate: number, output: any[]): Array.<Phaser.Geom.Point>;

      static Offset(circle: Phaser.Geom.Circle, x: number, y: number): Phaser.Geom.Circle;

      static OffsetPoint(circle: Phaser.Geom.Circle, point: Phaser.Geom.Point | any): Phaser.Geom.Circle;

      static Random(circle: Phaser.Geom.Circle, point: Phaser.Geom.Point | any): Phaser.Geom.Point;

    }

    namespace Circle {
    }

    class Ellipse {
      x: number;

      y: number;

      width: number;

      height: number;

      contains(x: number, y: number): boolean;

      getPoint(position: number, out: Phaser.Geom.Point | any): Phaser.Geom.Point;

      getPoints(quantity: number, stepRate: number, output: any[]): Array.<Phaser.Geom.Point>;

      getRandomPoint(point: Phaser.Geom.Point | any): Phaser.Geom.Point;

      setTo(x: number, y: number, width: number, height: number): Phaser.Geom.Ellipse;

      setEmpty(): Phaser.Geom.Ellipse;

      setPosition(x: number, y: number): Phaser.Geom.Ellipse;

      setSize(width: number, height: number): Phaser.Geom.Ellipse;

      isEmpty(): boolean;

      getMinorRadius(): number;

      getMajorRadius(): number;

      left: number;

      right: number;

      top: number;

      bottom: number;

      static Equals(ellipse: Phaser.Geom.Ellipse, toCompare: Phaser.Geom.Ellipse): boolean;

      static GetBounds(ellipse: Phaser.Geom.Ellipse, out: Phaser.Geom.Rectangle | any): Phaser.Geom.Rectangle;

      static GetPoint(ellipse: Phaser.Geom.Ellipse, position: number, out: Phaser.Geom.Point | any): Phaser.Geom.Point;

      static GetPoints(ellipse: Phaser.Geom.Ellipse, quantity: number, stepRate: number, output: any[]): Array.<Phaser.Geom.Point>;

      static Offset(ellipse: Phaser.Geom.Ellipse, x: number, y: number): Phaser.Geom.Ellipse;

      static OffsetPoint(ellipse: Phaser.Geom.Ellipse, point: Phaser.Geom.Point | any): Phaser.Geom.Ellipse;

      static Random(ellipse: Phaser.Geom.Ellipse, point: Phaser.Geom.Point | any): Phaser.Geom.Point;

    }

    namespace Ellipse {
    }

    class Intersects {
      static LineToCircle(line: Phaser.Geom.Line, circle: Phaser.Geom.Circle, nearest: Phaser.Geom.Point): boolean;

      static LineToLine(line1: Phaser.Geom.Line, line2: Phaser.Geom.Line, out: Phaser.Geom.Point): boolean;

      static LineToRectangle(line: Phaser.Geom.Line, rect: Phaser.Geom.Rectangle | any): boolean;

      static PointToLine(point: Phaser.Geom.Point, line: Phaser.Geom.Line): boolean;

      static PointToLineSegment(point: Phaser.Geom.Point, line: Phaser.Geom.Line): boolean;

      static RectangleToRectangle(rectA: Phaser.Geom.Rectangle, rectB: Phaser.Geom.Rectangle): boolean;

      static RectangleToTriangle(rect: Phaser.Geom.Rectangle, triangle: Phaser.Geom.Triangle): boolean;

      static RectangleToValues(rect: Phaser.Geom.Rectangle, left: number, right: number, top: number, bottom: number, tolerance: number): boolean;

      static TriangleToCircle(triangle: Phaser.Geom.Triangle, circle: Phaser.Geom.Circle): boolean;

      static TriangleToLine(triangle: Phaser.Geom.Triangle, line: Phaser.Geom.Line): boolean;

      static TriangleToTriangle(triangleA: Phaser.Geom.Triangle, triangleB: Phaser.Geom.Triangle): boolean;

    }

    namespace Intersects {
    }

    class Line {
      x1: number;

      y1: number;

      x2: number;

      y2: number;

      getPoint(position: any, output: any): Phaser.Geom.Point;

      getPoints(quantity: any, stepRate: any, output: any): any;

      getRandomPoint(point: any): any;

      setTo(x1: any, y1: any, x2: any, y2: any): Phaser.Geom.Line;

      getPointA(): any;

      getPointB(): any;

      left: number;

      right: number;

      top: number;

      bottom: number;

      static NormalAngle(line: Phaser.Geom.Line): number;

      static NormalX(line: Phaser.Geom.Line): number;

      static NormalY(line: Phaser.Geom.Line): number;

      static Offset(line: Phaser.Geom.Line, x: number, y: number): Phaser.Geom.Line;

      static PerpSlope(line: Phaser.Geom.Line): number;

      static Random(line: Phaser.Geom.Line, out: Phaser.Geom.Point | any): Phaser.Geom.Point;

      static ReflectAngle(lineA: Phaser.Geom.Line, lineB: Phaser.Geom.Line): number;

      static Rotate(line: Phaser.Geom.Line, angle: number): Phaser.Geom.Line;

      static RotateAroundPoint(line: Phaser.Geom.Line, point: Phaser.Geom.Point | any, angle: number): Phaser.Geom.Line;

      static RotateAroundXY(line: Phaser.Geom.Line, x: number, y: number, angle: number): Phaser.Geom.Line;

      static SetToAngle(line: Phaser.Geom.Line, x: number, y: number, angle: number, length: number): Phaser.Geom.Line;

      static Slope(line: Phaser.Geom.Line): number;

      static Width(line: Phaser.Geom.Line): number;

    }

    namespace Line {
    }

    class Point {
      x: number;

      y: number;

      setTo(x: number, y: number): Phaser.Geom.Point;

      static Project(pointA: Phaser.Geom.Point, pointB: Phaser.Geom.Point, out: Phaser.Geom.Point): Phaser.Geom.Point;

      static ProjectUnit(pointA: Phaser.Geom.Point, pointB: Phaser.Geom.Point, out: Phaser.Geom.Point): Phaser.Geom.Point;

      static SetMagnitude(point: Phaser.Geom.Point, magnitude: number): Phaser.Geom.Point;

    }

    namespace Point {
    }

    class Polygon {
      area: number;

      points: Array.<Phaser.Geom.Point>;

      contains(x: any, y: any): any;

      setTo(points: any): Phaser.Geom.Polygon;

      calculateArea(): number;

      static Reverse(polygon: Phaser.Geom.Polygon): Phaser.Geom.Polygon;

    }

    namespace Polygon {
    }

    class Rectangle {
      x: number;

      y: number;

      width: number;

      height: number;

      contains(x: any, y: any): any;

      getPoint(position: any, output: any): any;

      getPoints(quantity: any, stepRate: any, output: any): any;

      getRandomPoint(point: any): any;

      setTo(x: any, y: any, width: any, height: any): Phaser.Geom.Rectangle;

      setEmpty(): Phaser.Geom.Rectangle;

      setPosition(x: any, y: any): Phaser.Geom.Rectangle;

      setSize(width: any, height: any): Phaser.Geom.Rectangle;

      isEmpty(): boolean;

      getLineA(): any;

      getLineB(): any;

      getLineC(): any;

      getLineD(): any;

      left: number;

      right: number;

      top: number;

      bottom: number;

      centerX: number;

      centerY: number;

      static Scale(rect: Phaser.Geom.Rectangle, x: number, y: number): Phaser.Geom.Rectangle;

      static Union(rectA: Phaser.Geom.Rectangle, rectB: Phaser.Geom.Rectangle, out: Phaser.Geom.Rectangle): Phaser.Geom.Rectangle;

    }

    namespace Rectangle {
    }

    class Triangle {
      x1: number;

      y1: number;

      x2: number;

      y2: number;

      x3: number;

      y3: number;

      contains(x: any, y: any): any;

      getPoint(position: any, output: any): any;

      getPoints(quantity: any, stepRate: any, output: any): any;

      getRandomPoint(point: any): any;

      setTo(x1: any, y1: any, x2: any, y2: any, x3: any, y3: any): Phaser.Geom.Triangle;

      getLineA(): any;

      getLineB(): any;

      getLineC(): any;

      left: number;

      right: number;

      top: number;

      bottom: number;

    }

    namespace Triangle {
    }

  }

  class Input {
  }

  namespace Input {
    class Gamepad {
    }

    namespace Gamepad {
    }

    class InputManager {
      game: Phaser.Game;

      canvas: HTMLCanvasElement;

      config: any;

      enabled: boolean;

      events: EventEmitter;

      queue: any[];

      keyboard: Phaser.Input.Keyboard.KeyboardManager;

      mouse: Phaser.Input.Mouse.MouseManager;

      touch: Phaser.Input.Touch.TouchManager;

      gamepad: Phaser.Input.Gamepad.GamepadManager;

      activePointer: any;

      scale: any;

      globalTopOnly: boolean;

      ignoreEvents: boolean;

      bounds: Phaser.Geom.Rectangle;

      _tempPoint: any;

      _tempHitTest: any[];

      boot(): void;

      updateBounds(): void;

      update(time: number): void;

      hitTest(x: number, y: number, gameObjects: any[], camera: Phaser.Cameras.Scene2D.Camera, output: any[]): any[];

      pointWithinHitArea(gameObject: Phaser.GameObjects.GameObject, x: number, y: number): boolean;

      pointWithinInteractiveObject(object: Phaser.Input.InteractiveObject, x: number, y: number): boolean;

      transformX(pageX: number): number;

      transformY(pageY: number): number;

      getOffsetX(): number;

      getOffsetY(): number;

      getScaleX(): number;

      getScaleY(): number;

      destroy(): void;

    }

    namespace InputManager {
    }

    class InputPlugin {
      scene: Phaser.Scene;

      systems: Phaser.Scenes.Systems;

      manager: Phaser.Input.InputManager;

      displayList: Phaser.GameObjects.DisplayList;

      cameras: null;

      keyboard: Phaser.Input.Keyboard.KeyboardManager;

      mouse: Phaser.Input.Mouse.MouseManager;

      gamepad: Phaser.Input.Gamepad.GamepadManager;

      topOnly: boolean;

      pollRate: number;

      _pollTimer: number;

      dragDistanceThreshold: number;

      dragTimeThreshold: number;

      _temp: any[];

      _list: any[];

      _pendingInsertion: any[];

      _pendingRemoval: any[];

      _draggable: any[];

      _drag: any;

      _over: any;

      _validTypes: any;

      boot(): void;

      preUpdate(): any;

      clear(gameObject: any): any;

      disable(gameObject: any): void;

      enable(gameObject: any, shape: any, callback: any): any;

      hitTestPointer(pointer: any): any;

      processDownEvents(pointer: any): any;

      processDragEvents(pointer: any, time: any): any;

      processMoveEvents(pointer: any): any;

      processOverOutEvents(pointer: any): any;

      processUpEvents(pointer: any): void;

      queueForInsertion(child: any): any;

      queueForRemoval(child: any): any;

      setDraggable(gameObjects: any, value: any): any;

      setHitArea(gameObjects: any, shape: any, callback: any): any;

      setHitAreaCircle(gameObjects: any, x: any, y: any, radius: any, callback: any): any;

      setHitAreaEllipse(gameObjects: any, x: any, y: any, width: any, height: any, callback: any): any;

      setHitAreaFromTexture(gameObjects: any, callback: any): any;

      setHitAreaRectangle(gameObjects: any, x: any, y: any, width: any, height: any, callback: any): any;

      setHitAreaTriangle(gameObjects: any, x1: any, y1: any, x2: any, y2: any, x3: any, y3: any, callback: any): any;

      setPollAlways(): any;

      setPollOnMove(): any;

      setPollRate(value: any): any;

      setGlobalTopOnly(value: any): any;

      setTopOnly(value: any): any;

      sortGameObjects(gameObjects: any): any;

      sortHandlerGO(childA: any, childB: any): any;

      sortHandlerIO(childA: any, childB: any): any;

      sortInteractiveObjects(interactiveObjects: any): any;

      stopPropagation(): any;

      update(time: any, delta: any): any;

      shutdown(): void;

      destroy(): void;

      activePointer: Phaser.Input.Pointer;

      x: number;

      y: number;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

    }

    namespace InputPlugin {
    }

    class Keyboard {
      static DownDuration(key: Phaser.Input.Keyboard.Key, duration: number): boolean;

      static JustDown(key: Phaser.Input.Keyboard.Key): boolean;

      static JustUp(key: Phaser.Input.Keyboard.Key): boolean;

      static UpDuration(key: Phaser.Input.Keyboard.Key, duration: number): boolean;

    }

    namespace Keyboard {
      class KeyboardManager {
        manager: Phaser.Input.InputManager;

        enabled: boolean;

        target: null;

        keys: any[];

        combos: any[];

        captures: any[];

        queue: any[];

        handler: any;

        boot(): void;

        startListeners(): any;

        stopListeners(): void;

        createCursorKeys(): any;

        addKeys(keys: any): any;

        addKey(keyCode: any): any;

        removeKey(keyCode: any): void;

        addKeyCapture(keyCodes: any): void;

        removeKeyCapture(keyCodes: any): void;

        createCombo(keys: any, config: any): any;

        update(): any;

        shutdown(): void;

        destroy(): void;

        eventNames(): any[];

        listeners(event: string | symbol): any[];

        listenerCount(event: string | symbol): number;

        emit(event: string | symbol): Boolean;

        on(event: string | symbol, fn: any, context: *): EventEmitter;

        addListener(event: string | symbol, fn: any, context: *): EventEmitter;

        once(event: string | symbol, fn: any, context: *): EventEmitter;

        removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

        off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

        removeAllListeners(event: string | symbol): EventEmitter;

      }

      namespace KeyboardManager {
      }

      class Key {
        keyCode: number;

        originalEvent: KeyboardEvent;

        preventDefault: boolean;

        enabled: boolean;

        isDown: boolean;

        isUp: boolean;

        altKey: boolean;

        ctrlKey: boolean;

        shiftKey: boolean;

        location: number;

        timeDown: number;

        duration: number;

        timeUp: number;

        repeats: number;

        _justDown: boolean;

        _justUp: boolean;

      }

      namespace Key {
      }

    }

    class Mouse {
    }

    namespace Mouse {
      class MouseManager {
        manager: Phaser.Input.InputManager;

        capture: boolean;

        enabled: boolean;

        target: null;

        handler: null;

        locked: boolean;

        boot(): void;

        disableContextMenu(): Phaser.Input.Mouse.MouseManager;

        requestPointerLock(): void;

        pointerLockChange(event: Event): void;

        releasePointerLock(): void;

        startListeners(): void;

        stopListeners(): void;

        destroy(): void;

      }

      namespace MouseManager {
      }

    }

    class Pointer {
      manager: Phaser.Input.InputManager;

      id: number;

      event: null;

      camera: Phaser.Cameras.Scene2D.Camera;

      buttons: number;

      position: Phaser.Math.Vector2;

      downX: number;

      downY: number;

      downTime: number;

      upX: number;

      upY: number;

      upTime: number;

      primaryDown: boolean;

      dragState: number;

      isDown: boolean;

      dirty: boolean;

      justDown: boolean;

      justUp: boolean;

      justMoved: boolean;

      wasTouch: boolean;

      movementX: number;

      movementY: number;

      positionToCamera(camera: any, output: any): any;

      x: number;

      y: number;

      reset(): void;

      touchmove(event: any, time: any): void;

      move(event: any, time: any): void;

      down(event: any, time: any): void;

      touchstart(event: any, time: any): void;

      up(event: any, time: any): void;

      touchend(event: any, time: any): void;

      noButtonDown(): boolean;

      leftButtonDown(): boolean;

      rightButtonDown(): boolean;

      middleButtonDown(): boolean;

      backButtonDown(): boolean;

      forwardButtonDown(): boolean;

      destroy(): void;

    }

    namespace Pointer {
    }

    class Touch {
    }

    namespace Touch {
      class TouchManager {
        manager: Phaser.Input.InputManager;

        capture: boolean;

        enabled: boolean;

        target: null;

        handler: any;

        boot(): void;

        startListeners(): void;

        stopListeners(): void;

        destroy(): void;

      }

      namespace TouchManager {
      }

    }

  }

  class Loader {
    LOADER_IDLE: number;

    LOADER_LOADING: number;

    LOADER_PROCESSING: number;

    LOADER_COMPLETE: number;

    LOADER_SHUTDOWN: number;

    LOADER_DESTROYED: number;

    FILE_PENDING: number;

    FILE_LOADING: number;

    FILE_LOADED: number;

    FILE_FAILED: number;

    FILE_PROCESSING: number;

    FILE_WAITING_LINKFILE: number;

    FILE_ERRORED: number;

    FILE_COMPLETE: number;

    FILE_DESTROYED: number;

    FILE_POPULATED: number;

    TEXTURE_ATLAS_JSON_ARRAY: number;

    TEXTURE_ATLAS_JSON_HASH: number;

    static GetURL(file: Phaser.Loader.File, baseURL: string): string;

    static MergeXHRSettings(global: Phaser.Loader.XHRSettings, local: Phaser.Loader.XHRSettings): Phaser.Loader.XHRSettings;

    static XHRLoader(file: Phaser.Loader.File, globalXHRSettings: Phaser.Loader.XHRSettings): XMLHttpRequest;

    static XHRSettings(responseType: string, async: boolean, user: string, password: string, timeout: number): Phaser.Loader.XHRSettings;

  }

  namespace Loader {
    class File {
      type: string;

      key: string;

      url: string;

      src: string;

      xhrSettings: Phaser.Loader.XHRSettings;

      loader: Phaser.Loader.LoaderPlugin;

      xhrLoader: Phaser.Loader.XHRLoader;

      state: number;

      bytesTotal: number;

      bytesLoaded: number;

      percentComplete: number;

      crossOrigin: string;

      data: any;

      config: any;

      linkFile: Phaser.Loader.File;

      linkType: string;

      linkParent: boolean;

      setLinkFile(fileB: Phaser.Loader.File, linkType: string): void;

      resetXHR(): void;

      load(loader: Phaser.Loader.LoaderPlugin): void;

      onLoad(event: ProgressEvent): void;

      onError(event: ProgressEvent): void;

      onProgress(event: ProgressEvent): void;

      onProcess(callback: any): void;

      onComplete(): void;

      static createObjectURL(image: Image, blob: Blob, defaultType: string): void;

      static revokeObjectURL(image: Image): void;

    }

    namespace File {
    }

    class FileTypes {
    }

    namespace FileTypes {
      class JSONFile {
        type: string;

        key: string;

        url: string;

        src: string;

        xhrSettings: Phaser.Loader.XHRSettings;

        loader: Phaser.Loader.LoaderPlugin;

        xhrLoader: Phaser.Loader.XHRLoader;

        state: number;

        bytesTotal: number;

        bytesLoaded: number;

        percentComplete: number;

        crossOrigin: string;

        data: any;

        config: any;

        linkFile: Phaser.Loader.File;

        linkType: string;

        linkParent: boolean;

        setLinkFile(fileB: Phaser.Loader.File, linkType: string): void;

        resetXHR(): void;

        load(loader: Phaser.Loader.LoaderPlugin): void;

        onLoad(event: ProgressEvent): void;

        onError(event: ProgressEvent): void;

        onProgress(event: ProgressEvent): void;

        onProcess(callback: any): void;

        onComplete(): void;

      }

      namespace JSONFile {
      }

      class PluginFile {
        type: string;

        key: string;

        url: string;

        src: string;

        xhrSettings: Phaser.Loader.XHRSettings;

        loader: Phaser.Loader.LoaderPlugin;

        xhrLoader: Phaser.Loader.XHRLoader;

        state: number;

        bytesTotal: number;

        bytesLoaded: number;

        percentComplete: number;

        crossOrigin: string;

        data: any;

        config: any;

        linkFile: Phaser.Loader.File;

        linkType: string;

        linkParent: boolean;

        setLinkFile(fileB: Phaser.Loader.File, linkType: string): void;

        resetXHR(): void;

        load(loader: Phaser.Loader.LoaderPlugin): void;

        onLoad(event: ProgressEvent): void;

        onError(event: ProgressEvent): void;

        onProgress(event: ProgressEvent): void;

        onProcess(callback: any): void;

        onComplete(): void;

      }

      namespace PluginFile {
      }

      class ScriptFile {
        type: string;

        key: string;

        url: string;

        src: string;

        xhrSettings: Phaser.Loader.XHRSettings;

        loader: Phaser.Loader.LoaderPlugin;

        xhrLoader: Phaser.Loader.XHRLoader;

        state: number;

        bytesTotal: number;

        bytesLoaded: number;

        percentComplete: number;

        crossOrigin: string;

        data: any;

        config: any;

        linkFile: Phaser.Loader.File;

        linkType: string;

        linkParent: boolean;

        setLinkFile(fileB: Phaser.Loader.File, linkType: string): void;

        resetXHR(): void;

        load(loader: Phaser.Loader.LoaderPlugin): void;

        onLoad(event: ProgressEvent): void;

        onError(event: ProgressEvent): void;

        onProgress(event: ProgressEvent): void;

        onProcess(callback: any): void;

        onComplete(): void;

      }

      namespace ScriptFile {
      }

      class SVGFile {
        type: string;

        key: string;

        url: string;

        src: string;

        xhrSettings: Phaser.Loader.XHRSettings;

        loader: Phaser.Loader.LoaderPlugin;

        xhrLoader: Phaser.Loader.XHRLoader;

        state: number;

        bytesTotal: number;

        bytesLoaded: number;

        percentComplete: number;

        crossOrigin: string;

        data: any;

        config: any;

        linkFile: Phaser.Loader.File;

        linkType: string;

        linkParent: boolean;

        setLinkFile(fileB: Phaser.Loader.File, linkType: string): void;

        resetXHR(): void;

        load(loader: Phaser.Loader.LoaderPlugin): void;

        onLoad(event: ProgressEvent): void;

        onError(event: ProgressEvent): void;

        onProgress(event: ProgressEvent): void;

        onProcess(callback: any): void;

        onComplete(): void;

      }

      namespace SVGFile {
      }

      class TextFile {
        type: string;

        key: string;

        url: string;

        src: string;

        xhrSettings: Phaser.Loader.XHRSettings;

        loader: Phaser.Loader.LoaderPlugin;

        xhrLoader: Phaser.Loader.XHRLoader;

        state: number;

        bytesTotal: number;

        bytesLoaded: number;

        percentComplete: number;

        crossOrigin: string;

        data: any;

        config: any;

        linkFile: Phaser.Loader.File;

        linkType: string;

        linkParent: boolean;

        setLinkFile(fileB: Phaser.Loader.File, linkType: string): void;

        resetXHR(): void;

        load(loader: Phaser.Loader.LoaderPlugin): void;

        onLoad(event: ProgressEvent): void;

        onError(event: ProgressEvent): void;

        onProgress(event: ProgressEvent): void;

        onProcess(callback: any): void;

        onComplete(): void;

      }

      namespace TextFile {
      }

      class TilemapCSVFile {
        type: string;

        key: string;

        url: string;

        src: string;

        xhrSettings: Phaser.Loader.XHRSettings;

        loader: Phaser.Loader.LoaderPlugin;

        xhrLoader: Phaser.Loader.XHRLoader;

        state: number;

        bytesTotal: number;

        bytesLoaded: number;

        percentComplete: number;

        crossOrigin: string;

        data: any;

        config: any;

        linkFile: Phaser.Loader.File;

        linkType: string;

        linkParent: boolean;

        setLinkFile(fileB: Phaser.Loader.File, linkType: string): void;

        resetXHR(): void;

        load(loader: Phaser.Loader.LoaderPlugin): void;

        onLoad(event: ProgressEvent): void;

        onError(event: ProgressEvent): void;

        onProgress(event: ProgressEvent): void;

        onProcess(callback: any): void;

        onComplete(): void;

      }

      namespace TilemapCSVFile {
      }

      class XMLFile {
        type: string;

        key: string;

        url: string;

        src: string;

        xhrSettings: Phaser.Loader.XHRSettings;

        loader: Phaser.Loader.LoaderPlugin;

        xhrLoader: Phaser.Loader.XHRLoader;

        state: number;

        bytesTotal: number;

        bytesLoaded: number;

        percentComplete: number;

        crossOrigin: string;

        data: any;

        config: any;

        linkFile: Phaser.Loader.File;

        linkType: string;

        linkParent: boolean;

        setLinkFile(fileB: Phaser.Loader.File, linkType: string): void;

        resetXHR(): void;

        load(loader: Phaser.Loader.LoaderPlugin): void;

        onLoad(event: ProgressEvent): void;

        onError(event: ProgressEvent): void;

        onProgress(event: ProgressEvent): void;

        onProcess(callback: any): void;

        onComplete(): void;

      }

      namespace XMLFile {
      }

    }

    class LoaderPlugin {
      scene: Phaser.Scene;

      systems: Phaser.Scenes.Systems;

      _multilist: any;

      path: string;

      baseURL: string;

      enableParallel: boolean;

      maxParallelDownloads: number;

      xhr: Phaser.Loader.XHRSettings;

      crossOrigin: string;

      totalToLoad: number;

      progress: number;

      list: Phaser.Structs.Set;

      inflight: Phaser.Structs.Set;

      failed: Phaser.Structs.Set;

      queue: Phaser.Structs.Set;

      storage: Phaser.Structs.Set;

      state: number;

      boot(): void;

      setBaseURL(url: string): Phaser.Loader.LoaderPlugin;

      setPath(path: string): Phaser.Loader.LoaderPlugin;

      setCORS(crossOrigin: string): Phaser.Loader.LoaderPlugin;

      addFile(file: Phaser.Loader.File): Phaser.Loader.File;

      isLoading(): boolean;

      isReady(): boolean;

      start(): void;

      updateProgress(): void;

      processLoadQueue(): void;

      loadFile(file: Phaser.Loader.File): void;

      nextFile(previousFile: Phaser.Loader.File, success: boolean): void;

      finishedLoading(): void;

      processUpdate(file: Phaser.Loader.File): void;

      removeFromQueue(file: Phaser.Loader.File): void;

      processComplete(): void;

      processCallback(): void;

      saveJSON(data: any, filename: any): any;

      save(data: any, filename: any, filetype: any): Phaser.Loader.LoaderPlugin;

      reset(): void;

      loadArray(files: any[]): boolean;

      file(file: any): Phaser.Loader.File;

      shutdown(): void;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

    }

    namespace LoaderPlugin {
    }

  }

  class Math {
    static Average(values: Array.<number>): number;

    static Bernstein(n: number, i: number): number;

    static Between(min: number, max: number): number;

    static CatmullRom(t: number, p0: number, p1: number, p2: number, p3: number): number;

    static CeilTo(value: number, place: number, base: number): number;

    static Clamp(value: number, min: number, max: number): number;

    PI2: number;

    TAU: number;

    EPSILON: number;

    DEG_TO_RAD: number;

    RAD_TO_DEG: number;

    RND: Phaser.Math.RandomDataGenerator;

    static DegToRad(degrees: number): number;

    static Difference(a: number, b: number): number;

    static Factorial(value: number): number;

    static FloatBetween(min: number, max: number): number;

    static FloorTo(value: number, place: number, base: number): number;

    static FromPercent(percent: number, min: number, max: number): number;

    static GetSpeed(distance: number, time: number): number;

    static IsEven(value: number): boolean;

    static IsEvenStrict(value: number): boolean;

    static Linear(p0: number, p1: number, t: number): number;

    static MaxAdd(value: number, amount: number, max: number): number;

    static MinSub(value: number, amount: number, min: number): number;

    static Percent(value: number, min: number, max: number, upperMax: number): number;

    static RadToDeg(radians: number): number;

    static RandomXY(vector: Phaser.Math.Vector2, scale: number): Phaser.Math.Vector2;

    static RandomXYZ(vec3: Phaser.Math.Vector3, radius: number): Phaser.Math.Vector3;

    static RandomXYZW(vec4: Phaser.Math.Vector4, scale: number): Phaser.Math.Vector4;

    static Rotate(point: Phaser.Geom.Point | any, angle: number): Phaser.Geom.Point;

    static RotateAround(point: Phaser.Geom.Point | any, x: number, y: number, angle: number): Phaser.Geom.Point;

    static RotateAroundDistance(point: Phaser.Geom.Point | any, x: number, y: number, angle: number, distance: number): Phaser.Geom.Point;

    static RotateVec3(vec: Phaser.Math.Vector3, axis: Phaser.Math.Vector3, radians: number): Phaser.Math.Vector3;

    static RoundAwayFromZero(value: number): number;

    static RoundTo(value: number, place: number, base: number): number;

    static SinCosTableGenerator(length: number, sinAmp: number, cosAmp: number, frequency: number): any;

    static SmootherStep(x: number, min: number, max: number): number;

    static SmoothStep(x: number, min: number, max: number): number;

    static TransformXY(x: number, y: number, positionX: number, positionY: number, rotation: number, scaleX: number, scaleY: number, output: Vector2 | Point | any): Vector2;

    static Within(a: number, b: number, tolerance: number): boolean;

    static Wrap(value: number, min: number, max: number): number;

  }

  namespace Math {
    class Angle {
      static Normalize(angle: number): number;

      static Reverse(angle: number): number;

      static RotateTo(currentAngle: number, targetAngle: number, lerp: number): number;

      static ShortestBetween(angle1: number, angle2: number): number;

      static Wrap(angle: number): number;

      static WrapDegrees(angle: number): number;

    }

    namespace Angle {
    }

    class Distance {
    }

    namespace Distance {
    }

    class Easing {
      static Linear(v: number): number;

      static Stepped(v: number, steps: number): number;

    }

    namespace Easing {
    }

    class Fuzzy {
      static LessThan(a: number, b: number, epsilon: number): boolean;

    }

    namespace Fuzzy {
    }

    class Interpolation {
      static Linear(v: number, k: number): number;

    }

    namespace Interpolation {
    }

    class Matrix3 {
      val: Float32Array;

      clone(): any;

      set(src: any): any;

      copy(src: any): any;

      fromMat4(m: any): any;

      fromArray(a: any): any;

      identity(): any;

      transpose(): any;

      invert(): any;

      adjoint(): any;

      determinant(): any;

      multiply(src: any): any;

      translate(v: any): any;

      rotate(rad: any): any;

      scale(v: any): any;

      fromQuat(q: any): any;

      normalFromMat4(m: any): any;

    }

    namespace Matrix3 {
    }

    class Matrix4 {
      val: Float32Array;

      clone(): any;

      set(src: any): any;

      copy(src: any): any;

      fromArray(a: any): any;

      zero(): any;

      xyz(x: any, y: any, z: any): any;

      scaling(x: any, y: any, z: any): any;

      identity(): any;

      transpose(): any;

      invert(): any;

      adjoint(): any;

      determinant(): any;

      multiply(src: any): any;

      multiplyLocal(src: any): any;

      translate(v: any): any;

      scale(v: any): any;

      makeRotationAxis(axis: any, angle: any): any;

      rotate(rad: any, axis: any): any;

      rotateX(rad: any): any;

      rotateY(rad: any): any;

      rotateZ(rad: any): any;

      fromRotationTranslation(q: any, v: any): any;

      fromQuat(q: any): any;

      frustum(left: any, right: any, bottom: any, top: any, near: any, far: any): any;

      perspective(fovy: any, aspect: any, near: any, far: any): any;

      perspectiveLH(width: any, height: any, near: any, far: any): any;

      ortho(left: any, right: any, bottom: any, top: any, near: any, far: any): any;

      lookAt(eye: any, center: any, up: any): any;

      yawPitchRoll(yaw: any, pitch: any, roll: any): any;

      setWorldMatrix(rotation: any, position: any, scale: any, viewMatrix: any, projectionMatrix: any): any;

    }

    namespace Matrix4 {
    }

    class Pow2 {
      static IsSizePowerOfTwo(width: number, height: number): boolean;

      static IsValuePowerOfTwo(value: number): boolean;

    }

    namespace Pow2 {
    }

    class Quaternion {
      x: number;

      y: number;

      z: number;

      w: number;

      copy(src: any): any;

      set(x: any, y: any, z: any, w: any): any;

      add(v: any): any;

      subtract(v: any): any;

      scale(scale: any): any;

      length(): any;

      lengthSq(): any;

      normalize(): any;

      dot(v: any): any;

      lerp(v: any, t: any): any;

      rotationTo(a: any, b: any): any;

      setAxes(view: any, right: any, up: any): any;

      identity(): any;

      setAxisAngle(axis: any, rad: any): any;

      multiply(b: any): any;

      slerp(b: any, t: any): any;

      invert(): any;

      conjugate(): any;

      rotateX(rad: any): any;

      rotateY(rad: any): any;

      rotateZ(rad: any): any;

      calculateW(): any;

      fromMat3(mat: any): any;

    }

    namespace Quaternion {
    }

    class RandomDataGenerator {
      c: number;

      s0: number;

      s1: number;

      s2: number;

      sign: any[];

      rnd(): number;

      hash(data: any): number;

      init(seeds: string | any[]): void;

      sow(seeds: Array.<any>): void;

      integer(): number;

      frac(): number;

      real(): number;

      integerInRange(min: number, max: number): number;

      between(min: number, max: number): number;

      realInRange(min: number, max: number): number;

      normal(): number;

      uuid(): string;

      pick(array: any[]): any;

      sign(): number;

      weightedPick(array: any[]): any;

      timestamp(min: number, max: number): number;

      angle(): number;

      rotation(): number;

      state(state: string): string;

    }

    namespace RandomDataGenerator {
    }

    class Snap {
      static Ceil(value: number, gap: number, start: number): number;

      static Floor(value: number, gap: number, start: number): number;

      static To(value: number, gap: number, start: number): number;

    }

    namespace Snap {
    }

    class Vector2 {
      x: number;

      y: number;

      clone(): Phaser.Math.Vector2;

      copy(src: any): Phaser.Math.Vector2;

      setFromObject(obj: any): Phaser.Math.Vector2;

      set(x: any, y: any): Phaser.Math.Vector2;

      setToPolar(azimuth: any, radius: any): Phaser.Math.Vector2;

      equals(v: any): boolean;

      angle(): number;

      add(src: any): Phaser.Math.Vector2;

      subtract(src: any): Phaser.Math.Vector2;

      multiply(src: any): Phaser.Math.Vector2;

      scale(value: any): Phaser.Math.Vector2;

      divide(src: any): Phaser.Math.Vector2;

      negate(): Phaser.Math.Vector2;

      distance(src: any): number;

      distanceSq(src: any): number;

      length(): number;

      lengthSq(): number;

      normalize(): Phaser.Math.Vector2;

      normalizeRightHand(): Phaser.Math.Vector2;

      dot(src: any): number;

      cross(src: any): number;

      lerp(src: any, t: any): Phaser.Math.Vector2;

      transformMat3(mat: any): Phaser.Math.Vector2;

      transformMat4(mat: any): Phaser.Math.Vector2;

      reset(): Phaser.Math.Vector2;

    }

    namespace Vector2 {
    }

    class Vector3 {
      x: number;

      y: number;

      z: number;

      up(): any;

      clone(): any;

      crossVectors(a: any, b: any): any;

      equals(v: any): any;

      copy(src: any): any;

      set(x: any, y: any, z: any): any;

      add(v: any): any;

      subtract(v: any): any;

      multiply(v: any): any;

      scale(scale: any): any;

      divide(v: any): any;

      negate(): any;

      distance(v: any): any;

      distanceSq(v: any): any;

      length(): any;

      lengthSq(): any;

      normalize(): any;

      dot(v: any): any;

      cross(v: any): any;

      lerp(v: any, t: any): any;

      transformMat3(mat: any): any;

      transformMat4(mat: any): any;

      transformCoordinates(mat: any): any;

      transformQuat(q: any): any;

      project(mat: any): any;

      unproject(viewport: any, invProjectionView: any): any;

      reset(): any;

      x: number;

      y: number;

      z: number;

      w: number;

    }

    namespace Vector3 {
    }

    class Vector4 {
      clone(): any;

      copy(src: any): any;

      equals(v: any): any;

      set(x: any, y: any, z: any, w: any): any;

      add(v: any): any;

      subtract(v: any): any;

      scale(scale: any): any;

      length(): any;

      lengthSq(): any;

      normalize(): any;

      dot(v: any): any;

      lerp(v: any, t: any): any;

      multiply(v: any): any;

      divide(v: any): any;

      distance(v: any): any;

      distanceSq(v: any): any;

      negate(): any;

      transformMat4(mat: any): any;

      transformQuat(q: any): any;

      reset(): any;

    }

    namespace Vector4 {
    }

  }

  class Physics {
  }

  namespace Physics {
    class Arcade {
      static SeparateX(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, overlapOnly: boolean, bias: number): boolean;

      static SeparateY(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, overlapOnly: boolean, bias: number): boolean;

    }

    namespace Arcade {
      class Group {
        world: Phaser.Physics.Arcade.World;

        physicsType: number;

        defaults: any;

        createCallback(child: Phaser.GameObjects.GameObject): void;

        removeCallback(child: Phaser.GameObjects.GameObject): void;

        setVelocity(x: number, y: number, step: number): Phaser.Physics.Arcade.Group;

        setVelocityX(value: number, step: number): Phaser.Physics.Arcade.Group;

        setVelocityY(value: number, step: number): Phaser.Physics.Arcade.Group;

        scene: Phaser.Scene;

        children: Phaser.Structs.Set;

        isParent: boolean;

        classType: any;

        active: boolean;

        maxSize: number;

        defaultKey: string;

        defaultFrame: string;

        runChildUpdate: boolean;

        createMultipleCallback: any;

        create(x: number, y: number, texture: string, frame: string | number, visible: boolean): Phaser.GameObjects.GameObject;

        createMultiple(config: any): Array.<Phaser.GameObjects.GameObject>;

        createFromConfig(options: any): Array.<Phaser.GameObjects.GameObject>;

        preUpdate(time: number, delta: number): void;

        add(child: Phaser.GameObjects.GameObject, addToScene: boolean): Phaser.GameObjects.Group;

        addMultiple(children: Array.<Phaser.GameObjects.GameObject>, addToScene: boolean): Phaser.GameObjects.Group;

        remove(child: Phaser.GameObjects.GameObject, removeFromScene: boolean): Phaser.GameObjects.Group;

        clear(removeFromScene: boolean): Phaser.GameObjects.Group;

        contains(child: Phaser.GameObjects.GameObject): boolean;

        getChildren(): Array.<Phaser.GameObjects.GameObject>;

        getLength(): number;

        getFirst(state: boolean, createIfNull: boolean, x: number, y: number, texture: string, frame: string | number, visible: boolean): Phaser.GameObjects.GameObject;

        get(x: number, y: number, texture: string, frame: string | number, visible: boolean): Phaser.GameObjects.GameObject;

        getFirstAlive(createIfNull: boolean, x: number, y: number, texture: string, frame: string | number, visible: boolean): Phaser.GameObjects.GameObject;

        getFirstDead(createIfNull: boolean, x: number, y: number, texture: string, frame: string | number, visible: boolean): Phaser.GameObjects.GameObject;

        playAnimation(key: string, startFrame: string): Phaser.GameObjects.Group;

        isFull(): boolean;

        countActive(value: boolean): number;

        getTotalUsed(): number;

        getTotalFree(): number;

        setDepth(value: number, step: number): Phaser.GameObjects.Group;

        kill(gameObject: Phaser.GameObjects.GameObject): void;

        killAndHide(gameObject: Phaser.GameObjects.GameObject): void;

        toggleVisible(): Phaser.GameObjects.Group;

        destroy(): void;

      }

      namespace Group {
      }

      class StaticBody {
        world: Phaser.Physics.Arcade.World;

        gameObject: Phaser.GameObjects.GameObject;

        debugShowBody: boolean;

        debugBodyColor: number;

        enable: boolean;

        isCircle: boolean;

        radius: number;

        offset: Phaser.Math.Vector2;

        position: Phaser.Math.Vector2;

        width: number;

        height: number;

        sourceWidth: number;

        sourceHeight: number;

        halfWidth: number;

        halfHeight: number;

        center: Phaser.Math.Vector2;

        velocity: Phaser.Math.Vector2;

        allowGravity: boolean;

        gravity: Phaser.Math.Vector2;

        bounce: Phaser.Math.Vector2;

        onWorldBounds: boolean;

        onCollide: boolean;

        onOverlap: boolean;

        mass: number;

        immovable: boolean;

        moves: boolean;

        customSeparateX: boolean;

        customSeparateY: boolean;

        overlapX: number;

        overlapY: number;

        overlapR: number;

        embedded: boolean;

        collideWorldBounds: boolean;

        checkCollision: any;

        touching: any;

        wasTouching: any;

        blocked: any;

        physicsType: number;

        _sx: number;

        _sy: number;

        _bounds: Phaser.Geom.Rectangle;

        setSize(width: number, height: number, offsetX: number, offsetY: number): Phaser.Physics.Arcade.StaticBody;

        setCircle(radius: number, offsetX: number, offsetY: number): Phaser.Physics.Arcade.StaticBody;

        updateCenter(): void;

        reset(x: number, y: number): void;

        stop(): Phaser.Physics.Arcade.StaticBody;

        getBounds(obj: any): any;

        hitTest(x: number, y: number): boolean;

        deltaAbsX(): number;

        deltaAbsY(): number;

        deltaX(): number;

        deltaY(): number;

        deltaZ(): number;

        destroy(): void;

        drawDebug(graphic: Phaser.GameObjects.Graphics): void;

        willDrawDebug(): boolean;

        setMass(value: number): Phaser.Physics.Arcade.StaticBody;

        x: number;

        y: number;

        left: number;

        right: number;

        top: number;

        bottom: number;

      }

      namespace StaticBody {
      }

      class StaticGroup {
        world: Phaser.Physics.Arcade.World;

        physicsType: number;

        createCallback(child: Phaser.GameObjects.GameObject): void;

        removeCallback(child: Phaser.GameObjects.GameObject): void;

        createMultipleCallback(entries: any): void;

        refresh(): Phaser.Physics.Arcade.StaticGroup;

        scene: Phaser.Scene;

        children: Phaser.Structs.Set;

        isParent: boolean;

        classType: any;

        active: boolean;

        maxSize: number;

        defaultKey: string;

        defaultFrame: string;

        runChildUpdate: boolean;

        create(x: number, y: number, texture: string, frame: string | number, visible: boolean): Phaser.GameObjects.GameObject;

        createMultiple(config: any): Array.<Phaser.GameObjects.GameObject>;

        createFromConfig(options: any): Array.<Phaser.GameObjects.GameObject>;

        preUpdate(time: number, delta: number): void;

        add(child: Phaser.GameObjects.GameObject, addToScene: boolean): Phaser.GameObjects.Group;

        addMultiple(children: Array.<Phaser.GameObjects.GameObject>, addToScene: boolean): Phaser.GameObjects.Group;

        remove(child: Phaser.GameObjects.GameObject, removeFromScene: boolean): Phaser.GameObjects.Group;

        clear(removeFromScene: boolean): Phaser.GameObjects.Group;

        contains(child: Phaser.GameObjects.GameObject): boolean;

        getChildren(): Array.<Phaser.GameObjects.GameObject>;

        getLength(): number;

        getFirst(state: boolean, createIfNull: boolean, x: number, y: number, texture: string, frame: string | number, visible: boolean): Phaser.GameObjects.GameObject;

        get(x: number, y: number, texture: string, frame: string | number, visible: boolean): Phaser.GameObjects.GameObject;

        getFirstAlive(createIfNull: boolean, x: number, y: number, texture: string, frame: string | number, visible: boolean): Phaser.GameObjects.GameObject;

        getFirstDead(createIfNull: boolean, x: number, y: number, texture: string, frame: string | number, visible: boolean): Phaser.GameObjects.GameObject;

        playAnimation(key: string, startFrame: string): Phaser.GameObjects.Group;

        isFull(): boolean;

        countActive(value: boolean): number;

        getTotalUsed(): number;

        getTotalFree(): number;

        setDepth(value: number, step: number): Phaser.GameObjects.Group;

        kill(gameObject: Phaser.GameObjects.GameObject): void;

        killAndHide(gameObject: Phaser.GameObjects.GameObject): void;

        toggleVisible(): Phaser.GameObjects.Group;

        destroy(): void;

      }

      namespace StaticGroup {
      }

      class World {
        scene: Phaser.Scene;

        bodies: Phaser.Structs.Set;

        staticBodies: Phaser.Structs.Set;

        colliders: Phaser.Structs.ProcessQueue;

        gravity: Phaser.Math.Vector2;

        bounds: Phaser.Geom.Rectangle;

        checkCollision: any;

        OVERLAP_BIAS: number;

        TILE_BIAS: number;

        forceX: boolean;

        isPaused: boolean;

        _total: number;

        drawDebug: boolean;

        debugGraphic: Phaser.GameObjects.Graphics;

        defaults: any;

        maxEntries: number;

        tree: Phaser.Structs.RTree;

        staticTree: Phaser.Structs.RTree;

        treeMinMax: any;

        enable(object: Phaser.GameObjects.GameObject | Array.<Phaser.GameObjects.GameObject>, type: number): void;

        enableBody(object: Phaser.GameObjects.GameObject, type: number): Phaser.GameObjects.GameObject;

        remove(object: Phaser.GameObjects.GameObject): void;

        disable(object: Phaser.GameObjects.GameObject | Array.<Phaser.GameObjects.GameObject>): void;

        disableBody(object: Phaser.GameObjects.GameObject): Phaser.GameObjects.GameObject;

        createDebugGraphic(): Phaser.GameObjects.Graphics;

        setBounds(x: number, y: number, width: number, height: number, checkLeft: boolean, checkRight: boolean, checkUp: boolean, checkDown: boolean): Phaser.Physics.Arcade.World;

        setBoundsCollision(left: boolean, right: boolean, up: boolean, down: boolean): Phaser.Physics.Arcade.World;

        pause(): Phaser.Physics.Arcade.World;

        resume(): Phaser.Physics.Arcade.World;

        addCollider(object1: Phaser.Physics.Arcade.Body, object2: Phaser.Physics.Arcade.Body, collideCallback: any, processCallback: any, callbackContext: any): Phaser.Physics.Arcade.Collider;

        addOverlap(object1: Phaser.Physics.Arcade.Body, object2: Phaser.Physics.Arcade.Body, collideCallback: any, processCallback: any, callbackContext: any): Phaser.Physics.Arcade.Collider;

        removeCollider(collider: Phaser.Physics.Arcade.Collider): Phaser.Physics.Arcade.World;

        update(time: number, delta: number): void;

        postUpdate(): void;

        updateMotion(body: Phaser.Physics.Arcade.Body): void;

        computeVelocity(axis: number, body: Phaser.Physics.Arcade.Body, velocity: number, acceleration: number, drag: number, max: number): number;

        separate(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, processCallback: any, callbackContext: any, overlapOnly: boolean): boolean;

        separateCircle(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, overlapOnly: boolean, bias: number): boolean;

        intersects(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body): boolean;

        circleBodyIntersects(circle: Phaser.Physics.Arcade.Body, body: Phaser.Physics.Arcade.Body): boolean;

        overlap(object1: Phaser.GameObjects.GameObject, object2: Phaser.GameObjects.GameObject, overlapCallback: any, processCallback: any, callbackContext: any): boolean;

        collide(object1: Phaser.GameObjects.GameObject, object2: Phaser.GameObjects.GameObject, collideCallback: any, processCallback: any, callbackContext: any): boolean;

        collideObjects(object1: Phaser.GameObjects.GameObject, object2: Phaser.GameObjects.GameObject, collideCallback: any, processCallback: any, callbackContext: any, overlapOnly: boolean): boolean;

        collideHandler(object1: Phaser.GameObjects.GameObject, object2: Phaser.GameObjects.GameObject, collideCallback: any, processCallback: any, callbackContext: any, overlapOnly: boolean): boolean;

        collideSpriteVsSprite(sprite1: Phaser.GameObjects.GameObject, sprite2: Phaser.GameObjects.GameObject, collideCallback: any, processCallback: any, callbackContext: any, overlapOnly: boolean): boolean;

        collideSpriteVsGroup(sprite: Phaser.GameObjects.GameObject, group: Phaser.GameObjects.Group, collideCallback: any, processCallback: any, callbackContext: any, overlapOnly: boolean): boolean;

        collideGroupVsTilemapLayer(group: Phaser.GameObjects.Group, tilemapLayer: any, collideCallback: any, processCallback: any, callbackContext: any, overlapOnly: boolean): boolean;

        collideSpriteVsTilemapLayer(sprite: Phaser.GameObjects.GameObject, tilemapLayer: any, collideCallback: any, processCallback: any, callbackContext: any, overlapOnly: boolean): boolean;

        collideGroupVsGroup(group1: Phaser.GameObjects.Group, group2: Phaser.GameObjects.Group, collideCallback: any, processCallback: any, callbackContext: any, overlapOnly: boolean): boolean;

        shutdown(): void;

        destroy(): void;

      }

      namespace World {
      }

    }

    class Impact {
      static SeperateX(world: Phaser.Physics.Impact.World, left: Phaser.Physics.Impact.Body, right: Phaser.Physics.Impact.Body, weak: Phaser.Physics.Impact.Body): void;

      static SeperateY(world: Phaser.Physics.Impact.World, top: Phaser.Physics.Impact.Body, bottom: Phaser.Physics.Impact.Body, weak: Phaser.Physics.Impact.Body): void;

      static Solver(world: Phaser.Physics.Impact.World, bodyA: Phaser.Physics.Impact.Body, bodyB: Phaser.Physics.Impact.Body): void;

      static UpdateMotion(body: Phaser.Physics.Impact.Body, res: any): void;

      static ParseTileLayers(json: any, insertNull: boolean): any[];

      static ParseTilesets(json: any): any[];

      static ParseWeltmeister(name: string, json: any, insertNull: boolean): any;

    }

    namespace Impact {
      class TYPES {
        NONE: number;

        A: number;

        B: number;

        BOTH: number;

      }

      namespace TYPES {
      }

      class World {
        scene: Phaser.Scene;

        bodies: Phaser.Structs.Set;

        gravity: number;

        cellSize: number;

        collisionMap: Phaser.Physics.Impact.CollisionMap;

        timeScale: number;

        maxStep: number;

        enabled: boolean;

        drawDebug: boolean;

        debugGraphic: Phaser.GameObjects.Graphics;

        defaults: any;

        walls: any;

        delta: number;

        _lastId: number;

        setCollisionMap(key: string | Array.<Array.<integer>>, tileSize: number): CollisionMap;

        setCollisionMapFromTilemapLayer(tilemapLayer: StaticTilemapLayer | DynamicTilemapLayer, options: any): Phaser.Physics.Impact.CollisionMap;

        setBounds(x: number, y: number, width: number, height: number, thickness: number, left: boolean, right: boolean, top: boolean, bottom: boolean): Phaser.Physics.Impact.World;

        updateWall(add: boolean, position: string, x: number, y: number, width: number, height: number): void;

        createDebugGraphic(): Phaser.GameObjects.Graphics;

        getNextID(): number;

        create(x: number, y: number, sizeX: number, sizeY: number): Phaser.Physics.Impact.Body;

        remove(object: Phaser.Physics.Impact.Body): void;

        pause(): Phaser.Physics.Impact.World;

        resume(): Phaser.Physics.Impact.World;

        update(time: number, delta: number): void;

        checkHash(body: Phaser.Physics.Impact.Body, hash: any, size: number): void;

        checkBodies(bodyA: Phaser.Physics.Impact.Body, bodyB: Phaser.Physics.Impact.Body): void;

        setCollidesNever(bodies: Array.<Phaser.Physics.Impact.Body>): Phaser.Physics.Impact.World;

        setLite(bodies: Array.<Phaser.Physics.Impact.Body>): Phaser.Physics.Impact.World;

        setPassive(bodies: Array.<Phaser.Physics.Impact.Body>): Phaser.Physics.Impact.World;

        setActive(bodies: Array.<Phaser.Physics.Impact.Body>): Phaser.Physics.Impact.World;

        setFixed(bodies: Array.<Phaser.Physics.Impact.Body>): Phaser.Physics.Impact.World;

        setTypeNone(bodies: Array.<Phaser.Physics.Impact.Body>): Phaser.Physics.Impact.World;

        setTypeA(bodies: Array.<Phaser.Physics.Impact.Body>): Phaser.Physics.Impact.World;

        setTypeB(bodies: Array.<Phaser.Physics.Impact.Body>): Phaser.Physics.Impact.World;

        setAvsB(bodies: Array.<Phaser.Physics.Impact.Body>): Phaser.Physics.Impact.World;

        setBvsA(bodies: Array.<Phaser.Physics.Impact.Body>): Phaser.Physics.Impact.World;

        setCheckAgainstNone(bodies: Array.<Phaser.Physics.Impact.Body>): Phaser.Physics.Impact.World;

        setCheckAgainstA(bodies: Array.<Phaser.Physics.Impact.Body>): Phaser.Physics.Impact.World;

        setCheckAgainstB(bodies: Array.<Phaser.Physics.Impact.Body>): Phaser.Physics.Impact.World;

        shutdown(): void;

        destroy(): void;

      }

      namespace World {
      }

    }

    class Matter {
      name: String;

      version: String;

      uses: Array;

      used: Array;

    }

    namespace Matter {
      class Body {
        static init(body: Matter.Body): void;

      }

      namespace Body {
      }

      class Body {
        static wrap(body: Matter.Body, bounds: Matter.Bounds): Matter.Vector;

      }

      namespace Body {
      }

      class MatterImage {
        renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.GameObjects.Image, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

        renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, src: Phaser.GameObjects.Image, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

        scene: Phaser.Scene;

        type: string;

        name: string;

        active: boolean;

        tabIndex: number;

        data: Phaser.Data.DataManager;

        renderFlags: number;

        cameraFilter: number;

        input: Phaser.Input.InteractiveObject;

        body: Phaser.Physics.Body;

        setActive(value: boolean): Phaser.GameObjects.GameObject;

        setName(value: string): Phaser.GameObjects.GameObject;

        setDataEnabled(): Phaser.GameObjects.GameObject;

        setData(key: string, value: any): Phaser.GameObjects.GameObject;

        getData(key: string): any;

        setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

        update(): void;

        toJSON(): any;

        willRender(): boolean;

        destroy(): void;

        eventNames(): any[];

        listeners(event: string | symbol): any[];

        listenerCount(event: string | symbol): number;

        emit(event: string | symbol): Boolean;

        on(event: string | symbol, fn: any, context: *): EventEmitter;

        addListener(event: string | symbol, fn: any, context: *): EventEmitter;

        once(event: string | symbol, fn: any, context: *): EventEmitter;

        removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

        off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

        removeAllListeners(event: string | symbol): EventEmitter;

        clearAlpha(): Phaser.GameObjects.GameObject;

        setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

        alpha: number;

        alphaTopLeft: number;

        alphaTopRight: number;

        alphaBottomLeft: number;

        alphaBottomRight: number;

        blendMode: number;

        setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

        depth: number;

        setDepth(value: number): Phaser.GameObjects.GameObject;

        flipX: boolean;

        flipY: boolean;

        toggleFlipX(): Phaser.GameObjects.GameObject;

        toggleFlipY(): Phaser.GameObjects.GameObject;

        setFlipX(value: boolean): Phaser.GameObjects.GameObject;

        setFlipY(value: boolean): Phaser.GameObjects.GameObject;

        setFlip(x: boolean, y: boolean): Phaser.GameObjects.GameObject;

        resetFlip(): Phaser.GameObjects.GameObject;

        getCenter(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

        getTopLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

        getTopRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

        getBottomLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

        getBottomRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

        getBounds(output: Phaser.Geom.Rectangle | any): Phaser.Geom.Rectangle;

        originX: number;

        originY: number;

        displayOriginX: number;

        displayOriginY: number;

        setOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

        setOriginFromFrame(): Phaser.GameObjects.GameObject;

        setDisplayOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

        updateDisplayOrigin(): Phaser.GameObjects.GameObject;

        defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

        pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

        initPipeline(pipelineName: string): boolean;

        setPipeline(pipelineName: string): boolean;

        resetPipeline(): boolean;

        getPipelineName(): string;

        scaleMode: number;

        setScaleMode(value: number): Phaser.GameObjects.GameObject;

        scrollFactorX: number;

        scrollFactorY: number;

        setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

        width: number;

        height: number;

        displayWidth: number;

        displayHeight: number;

        setSizeToFrame(frame: Phaser.Textures.Frame): Phaser.GameObjects.GameObject;

        setSize(width: number, height: number): Phaser.GameObjects.GameObject;

        setDisplaySize(width: number, height: number): Phaser.GameObjects.GameObject;

        texture: Phaser.Textures.Texture;

        frame: Phaser.Textures.Frame;

        setTexture(key: string, frame: string | number): Phaser.GameObjects.GameObject;

        setFrame(frame: string | number): Phaser.GameObjects.GameObject;

        clearTint(): Phaser.GameObjects.GameObject;

        setTint(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

        tintTopLeft: number;

        tintTopRight: number;

        tintBottomLeft: number;

        tintBottomRight: number;

        tint: number;

        x: number;

        y: number;

        z: number;

        w: number;

        scaleX: number;

        scaleY: number;

        angle: number;

        rotation: number;

        setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

        setRotation(radians: number): Phaser.GameObjects.GameObject;

        setAngle(degrees: number): Phaser.GameObjects.GameObject;

        setScale(x: number, y: number): Phaser.GameObjects.GameObject;

        setX(value: number): Phaser.GameObjects.GameObject;

        setY(value: number): Phaser.GameObjects.GameObject;

        setZ(value: number): Phaser.GameObjects.GameObject;

        setW(value: number): Phaser.GameObjects.GameObject;

        visible: boolean;

        setVisible(value: boolean): Phaser.GameObjects.GameObject;

        setBounce(value: any): any;

        setCollisionCategory(value: any): any;

        setCollisionGroup(value: any): any;

        setCollidesWith(categories: any): any;

        applyForce(force: any): any;

        applyForceFrom(position: any, force: any): any;

        thrust(speed: any): any;

        thrustLeft(speed: any): any;

        thrustRight(speed: any): any;

        thrustBack(speed: any): any;

        setFriction(value: any, air: any, fstatic: any): any;

        setFrictionAir(value: any): any;

        setFrictionStatic(value: any): any;

        setIgnoreGravity(value: any): any;

        setMass(value: any): any;

        setDensity(value: any): any;

        setSensor(value: any): any;

        isSensor(): any;

        setRectangle(width: any, height: any, options: any): any;

        setCircle(radius: any, options: any): any;

        setPolygon(radius: any, sides: any, options: any): any;

        setTrapezoid(width: any, height: any, slope: any, options: any): any;

        setExistingBody(body: any, addToWorld: any): any;

        setBody(config: any, options: any): any;

        setSleepThreshold(value: any): any;

        setSleepEvents(start: any, end: any): any;

        setSleepStartEvent(value: any): any;

        setSleepEndEvent(value: any): any;

        setStatic(value: any): any;

        isStatic(): any;

        setFixedRotation(): any;

        setAngularVelocity(value: any): any;

        setVelocityX(x: any): any;

        setVelocityY(y: any): any;

        setVelocity(x: any, y: any): any;

      }

      namespace MatterImage {
      }

      class MatterPhysics {
        scene: Phaser.Scene;

        systems: Phaser.Scenes.Systems;

        config: any;

        world: Phaser.Physics.Matter.World;

        add: Phaser.Physics.Matter.Factory;

        getConfig(): any;

        boot(): void;

        enableAttractorPlugin(): void;

        enableWrapPlugin(): void;

        pause(): Phaser.Physics.Matter.World;

        resume(): Phaser.Physics.Matter.World;

        shutdown(): void;

        destroy(): void;

      }

      namespace MatterPhysics {
      }

      class MatterSprite {
        anims: any;

        preUpdate(time: number, delta: number): void;

        play(key: string, ignoreIfPlaying: boolean, startFrame: number | string): any;

        toJSON(): any;

        renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.GameObjects.Sprite, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

        renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, src: Phaser.GameObjects.Sprite, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

        scene: Phaser.Scene;

        type: string;

        name: string;

        active: boolean;

        tabIndex: number;

        data: Phaser.Data.DataManager;

        renderFlags: number;

        cameraFilter: number;

        input: Phaser.Input.InteractiveObject;

        body: Phaser.Physics.Body;

        setActive(value: boolean): Phaser.GameObjects.GameObject;

        setName(value: string): Phaser.GameObjects.GameObject;

        setDataEnabled(): Phaser.GameObjects.GameObject;

        setData(key: string, value: any): Phaser.GameObjects.GameObject;

        getData(key: string): any;

        setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

        update(): void;

        willRender(): boolean;

        destroy(): void;

        eventNames(): any[];

        listeners(event: string | symbol): any[];

        listenerCount(event: string | symbol): number;

        emit(event: string | symbol): Boolean;

        on(event: string | symbol, fn: any, context: *): EventEmitter;

        addListener(event: string | symbol, fn: any, context: *): EventEmitter;

        once(event: string | symbol, fn: any, context: *): EventEmitter;

        removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

        off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

        removeAllListeners(event: string | symbol): EventEmitter;

        clearAlpha(): Phaser.GameObjects.GameObject;

        setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

        alpha: number;

        alphaTopLeft: number;

        alphaTopRight: number;

        alphaBottomLeft: number;

        alphaBottomRight: number;

        parent: Phaser.GameObjects.GameObject;

        animationManager: Phaser.Animations.AnimationManager;

        isPlaying: boolean;

        currentAnim: Phaser.Animations.Animation;

        currentFrame: Phaser.Animations.AnimationFrame;

        _timeScale: number;

        frameRate: number;

        duration: number;

        msPerFrame: number;

        skipMissedFrames: boolean;

        _delay: number;

        _repeat: number;

        _repeatDelay: number;

        _yoyo: boolean;

        forward: boolean;

        accumulator: number;

        nextTick: number;

        repeatCounter: number;

        pendingRepeat: boolean;

        _paused: boolean;

        _wasPlaying: boolean;

        _callbackArgs: any[];

        _updateParams: any[];

        delay(value: number): Phaser.GameObjects.GameObject;

        delayedPlay(delay: any, key: any, startFrame: any): Phaser.GameObjects.GameObject;

        getCurrentKey(): any;

        load(key: any, startFrame: any): Phaser.GameObjects.GameObject;

        pause(atFrame: any): Phaser.GameObjects.GameObject;

        paused(value: any): any;

        progress(value: any): any;

        remove(event: any): void;

        repeat(value: any): any;

        repeatDelay(value: any): any;

        restart(includeDelay: any): Phaser.GameObjects.GameObject;

        resume(fromFrame: any): Phaser.GameObjects.GameObject;

        stop(dispatchCallbacks: any): Phaser.GameObjects.GameObject;

        timeScale(value: any): any;

        totalFrames(): any;

        totalProgres(): void;

        updateFrame(animationFrame: any): void;

        yoyo(value: any): any;

        blendMode: number;

        setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

        depth: number;

        setDepth(value: number): Phaser.GameObjects.GameObject;

        flipX: boolean;

        flipY: boolean;

        toggleFlipX(): Phaser.GameObjects.GameObject;

        toggleFlipY(): Phaser.GameObjects.GameObject;

        setFlipX(value: boolean): Phaser.GameObjects.GameObject;

        setFlipY(value: boolean): Phaser.GameObjects.GameObject;

        setFlip(x: boolean, y: boolean): Phaser.GameObjects.GameObject;

        resetFlip(): Phaser.GameObjects.GameObject;

        getCenter(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

        getTopLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

        getTopRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

        getBottomLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

        getBottomRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

        getBounds(output: Phaser.Geom.Rectangle | any): Phaser.Geom.Rectangle;

        originX: number;

        originY: number;

        displayOriginX: number;

        displayOriginY: number;

        setOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

        setOriginFromFrame(): Phaser.GameObjects.GameObject;

        setDisplayOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

        updateDisplayOrigin(): Phaser.GameObjects.GameObject;

        defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

        pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

        initPipeline(pipelineName: string): boolean;

        setPipeline(pipelineName: string): boolean;

        resetPipeline(): boolean;

        getPipelineName(): string;

        scaleMode: number;

        setScaleMode(value: number): Phaser.GameObjects.GameObject;

        scrollFactorX: number;

        scrollFactorY: number;

        setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

        width: number;

        height: number;

        displayWidth: number;

        displayHeight: number;

        setSizeToFrame(frame: Phaser.Textures.Frame): Phaser.GameObjects.GameObject;

        setSize(width: number, height: number): Phaser.GameObjects.GameObject;

        setDisplaySize(width: number, height: number): Phaser.GameObjects.GameObject;

        texture: Phaser.Textures.Texture;

        frame: Phaser.Textures.Frame;

        setTexture(key: string, frame: string | number): Phaser.GameObjects.GameObject;

        setFrame(frame: string | number): Phaser.GameObjects.GameObject;

        clearTint(): Phaser.GameObjects.GameObject;

        setTint(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

        tintTopLeft: number;

        tintTopRight: number;

        tintBottomLeft: number;

        tintBottomRight: number;

        tint: number;

        x: number;

        y: number;

        z: number;

        w: number;

        scaleX: number;

        scaleY: number;

        angle: number;

        rotation: number;

        setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

        setRotation(radians: number): Phaser.GameObjects.GameObject;

        setAngle(degrees: number): Phaser.GameObjects.GameObject;

        setScale(x: number, y: number): Phaser.GameObjects.GameObject;

        setX(value: number): Phaser.GameObjects.GameObject;

        setY(value: number): Phaser.GameObjects.GameObject;

        setZ(value: number): Phaser.GameObjects.GameObject;

        setW(value: number): Phaser.GameObjects.GameObject;

        visible: boolean;

        setVisible(value: boolean): Phaser.GameObjects.GameObject;

        setBounce(value: any): any;

        setCollisionCategory(value: any): any;

        setCollisionGroup(value: any): any;

        setCollidesWith(categories: any): any;

        applyForce(force: any): any;

        applyForceFrom(position: any, force: any): any;

        thrust(speed: any): any;

        thrustLeft(speed: any): any;

        thrustRight(speed: any): any;

        thrustBack(speed: any): any;

        setFriction(value: any, air: any, fstatic: any): any;

        setFrictionAir(value: any): any;

        setFrictionStatic(value: any): any;

        setIgnoreGravity(value: any): any;

        setMass(value: any): any;

        setDensity(value: any): any;

        setSensor(value: any): any;

        isSensor(): any;

        setRectangle(width: any, height: any, options: any): any;

        setCircle(radius: any, options: any): any;

        setPolygon(radius: any, sides: any, options: any): any;

        setTrapezoid(width: any, height: any, slope: any, options: any): any;

        setExistingBody(body: any, addToWorld: any): any;

        setBody(config: any, options: any): any;

        setSleepThreshold(value: any): any;

        setSleepEvents(start: any, end: any): any;

        setSleepStartEvent(value: any): any;

        setSleepEndEvent(value: any): any;

        setStatic(value: any): any;

        isStatic(): any;

        setFixedRotation(): any;

        setAngularVelocity(value: any): any;

        setVelocityX(x: any): any;

        setVelocityY(y: any): any;

        setVelocity(x: any, y: any): any;

      }

      namespace MatterSprite {
      }

      class PointerConstraint {
        scene: Phaser.Scene;

        world: Phaser.Physics.Matter.World;

        camera: Phaser.Cameras.Scene2D.Camera;

        pointer: Phaser.Input.Pointer;

        active: boolean;

        position: Phaser.Math.Vector2;

        constraint: any;

        onDown(pointer: Phaser.Input.Pointer): void;

        onUp(): void;

        getBodyPart(body: any, position: any): boolean;

        update(): void;

        destroy(): void;

      }

      namespace PointerConstraint {
      }

      class World {
        scene: Phaser.Scene;

        engine: any;

        localWorld: any;

        walls: any;

        enabled: boolean;

        drawDebug: boolean;

        debugGraphic: Phaser.GameObjects.Graphics;

        defaults: any;

        setEventsProxy(): void;

        setBounds(x: number, y: number, width: number, height: number, thickness: number, left: boolean, right: boolean, top: boolean, bottom: boolean): Phaser.Physics.Matter.World;

        updateWall(add: any, position: any, x: any, y: any, width: any, height: any): void;

        createDebugGraphic(): Phaser.GameObjects.Graphics;

        disableGravity(): Phaser.Physics.Matter.World;

        setGravity(x: number, y: number, scale: number): Phaser.Physics.Matter.World;

        create(x: any, y: any, width: any, height: any, options: any): any;

        add(object: any): Phaser.Physics.Matter.World;

        remove(object: any, deep: boolean): Phaser.Physics.Matter.World;

        removeConstraint(constraint: any, deep: boolean): Phaser.Physics.Matter.World;

        convertTilemapLayer(tiles: Phaser.GameObjects.StaticTilemapLayer | Phaser.GameObjects.DynamicTilemapLayer, options: any): Phaser.Physics.Matter.World;

        convertTiles(tiles: Array.<Phaser.GameObjects.Tile>, options: any): Phaser.Physics.Matter.World;

        nextGroup(isNonColliding: any): any;

        nextCategory(): any;

        pause(): Phaser.Physics.Matter.World;

        resume(): Phaser.Physics.Matter.World;

        update(time: number, delta: number): void;

        postUpdate(): void;

        fromPath(path: any, points: any): any;

        shutdown(): void;

        destroy(): void;

        eventNames(): any[];

        listeners(event: string | symbol): any[];

        listenerCount(event: string | symbol): number;

        emit(event: string | symbol): Boolean;

        on(event: string | symbol, fn: any, context: *): EventEmitter;

        addListener(event: string | symbol, fn: any, context: *): EventEmitter;

        once(event: string | symbol, fn: any, context: *): EventEmitter;

        removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

        off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

        removeAllListeners(event: string | symbol): EventEmitter;

        eventNames(): any[];

        listeners(event: string | symbol): any[];

        listenerCount(event: string | symbol): number;

        emit(event: string | symbol): Boolean;

        on(event: string | symbol, fn: any, context: *): EventEmitter;

        addListener(event: string | symbol, fn: any, context: *): EventEmitter;

        once(event: string | symbol, fn: any, context: *): EventEmitter;

        removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

        off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

        removeAllListeners(event: string | symbol): EventEmitter;

        eventNames(): any[];

        listeners(event: string | symbol): any[];

        listenerCount(event: string | symbol): number;

        emit(event: string | symbol): Boolean;

        on(event: string | symbol, fn: any, context: *): EventEmitter;

        addListener(event: string | symbol, fn: any, context: *): EventEmitter;

        once(event: string | symbol, fn: any, context: *): EventEmitter;

        removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

        off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

        removeAllListeners(event: string | symbol): EventEmitter;

      }

      namespace World {
      }

    }

  }

  class Scene {
    sys: Phaser.Scenes.Systems;

    update(): void;

  }

  namespace Scene {
  }

  class Scenes {
    PENDING: number;

    INIT: number;

    START: number;

    LOADING: number;

    CREATING: number;

    RUNNING: number;

    PAUSED: number;

    SLEEPING: number;

    SHUTDOWN: number;

    DESTROYED: number;

    static GetPhysicsPlugins(sys: Phaser.Scenes.Systems): any[];

    static GetScenePlugins(sys: Phaser.Scenes.Systems): any[];

  }

  namespace Scenes {
    class SceneManager {
      game: Phaser.Game;

      keys: any;

      scenes: any[];

      _pending: any[];

      _start: any[];

      _queue: any[];

      _processing: number;

      processQueue(): void;

      add(key: string, sceneConfig: Phaser.Scene | any | any, autoStart: boolean): Phaser.Scene;

      bootScene(scene: Phaser.Scene): void;

      loadComplete(loader: any): void;

      payloadComplete(loader: any): void;

      update(time: number, delta: number): void;

      render(renderer: any): void;

      create(scene: Phaser.Scene): void;

      createSceneFromFunction(key: string, scene: any): Phaser.Scene;

      createSceneFromInstance(key: string, newScene: Phaser.Scene): Phaser.Scene;

      createSceneFromObject(key: string, sceneConfig: any): Phaser.Scene;

      getKey(key: string, sceneConfig: Phaser.Scene | any | any): string;

      getScene(key: string): Phaser.Scene;

      isActive(key: string): boolean;

      isVisible(key: string): boolean;

      isSleeping(key: string): boolean;

      pause(key: string): Phaser.Scenes.SceneManager;

      resume(key: string): Phaser.Scenes.SceneManager;

      sleep(key: string): Phaser.Scenes.SceneManager;

      wake(key: string): Phaser.Scenes.SceneManager;

      start(key: string, data: any): Phaser.Scenes.SceneManager;

      stop(key: string): Phaser.Scenes.SceneManager;

      switch(from: string, to: string): Phaser.Scenes.SceneManager;

      getAt(index: number): Phaser.Scene;

      getIndex(key: string | Phaser.Scene): number;

      bringToTop(scene: string | Phaser.Scene): Phaser.Scenes.SceneManager;

      sendToBack(scene: string | Phaser.Scene): Phaser.Scenes.SceneManager;

      moveDown(scene: string | Phaser.Scene): Phaser.Scenes.SceneManager;

      moveUp(scene: string | Phaser.Scene): Phaser.Scenes.SceneManager;

      swapPosition(keyA: string | Phaser.Scene, keyB: string | Phaser.Scene): Phaser.Scenes.SceneManager;

      destroy(): void;

    }

    namespace SceneManager {
    }

    class ScenePlugin {
      scene: Phaser.Scene;

      systems: Phaser.Scenes.Systems;

      settings: any;

      key: string;

      manager: Phaser.Scenes.SceneManager;

      _queue: any[];

      boot(): void;

      start(key: string, data: any): Phaser.Scenes.ScenePlugin;

      add(key: string, sceneConfig: any, autoStart: boolean): Phaser.Scenes.ScenePlugin;

      launch(key: string, data: any): Phaser.Scenes.ScenePlugin;

      pause(key: string): Phaser.Scenes.ScenePlugin;

      resume(key: string): Phaser.Scenes.ScenePlugin;

      sleep(key: string): Phaser.Scenes.ScenePlugin;

      wake(key: string): Phaser.Scenes.ScenePlugin;

      switch(key: string): Phaser.Scenes.ScenePlugin;

      stop(key: string): Phaser.Scenes.ScenePlugin;

      setActive(value: boolean): Phaser.Scenes.ScenePlugin;

      setVisible(value: boolean): Phaser.Scenes.ScenePlugin;

      isSleeping(key: string): boolean;

      isActive(key: string): boolean;

      isVisible(key: string): boolean;

      swapPosition(key: string): Phaser.Scenes.ScenePlugin;

      moveUp(key: string): Phaser.Scenes.ScenePlugin;

      moveDown(key: string): Phaser.Scenes.ScenePlugin;

      bringToTop(key: string): Phaser.Scenes.ScenePlugin;

      sendToBack(key: string): Phaser.Scenes.ScenePlugin;

      get(key: string): Phaser.Scene;

      shutdown(): void;

      destroy(): void;

    }

    namespace ScenePlugin {
    }

    class Systems {
      scene: Phaser.Scene;

      game: Phaser.Game;

      config: any;

      settings: any;

      canvas: HTMLCanvasElement;

      context: CanvasRenderingContext2D;

      anims: Phaser.Animations.AnimationManager;

      cache: Phaser.Cache.CacheManager;

      plugins: Phaser.Plugins.PluginManager;

      registry: any;

      sound: Phaser.Sound.BaseSoundManager;

      textures: Phaser.Textures.TextureManager;

      add: Phaser.GameObjects.GameObjectFactory;

      cameras: Phaser.Cameras.Scene2D.CameraManager;

      displayList: null;

      events: EventEmitter;

      make: Phaser.GameObjects.GameObjectCreator;

      scenePlugin: Phaser.Scenes.ScenePlugin;

      updateList: any;

      init(game: Phaser.Game): void;

      install(plugin: any[]): void;

      step(time: number, delta: number): void;

      render(renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer): void;

      queueDepthSort(): void;

      depthSort(): void;

      pause(): Phaser.Scenes.Systems;

      resume(): Phaser.Scenes.Systems;

      sleep(): Phaser.Scenes.Systems;

      wake(): Phaser.Scenes.Systems;

      isSleeping(): boolean;

      isActive(): boolean;

      isVisible(): boolean;

      setVisible(value: boolean): Phaser.Scenes.Systems;

      setActive(value: boolean): Phaser.Scenes.Systems;

      start(data: any): void;

      shutdown(): void;

      destroy(): void;

    }

    namespace Systems {
    }

  }

  class Sound {
    static SoundManagerCreator(game: Phaser.Game): void;

  }

  namespace Sound {
    class BaseSound {
      manager: Phaser.Sound.BaseSoundManager;

      key: string;

      isPlaying: boolean;

      isPaused: boolean;

      totalRate: number;

      duration: number;

      totalDuration: number;

      config: any;

      currentConfig: any;

      mute: boolean;

      volume: number;

      rate: number;

      detune: number;

      seek: number;

      loop: boolean;

      config: any;

      markers: any;

      currentMarker: ISoundMarker;

      pendingRemove: boolean;

      addMarker(marker: ISoundMarker): boolean;

      updateMarker(marker: ISoundMarker): boolean;

      removeMarker(markerName: string): ISoundMarker;

      play(markerName: string, config: ISoundConfig): boolean;

      pause(): boolean;

      resume(): boolean;

      stop(): boolean;

      applyConfig(): void;

      resetConfig(): void;

      update(time: number, delta: number): void;

      destroy(): void;

      setRate(): void;

      rate: number;

      detune: any;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

    }

    namespace BaseSound {
    }

    class BaseSoundManager {
      game: Phaser.Game;

      sounds: any[];

      mute: boolean;

      volume: number;

      rate: number;

      detune: number;

      pauseOnBlur: boolean;

      _rate: number;

      _detune: number;

      locked: boolean;

      unlocked: boolean;

      add(key: string, config: ISoundConfig): ISound;

      addAudioSprite(key: string, config: ISoundConfig): IAudioSpriteSound;

      play(key: string, extra: ISoundConfig | ISoundMarker): boolean;

      playAudioSprite(key: string, spriteName: string, config: ISoundConfig): boolean;

      remove(sound: ISound): boolean;

      removeByKey(key: string): number;

      pauseAll(): void;

      resumeAll(): void;

      stopAll(): void;

      unlock(): void;

      onBlur(): void;

      onFocus(): void;

      update(time: number, delta: number): void;

      destroy(): void;

      forEachActiveSound(callbackfn: any): void;

      rate: number;

      detune: number;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

    }

    namespace BaseSoundManager {
    }

    class HTML5AudioSound {
      tags: Array.<HTMLAudioElement>;

      audio: HTMLAudioElement;

      startTime: number;

      previousTime: number;

      play(markerName: string, config: ISoundConfig): boolean;

      pause(): boolean;

      resume(): boolean;

      stop(): boolean;

      pickAndPlayAudioTag(): boolean;

      pickAudioTag(): boolean;

      playCatchPromise(): void;

      stopAndReleaseAudioTag(): void;

      reset(): void;

      onFocus(): void;

      update(time: number, delta: number): void;

      destroy(): void;

      setMute(): void;

      setVolume(): void;

      setRate(): void;

      mute: boolean;

      volume: number;

      rate: number;

      detune: number;

      seek: number;

      loop: boolean;

      manager: Phaser.Sound.BaseSoundManager;

      key: string;

      isPlaying: boolean;

      isPaused: boolean;

      totalRate: number;

      duration: number;

      totalDuration: number;

      config: any;

      currentConfig: any;

      markers: any;

      currentMarker: ISoundMarker;

      pendingRemove: boolean;

      addMarker(marker: ISoundMarker): boolean;

      updateMarker(marker: ISoundMarker): boolean;

      removeMarker(markerName: string): ISoundMarker;

      applyConfig(): void;

      resetConfig(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

    }

    namespace HTML5AudioSound {
    }

    class HTML5AudioSoundManager {
      override: boolean;

      audioPlayDelay: number;

      loopEndOffset: number;

      onBlurPausedSounds: Array.<Phaser.Sound.HTML5AudioSound>;

      lockedActionsQueue: any[];

      _mute: boolean;

      _volume: boolean;

      add(key: string, config: ISoundConfig): Phaser.Sound.HTML5AudioSound;

      unlock(): void;

      onBlur(): void;

      onFocus(): void;

      destroy(): void;

      isLocked(sound: Phaser.Sound.HTML5AudioSound, prop: string, value: *): boolean;

      mute: boolean;

      volume: number;

      game: Phaser.Game;

      sounds: any[];

      rate: number;

      detune: number;

      pauseOnBlur: boolean;

      _rate: number;

      _detune: number;

      locked: boolean;

      unlocked: boolean;

      addAudioSprite(key: string, config: ISoundConfig): IAudioSpriteSound;

      play(key: string, extra: ISoundConfig | ISoundMarker): boolean;

      playAudioSprite(key: string, spriteName: string, config: ISoundConfig): boolean;

      remove(sound: ISound): boolean;

      removeByKey(key: string): number;

      pauseAll(): void;

      resumeAll(): void;

      stopAll(): void;

      update(time: number, delta: number): void;

      forEachActiveSound(callbackfn: any): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

    }

    namespace HTML5AudioSoundManager {
    }

    class NoAudioSound {
      manager: Phaser.Sound.NoAudioSoundManager;

      key: string;

      isPlaying: boolean;

      isPaused: boolean;

      totalRate: number;

      duration: number;

      totalDuration: number;

      config: any;

      currentConfig: any;

      mute: boolean;

      volume: number;

      rate: number;

      detune: number;

      seek: number;

      loop: boolean;

      markers: any;

      currentMarker: any;

      pendingRemove: boolean;

      addMarker(): boolean;

      updateMarker(): boolean;

      removeMarker(): boolean;

      play(): boolean;

      pause(): boolean;

      resume(): boolean;

      stop(): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

    }

    namespace NoAudioSound {
    }

    class NoAudioSoundManager {
      game: Phaser.Game;

      sounds: any[];

      mute: boolean;

      volume: number;

      rate: number;

      detune: number;

      pauseOnBlur: boolean;

      locked: boolean;

      add(key: string, config: ISoundConfig): ISound;

      addAudioSprite(key: string, config: ISoundConfig): IAudioSpriteSound;

      play(): boolean;

      playAudioSprite(): boolean;

      remove(sound: ISound): boolean;

      removeByKey(key: string): number;

      destroy(): void;

      forEachActiveSound(callbackfn: any): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

    }

    namespace NoAudioSoundManager {
    }

    class WebAudioSound {
      audioBuffer: AudioBuffer;

      source: AudioBufferSourceNode;

      loopSource: AudioBufferSourceNode;

      muteNode: GainNode;

      volumeNode: GainNode;

      playTime: number;

      startTime: number;

      loopTime: number;

      rateUpdates: any[];

      hasEnded: boolean;

      hasLooped: boolean;

      duration: number;

      totalDuration: number;

      play(markerName: string, config: ISoundConfig): boolean;

      pause(): boolean;

      resume(): boolean;

      stop(): boolean;

      createAndStartBufferSource(): void;

      createAndStartLoopBufferSource(): void;

      createBufferSource(): AudioBufferSourceNode;

      stopAndRemoveBufferSource(): void;

      stopAndRemoveLoopBufferSource(): void;

      applyConfig(): void;

      update(time: number, delta: number): void;

      destroy(): void;

      setRate(): void;

      getCurrentTime(): void;

      getLoopTime(): void;

      mute: boolean;

      volume: number;

      seek: number;

      loop: boolean;

      manager: Phaser.Sound.BaseSoundManager;

      key: string;

      isPlaying: boolean;

      isPaused: boolean;

      totalRate: number;

      config: any;

      currentConfig: any;

      rate: number;

      detune: number;

      markers: any;

      currentMarker: ISoundMarker;

      pendingRemove: boolean;

      addMarker(marker: ISoundMarker): boolean;

      updateMarker(marker: ISoundMarker): boolean;

      removeMarker(markerName: string): ISoundMarker;

      resetConfig(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

    }

    namespace WebAudioSound {
    }

    class WebAudioSoundManager {
      context: AudioContext;

      masterMuteNode: GainNode;

      masterVolumeNode: GainNode;

      destination: AudioNode;

      locked: boolean;

      createAudioContext(game: Phaser.Game): AudioContext;

      add(key: string, config: ISoundConfig): Phaser.Sound.WebAudioSound;

      unlock(): void;

      onBlur(): void;

      onFocus(): void;

      destroy(): void;

      mute: boolean;

      volume: number;

      game: Phaser.Game;

      sounds: any[];

      rate: number;

      detune: number;

      pauseOnBlur: boolean;

      _rate: number;

      _detune: number;

      unlocked: boolean;

      addAudioSprite(key: string, config: ISoundConfig): IAudioSpriteSound;

      play(key: string, extra: ISoundConfig | ISoundMarker): boolean;

      playAudioSprite(key: string, spriteName: string, config: ISoundConfig): boolean;

      remove(sound: ISound): boolean;

      removeByKey(key: string): number;

      pauseAll(): void;

      resumeAll(): void;

      stopAll(): void;

      update(time: number, delta: number): void;

      forEachActiveSound(callbackfn: any): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

    }

    namespace WebAudioSoundManager {
    }

  }

  class Structs {
  }

  namespace Structs {
    class List {
      parent: any;

      list: any[];

      position: number;

      add(child: any): any;

      addAt(child: any, index: number): any;

      addMultiple(children: any[]): any[];

      getAt(index: number): any;

      getIndex(child: any): number;

      sort(children: any[]): any[];

      sortIndexHandler(childA: any, childB: any): number;

      getByKey(property: string, value: any): any;

      getByName(name: string): any;

      getRandom(startIndex: number, length: number): any;

      getFirst(property: any, value: any, startIndex: any, endIndex: any): any;

      getAll(property: string, value: any, startIndex: number, endIndex: number): any[];

      count(property: string, value: any): number;

      swap(child1: any, child2: any): void;

      moveTo(child: any, index: number): any;

      remove(child: any): any;

      removeAt(index: number): any;

      removeBetween(beginIndex: number, endIndex: number): any[];

      removeAll(): Phaser.Structs.List;

      bringToTop(child: any): any;

      sendToBack(child: any): any;

      moveUp(child: any): any;

      moveDown(child: any): any;

      reverse(): Phaser.Structs.List;

      shuffle(): Phaser.Structs.List;

      replace(oldChild: any, newChild: any): any;

      exists(child: any): boolean;

      setAll(key: string, value: any): void;

      each(callback: any, thisArg: any, arguments: *): void;

      shutdown(): void;

      destroy(): void;

      length: number;

      first: number;

      last: number;

      next: number;

      previous: number;

    }

    namespace List {
    }

    class Map {
      entries: any;

      size: number;

      set(key: string, value: any): Phaser.Structs.Map;

      get(key: string): any;

      getArray(): any[];

      has(key: string): boolean;

      delete(key: string): Phaser.Structs.Map;

      clear(): Phaser.Structs.Map;

      keys(): any;

      values(): any[];

      dump(): void;

      each(callback: any): Phaser.Structs.Map;

      contains(value: any): boolean;

      merge(map: Phaser.Structs.Map, override: boolean): Phaser.Structs.Map;

    }

    namespace Map {
    }

    class ProcessQueue {
      _pending: any[];

      _active: any[];

      _destroy: any[];

      _toProcess: number;

      add(item: any): Phaser.Structs.ProcessQueue;

      remove(item: any): Phaser.Structs.ProcessQueue;

      update(): any[];

      getActive(): any[];

      destroy(): void;

    }

    namespace ProcessQueue {
    }

    class RTree {
    }

    namespace RTree {
    }

    class Set {
      entries: any[];

      set(value: any): Phaser.Structs.Set;

      get(property: string, value: any): any;

      getArray(): any[];

      delete(value: any): Phaser.Structs.Set;

      dump(): void;

      each(callback: any, callbackScope: any): Phaser.Structs.Set;

      iterate(callback: any, callbackScope: any): Phaser.Structs.Set;

      iterateLocal(callbackKey: string, arguments: *): Phaser.Structs.Set;

      clear(): Phaser.Structs.Set;

      contains(value: any): boolean;

      union(set: Phaser.Structs.Set): Phaser.Structs.Set;

      intersect(set: Phaser.Structs.Set): Phaser.Structs.Set;

      difference(set: Phaser.Structs.Set): Phaser.Structs.Set;

      size: number;

    }

    namespace Set {
    }

  }

  class Textures {
  }

  namespace Textures {
    class FilterMode {
      LINEAR: number;

      NEAREST: number;

    }

    namespace FilterMode {
    }

    class Frame {
      texture: Phaser.Textures.Texture;

      name: string;

      source: Phaser.Textures.TextureSource;

      sourceIndex: number;

      cutX: number;

      cutY: number;

      cutWidth: number;

      cutHeight: number;

      x: number;

      y: number;

      width: number;

      height: number;

      halfWidth: number;

      halfHeight: number;

      centerX: number;

      centerY: number;

      pivotX: number;

      pivotY: number;

      customPivot: boolean;

      rotated: boolean;

      autoRound: number;

      customData: any;

      data: any;

      setTrim(actualWidth: number, actualHeight: number, destX: number, destY: number, destWidth: number, destHeight: number): Phaser.Textures.Frame;

      updateUVs(): Phaser.Textures.Frame;

      updateUVsInverted(): Phaser.Textures.Frame;

      clone(): Phaser.Textures.Frame;

      destroy(): void;

      realWidth: number;

      realHeight: number;

      uvs: any;

      radius: number;

      trimmed: boolean;

      canvasData: any;

    }

    namespace Frame {
    }

    class Parsers {
      static JSONArray(texture: Phaser.Textures.Texture, sourceIndex: number, json: any): Phaser.Textures.Texture;

      static JSONHash(texture: Phaser.Textures.Texture, sourceIndex: number, json: any): Phaser.Textures.Texture;

      static Pyxel(texture: Phaser.Textures.Texture, json: any): Phaser.Textures.Texture;

      static SpriteSheet(texture: Phaser.Textures.Texture, sourceIndex: number, x: number, y: number, width: number, height: number, config: any): Phaser.Textures.Texture;

      static SpriteSheetFromAtlas(texture: Phaser.Textures.Texture, frame: Phaser.Textures.Frame, config: any): Phaser.Textures.Texture;

      static StarlingXML(texture: Phaser.Textures.Texture, xml: any): Phaser.Textures.Texture;

      static UnityYAML(texture: Phaser.Textures.Texture, sourceIndex: number, yaml: any): Phaser.Textures.Texture;

    }

    namespace Parsers {
    }

    class Texture {
      manager: Phaser.Textures.TextureManager;

      key: string;

      source: Array.<Phaser.Textures.TextureSource>;

      dataSource: any[];

      frames: any;

      customData: any;

      firstFrame: string;

      frameTotal: number;

      add(name: number | string, sourceIndex: number, x: number, y: number, width: number, height: number): Phaser.Textures.Frame;

      has(name: string): boolean;

      get(name: string | number): Phaser.Textures.Frame;

      getTextureSourceIndex(source: Phaser.Textures.TextureSource): number;

      getFramesFromTextureSource(sourceIndex: number): Array.<Phaser.Textures.Frame>;

      getFrameNames(includeBase: boolean): Array.<string>;

      getSourceImage(name: string | number): Image;

      setDataSource(data: Image | HTMLCanvasElement): void;

      setFilter(filterMode: Phaser.Textures.FilterMode.LINEAR | Phaser.Textures.FilterMode.NEAREST): void;

      destroy(): void;

    }

    namespace Texture {
    }

    class TextureManager {
      game: Phaser.Game;

      name: string;

      list: any;

      _tempCanvas: HTMLCanvasElement;

      _tempContext: CanvasRenderingContext2D;

      _pending: number;

      boot(): void;

      updatePending(): void;

      addBase64(key: string, data: any): void;

      addImage(key: string, source: Image, dataSource: Image): Phaser.Textures.Texture;

      generate(key: string, config: any): Phaser.Textures.Texture;

      createCanvas(key: string, width: number, height: number): Phaser.Textures.Texture;

      addCanvas(key: string, source: HTMLCanvasElement): Phaser.Textures.Texture;

      addAtlas(key: string, source: Image, data: any): Phaser.Textures.Texture;

      addAtlasJSONArray(key: string, source: Image, data: any): Phaser.Textures.Texture;

      addAtlasJSONHash(key: string, source: Image, data: any): Phaser.Textures.Texture;

      addUnityAtlas(key: string, source: Image, data: any): Phaser.Textures.Texture;

      addSpriteSheet(key: string, source: Image, config: any): Phaser.Textures.Texture;

      addSpriteSheetFromAtlas(key: string, config: any): Phaser.Textures.Texture;

      addAtlasStarlingXML(key: string, source: Image, data: any): Phaser.Textures.Texture;

      addAtlasPyxel(key: string, source: Image, data: any): Phaser.Textures.Texture;

      create(key: string, source: Image, width: number, height: number): Phaser.Textures.Texture;

      exists(key: string): boolean;

      get(key: string): Phaser.Textures.Texture;

      cloneFrame(key: string, frame: string | number): Phaser.Textures.Frame;

      getFrame(key: string, frame: string | number): Phaser.Textures.Frame;

      getTextureKeys(): Array.<string>;

      getPixel(x: number, y: number, key: string, frame: string | number): Phaser.Display.Color;

      setTexture(gameObject: Phaser.GameObjects.GameObject, key: string, frame: string | number): Phaser.GameObjects.GameObject;

      each(callback: any, scope: any, arguments: *): void;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

    }

    namespace TextureManager {
    }

    class TextureSource {
      texture: string;

      image: Image;

      compressionAlgorithm: number;

      resolution: number;

      width: number;

      height: number;

      scaleMode: any;

      isCanvas: boolean;

      isPowerOf2: boolean;

      glTexture: any;

      init(game: Phaser.Game): void;

      setFilter(filterMode: Phaser.Textures.FilterMode.LINEAR | Phaser.Textures.FilterMode.NEAREST): void;

      destroy(): void;

    }

    namespace TextureSource {
    }

  }

  class Tilemaps {
    static ParseToTilemap(scene: Phaser.Scene, key: string, tileWidth: number, tileHeight: number, width: number, height: number, data: Array.<Array.<integer>>, insertNull: boolean): Phaser.Tilemaps.Tilemap;

  }

  namespace Tilemaps {
    class Components {
      static IsInLayerBounds(tileX: number, tileY: number, layer: Phaser.Tilemaps.LayerData): boolean;

      static PutTileAt(tile: number | Phaser.Tilemaps.Tile, tileX: number, tileY: number, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

      static PutTileAtWorldXY(tile: number | Phaser.Tilemaps.Tile, worldX: number, worldY: number, recalculateFaces: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

      static PutTilesAt(tile: Array.<integer> | Array.<Array.<integer>> | Array.<Phaser.Tilemaps.Tile> | Array.<Array.<Phaser.Tilemaps.Tile>>, tileX: number, tileY: number, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): void;

      static Randomize(tileX: number, tileY: number, width: number, height: number, indexes: Array.<integer>, layer: Phaser.Tilemaps.LayerData): void;

      static RemoveTileAt(tile: number | Phaser.Tilemaps.Tile, tileX: number, tileY: number, replaceWithNull: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

      static RemoveTileAtWorldXY(tile: number | Phaser.Tilemaps.Tile, worldX: number, worldY: number, replaceWithNull: boolean, recalculateFaces: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

      static RenderDebug(graphics: Phaser.GameObjects.Graphics, styleConfig: any, layer: Phaser.Tilemaps.LayerData): void;

      static ReplaceByIndex(findIndex: number, newIndex: number, tileX: number, tileY: number, width: number, height: number, layer: Phaser.Tilemaps.LayerData): void;

      static SetCollision(indexes: number | any[], collides: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): void;

      static SetCollisionBetween(start: number, stop: number, collides: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): void;

      static SetCollisionByExclusion(indexes: Array.<integer>, collides: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): void;

      static SetCollisionByProperty(properties: any, collides: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): void;

      static SetCollisionFromCollisionGroup(collides: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): void;

      static SetLayerCollisionIndex(tileIndex: number, collides: boolean, layer: Phaser.Tilemaps.LayerData): void;

      static SetTileCollision(tile: Phaser.Tilemaps.Tile, collides: boolean): void;

      static SetTileIndexCallback(indexes: number | any[], callback: any, callbackContext: any, layer: Phaser.Tilemaps.LayerData): void;

      static SetTileLocationCallback(tileX: number, tileY: number, width: number, height: number, callback: any, callbackContext: any, layer: Phaser.Tilemaps.LayerData): void;

      static Shuffle(tileX: number, tileY: number, width: number, height: number, layer: Phaser.Tilemaps.LayerData): void;

      static SwapByIndex(tileA: number, tileB: number, tileX: number, tileY: number, width: number, height: number, layer: Phaser.Tilemaps.LayerData): void;

      static TileToWorldX(tileX: number, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

      static TileToWorldXY(tileX: number, tileY: number, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2;

      static TileToWorldY(tileY: number, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

      static WeightedRandomize(tileX: number, tileY: number, width: number, height: number, weightedIndexes: Array.<object>, layer: Phaser.Tilemaps.LayerData): void;

      static WorldToTileX(worldX: number, snapToFloor: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

      static WorldToTileXY(worldX: number, worldY: number, snapToFloor: boolean, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2;

      static WorldToTileY(worldY: number, snapToFloor: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

    }

    namespace Components {
    }

    class DynamicTilemapLayer {
      isTilemap: boolean;

      tilemap: Phaser.Tilemaps.Tilemap;

      layerIndex: number;

      layer: Phaser.Tilemaps.LayerData;

      tileset: Phaser.Tilemaps.Tileset;

      culledTiles: any[];

      calculateFacesAt(tileX: number, tileY: number): Phaser.Tilemaps.DynamicTilemapLayer;

      calculateFacesWithin(tileX: number, tileY: number, width: number, height: number): Phaser.Tilemaps.DynamicTilemapLayer;

      createFromTiles(indexes: number | any[], replacements: number | any[], spriteConfig: any, scene: Phaser.Scene, camera: Phaser.Cameras.Scene2D.Camera): Array.<Phaser.GameObjects.Sprite>;

      cull(camera: Phaser.Cameras.Scene2D.Camera): Array.<Phaser.Tilemaps.Tile>;

      copy(srcTileX: number, srcTileY: number, width: number, height: number, destTileX: number, destTileY: number, destTileY: number, recalculateFaces: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

      destroy(): void;

      fill(index: number, tileX: number, tileY: number, width: number, height: number, recalculateFaces: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

      filterTiles(callback: any, context: any, tileX: number, tileY: number, width: number, height: number, filteringOptions: any): Array.<Phaser.Tilemaps.Tile>;

      findByIndex(index: number, skip: number, reverse: boolean): Phaser.Tilemaps.Tile;

      findTile(callback: any, context: any, tileX: number, tileY: number, width: number, height: number, filteringOptions: any): Phaser.Tilemaps.Tile;

      forEachTile(callback: any, context: any, tileX: number, tileY: number, width: number, height: number, filteringOptions: any): Phaser.Tilemaps.DynamicTilemapLayer;

      getTileAt(tileX: number, tileY: number, nonNull: boolean): Phaser.Tilemaps.Tile;

      getTileAtWorldXY(worldX: number, worldY: number, nonNull: boolean, camera: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile;

      getTilesWithin(tileX: number, tileY: number, width: number, height: number, filteringOptions: any): Array.<Phaser.Tilemaps.Tile>;

      getTilesWithinShape(shape: Phaser.Geom.Circle | Phaser.Geom.Line | Phaser.Geom.Rectangle | Phaser.Geom.Triangle, filteringOptions: any, camera: Phaser.Cameras.Scene2D.Camera): Array.<Phaser.Tilemaps.Tile>;

      getTilesWithinWorldXY(worldX: number, worldY: number, width: number, height: number, filteringOptions: any, camera: Phaser.Cameras.Scene2D.Camera): Array.<Phaser.Tilemaps.Tile>;

      hasTileAt(tileX: number, tileY: number): boolean;

      hasTileAtWorldXY(worldX: number, worldY: number, camera: Phaser.Cameras.Scene2D.Camera): boolean;

      putTileAt(tile: number | Phaser.Tilemaps.Tile, tileX: number, tileY: number, recalculateFaces: boolean): Phaser.Tilemaps.Tile;

      putTileAtWorldXY(tile: number | Phaser.Tilemaps.Tile, worldX: number, worldY: number, recalculateFaces: boolean, camera: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile;

      putTilesAt(tile: Array.<integer> | Array.<Array.<integer>> | Array.<Phaser.Tilemaps.Tile> | Array.<Array.<Phaser.Tilemaps.Tile>>, tileX: number, tileY: number, recalculateFaces: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

      randomize(tileX: number, tileY: number, width: number, height: number, indexes: Array.<integer>): Phaser.Tilemaps.DynamicTilemapLayer;

      removeTileAt(tile: number | Phaser.Tilemaps.Tile, tileX: number, tileY: number, replaceWithNull: boolean, recalculateFaces: boolean): Phaser.Tilemaps.Tile;

      removeTileAtWorldXY(tile: number | Phaser.Tilemaps.Tile, worldX: number, worldY: number, replaceWithNull: boolean, recalculateFaces: boolean, camera: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile;

      renderDebug(graphics: Phaser.GameObjects.Graphics, styleConfig: any): Phaser.Tilemaps.DynamicTilemapLayer;

      replaceByIndex(findIndex: number, newIndex: number, tileX: number, tileY: number, width: number, height: number): Phaser.Tilemaps.DynamicTilemapLayer;

      setCollision(indexes: number | any[], collides: boolean, recalculateFaces: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

      setCollisionBetween(start: number, stop: number, collides: boolean, recalculateFaces: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

      setCollisionByProperty(properties: any, collides: boolean, recalculateFaces: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

      setCollisionByExclusion(indexes: Array.<integer>, collides: boolean, recalculateFaces: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

      setCollisionFromCollisionGroup(collides: boolean, recalculateFaces: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

      setTileIndexCallback(indexes: number | any[], callback: any, callbackContext: any): Phaser.Tilemaps.DynamicTilemapLayer;

      setTileLocationCallback(tileX: number, tileY: number, width: number, height: number, callback: any, callbackContext: any): Phaser.Tilemaps.DynamicTilemapLayer;

      shuffle(tileX: number, tileY: number, width: number, height: number): Phaser.Tilemaps.DynamicTilemapLayer;

      swapByIndex(tileA: number, tileB: number, tileX: number, tileY: number, width: number, height: number): Phaser.Tilemaps.DynamicTilemapLayer;

      tileToWorldX(tileX: number, camera: Phaser.Cameras.Scene2D.Camera): number;

      tileToWorldY(tileY: number, camera: Phaser.Cameras.Scene2D.Camera): number;

      tileToWorldXY(tileX: number, tileY: number, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;

      weightedRandomize(tileX: number, tileY: number, width: number, height: number, weightedIndexes: Array.<object>): Phaser.Tilemaps.DynamicTilemapLayer;

      worldToTileX(worldX: number, snapToFloor: boolean, camera: Phaser.Cameras.Scene2D.Camera): number;

      worldToTileXY(worldY: number, snapToFloor: boolean, camera: Phaser.Cameras.Scene2D.Camera): number;

      worldToTileXY(worldX: number, worldY: number, snapToFloor: boolean, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;

      renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.Tilemaps.DynamicTilemapLayer, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, src: Phaser.Tilemaps.DynamicTilemapLayer, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      toJSON(): any;

      willRender(): boolean;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

      clearAlpha(): Phaser.GameObjects.GameObject;

      setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      alpha: number;

      alphaTopLeft: number;

      alphaTopRight: number;

      alphaBottomLeft: number;

      alphaBottomRight: number;

      blendMode: number;

      setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

      depth: number;

      setDepth(value: number): Phaser.GameObjects.GameObject;

      flipX: boolean;

      flipY: boolean;

      toggleFlipX(): Phaser.GameObjects.GameObject;

      toggleFlipY(): Phaser.GameObjects.GameObject;

      setFlipX(value: boolean): Phaser.GameObjects.GameObject;

      setFlipY(value: boolean): Phaser.GameObjects.GameObject;

      setFlip(x: boolean, y: boolean): Phaser.GameObjects.GameObject;

      resetFlip(): Phaser.GameObjects.GameObject;

      getCenter(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBounds(output: Phaser.Geom.Rectangle | any): Phaser.Geom.Rectangle;

      originX: number;

      originY: number;

      displayOriginX: number;

      displayOriginY: number;

      setOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      setOriginFromFrame(): Phaser.GameObjects.GameObject;

      setDisplayOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      updateDisplayOrigin(): Phaser.GameObjects.GameObject;

      defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      initPipeline(pipelineName: string): boolean;

      setPipeline(pipelineName: string): boolean;

      resetPipeline(): boolean;

      getPipelineName(): string;

      scaleMode: number;

      setScaleMode(value: number): Phaser.GameObjects.GameObject;

      width: number;

      height: number;

      displayWidth: number;

      displayHeight: number;

      setSizeToFrame(frame: Phaser.Textures.Frame): Phaser.GameObjects.GameObject;

      setSize(width: number, height: number): Phaser.GameObjects.GameObject;

      setDisplaySize(width: number, height: number): Phaser.GameObjects.GameObject;

      x: number;

      y: number;

      z: number;

      w: number;

      scaleX: number;

      scaleY: number;

      angle: number;

      rotation: number;

      setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

      setRotation(radians: number): Phaser.GameObjects.GameObject;

      setAngle(degrees: number): Phaser.GameObjects.GameObject;

      setScale(x: number, y: number): Phaser.GameObjects.GameObject;

      setX(value: number): Phaser.GameObjects.GameObject;

      setY(value: number): Phaser.GameObjects.GameObject;

      setZ(value: number): Phaser.GameObjects.GameObject;

      setW(value: number): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

      scrollFactorX: number;

      scrollFactorY: number;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

    }

    namespace DynamicTilemapLayer {
    }

    class Formats {
      CSV: number;

      TILED_JSON: number;

      ARRAY_2D: number;

      WELTMEISTER: number;

    }

    namespace Formats {
    }

    class ImageCollection {
      name: string;

      firstgid: number;

      imageWidth: number;

      imageHeight: number;

      imageMarge: number;

      imageSpacing: number;

      properties: any;

      images: any[];

      total: number;

      containsImageIndex(imageIndex: number): boolean;

      addImage(gid: number, image: string): Phaser.Tilemaps.ImageCollection;

      layer: Phaser.Tilemaps.LayerData;

      index: number;

      x: number;

      y: number;

      width: number;

      height: number;

      baseWidth: number;

      baseHeight: number;

      pixelX: number;

      pixelY: number;

      properties: any;

      rotation: number;

      collideLeft: boolean;

      collideRight: boolean;

      collideUp: boolean;

      collideDown: boolean;

      faceLeft: boolean;

      faceRight: boolean;

      faceTop: boolean;

      faceBottom: boolean;

      collisionCallback: any;

      collisionCallbackContext: any;

      tint: number;

      physics: any;

    }

    namespace ImageCollection {
    }

    class LayerData {
      name: string;

      x: number;

      y: number;

      width: number;

      height: number;

      tileWidth: number;

      tileHeight: number;

      baseTileWidth: number;

      baseTileHeight: number;

      widthInPixels: number;

      heightInPixels: number;

      alpha: number;

      visible: boolean;

      properties: any;

      indexes: any[];

      collideIndexes: any[];

      callbacks: any[];

      bodies: any[];

      data: any[];

      tilemapLayer: Phaser.Tilemaps.DynamicTilemapLayer;

    }

    namespace LayerData {
    }

    class MapData {
      name: string;

      width: number;

      height: number;

      tileWidth: number;

      tileHeight: number;

      widthInPixels: number;

      heightInPixels: number;

      format: number;

      orientation: string;

      version: string;

      properties: any;

      layers: any[];

      images: any[];

      objects: any;

      collision: any;

      tilesets: any[];

      imageCollections: any[];

      tiles: any[];

    }

    namespace MapData {
    }

    class ObjectLayer {
      name: string;

      opacity: number;

      properties: any;

      propertyTypes: any;

      type: string;

      visible: boolean;

      objects: any[];

    }

    namespace ObjectLayer {
    }

    class Parsers {
      static Parse(name: string, mapFormat: number, data: Array.<Array.<integer>> | string | any, tileWidth: number, tileHeight: number, insertNull: boolean): any;

      static Parse2DArray(name: string, data: Array.<Array.<integer>>, tileWidth: number, tileHeight: number, insertNull: boolean): any;

      static ParseCSV(name: string, data: string, tileWidth: number, tileHeight: number, insertNull: boolean): any;

    }

    namespace Parsers {
    }

    class StaticTilemapLayer {
      isTilemap: boolean;

      tilemap: Phaser.Tilemaps.Tilemap;

      layerIndex: number;

      layer: Phaser.Tilemaps.LayerData;

      tileset: Phaser.Tilemaps.Tileset;

      culledTiles: any[];

      vertexBuffer: any[];

      renderer: Phaser.Renderer.CanvasRenderer;

      bufferData: ArrayBuffer;

      vertexViewF32: Float32Array;

      vertexViewU32: Uint32Array;

      dirty: boolean;

      vertexCount: number;

      contextRestore(renderer: Phaser.Renderer.WebGLRenderer): Phaser.Tilemaps.StaticTilemapLayer;

      upload(camera: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.StaticTilemapLayer;

      calculateFacesAt(tileX: number, tileY: number): Phaser.Tilemaps.StaticTilemapLayer;

      calculateFacesWithin(tileX: number, tileY: number, width: number, height: number): Phaser.Tilemaps.StaticTilemapLayer;

      createFromTiles(indexes: number | any[], replacements: number | any[], spriteConfig: any, scene: Phaser.Scene, camera: Phaser.Cameras.Scene2D.Camera): Array.<Phaser.GameObjects.Sprite>;

      cull(camera: Phaser.Cameras.Scene2D.Camera): Array.<Phaser.Tilemaps.Tile>;

      destroy(): void;

      findByIndex(index: number, skip: number, reverse: boolean): Phaser.Tilemaps.Tile;

      findTile(callback: any, context: any, tileX: number, tileY: number, width: number, height: number, filteringOptions: any): Phaser.Tilemaps.Tile;

      filterTiles(callback: any, context: any, tileX: number, tileY: number, width: number, height: number, filteringOptions: any): Array.<Phaser.Tilemaps.Tile>;

      forEachTile(callback: any, context: any, tileX: number, tileY: number, width: number, height: number, filteringOptions: any): Phaser.Tilemaps.StaticTilemapLayer;

      getTileAt(tileX: number, tileY: number, nonNull: boolean): Phaser.Tilemaps.Tile;

      getTileAtWorldXY(worldX: number, worldY: number, nonNull: boolean, camera: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile;

      getTilesWithin(tileX: number, tileY: number, width: number, height: number, filteringOptions: any): Array.<Phaser.Tilemaps.Tile>;

      getTilesWithinWorldXY(worldX: number, worldY: number, width: number, height: number, filteringOptions: any, camera: Phaser.Cameras.Scene2D.Camera): Array.<Phaser.Tilemaps.Tile>;

      getTilesWithinShape(shape: Phaser.Geom.Circle | Phaser.Geom.Line | Phaser.Geom.Rectangle | Phaser.Geom.Triangle, filteringOptions: any, camera: Phaser.Cameras.Scene2D.Camera): Array.<Phaser.Tilemaps.Tile>;

      hasTileAt(tileX: number, tileY: number): boolean;

      hasTileAtWorldXY(worldX: number, worldY: number, camera: Phaser.Cameras.Scene2D.Camera): boolean;

      renderDebug(graphics: Phaser.GameObjects.Graphics, styleConfig: any): Phaser.Tilemaps.StaticTilemapLayer;

      setCollision(indexes: number | any[], collides: boolean, recalculateFaces: boolean): Phaser.Tilemaps.StaticTilemapLayer;

      setCollisionBetween(start: number, stop: number, collides: boolean, recalculateFaces: boolean): Phaser.Tilemaps.StaticTilemapLayer;

      setCollisionByProperty(properties: any, collides: boolean, recalculateFaces: boolean): Phaser.Tilemaps.StaticTilemapLayer;

      setCollisionByExclusion(indexes: Array.<integer>, collides: boolean, recalculateFaces: boolean): Phaser.Tilemaps.StaticTilemapLayer;

      setTileIndexCallback(indexes: number | any[], callback: any, callbackContext: any): Phaser.Tilemaps.StaticTilemapLayer;

      setCollisionFromCollisionGroup(collides: boolean, recalculateFaces: boolean): Phaser.Tilemaps.StaticTilemapLayer;

      setTileLocationCallback(tileX: number, tileY: number, width: number, height: number, callback: any, callbackContext: any): Phaser.Tilemaps.StaticTilemapLayer;

      tileToWorldX(tileX: number, camera: Phaser.Cameras.Scene2D.Camera): number;

      tileToWorldY(tileY: number, camera: Phaser.Cameras.Scene2D.Camera): number;

      tileToWorldXY(tileX: number, tileY: number, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;

      worldToTileX(worldX: number, snapToFloor: boolean, camera: Phaser.Cameras.Scene2D.Camera): number;

      worldToTileXY(worldY: number, snapToFloor: boolean, camera: Phaser.Cameras.Scene2D.Camera): number;

      worldToTileXY(worldX: number, worldY: number, snapToFloor: boolean, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;

      renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.Tilemaps.StaticTilemapLayer, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, src: Phaser.Tilemaps.StaticTilemapLayer, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

      scene: Phaser.Scene;

      type: string;

      name: string;

      active: boolean;

      tabIndex: number;

      data: Phaser.Data.DataManager;

      renderFlags: number;

      cameraFilter: number;

      input: Phaser.Input.InteractiveObject;

      body: Phaser.Physics.Body;

      setActive(value: boolean): Phaser.GameObjects.GameObject;

      setName(value: string): Phaser.GameObjects.GameObject;

      setDataEnabled(): Phaser.GameObjects.GameObject;

      setData(key: string, value: any): Phaser.GameObjects.GameObject;

      getData(key: string): any;

      setInteractive(shape: any, callback: any): Phaser.GameObjects.GameObject;

      update(): void;

      toJSON(): any;

      willRender(): boolean;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

      clearAlpha(): Phaser.GameObjects.GameObject;

      setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      alpha: number;

      alphaTopLeft: number;

      alphaTopRight: number;

      alphaBottomLeft: number;

      alphaBottomRight: number;

      blendMode: number;

      setBlendMode(value: string | number): Phaser.GameObjects.GameObject;

      depth: number;

      setDepth(value: number): Phaser.GameObjects.GameObject;

      flipX: boolean;

      flipY: boolean;

      toggleFlipX(): Phaser.GameObjects.GameObject;

      toggleFlipY(): Phaser.GameObjects.GameObject;

      setFlipX(value: boolean): Phaser.GameObjects.GameObject;

      setFlipY(value: boolean): Phaser.GameObjects.GameObject;

      setFlip(x: boolean, y: boolean): Phaser.GameObjects.GameObject;

      resetFlip(): Phaser.GameObjects.GameObject;

      getCenter(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getTopRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomLeft(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBottomRight(output: Phaser.Math.Vector2 | any): Phaser.Math.Vector2;

      getBounds(output: Phaser.Geom.Rectangle | any): Phaser.Geom.Rectangle;

      originX: number;

      originY: number;

      displayOriginX: number;

      displayOriginY: number;

      setOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      setOriginFromFrame(): Phaser.GameObjects.GameObject;

      setDisplayOrigin(x: number, y: number): Phaser.GameObjects.GameObject;

      updateDisplayOrigin(): Phaser.GameObjects.GameObject;

      defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      initPipeline(pipelineName: string): boolean;

      setPipeline(pipelineName: string): boolean;

      resetPipeline(): boolean;

      getPipelineName(): string;

      scaleMode: number;

      setScaleMode(value: number): Phaser.GameObjects.GameObject;

      width: number;

      height: number;

      displayWidth: number;

      displayHeight: number;

      setSizeToFrame(frame: Phaser.Textures.Frame): Phaser.GameObjects.GameObject;

      setSize(width: number, height: number): Phaser.GameObjects.GameObject;

      setDisplaySize(width: number, height: number): Phaser.GameObjects.GameObject;

      x: number;

      y: number;

      z: number;

      w: number;

      scaleX: number;

      scaleY: number;

      angle: number;

      rotation: number;

      setPosition(x: number, y: number, z: number, w: number): Phaser.GameObjects.GameObject;

      setRotation(radians: number): Phaser.GameObjects.GameObject;

      setAngle(degrees: number): Phaser.GameObjects.GameObject;

      setScale(x: number, y: number): Phaser.GameObjects.GameObject;

      setX(value: number): Phaser.GameObjects.GameObject;

      setY(value: number): Phaser.GameObjects.GameObject;

      setZ(value: number): Phaser.GameObjects.GameObject;

      setW(value: number): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

      scrollFactorX: number;

      scrollFactorY: number;

      setScrollFactor(x: number, y: number): Phaser.GameObjects.GameObject;

    }

    namespace StaticTilemapLayer {
    }

    class Tile {
      containsPoint(x: number, y: number): boolean;

      containsPoint(tile: Phaser.Tilemaps.Tile): Phaser.Tilemaps.Tile;

      getCollisionGroup(): any;

      getTileData(): any;

      getLeft(camera: Phaser.Cameras.Scene2D.Camera): number;

      getRight(camera: Phaser.Cameras.Scene2D.Camera): number;

      getTop(camera: Phaser.Cameras.Scene2D.Camera): number;

      getBottom(camera: Phaser.Cameras.Scene2D.Camera): number;

      getBounds(camera: Phaser.Cameras.Scene2D.Camera, output: any): Phaser.Geom.Rectangle;

      getCenterX(camera: Phaser.Cameras.Scene2D.Camera): number;

      getCenterY(camera: Phaser.Cameras.Scene2D.Camera): number;

      destroy(): void;

      intersects(x: number, y: number, right: number, bottom: number): boolean;

      isInteresting(collides: boolean, faces: boolean): boolean;

      resetCollision(recalculateFaces: boolean): Phaser.Tilemaps.Tile;

      resetFaces(): Phaser.Tilemaps.Tile;

      setCollision(left: boolean, right: boolean, up: boolean, down: boolean, recalculateFaces: boolean): Phaser.Tilemaps.Tile;

      setCollisionCallback(callback: any, context: any): Phaser.Tilemaps.Tile;

      setSize(tileWidth: number, tileHeight: number, baseWidth: number, baseHeight: number): Phaser.Tilemaps.Tile;

      updatePixelXY(): Phaser.Tilemaps.Tile;

      canCollide: boolean;

      collides: boolean;

      hasInterestingFace: boolean;

      tileset: Phaser.Tilemaps.Tileset;

      tilemapLayer: Phaser.Tilemaps.StaticTilemapLayer;

      tilemap: Phaser.Tilemaps.Tilemap;

      clearAlpha(): Phaser.GameObjects.GameObject;

      setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): Phaser.GameObjects.GameObject;

      alpha: number;

      alphaTopLeft: number;

      alphaTopRight: number;

      alphaBottomLeft: number;

      alphaBottomRight: number;

      flipX: boolean;

      flipY: boolean;

      toggleFlipX(): Phaser.GameObjects.GameObject;

      toggleFlipY(): Phaser.GameObjects.GameObject;

      setFlipX(value: boolean): Phaser.GameObjects.GameObject;

      setFlipY(value: boolean): Phaser.GameObjects.GameObject;

      setFlip(x: boolean, y: boolean): Phaser.GameObjects.GameObject;

      resetFlip(): Phaser.GameObjects.GameObject;

      visible: boolean;

      setVisible(value: boolean): Phaser.GameObjects.GameObject;

    }

    namespace Tile {
    }

    class Tilemap {
      scene: Phaser.Scene;

      tileWidth: number;

      tileHeight: number;

      width: number;

      height: number;

      orientation: string;

      format: number;

      version: number;

      properties: any;

      widthInPixels: number;

      heightInPixels: number;

      imageCollections: Array.<Phaser.Tilemaps.ImageCollection>;

      images: any[];

      layers: Array.<Phaser.Tilemaps.LayerData>;

      tilesets: Array.<Phaser.Tilemaps.Tileset>;

      objects: Array.<Phaser.Tilemaps.ObjectLayer>;

      currentLayerIndex: number;

      addTilesetImage(tilesetName: string, key: string, tileWidth: number, tileHeight: number, tileMargin: number, tileSpacing: number, gid: number): Phaser.Tilemaps.Tileset;

      convertLayerToStatic(layer: string | number | Phaser.Tilemaps.DynamicTilemapLayer): Phaser.Tilemaps.StaticTilemapLayer;

      copy(): Phaser.Tilemaps.Tilemap;

      createBlankDynamicLayer(name: string, tileset: Phaser.Tilemaps.Tileset, width: number, height: number, tileWidth: number, tileHeight: number): Phaser.Tilemaps.DynamicTilemapLayer;

      createDynamicLayer(layerID: number | string, tileset: Phaser.Tilemaps.Tileset, x: number, y: number): Phaser.Tilemaps.DynamicTilemapLayer;

      createFromObjects(name: string, id: number | string, spriteConfig: any, scene: Phaser.Scene): Array.<Phaser.GameObjects.Sprite>;

      createFromTiles(indexes: number | any[], replacements: number | any[], spriteConfig: any, scene: Phaser.Scene, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Array.<Phaser.GameObjects.Sprite>;

      createStaticLayer(layerID: number | string, tileset: Phaser.Tilemaps.Tileset, x: number, y: number): Phaser.Tilemaps.StaticTilemapLayer;

      destroy(): void;

      fill(index: number, tileX: number, tileY: number, width: number, height: number, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      filterObjects(objectLayer: Phaser.Tilemaps.ObjectLayer | string, callback: any, context: any): Array.<object>;

      filterTiles(callback: any, context: any, tileX: number, tileY: number, width: number, height: number, filteringOptions: any, layer: Phaser.Tilemaps.LayerData): Array.<Phaser.Tilemaps.Tile>;

      findByIndex(index: number, skip: number, reverse: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

      findObject(objectLayer: Phaser.Tilemaps.ObjectLayer | string, callback: any, context: any): any;

      findTile(callback: any, context: any, tileX: number, tileY: number, width: number, height: number, filteringOptions: any, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

      forEachTile(callback: any, context: any, tileX: number, tileY: number, width: number, height: number, filteringOptions: any, layer: LayerData): Phaser.Tilemaps.Tilemap;

      getImageIndex(name: string): number;

      getIndex(location: any[], name: string): number;

      getLayer(layer: string | number | Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer): Phaser.Tilemaps.LayerData;

      getObjectLayer(name: string): Phaser.Tilemaps.ObjectLayer;

      getLayerIndex(layer: string | number | Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer): number;

      getLayerIndexByName(name: string): number;

      getTileAt(tileX: number, tileY: number, nonNull: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

      getTileAtWorldXY(worldX: number, worldY: number, nonNull: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

      getTilesWithin(tileX: number, tileY: number, width: number, height: number, filteringOptions: any, layer: Phaser.Tilemaps.LayerData): Array.<Phaser.Tilemaps.Tile>;

      getTilesWithinShape(shape: Phaser.Geom.Circle | Phaser.Geom.Line | Phaser.Geom.Rectangle | Phaser.Geom.Triangle, filteringOptions: any, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Array.<Phaser.Tilemaps.Tile>;

      getTilesWithinWorldXY(worldX: number, worldY: number, width: number, height: number, filteringOptions: any, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Array.<Phaser.Tilemaps.Tile>;

      getTilesetIndex(name: string): number;

      hasTileAt(tileX: number, tileY: number, layer: Phaser.Tilemaps.LayerData): boolean;

      hasTileAtWorldXY(worldX: number, worldY: number, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): boolean;

      layer: Phaser.Tilemaps.LayerData;

      putTileAt(tile: number | Phaser.Tilemaps.Tile, tileX: number, tileY: number, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

      putTileAtWorldXY(tile: number | Phaser.Tilemaps.Tile, worldX: number, worldY: number, recalculateFaces: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

      putTilesAt(tile: Array.<integer> | Array.<Array.<integer>> | Array.<Phaser.Tilemaps.Tile> | Array.<Array.<Phaser.Tilemaps.Tile>>, tileX: number, tileY: number, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      randomize(tileX: number, tileY: number, width: number, height: number, indexes: Array.<integer>, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      calculateFacesAt(tileX: number, tileY: number, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      calculateFacesWithin(tileX: number, tileY: number, width: number, height: number, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      removeAllLayers(): Phaser.Tilemaps.Tilemap;

      removeTileAt(tile: number | Phaser.Tilemaps.Tile, tileX: number, tileY: number, replaceWithNull: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

      removeTileAtWorldXY(tile: number | Phaser.Tilemaps.Tile, worldX: number, worldY: number, replaceWithNull: boolean, recalculateFaces: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

      renderDebug(graphics: Phaser.GameObjects.Graphics, styleConfig: any, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      replaceByIndex(findIndex: number, newIndex: number, tileX: number, tileY: number, width: number, height: number, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      setCollision(indexes: number | any[], collides: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      setCollisionBetween(start: number, stop: number, collides: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      setCollisionByProperty(properties: any, collides: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      setCollisionByExclusion(indexes: Array.<integer>, collides: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      setCollisionFromCollisionGroup(collides: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      setTileIndexCallback(indexes: number | any[], callback: any, callbackContext: any, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      setTileLocationCallback(tileX: number, tileY: number, width: number, height: number, callback: any, callbackContext: any, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      setLayer(layer: string | number | Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer): Phaser.Tilemaps.Tilemap;

      setBaseTileSize(tileWidth: number, tileHeight: number): Phaser.Tilemaps.Tilemap;

      setLayerTileSize(tileWidth: number, tileHeight: number, layer: string | number | Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer): Phaser.Tilemaps.Tilemap;

      shuffle(tileX: number, tileY: number, width: number, height: number, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      swapByIndex(tileA: number, tileB: number, tileX: number, tileY: number, width: number, height: number, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      tileToWorldX(tileX: number, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

      tileToWorldY(tileY: number, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

      tileToWorldXY(tileX: number, tileY: number, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2;

      weightedRandomize(tileX: number, tileY: number, width: number, height: number, weightedIndexes: Array.<object>, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap;

      worldToTileX(worldX: number, snapToFloor: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

      worldToTileY(worldY: number, snapToFloor: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

      worldToTileXY(worldX: number, worldY: number, snapToFloor: boolean, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2;

      _isStaticCall(): boolean;

    }

    namespace Tilemap {
    }

    class Tileset {
      name: string;

      firstgid: number;

      tileWidth: number;

      tileHeight: number;

      tileMargin: number;

      tileSpacing: number;

      tileProperties: any;

      tileData: any;

      image: Phaser.Textures.Texture;

      rows: number;

      columns: number;

      total: number;

      texCoordinates: Array.<object>;

      getTileProperties(tileIndex: number): any;

      getTileData(tileIndex: number): any;

      getTileCollisionGroup(tileIndex: number): any;

      containsTileIndex(tileIndex: number): boolean;

      getTileTextureCoordinates(tileIndex: number): any;

      setImage(texture: Phaser.Textures.Texture): Phaser.Tilemaps.Tileset;

      setTileSize(tileWidth: number, tileHeight: number): Phaser.Tilemaps.Tileset;

      setSpacing(margin: number, spacing: number): Phaser.Tilemaps.Tileset;

      updateTileData(imageWidth: number, imageHeight: number): Phaser.Tilemaps.Tileset;

    }

    namespace Tileset {
    }

  }

  class Time {
  }

  namespace Time {
    class Clock {
      scene: Phaser.Scene;

      systems: Phaser.Scenes.Systems;

      now: number;

      timeScale: number;

      paused: boolean;

      _active: Array.<Phaser.Time.TimerEvent>;

      _pendingInsertion: Array.<Phaser.Time.TimerEvent>;

      _pendingRemoval: Array.<Phaser.Time.TimerEvent>;

      boot(): void;

      addEvent(config: any): Phaser.Time.TimerEvent;

      delayedCall(delay: number, callback: any, args: any[], callbackScope: any): any;

      clearPendingEvents(): Phaser.Time.Clock;

      removeAllEvents(): Phaser.Time.Clock;

      preUpdate(time: number, delta: number): void;

      update(time: number, delta: number): void;

      shutdown(): void;

      destroy(): void;

    }

    namespace Clock {
    }

    class TimerEvent {
      delay: number;

      repeat: number;

      repeatCount: number;

      loop: boolean;

      callback: any;

      callbackScope: any;

      args: any[];

      timeScale: number;

      startAt: number;

      elapsed: number;

      paused: boolean;

      hasDispatched: boolean;

      reset(config: any): Phaser.Time.TimerEvent;

      getProgress(): number;

      getOverallProgress(): number;

      getRepeatCount(): number;

      getElapsed(): number;

      getElapsedSeconds(): number;

      remove(dispatchCallback: any): void;

      destroy(): void;

    }

    namespace TimerEvent {
    }

  }

  class Tweens {
    CREATED: number;

    INIT: number;

    OFFSET_DELAY: number;

    OFFSET_DELAY: number;

    PLAYING_FORWARD: number;

    PLAYING_FORWARD: number;

    PLAYING_BACKWARD: number;

    HOLD_DELAY: number;

    REPEAT_DELAY: number;

    COMPLETE: number;

    PENDING_ADD: number;

    LOOP_DELAY: number;

    LOOP_DELAY: number;

    ACTIVE: number;

    COMPLETE_DELAY: number;

    PENDING_REMOVE: number;

    REMOVED: number;

    static TweenData(target: any, key: string, getEnd: any, getStart: any, ease: any, delay: number, duration: number, yoyo: boolean, hold: number, repeat: number, repeatDelay: number, flipX: boolean, flipY: boolean): Phaser.Tweens.TweenData;

  }

  namespace Tweens {
    class Builders {
      static NumberTweenBuilder(parent: Phaser.Tweens.TweenManager | Phaser.Tweens.Timeline, config: any, defaults: any): Phaser.Tweens.Tween;

      static TimelineBuilder(manager: Phaser.Tweens.TweenManager, config: any): Phaser.Tweens.Timeline;

      static TweenBuilder(parent: Phaser.Tweens.TweenManager | Phaser.Tweens.Timeline, config: any, defaults: any): Phaser.Tweens.Tween;

    }

    namespace Builders {
    }

    class Timeline {
      manager: Phaser.Tweens.TweenManager;

      isTimeline: boolean;

      data: any[];

      totalData: number;

      useFrames: boolean;

      timeScale: number;

      loop: number;

      loopDelay: number;

      loopCounter: number;

      completeDelay: number;

      countdown: number;

      state: number;

      _pausedState: number;

      paused: boolean;

      elapsed: number;

      totalElapsed: number;

      duration: number;

      progress: number;

      totalDuration: number;

      totalProgress: number;

      setTimeScale(value: number): Phaser.Tweens.Timeline;

      getTimeScale(): number;

      isPlaying(): boolean;

      add(config: any): Phaser.Tweens.Timeline;

      queue(tween: any): Phaser.Tweens.Timeline;

      hasOffset(tween: Phaser.Tweens.Tween): boolean;

      isOffsetAbsolute(value: number): boolean;

      isOffsetRelative(value: string): boolean;

      getRelativeOffset(value: string, base: number): number;

      calcDuration(): void;

      init(): boolean;

      resetTweens(resetFromLoop: boolean): void;

      setCallback(type: string, callback: any, params: any[], scope: any): Phaser.Tweens.Timeline;

      play(): void;

      nextState(): void;

      update(timestamp: number, delta: number): boolean;

      stop(): void;

      pause(): Phaser.Tweens.Timeline;

      resume(): Phaser.Tweens.Timeline;

      hasTarget(target: any): boolean;

      destroy(): void;

      eventNames(): any[];

      listeners(event: string | symbol): any[];

      listenerCount(event: string | symbol): number;

      emit(event: string | symbol): Boolean;

      on(event: string | symbol, fn: any, context: *): EventEmitter;

      addListener(event: string | symbol, fn: any, context: *): EventEmitter;

      once(event: string | symbol, fn: any, context: *): EventEmitter;

      removeListener(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      off(event: string | symbol, fn: any, context: *, once: boolean): EventEmitter;

      removeAllListeners(event: string | symbol): EventEmitter;

    }

    namespace Timeline {
    }

    class Tween {
      parent: Phaser.Tweens.TweenManager;

      parentIsTimeline: boolean;

      data: Array.<Phaser.Tweens.TweenData>;

      totalData: number;

      targets: Array.<object>;

      totalTargets: number;

      useFrames: boolean;

      timeScale: number;

      loop: number;

      loopDelay: number;

      loopCounter: number;

      completeDelay: number;

      countdown: number;

      offset: number;

      calculatedOffset: number;

      state: number;

      _pausedState: number;

      paused: boolean;

      elapsed: number;

      totalElapsed: number;

      duration: number;

      progress: number;

      totalDuration: number;

      totalProgress: number;

      callbacks: any;

      getValue(): any;

      setTimeScale(value: number): Phaser.Tweens.Tween;

      getTimeScale(): number;

      isPlaying(): boolean;

      isPaused(): boolean;

      hasTarget(target: any): boolean;

      updateTo(key: string, value: any, startToCurrent: boolean): Phaser.Tweens.Tween;

      restart(): void;

      calcDuration(): void;

      init(): boolean;

      nextState(): void;

      pause(): Phaser.Tweens.Tween;

      play(resetFromTimeline: boolean): void;

      resetTweenData(resetFromLoop: boolean): void;

      resume(): Phaser.Tweens.Tween;

      seek(toPosition: number): void;

      setCallback(type: string, callback: any, params: any[], scope: any): Phaser.Tweens.Tween;

      stop(resetTo: number): void;

      update(timestamp: number, delta: number): boolean;

      setStateFromEnd(tween: Phaser.Tweens.Tween, tweenData: Phaser.Tweens.TweenData, diff: number): number;

      setStateFromStart(tween: Phaser.Tweens.Tween, tweenData: Phaser.Tweens.TweenData, diff: number): number;

      updateTweenData(tween: Phaser.Tweens.Tween, tweenData: Phaser.Tweens.TweenData, delta: number): boolean;

    }

    namespace Tween {
    }

    class TweenManager {
      scene: Phaser.Scene;

      systems: Phaser.Scenes.Systems;

      timeScale: number;

      _add: any[];

      _pending: any[];

      _active: any[];

      _destroy: any[];

      _toProcess: number;

      boot(): void;

      createTimeline(config: any): Phaser.Tweens.Timeline;

      timeline(config: any): Phaser.Tweens.Timeline;

      create(config: any): Phaser.Tweens.Tween;

      add(config: any): Phaser.Tweens.Tween;

      existing(tween: Phaser.Tweens.Tween): Phaser.Tweens.TweenManager;

      addCounter(config: any): Phaser.Tweens.Tween;

      preUpdate(): void;

      update(timestamp: number, delta: number): void;

      makeActive(tween: Phaser.Tweens.Tween): Phaser.Tweens.TweenManager;

      each(callback: any, scope: any, arguments: *): void;

      getAllTweens(): Array.<Phaser.Tweens.Tween>;

      getGlobalTimeScale(): number;

      getTweensOf(target: any | any[]): Array.<Phaser.Tweens.Tween>;

      isTweening(target: any): boolean;

      killAll(): Phaser.Tweens.TweenManager;

      killTweensOf(target: any | any[]): Phaser.Tweens.TweenManager;

      pauseAll(): Phaser.Tweens.TweenManager;

      resumeAll(): Phaser.Tweens.TweenManager;

      setGlobalTimeScale(value: number): Phaser.Tweens.TweenManager;

      shutdown(): void;

      destroy(): void;

    }

    namespace TweenManager {
    }

  }

  class Utils {
    static getTintFromFloats(r: number, g: number, b: number, a: number): number;

    static getTintAppendFloatAlpha(rgb: number, a: number): number;

    static getTintAppendFloatAlphaAndSwap(rgb: number, a: number): number;

    static getFloatsFromUintRGB(rgb: number): number;

    static getComponentCount(attributes: number): number;

    static NOOP(): void;

  }

  namespace Utils {
    class Array {
      static NumberArray(start: number, end: number, prefix: string, suffix: string): Array.<number>;

      static NumberArrayStep(start: number, end: number, step: number): Array.<number>;

      static QuickSelect(arr: any, k: any, left: any, right: any, compare: any): void;

      static Range(a: any, b: any, options: any): any;

      static RemoveRandomElement(array: any[], start: number, length: number): any;

      static RotateLeft(array: any[], total: number): any;

      static RotateRight(array: any[], total: number): any;

      static Shuffle(array: any[]): any[];

      static SpliceOne(array: any[], index: number): any;

    }

    namespace Array {
      class Matrix {
        static MatrixToString(matrix: any[]): string;

        static ReverseColumns(matrix: any[]): any[];

        static ReverseRows(matrix: any[]): any[];

        static Rotate180(matrix: any[]): any[];

        static RotateLeft(matrix: any[]): any[];

        static RotateMatrix(matrix: any[], direction: number | string): any[];

        static RotateRight(matrix: any[]): any[];

        static TransposeMatrix(array: any[]): any[];

      }

      namespace Matrix {
      }

    }

    class Object {
      static IsPlainObject(obj: any): boolean;

      static Merge(obj1: any, obj2: any): any;

      static MergeRight(obj1: any, obj2: any): any;

    }

    namespace Object {
    }

    class String {
      static Pad(str: string, len: number, pad: string, dir: number): string;

      static ReverseString(string: string): string;

      static UppercaseFirst(str: string): string;

    }

    namespace String {
    }

  }

}

