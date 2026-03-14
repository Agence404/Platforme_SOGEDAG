'use client';

import { useEffect, useRef } from 'react';

export default function CircularCardsScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    let alive = true;
    let raf = 0;
    let renderer = null;
    let scene = null;
    let camera = null;
    let onResize = null;
    let cleanupPointerEvents = null;
    let carousel = null;

    const disposeMaterial = (material) => {
      if (!material) return;

      for (const key in material) {
        const value = material[key];
        if (value && value.isTexture) value.dispose();
      }

      material.dispose?.();
    };

    const disposeScene = (root) => {
      if (!root) return;

      root.traverse((obj) => {
        obj.geometry?.dispose?.();

        if (Array.isArray(obj.material)) {
          obj.material.forEach(disposeMaterial);
        } else {
          disposeMaterial(obj.material);
        }
      });
    };

    const getSceneConfig = () => {
      const width = window.innerWidth;

      if (width <= 380) {
        return {
          cameraFov: 42,
          cameraPos: [0, 1.75, 3.15],
          baseRotX: -10,
          baseRotZ: 4,
          targetHeight: 0.98,
          radiusFactor: 0.66,
          autoRotateSpeed: 0.42,
          pointerInfluenceX: 0.05,
          pointerInfluenceY: 0.055,
        };
      }

      if (width <= 560) {
        return {
          cameraFov: 40,
          cameraPos: [0, 1.95, 3.35],
          baseRotX: -10,
          baseRotZ: 5,
          targetHeight: 1.02,
          radiusFactor: 0.7,
          autoRotateSpeed: 0.46,
          pointerInfluenceX: 0.055,
          pointerInfluenceY: 0.06,
        };
      }

      if (width <= 768) {
        return {
          cameraFov: 36,
          cameraPos: [0, 2.15, 3.7],
          baseRotX: -11,
          baseRotZ: 6,
          targetHeight: 1.06,
          radiusFactor: 0.76,
          autoRotateSpeed: 0.5,
          pointerInfluenceX: 0.06,
          pointerInfluenceY: 0.07,
        };
      }

      if (width <= 1024) {
        return {
          cameraFov: 30,
          cameraPos: [0, 3.2, 4.8],
          baseRotX: -14,
          baseRotZ: 8,
          targetHeight: 0.9,
          radiusFactor: 0.92,
          autoRotateSpeed: 0.58,
          pointerInfluenceX: 0.07,
          pointerInfluenceY: 0.09,
        };
      }

      return {
        cameraFov: 24,
        cameraPos: [0, 4.8, 6],
        baseRotX: -18,
        baseRotZ: 10,
        targetHeight: 0.78,
        radiusFactor: 1.12,
        autoRotateSpeed: 0.72,
        pointerInfluenceX: 0.08,
        pointerInfluenceY: 0.12,
      };
    };

    (async () => {
      try {
        const THREE = await import('three');
        const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');

        if (!alive || !mountRef.current) return;

        const initialConfig = getSceneConfig();

        scene = new THREE.Scene();
        scene.background = null;

        camera = new THREE.PerspectiveCamera(
          initialConfig.cameraFov,
          mountRef.current.clientWidth / mountRef.current.clientHeight,
          0.01,
          100
        );
        camera.position.set(...initialConfig.cameraPos);
        camera.lookAt(0, 0, 0);

        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        });

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(
          mountRef.current.clientWidth,
          mountRef.current.clientHeight
        );
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 0.92;

        mountRef.current.appendChild(renderer.domElement);

        scene.add(new THREE.AmbientLight(0xffffff, 1.15));

        const key = new THREE.DirectionalLight(0xffffff, 1.55);
        key.position.set(5, 6, 5);
        scene.add(key);

        const fill = new THREE.DirectionalLight(0xffffff, 0.62);
        fill.position.set(-4, 2, 4);
        scene.add(fill);

        const rim = new THREE.DirectionalLight(0xffffff, 0.5);
        rim.position.set(0, 1, -6);
        scene.add(rim);

        carousel = new THREE.Group();
        carousel.position.y = -0.04;
        scene.add(carousel);

        const loader = new GLTFLoader();
        const gltf = await loader.loadAsync('/models/card.glb');

        if (!alive) return;

        const proto = gltf.scene;

        let box = new THREE.Box3().setFromObject(proto);
        let center = new THREE.Vector3();
        let size = new THREE.Vector3();

        box.getCenter(center);
        box.getSize(size);

        proto.position.sub(center);

        const normalizeScale = 1 / size.y;
        proto.scale.multiplyScalar(normalizeScale);
        proto.updateMatrixWorld(true);

        box = new THREE.Box3().setFromObject(proto);
        center = new THREE.Vector3();
        size = new THREE.Vector3();

        box.getCenter(center);
        box.getSize(size);

        proto.position.sub(center);
        proto.updateMatrixWorld(true);

        const normalizedWidth = size.x;
        const CARD_COUNT = 15;
        const START_OFFSET = THREE.MathUtils.degToRad(-16);

        const cardImages = [
          '/cards/card-1.png',
          '/cards/card-2.png',
          '/cards/card-3.png',
          '/cards/card-4.png',
          '/cards/card-5.png',
          '/cards/card-6.png',
          '/cards/card-7.png',
          '/cards/card-8.png',
          '/cards/card-9.png',
          '/cards/card-10.png',
          '/cards/card-11.png',
          '/cards/card-12.png',
          '/cards/card-13.png',
          '/cards/card-14.png',
          '/cards/card-15.png',
        ];

        const textureLoader = new THREE.TextureLoader();

        const textures = await Promise.all(
          new Array(CARD_COUNT).fill(0).map(async (_, i) => {
            const path = cardImages[i % cardImages.length];
            const texture = await textureLoader.loadAsync(path);

            texture.colorSpace = THREE.SRGBColorSpace;
            texture.flipY = false;
            texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
            texture.minFilter = THREE.LinearMipmapLinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.generateMipmaps = true;

            return texture;
          })
        );

        const replaceCardTexture = (material, texture) => {
          if (!material) return material;

          const cloned = material.clone();
          cloned.side = THREE.DoubleSide;

          if (cloned.map) {
            cloned.map = texture;
          }

          if ('roughness' in cloned) cloned.roughness = 0.9;
          if ('metalness' in cloned) cloned.metalness = 0.02;
          if ('color' in cloned && cloned.color) {
            cloned.color.setRGB(0.6, 0.6, 0.55);
          }

          cloned.needsUpdate = true;
          return cloned;
        };

        const cloneCard = (texture) => {
          const card = proto.clone(true);

          card.traverse((obj) => {
            if (!obj.isMesh) return;

            obj.frustumCulled = false;
            obj.castShadow = false;
            obj.receiveShadow = false;

            if (Array.isArray(obj.material)) {
              obj.material = obj.material.map((m) =>
                replaceCardTexture(m, texture)
              );
            } else if (obj.material) {
              obj.material = replaceCardTexture(obj.material, texture);
            }
          });

          return card;
        };

        const cards = [];

        for (let i = 0; i < CARD_COUNT; i++) {
          const pivot = new THREE.Group();
          const holder = new THREE.Group();
          const cardRoot = new THREE.Group();
          const card = cloneCard(textures[i]);

          const angle = (i / CARD_COUNT) * Math.PI * 2 + START_OFFSET;

          pivot.rotation.y = angle;
          holder.rotation.y = 0;
          card.rotation.x = THREE.MathUtils.degToRad(1.2);

          cardRoot.add(card);
          holder.add(cardRoot);
          pivot.add(holder);
          carousel.add(pivot);

          cards.push({
            pivot,
            holder,
            cardRoot,
            baseAngle: angle,
          });
        }

        let runtimeConfig = getSceneConfig();

        const applyResponsiveLayout = () => {
          runtimeConfig = getSceneConfig();

          const radius = normalizedWidth * runtimeConfig.targetHeight * runtimeConfig.radiusFactor;

          carousel.rotation.x = THREE.MathUtils.degToRad(runtimeConfig.baseRotX);
          carousel.rotation.z = THREE.MathUtils.degToRad(runtimeConfig.baseRotZ);

          cards.forEach((item) => {
            item.pivot.rotation.y = item.baseAngle;
            item.holder.position.x = radius;
            item.cardRoot.scale.setScalar(runtimeConfig.targetHeight);
          });
        };

        applyResponsiveLayout();

        const clock = new THREE.Clock();

        const pointer = {
          x: 0,
          y: 0,
          targetX: 0,
          targetY: 0,
          isDown: false,
          lastX: 0,
          dragVelocity: 0,
          rotationOffset: 0,
        };

        const dom = renderer.domElement;

        const getLocalPointer = (clientX, clientY) => {
          const rect = dom.getBoundingClientRect();

          const x = ((clientX - rect.left) / rect.width) * 2 - 1;
          const y = -(((clientY - rect.top) / rect.height) * 2 - 1);

          return { x, y };
        };

        const handlePointerDown = (e) => {
          pointer.isDown = true;
          pointer.lastX = e.clientX;
          dom.style.cursor = 'grabbing';
        };

        const handlePointerMove = (e) => {
          const p = getLocalPointer(e.clientX, e.clientY);
          pointer.targetX = p.x;
          pointer.targetY = p.y;

          if (!pointer.isDown) return;

          const deltaX = e.clientX - pointer.lastX;
          pointer.lastX = e.clientX;

          const dragAmount = deltaX * 0.006;
          pointer.rotationOffset += dragAmount;
          pointer.dragVelocity = deltaX * 0.0009;
        };

        const handlePointerUp = () => {
          pointer.isDown = false;
          dom.style.cursor = 'grab';
        };

        const handlePointerLeave = () => {
          pointer.isDown = false;
          pointer.targetX = 0;
          pointer.targetY = 0;
          dom.style.cursor = 'grab';
        };

        dom.addEventListener('pointerdown', handlePointerDown);
        dom.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerup', handlePointerUp);
        dom.addEventListener('pointerleave', handlePointerLeave);

        cleanupPointerEvents = () => {
          dom.removeEventListener('pointerdown', handlePointerDown);
          dom.removeEventListener('pointermove', handlePointerMove);
          window.removeEventListener('pointerup', handlePointerUp);
          dom.removeEventListener('pointerleave', handlePointerLeave);
        };

        onResize = () => {
          if (!mountRef.current || !renderer || !camera || !carousel) return;

          const width = mountRef.current.clientWidth;
          const height = mountRef.current.clientHeight;

          applyResponsiveLayout();

          camera.fov = runtimeConfig.cameraFov;
          camera.aspect = width / height;
          camera.position.set(...runtimeConfig.cameraPos);
          camera.lookAt(0, 0, 0);
          camera.updateProjectionMatrix();

          renderer.setSize(width, height);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };

        window.addEventListener('resize', onResize);
        onResize();

        const tick = () => {
          const t = clock.getElapsedTime();

          pointer.x += (pointer.targetX - pointer.x) * 0.08;
          pointer.y += (pointer.targetY - pointer.y) * 0.08;

          if (!pointer.isDown) {
            pointer.rotationOffset += pointer.dragVelocity;
            pointer.dragVelocity *= 0.94;
          }

          carousel.rotation.y =
            START_OFFSET + t * runtimeConfig.autoRotateSpeed + pointer.rotationOffset;

          carousel.rotation.x =
            THREE.MathUtils.degToRad(runtimeConfig.baseRotX) +
            pointer.y * runtimeConfig.pointerInfluenceY;

          carousel.rotation.z =
            THREE.MathUtils.degToRad(runtimeConfig.baseRotZ) +
            pointer.x * runtimeConfig.pointerInfluenceX;

          for (let i = 0; i < cards.length; i++) {
            const item = cards[i];

            item.cardRoot.rotation.y +=
              (pointer.x * 0.18 - item.cardRoot.rotation.y) * 0.08;

            item.cardRoot.rotation.x +=
              ((THREE.MathUtils.degToRad(1.2) - pointer.y * 0.08) -
                item.cardRoot.rotation.x) *
              0.08;
          }

          renderer.render(scene, camera);
          raf = requestAnimationFrame(tick);
        };

        tick();
      } catch (error) {
        console.error('Three.js init error:', error);
      }
    })();

    return () => {
      alive = false;
      cancelAnimationFrame(raf);

      if (cleanupPointerEvents) cleanupPointerEvents();
      if (onResize) window.removeEventListener('resize', onResize);

      disposeScene(scene);

      if (renderer) {
        renderer.dispose();

        if (renderer.domElement?.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '100%',
        background: 'transparent',
        overflow: 'hidden',
        cursor: 'grab',
      }}
    />
  );
}