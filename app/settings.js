
// Link to Project Assets
import {config} from './buildconfig.js'
import {Unity} from './Unity.js'

export const settings = {
    name: "Unity Template",
    devices: ["EEG", "HEG"],
    author: "Juris Zebneckis",
    description: "",
    categories: ["WIP"],
    instructions:"",

    // App Logic
    graph:
    {
      nodes: [
        {name:'eeg', class: brainsatplay.plugins.biosignals.EEG},
        {name:'neurofeedback', class: brainsatplay.plugins.algorithms.Neurofeedback, params: {metric: 'Focus'}},
        {name:'blink', class: brainsatplay.plugins.controls.Event},
        {
          name:'unity', 
          class: Unity, 
          params:{
              config,
              onUnityEvent: (ev) => {
                // Parse Messages from Unity
                if (typeof ev === 'string'){
                  console.log('MESSAGE: ' + ev)
                }
              },
              commands: 
              [
                {
                    object: 'GameApplication',
                    function: 'UpdateCoherence',
                    type: 'number'
                },
                {
                    object: 'GameApplication',
                    function: 'UpdateFocus',
                    type: 'number'
                },
                {
                    object: 'GameApplication',
                    function: 'UpdateBlink',
                    type: 'boolean'
                }
            ]
          }
        },
        {
          name:'ui', 
          class: brainsatplay.plugins.interfaces.UI
        }
    ],

      edges: [

        // BRAIN
        {
          source: 'eeg:atlas',
          target: 'neurofeedback',
        },
        {
          source: 'neurofeedback',
          target: 'unity:UpdateFocus',
        },

          {
            source: 'blink',
            target: 'unity:UpdateBlink',
          },

        {
          source: 'unity:element',
          target: 'ui:content',
        }
      ]
    },
    version: "0.0.36",
    connect: true
}