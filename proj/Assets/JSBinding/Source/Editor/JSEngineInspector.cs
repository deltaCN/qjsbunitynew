using UnityEngine;
using UnityEditor;

[CustomEditor(typeof(JSEngine))]
public class JSEngineInspector : Editor
{
    public override void OnInspectorGUI()
    {
		serializedObject.Update ();

        EditorGUILayout.PropertyField(serializedObject.FindProperty("guiX"));
        SerializedProperty propDebug = serializedObject.FindProperty("debug");
        EditorGUILayout.PropertyField(propDebug);

        // JSEngine je = target as JSEngine;

        if (propDebug.boolValue)
        {
            EditorGUILayout.PropertyField(serializedObject.FindProperty("port"));
        }
        //EditorGUILayout.PropertyField(serializedObject.FindProperty("OutputFullCallingStackOnError"));
        EditorGUILayout.PropertyField(serializedObject.FindProperty("GCInterval"));
		EditorGUILayout.PropertyField(serializedObject.FindProperty("jsLoader"));
        //EditorGUILayout.PropertyField(serializedObject.FindProperty("forceProtectJSFunction"));
		EditorGUILayout.PropertyField(serializedObject.FindProperty("showStatistics"));
        EditorGUILayout.PropertyField(serializedObject.FindProperty("InitLoadScripts"), true);

        EditorGUILayout.HelpBox(@"1. Check 'Debug' to enable js debugging with Firefox.
2. Add 'ErrorHandler' to InitLoadScripts to enable printing calling stack on error.
     It will make the execution a little slower but easier to locate bugs.", MessageType.Info);

        serializedObject.ApplyModifiedProperties();
    }
}