import type { ConfigType } from '../../../config/dynamic';

export abstract class Visualizer<T> {
  abstract visualizer: T;

  protected constructor(
    audioContext: AudioContext,
    audioSource: MediaElementAudioSourceNode,
    visualizerContainer: HTMLElement,
    canvas: HTMLCanvasElement,
    audioNode: GainNode,
    stream: MediaStream,
    options: ConfigType<'visualizer'>,
  ) {}

  abstract resize(width: number, height: number): void;
  abstract render(): void;
}
