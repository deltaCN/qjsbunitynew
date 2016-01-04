this.Enum = {};

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// PerTest$RefObject
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "PerTest.RefObject",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 0, 0, true, this); }

// fields

_jstype.fields.String =  { 
            get: function() { return CS.Call(0, 0, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 0, 0, false, this, v); } 
        };

_jstype.fields.x =  { 
            get: function() { return CS.Call(0, 0, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 0, 1, false, this, v); } 
        };

_jstype.fields.y =  { 
            get: function() { return CS.Call(0, 0, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 0, 2, false, this, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// PerTest
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "PerTest",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 1, 0, true, this); }

// fields

_jstype.staticFields.StaticObject =  { 
            get: function() { return CS.Call(0, 1, 0, true); }, 
            set: function(v) { return CS.Call(1, 1, 0, true, v); } 
        };

// properties

// methods

/* static Void  */
_jstype.staticDefinition.test123 = function(a0/*Object[]*/) { 
    
    return CS.Call(4, 1, 0, true, jsb_formatParamsArray(0, a0, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.testString = function(a0/*String[]*/) { 
    
    return CS.Call(4, 1, 1, true, jsb_formatParamsArray(0, a0, arguments)); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Collections$IEnumerator
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "System.Collections.IEnumerator",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_Current = function() { return CS.Call(2, 2, 0, false, this); }
_jstype.definition.set_Current = function(v) { return CS.Call(3, 2, 0, false, this, v); }

// methods

/* Boolean */
_jstype.definition.MoveNext = function() { 
    
    return CS.Call(4, 2, 0, false, this); 
}
/* Void */
_jstype.definition.Reset = function() { 
    
    return CS.Call(4, 2, 1, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XmlNode
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Xml.XmlNode",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_Attributes = function() { return CS.Call(2, 3, 0, false, this); }
_jstype.definition.set_Attributes = function(v) { return CS.Call(3, 3, 0, false, this, v); }

_jstype.definition.get_BaseURI = function() { return CS.Call(2, 3, 1, false, this); }
_jstype.definition.set_BaseURI = function(v) { return CS.Call(3, 3, 1, false, this, v); }

_jstype.definition.get_ChildNodes = function() { return CS.Call(2, 3, 2, false, this); }
_jstype.definition.set_ChildNodes = function(v) { return CS.Call(3, 3, 2, false, this, v); }

_jstype.definition.get_FirstChild = function() { return CS.Call(2, 3, 3, false, this); }
_jstype.definition.set_FirstChild = function(v) { return CS.Call(3, 3, 3, false, this, v); }

_jstype.definition.get_HasChildNodes = function() { return CS.Call(2, 3, 4, false, this); }
_jstype.definition.set_HasChildNodes = function(v) { return CS.Call(3, 3, 4, false, this, v); }

_jstype.definition.get_InnerText = function() { return CS.Call(2, 3, 5, false, this); }
_jstype.definition.set_InnerText = function(v) { return CS.Call(3, 3, 5, false, this, v); }

_jstype.definition.get_InnerXml = function() { return CS.Call(2, 3, 6, false, this); }
_jstype.definition.set_InnerXml = function(v) { return CS.Call(3, 3, 6, false, this, v); }

_jstype.definition.get_IsReadOnly = function() { return CS.Call(2, 3, 7, false, this); }
_jstype.definition.set_IsReadOnly = function(v) { return CS.Call(3, 3, 7, false, this, v); }

_jstype.definition.get_Item$$String = function(ind0) { return CS.Call(2, 3, 8, false, this, ind0); }
_jstype.definition.set_Item$$String = function(ind0, v) { return CS.Call(3, 3, 8, false, this, ind0, v); }

_jstype.definition.get_Item$$String$$String = function(ind0, ind1) { return CS.Call(2, 3, 9, false, this, ind0, ind1); }
_jstype.definition.set_Item$$String$$String = function(ind0, ind1, v) { return CS.Call(3, 3, 9, false, this, ind0, ind1, v); }

_jstype.definition.get_LastChild = function() { return CS.Call(2, 3, 10, false, this); }
_jstype.definition.set_LastChild = function(v) { return CS.Call(3, 3, 10, false, this, v); }

_jstype.definition.get_LocalName = function() { return CS.Call(2, 3, 11, false, this); }
_jstype.definition.set_LocalName = function(v) { return CS.Call(3, 3, 11, false, this, v); }

_jstype.definition.get_Name = function() { return CS.Call(2, 3, 12, false, this); }
_jstype.definition.set_Name = function(v) { return CS.Call(3, 3, 12, false, this, v); }

_jstype.definition.get_NamespaceURI = function() { return CS.Call(2, 3, 13, false, this); }
_jstype.definition.set_NamespaceURI = function(v) { return CS.Call(3, 3, 13, false, this, v); }

_jstype.definition.get_NextSibling = function() { return CS.Call(2, 3, 14, false, this); }
_jstype.definition.set_NextSibling = function(v) { return CS.Call(3, 3, 14, false, this, v); }

_jstype.definition.get_NodeType = function() { return CS.Call(2, 3, 15, false, this); }
_jstype.definition.set_NodeType = function(v) { return CS.Call(3, 3, 15, false, this, v); }

_jstype.definition.get_OuterXml = function() { return CS.Call(2, 3, 16, false, this); }
_jstype.definition.set_OuterXml = function(v) { return CS.Call(3, 3, 16, false, this, v); }

_jstype.definition.get_OwnerDocument = function() { return CS.Call(2, 3, 17, false, this); }
_jstype.definition.set_OwnerDocument = function(v) { return CS.Call(3, 3, 17, false, this, v); }

_jstype.definition.get_ParentNode = function() { return CS.Call(2, 3, 18, false, this); }
_jstype.definition.set_ParentNode = function(v) { return CS.Call(3, 3, 18, false, this, v); }

_jstype.definition.get_Prefix = function() { return CS.Call(2, 3, 19, false, this); }
_jstype.definition.set_Prefix = function(v) { return CS.Call(3, 3, 19, false, this, v); }

_jstype.definition.get_PreviousSibling = function() { return CS.Call(2, 3, 20, false, this); }
_jstype.definition.set_PreviousSibling = function(v) { return CS.Call(3, 3, 20, false, this, v); }

_jstype.definition.get_Value = function() { return CS.Call(2, 3, 21, false, this); }
_jstype.definition.set_Value = function(v) { return CS.Call(3, 3, 21, false, this, v); }

_jstype.definition.get_SchemaInfo = function() { return CS.Call(2, 3, 22, false, this); }
_jstype.definition.set_SchemaInfo = function(v) { return CS.Call(3, 3, 22, false, this, v); }

// methods

/* XmlNode */
_jstype.definition.AppendChild$$XmlNode = function(a0/*XmlNode*/) { 
    
    return CS.Call(4, 3, 0, false, this, a0); 
}
/* XmlNode */
_jstype.definition.Clone = function() { 
    
    return CS.Call(4, 3, 1, false, this); 
}
/* XmlNode */
_jstype.definition.CloneNode = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 3, 2, false, this, a0); 
}
/* XPathNavigator */
_jstype.definition.CreateNavigator = function() { 
    
    return CS.Call(4, 3, 3, false, this); 
}
/* IEnumerator */
_jstype.definition.GetEnumerator = function() { 
    
    return CS.Call(4, 3, 4, false, this); 
}
/* String */
_jstype.definition.GetNamespaceOfPrefix = function(a0/*String*/) { 
    
    return CS.Call(4, 3, 5, false, this, a0); 
}
/* String */
_jstype.definition.GetPrefixOfNamespace = function(a0/*String*/) { 
    
    return CS.Call(4, 3, 6, false, this, a0); 
}
/* XmlNode */
_jstype.definition.InsertAfter = function(a0/*XmlNode*/, a1/*XmlNode*/) { 
    
    return CS.Call(4, 3, 7, false, this, a0, a1); 
}
/* XmlNode */
_jstype.definition.InsertBefore$$XmlNode$$XmlNode = function(a0/*XmlNode*/, a1/*XmlNode*/) { 
    
    return CS.Call(4, 3, 8, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Normalize = function() { 
    
    return CS.Call(4, 3, 9, false, this); 
}
/* XmlNode */
_jstype.definition.PrependChild = function(a0/*XmlNode*/) { 
    
    return CS.Call(4, 3, 10, false, this, a0); 
}
/* Void */
_jstype.definition.RemoveAll = function() { 
    
    return CS.Call(4, 3, 11, false, this); 
}
/* XmlNode */
_jstype.definition.RemoveChild$$XmlNode = function(a0/*XmlNode*/) { 
    
    return CS.Call(4, 3, 12, false, this, a0); 
}
/* XmlNode */
_jstype.definition.ReplaceChild = function(a0/*XmlNode*/, a1/*XmlNode*/) { 
    
    return CS.Call(4, 3, 13, false, this, a0, a1); 
}
/* XmlNodeList */
_jstype.definition.SelectNodes$$String$$XmlNamespaceManager = function(a0/*String*/, a1/*XmlNamespaceManager*/) { 
    
    return CS.Call(4, 3, 14, false, this, a0, a1); 
}
/* XmlNodeList */
_jstype.definition.SelectNodes$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 3, 15, false, this, a0); 
}
/* XmlNode */
_jstype.definition.SelectSingleNode$$String$$XmlNamespaceManager = function(a0/*String*/, a1/*XmlNamespaceManager*/) { 
    
    return CS.Call(4, 3, 16, false, this, a0, a1); 
}
/* XmlNode */
_jstype.definition.SelectSingleNode$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 3, 17, false, this, a0); 
}
/* Boolean */
_jstype.definition.Supports = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 3, 18, false, this, a0, a1); 
}
/* Void */
_jstype.definition.WriteContentTo = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 3, 19, false, this, a0); 
}
/* Void */
_jstype.definition.WriteTo = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 3, 20, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XmlDocument
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Xml.XmlDocument",
    baseTypeName: "System.Xml.XmlNode"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 4, 0, true, this); }
_jstype.definition.ctor$$XmlNameTable = function(a0) { CS.Call(5, 4, 1, true, this, a0); }

// fields

// properties

_jstype.definition.get_BaseURI = function() { return CS.Call(2, 4, 0, false, this); }
_jstype.definition.set_BaseURI = function(v) { return CS.Call(3, 4, 0, false, this, v); }

_jstype.definition.get_DocumentElement = function() { return CS.Call(2, 4, 1, false, this); }
_jstype.definition.set_DocumentElement = function(v) { return CS.Call(3, 4, 1, false, this, v); }

_jstype.definition.get_DocumentType = function() { return CS.Call(2, 4, 2, false, this); }
_jstype.definition.set_DocumentType = function(v) { return CS.Call(3, 4, 2, false, this, v); }

_jstype.definition.get_Implementation = function() { return CS.Call(2, 4, 3, false, this); }
_jstype.definition.set_Implementation = function(v) { return CS.Call(3, 4, 3, false, this, v); }

_jstype.definition.get_InnerXml = function() { return CS.Call(2, 4, 4, false, this); }
_jstype.definition.set_InnerXml = function(v) { return CS.Call(3, 4, 4, false, this, v); }

_jstype.definition.get_IsReadOnly = function() { return CS.Call(2, 4, 5, false, this); }
_jstype.definition.set_IsReadOnly = function(v) { return CS.Call(3, 4, 5, false, this, v); }

_jstype.definition.get_LocalName = function() { return CS.Call(2, 4, 6, false, this); }
_jstype.definition.set_LocalName = function(v) { return CS.Call(3, 4, 6, false, this, v); }

_jstype.definition.get_Name = function() { return CS.Call(2, 4, 7, false, this); }
_jstype.definition.set_Name = function(v) { return CS.Call(3, 4, 7, false, this, v); }

_jstype.definition.get_NameTable = function() { return CS.Call(2, 4, 8, false, this); }
_jstype.definition.set_NameTable = function(v) { return CS.Call(3, 4, 8, false, this, v); }

_jstype.definition.get_NodeType = function() { return CS.Call(2, 4, 9, false, this); }
_jstype.definition.set_NodeType = function(v) { return CS.Call(3, 4, 9, false, this, v); }

_jstype.definition.get_OwnerDocument = function() { return CS.Call(2, 4, 10, false, this); }
_jstype.definition.set_OwnerDocument = function(v) { return CS.Call(3, 4, 10, false, this, v); }

_jstype.definition.get_PreserveWhitespace = function() { return CS.Call(2, 4, 11, false, this); }
_jstype.definition.set_PreserveWhitespace = function(v) { return CS.Call(3, 4, 11, false, this, v); }

_jstype.definition.get_XmlResolver = function() { return CS.Call(2, 4, 12, false, this); }
_jstype.definition.set_XmlResolver = function(v) { return CS.Call(3, 4, 12, false, this, v); }

_jstype.definition.get_ParentNode = function() { return CS.Call(2, 4, 13, false, this); }
_jstype.definition.set_ParentNode = function(v) { return CS.Call(3, 4, 13, false, this, v); }

_jstype.definition.get_Schemas = function() { return CS.Call(2, 4, 14, false, this); }
_jstype.definition.set_Schemas = function(v) { return CS.Call(3, 4, 14, false, this, v); }

_jstype.definition.get_SchemaInfo = function() { return CS.Call(2, 4, 15, false, this); }
_jstype.definition.set_SchemaInfo = function(v) { return CS.Call(3, 4, 15, false, this, v); }

// methods

/* XmlNode */
_jstype.definition.CloneNode = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 4, 0, false, this, a0); 
}
/* XmlAttribute */
_jstype.definition.CreateAttribute$$String$$String$$String = function(a0/*String*/, a1/*String*/, a2/*String*/) { 
    
    return CS.Call(4, 4, 1, false, this, a0, a1, a2); 
}
/* XmlAttribute */
_jstype.definition.CreateAttribute$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 4, 2, false, this, a0, a1); 
}
/* XmlAttribute */
_jstype.definition.CreateAttribute$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 4, 3, false, this, a0); 
}
/* XmlCDataSection */
_jstype.definition.CreateCDataSection = function(a0/*String*/) { 
    
    return CS.Call(4, 4, 4, false, this, a0); 
}
/* XmlComment */
_jstype.definition.CreateComment = function(a0/*String*/) { 
    
    return CS.Call(4, 4, 5, false, this, a0); 
}
/* XmlDocumentFragment */
_jstype.definition.CreateDocumentFragment = function() { 
    
    return CS.Call(4, 4, 6, false, this); 
}
/* XmlDocumentType */
_jstype.definition.CreateDocumentType$$String$$String$$String$$String = function(a0/*String*/, a1/*String*/, a2/*String*/, a3/*String*/) { 
    
    return CS.Call(4, 4, 7, false, this, a0, a1, a2, a3); 
}
/* XmlElement */
_jstype.definition.CreateElement$$String$$String$$String = function(a0/*String*/, a1/*String*/, a2/*String*/) { 
    
    return CS.Call(4, 4, 8, false, this, a0, a1, a2); 
}
/* XmlElement */
_jstype.definition.CreateElement$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 4, 9, false, this, a0, a1); 
}
/* XmlElement */
_jstype.definition.CreateElement$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 4, 10, false, this, a0); 
}
/* XmlEntityReference */
_jstype.definition.CreateEntityReference = function(a0/*String*/) { 
    
    return CS.Call(4, 4, 11, false, this, a0); 
}
/* XPathNavigator */
_jstype.definition.CreateNavigator = function() { 
    
    return CS.Call(4, 4, 12, false, this); 
}
/* XmlNode */
_jstype.definition.CreateNode$$XmlNodeType$$String$$String$$String = function(a0/*XmlNodeType*/, a1/*String*/, a2/*String*/, a3/*String*/) { 
    
    return CS.Call(4, 4, 13, false, this, a0, a1, a2, a3); 
}
/* XmlNode */
_jstype.definition.CreateNode$$XmlNodeType$$String$$String = function(a0/*XmlNodeType*/, a1/*String*/, a2/*String*/) { 
    
    return CS.Call(4, 4, 14, false, this, a0, a1, a2); 
}
/* XmlNode */
_jstype.definition.CreateNode$$String$$String$$String = function(a0/*String*/, a1/*String*/, a2/*String*/) { 
    
    return CS.Call(4, 4, 15, false, this, a0, a1, a2); 
}
/* XmlProcessingInstruction */
_jstype.definition.CreateProcessingInstruction = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 4, 16, false, this, a0, a1); 
}
/* XmlSignificantWhitespace */
_jstype.definition.CreateSignificantWhitespace = function(a0/*String*/) { 
    
    return CS.Call(4, 4, 17, false, this, a0); 
}
/* XmlText */
_jstype.definition.CreateTextNode = function(a0/*String*/) { 
    
    return CS.Call(4, 4, 18, false, this, a0); 
}
/* XmlWhitespace */
_jstype.definition.CreateWhitespace = function(a0/*String*/) { 
    
    return CS.Call(4, 4, 19, false, this, a0); 
}
/* XmlDeclaration */
_jstype.definition.CreateXmlDeclaration = function(a0/*String*/, a1/*String*/, a2/*String*/) { 
    
    return CS.Call(4, 4, 20, false, this, a0, a1, a2); 
}
/* XmlElement */
_jstype.definition.GetElementById = function(a0/*String*/) { 
    
    return CS.Call(4, 4, 21, false, this, a0); 
}
/* XmlNodeList */
_jstype.definition.GetElementsByTagName$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 4, 22, false, this, a0, a1); 
}
/* XmlNodeList */
_jstype.definition.GetElementsByTagName$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 4, 23, false, this, a0); 
}
/* XmlNode */
_jstype.definition.ImportNode = function(a0/*XmlNode*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 4, 24, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Load$$TextReader = function(a0/*TextReader*/) { 
    
    return CS.Call(4, 4, 25, false, this, a0); 
}
/* Void */
_jstype.definition.Load$$XmlReader = function(a0/*XmlReader*/) { 
    
    return CS.Call(4, 4, 26, false, this, a0); 
}
/* Void */
_jstype.definition.Load$$Stream = function(a0/*Stream*/) { 
    
    return CS.Call(4, 4, 27, false, this, a0); 
}
/* Void */
_jstype.definition.Load$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 4, 28, false, this, a0); 
}
/* Void */
_jstype.definition.LoadXml = function(a0/*String*/) { 
    
    return CS.Call(4, 4, 29, false, this, a0); 
}
/* XmlNode */
_jstype.definition.ReadNode = function(a0/*XmlReader*/) { 
    
    return CS.Call(4, 4, 30, false, this, a0); 
}
/* Void */
_jstype.definition.Save$$TextWriter = function(a0/*TextWriter*/) { 
    
    return CS.Call(4, 4, 31, false, this, a0); 
}
/* Void */
_jstype.definition.Save$$XmlWriter = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 4, 32, false, this, a0); 
}
/* Void */
_jstype.definition.Save$$Stream = function(a0/*Stream*/) { 
    
    return CS.Call(4, 4, 33, false, this, a0); 
}
/* Void */
_jstype.definition.Save$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 4, 34, false, this, a0); 
}
/* Void */
_jstype.definition.Validate$$ValidationEventHandler$$XmlNode = function(a0/*ValidationEventHandler*/, a1/*XmlNode*/) { 
    
    return CS.Call(4, 4, 35, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Validate$$ValidationEventHandler = function(a0/*ValidationEventHandler*/) { 
    
    return CS.Call(4, 4, 36, false, this, a0); 
}
/* Void */
_jstype.definition.WriteContentTo = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 4, 37, false, this, a0); 
}
/* Void */
_jstype.definition.WriteTo = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 4, 38, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XmlNodeList
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Xml.XmlNodeList",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_Count = function() { return CS.Call(2, 5, 0, false, this); }
_jstype.definition.set_Count = function(v) { return CS.Call(3, 5, 0, false, this, v); }

_jstype.definition.get_ItemOf$$Int32 = function(ind0) { return CS.Call(2, 5, 1, false, this, ind0); }
_jstype.definition.set_ItemOf$$Int32 = function(ind0, v) { return CS.Call(3, 5, 1, false, this, ind0, v); }

// methods

/* IEnumerator */
_jstype.definition.GetEnumerator = function() { 
    
    return CS.Call(4, 5, 0, false, this); 
}
/* XmlNode */
_jstype.definition.Item = function(a0/*Int32*/) { 
    
    return CS.Call(4, 5, 1, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XmlElement
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Xml.XmlElement",
    baseTypeName: "System.Xml.XmlLinkedNode"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_Attributes = function() { return CS.Call(2, 6, 0, false, this); }
_jstype.definition.set_Attributes = function(v) { return CS.Call(3, 6, 0, false, this, v); }

_jstype.definition.get_HasAttributes = function() { return CS.Call(2, 6, 1, false, this); }
_jstype.definition.set_HasAttributes = function(v) { return CS.Call(3, 6, 1, false, this, v); }

_jstype.definition.get_InnerText = function() { return CS.Call(2, 6, 2, false, this); }
_jstype.definition.set_InnerText = function(v) { return CS.Call(3, 6, 2, false, this, v); }

_jstype.definition.get_InnerXml = function() { return CS.Call(2, 6, 3, false, this); }
_jstype.definition.set_InnerXml = function(v) { return CS.Call(3, 6, 3, false, this, v); }

_jstype.definition.get_IsEmpty = function() { return CS.Call(2, 6, 4, false, this); }
_jstype.definition.set_IsEmpty = function(v) { return CS.Call(3, 6, 4, false, this, v); }

_jstype.definition.get_LocalName = function() { return CS.Call(2, 6, 5, false, this); }
_jstype.definition.set_LocalName = function(v) { return CS.Call(3, 6, 5, false, this, v); }

_jstype.definition.get_Name = function() { return CS.Call(2, 6, 6, false, this); }
_jstype.definition.set_Name = function(v) { return CS.Call(3, 6, 6, false, this, v); }

_jstype.definition.get_NamespaceURI = function() { return CS.Call(2, 6, 7, false, this); }
_jstype.definition.set_NamespaceURI = function(v) { return CS.Call(3, 6, 7, false, this, v); }

_jstype.definition.get_NextSibling = function() { return CS.Call(2, 6, 8, false, this); }
_jstype.definition.set_NextSibling = function(v) { return CS.Call(3, 6, 8, false, this, v); }

_jstype.definition.get_NodeType = function() { return CS.Call(2, 6, 9, false, this); }
_jstype.definition.set_NodeType = function(v) { return CS.Call(3, 6, 9, false, this, v); }

_jstype.definition.get_OwnerDocument = function() { return CS.Call(2, 6, 10, false, this); }
_jstype.definition.set_OwnerDocument = function(v) { return CS.Call(3, 6, 10, false, this, v); }

_jstype.definition.get_Prefix = function() { return CS.Call(2, 6, 11, false, this); }
_jstype.definition.set_Prefix = function(v) { return CS.Call(3, 6, 11, false, this, v); }

_jstype.definition.get_ParentNode = function() { return CS.Call(2, 6, 12, false, this); }
_jstype.definition.set_ParentNode = function(v) { return CS.Call(3, 6, 12, false, this, v); }

_jstype.definition.get_SchemaInfo = function() { return CS.Call(2, 6, 13, false, this); }
_jstype.definition.set_SchemaInfo = function(v) { return CS.Call(3, 6, 13, false, this, v); }

// methods

/* XmlNode */
_jstype.definition.CloneNode = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 6, 0, false, this, a0); 
}
/* String */
_jstype.definition.GetAttribute$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 6, 1, false, this, a0, a1); 
}
/* String */
_jstype.definition.GetAttribute$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 6, 2, false, this, a0); 
}
/* XmlAttribute */
_jstype.definition.GetAttributeNode$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 6, 3, false, this, a0, a1); 
}
/* XmlAttribute */
_jstype.definition.GetAttributeNode$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 6, 4, false, this, a0); 
}
/* XmlNodeList */
_jstype.definition.GetElementsByTagName$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 6, 5, false, this, a0, a1); 
}
/* XmlNodeList */
_jstype.definition.GetElementsByTagName$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 6, 6, false, this, a0); 
}
/* Boolean */
_jstype.definition.HasAttribute$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 6, 7, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.HasAttribute$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 6, 8, false, this, a0); 
}
/* Void */
_jstype.definition.RemoveAll = function() { 
    
    return CS.Call(4, 6, 9, false, this); 
}
/* Void */
_jstype.definition.RemoveAllAttributes = function() { 
    
    return CS.Call(4, 6, 10, false, this); 
}
/* Void */
_jstype.definition.RemoveAttribute$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 6, 11, false, this, a0, a1); 
}
/* Void */
_jstype.definition.RemoveAttribute$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 6, 12, false, this, a0); 
}
/* XmlNode */
_jstype.definition.RemoveAttributeAt = function(a0/*Int32*/) { 
    
    return CS.Call(4, 6, 13, false, this, a0); 
}
/* XmlAttribute */
_jstype.definition.RemoveAttributeNode$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 6, 14, false, this, a0, a1); 
}
/* XmlAttribute */
_jstype.definition.RemoveAttributeNode$$XmlAttribute = function(a0/*XmlAttribute*/) { 
    
    return CS.Call(4, 6, 15, false, this, a0); 
}
/* String */
_jstype.definition.SetAttribute$$String$$String$$String = function(a0/*String*/, a1/*String*/, a2/*String*/) { 
    
    return CS.Call(4, 6, 16, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SetAttribute$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 6, 17, false, this, a0, a1); 
}
/* XmlAttribute */
_jstype.definition.SetAttributeNode$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 6, 18, false, this, a0, a1); 
}
/* XmlAttribute */
_jstype.definition.SetAttributeNode$$XmlAttribute = function(a0/*XmlAttribute*/) { 
    
    return CS.Call(4, 6, 19, false, this, a0); 
}
/* Void */
_jstype.definition.WriteContentTo = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 6, 20, false, this, a0); 
}
/* Void */
_jstype.definition.WriteTo = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 6, 21, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XmlLinkedNode
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Xml.XmlLinkedNode",
    baseTypeName: "System.Xml.XmlNode"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_NextSibling = function() { return CS.Call(2, 7, 0, false, this); }
_jstype.definition.set_NextSibling = function(v) { return CS.Call(3, 7, 0, false, this, v); }

_jstype.definition.get_PreviousSibling = function() { return CS.Call(2, 7, 1, false, this); }
_jstype.definition.set_PreviousSibling = function(v) { return CS.Call(3, 7, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XmlAttributeCollection
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Xml.XmlAttributeCollection",
    baseTypeName: "System.Xml.XmlNamedNodeMap"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_ItemOf$$String = function(ind0) { return CS.Call(2, 8, 0, false, this, ind0); }
_jstype.definition.set_ItemOf$$String = function(ind0, v) { return CS.Call(3, 8, 0, false, this, ind0, v); }

_jstype.definition.get_ItemOf$$Int32 = function(ind0) { return CS.Call(2, 8, 1, false, this, ind0); }
_jstype.definition.set_ItemOf$$Int32 = function(ind0, v) { return CS.Call(3, 8, 1, false, this, ind0, v); }

_jstype.definition.get_ItemOf$$String$$String = function(ind0, ind1) { return CS.Call(2, 8, 2, false, this, ind0, ind1); }
_jstype.definition.set_ItemOf$$String$$String = function(ind0, ind1, v) { return CS.Call(3, 8, 2, false, this, ind0, ind1, v); }

// methods

/* XmlAttribute */
_jstype.definition.Append = function(a0/*XmlAttribute*/) { 
    
    return CS.Call(4, 8, 0, false, this, a0); 
}
/* Void */
_jstype.definition.CopyTo = function(a0/*XmlAttribute[]*/, a1/*Int32*/) { 
    
    return CS.Call(4, 8, 1, false, this, a0, a1); 
}
/* XmlAttribute */
_jstype.definition.InsertAfter = function(a0/*XmlAttribute*/, a1/*XmlAttribute*/) { 
    
    return CS.Call(4, 8, 2, false, this, a0, a1); 
}
/* XmlAttribute */
_jstype.definition.InsertBefore = function(a0/*XmlAttribute*/, a1/*XmlAttribute*/) { 
    
    return CS.Call(4, 8, 3, false, this, a0, a1); 
}
/* XmlAttribute */
_jstype.definition.Prepend = function(a0/*XmlAttribute*/) { 
    
    return CS.Call(4, 8, 4, false, this, a0); 
}
/* XmlAttribute */
_jstype.definition.Remove = function(a0/*XmlAttribute*/) { 
    
    return CS.Call(4, 8, 5, false, this, a0); 
}
/* Void */
_jstype.definition.RemoveAll = function() { 
    
    return CS.Call(4, 8, 6, false, this); 
}
/* XmlAttribute */
_jstype.definition.RemoveAt = function(a0/*Int32*/) { 
    
    return CS.Call(4, 8, 7, false, this, a0); 
}
/* XmlNode */
_jstype.definition.SetNamedItem$$XmlNode = function(a0/*XmlNode*/) { 
    
    return CS.Call(4, 8, 8, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XmlNamedNodeMap
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Xml.XmlNamedNodeMap",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_Count = function() { return CS.Call(2, 9, 0, false, this); }
_jstype.definition.set_Count = function(v) { return CS.Call(3, 9, 0, false, this, v); }

// methods

/* IEnumerator */
_jstype.definition.GetEnumerator = function() { 
    
    return CS.Call(4, 9, 0, false, this); 
}
/* XmlNode */
_jstype.definition.GetNamedItem$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 9, 1, false, this, a0, a1); 
}
/* XmlNode */
_jstype.definition.GetNamedItem$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 9, 2, false, this, a0); 
}
/* XmlNode */
_jstype.definition.Item = function(a0/*Int32*/) { 
    
    return CS.Call(4, 9, 3, false, this, a0); 
}
/* XmlNode */
_jstype.definition.RemoveNamedItem$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 9, 4, false, this, a0, a1); 
}
/* XmlNode */
_jstype.definition.RemoveNamedItem$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 9, 5, false, this, a0); 
}
/* XmlNode */
_jstype.definition.SetNamedItem$$XmlNode = function(a0/*XmlNode*/) { 
    
    return CS.Call(4, 9, 6, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Xml$XmlAttribute
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Xml.XmlAttribute",
    baseTypeName: "System.Xml.XmlNode"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_BaseURI = function() { return CS.Call(2, 10, 0, false, this); }
_jstype.definition.set_BaseURI = function(v) { return CS.Call(3, 10, 0, false, this, v); }

_jstype.definition.get_InnerText = function() { return CS.Call(2, 10, 1, false, this); }
_jstype.definition.set_InnerText = function(v) { return CS.Call(3, 10, 1, false, this, v); }

_jstype.definition.get_InnerXml = function() { return CS.Call(2, 10, 2, false, this); }
_jstype.definition.set_InnerXml = function(v) { return CS.Call(3, 10, 2, false, this, v); }

_jstype.definition.get_LocalName = function() { return CS.Call(2, 10, 3, false, this); }
_jstype.definition.set_LocalName = function(v) { return CS.Call(3, 10, 3, false, this, v); }

_jstype.definition.get_Name = function() { return CS.Call(2, 10, 4, false, this); }
_jstype.definition.set_Name = function(v) { return CS.Call(3, 10, 4, false, this, v); }

_jstype.definition.get_NamespaceURI = function() { return CS.Call(2, 10, 5, false, this); }
_jstype.definition.set_NamespaceURI = function(v) { return CS.Call(3, 10, 5, false, this, v); }

_jstype.definition.get_NodeType = function() { return CS.Call(2, 10, 6, false, this); }
_jstype.definition.set_NodeType = function(v) { return CS.Call(3, 10, 6, false, this, v); }

_jstype.definition.get_OwnerDocument = function() { return CS.Call(2, 10, 7, false, this); }
_jstype.definition.set_OwnerDocument = function(v) { return CS.Call(3, 10, 7, false, this, v); }

_jstype.definition.get_OwnerElement = function() { return CS.Call(2, 10, 8, false, this); }
_jstype.definition.set_OwnerElement = function(v) { return CS.Call(3, 10, 8, false, this, v); }

_jstype.definition.get_ParentNode = function() { return CS.Call(2, 10, 9, false, this); }
_jstype.definition.set_ParentNode = function(v) { return CS.Call(3, 10, 9, false, this, v); }

_jstype.definition.get_Prefix = function() { return CS.Call(2, 10, 10, false, this); }
_jstype.definition.set_Prefix = function(v) { return CS.Call(3, 10, 10, false, this, v); }

_jstype.definition.get_SchemaInfo = function() { return CS.Call(2, 10, 11, false, this); }
_jstype.definition.set_SchemaInfo = function(v) { return CS.Call(3, 10, 11, false, this, v); }

_jstype.definition.get_Specified = function() { return CS.Call(2, 10, 12, false, this); }
_jstype.definition.set_Specified = function(v) { return CS.Call(3, 10, 12, false, this, v); }

_jstype.definition.get_Value = function() { return CS.Call(2, 10, 13, false, this); }
_jstype.definition.set_Value = function(v) { return CS.Call(3, 10, 13, false, this, v); }

// methods

/* XmlNode */
_jstype.definition.AppendChild$$XmlNode = function(a0/*XmlNode*/) { 
    
    return CS.Call(4, 10, 0, false, this, a0); 
}
/* XmlNode */
_jstype.definition.CloneNode = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 10, 1, false, this, a0); 
}
/* XmlNode */
_jstype.definition.InsertAfter = function(a0/*XmlNode*/, a1/*XmlNode*/) { 
    
    return CS.Call(4, 10, 2, false, this, a0, a1); 
}
/* XmlNode */
_jstype.definition.InsertBefore$$XmlNode$$XmlNode = function(a0/*XmlNode*/, a1/*XmlNode*/) { 
    
    return CS.Call(4, 10, 3, false, this, a0, a1); 
}
/* XmlNode */
_jstype.definition.PrependChild = function(a0/*XmlNode*/) { 
    
    return CS.Call(4, 10, 4, false, this, a0); 
}
/* XmlNode */
_jstype.definition.RemoveChild$$XmlNode = function(a0/*XmlNode*/) { 
    
    return CS.Call(4, 10, 5, false, this, a0); 
}
/* XmlNode */
_jstype.definition.ReplaceChild = function(a0/*XmlNode*/, a1/*XmlNode*/) { 
    
    return CS.Call(4, 10, 6, false, this, a0, a1); 
}
/* Void */
_jstype.definition.WriteContentTo = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 10, 7, false, this, a0); 
}
/* Void */
_jstype.definition.WriteTo = function(a0/*XmlWriter*/) { 
    
    return CS.Call(4, 10, 8, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Security
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Security",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 11, 0, true, this); }

// fields

// properties

// methods

/* static Assembly  */
_jstype.staticDefinition.LoadAndVerifyAssembly$$Byte$Array$$String = function(a0/*Byte[]*/, a1/*String*/) { 
    
    return CS.Call(4, 11, 0, true, a0, a1); 
}
/* static Assembly  */
_jstype.staticDefinition.LoadAndVerifyAssembly$$Byte$Array = function(a0/*Byte[]*/) { 
    
    return CS.Call(4, 11, 1, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.PrefetchSocketPolicy$$String$$Int32$$Int32 = function(a0/*String*/, a1/*Int32*/, a2/*Int32*/) { 
    
    return CS.Call(4, 11, 2, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.PrefetchSocketPolicy$$String$$Int32 = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 11, 3, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UnityException
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UnityException",
    baseTypeName: "System.SystemException"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 12, 0, true, this); }
_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 12, 1, true, this, a0); }
_jstype.definition.ctor$$String$$Exception = function(a0, a1) { CS.Call(5, 12, 2, true, this, a0, a1); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$MissingComponentException
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.MissingComponentException",
    baseTypeName: "System.SystemException"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 13, 0, true, this); }
_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 13, 1, true, this, a0); }
_jstype.definition.ctor$$String$$Exception = function(a0, a1) { CS.Call(5, 13, 2, true, this, a0, a1); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UnassignedReferenceException
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UnassignedReferenceException",
    baseTypeName: "System.SystemException"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 14, 0, true, this); }
_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 14, 1, true, this, a0); }
_jstype.definition.ctor$$String$$Exception = function(a0, a1) { CS.Call(5, 14, 2, true, this, a0, a1); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$MissingReferenceException
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.MissingReferenceException",
    baseTypeName: "System.SystemException"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 15, 0, true, this); }
_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 15, 1, true, this, a0); }
_jstype.definition.ctor$$String$$Exception = function(a0, a1) { CS.Call(5, 15, 2, true, this, a0, a1); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$TextEditor
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.TextEditor",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 16, 0, true, this); }

// fields

_jstype.fields.pos =  { 
            get: function() { return CS.Call(0, 16, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 16, 0, false, this, v); } 
        };

_jstype.fields.selectPos =  { 
            get: function() { return CS.Call(0, 16, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 16, 1, false, this, v); } 
        };

_jstype.fields.controlID =  { 
            get: function() { return CS.Call(0, 16, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 16, 2, false, this, v); } 
        };

_jstype.fields.content =  { 
            get: function() { return CS.Call(0, 16, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 16, 3, false, this, v); } 
        };

_jstype.fields.style =  { 
            get: function() { return CS.Call(0, 16, 4, false, this); }, 
            set: function(v) { return CS.Call(1, 16, 4, false, this, v); } 
        };

_jstype.fields.position =  { 
            get: function() { return CS.Call(0, 16, 5, false, this); }, 
            set: function(v) { return CS.Call(1, 16, 5, false, this, v); } 
        };

_jstype.fields.multiline =  { 
            get: function() { return CS.Call(0, 16, 6, false, this); }, 
            set: function(v) { return CS.Call(1, 16, 6, false, this, v); } 
        };

_jstype.fields.hasHorizontalCursorPos =  { 
            get: function() { return CS.Call(0, 16, 7, false, this); }, 
            set: function(v) { return CS.Call(1, 16, 7, false, this, v); } 
        };

_jstype.fields.isPasswordField =  { 
            get: function() { return CS.Call(0, 16, 8, false, this); }, 
            set: function(v) { return CS.Call(1, 16, 8, false, this, v); } 
        };

_jstype.fields.scrollOffset =  { 
            get: function() { return CS.Call(0, 16, 9, false, this); }, 
            set: function(v) { return CS.Call(1, 16, 9, false, this, v); } 
        };

_jstype.fields.graphicalCursorPos =  { 
            get: function() { return CS.Call(0, 16, 10, false, this); }, 
            set: function(v) { return CS.Call(1, 16, 10, false, this, v); } 
        };

_jstype.fields.graphicalSelectCursorPos =  { 
            get: function() { return CS.Call(0, 16, 11, false, this); }, 
            set: function(v) { return CS.Call(1, 16, 11, false, this, v); } 
        };

// properties

_jstype.definition.get_hasSelection = function() { return CS.Call(2, 16, 0, false, this); }
_jstype.definition.set_hasSelection = function(v) { return CS.Call(3, 16, 0, false, this, v); }

_jstype.definition.get_SelectedText = function() { return CS.Call(2, 16, 1, false, this); }
_jstype.definition.set_SelectedText = function(v) { return CS.Call(3, 16, 1, false, this, v); }

// methods

/* Boolean */
_jstype.definition.Backspace = function() { 
    
    return CS.Call(4, 16, 0, false, this); 
}
/* Boolean */
_jstype.definition.CanPaste = function() { 
    
    return CS.Call(4, 16, 1, false, this); 
}
/* Void */
_jstype.definition.ClampPos = function() { 
    
    return CS.Call(4, 16, 2, false, this); 
}
/* Void */
_jstype.definition.Copy = function() { 
    
    return CS.Call(4, 16, 3, false, this); 
}
/* Boolean */
_jstype.definition.Cut = function() { 
    
    return CS.Call(4, 16, 4, false, this); 
}
/* Void */
_jstype.definition.DblClickSnap = function(a0/*DblClickSnapping*/) { 
    
    return CS.Call(4, 16, 5, false, this, a0); 
}
/* Boolean */
_jstype.definition.Delete = function() { 
    
    return CS.Call(4, 16, 6, false, this); 
}
/* Boolean */
_jstype.definition.DeleteLineBack = function() { 
    
    return CS.Call(4, 16, 7, false, this); 
}
/* Boolean */
_jstype.definition.DeleteSelection = function() { 
    
    return CS.Call(4, 16, 8, false, this); 
}
/* Boolean */
_jstype.definition.DeleteWordBack = function() { 
    
    return CS.Call(4, 16, 9, false, this); 
}
/* Boolean */
_jstype.definition.DeleteWordForward = function() { 
    
    return CS.Call(4, 16, 10, false, this); 
}
/* Void */
_jstype.definition.DrawCursor = function(a0/*String*/) { 
    
    return CS.Call(4, 16, 11, false, this, a0); 
}
/* Void */
_jstype.definition.ExpandSelectGraphicalLineEnd = function() { 
    
    return CS.Call(4, 16, 12, false, this); 
}
/* Void */
_jstype.definition.ExpandSelectGraphicalLineStart = function() { 
    
    return CS.Call(4, 16, 13, false, this); 
}
/* Int32 */
_jstype.definition.FindStartOfNextWord = function(a0/*Int32*/) { 
    
    return CS.Call(4, 16, 14, false, this, a0); 
}
/* Boolean */
_jstype.definition.HandleKeyEvent = function(a0/*Event*/) { 
    
    return CS.Call(4, 16, 15, false, this, a0); 
}
/* Void */
_jstype.definition.Insert = function(a0/*Char*/) { 
    
    return CS.Call(4, 16, 16, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsOverSelection = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 16, 17, false, this, a0); 
}
/* Void */
_jstype.definition.MouseDragSelectsWholeWords = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 16, 18, false, this, a0); 
}
/* Void */
_jstype.definition.MoveAltCursorToPosition = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 16, 19, false, this, a0); 
}
/* Void */
_jstype.definition.MoveCursorToPosition = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 16, 20, false, this, a0); 
}
/* Void */
_jstype.definition.MoveDown = function() { 
    
    return CS.Call(4, 16, 21, false, this); 
}
/* Void */
_jstype.definition.MoveGraphicalLineEnd = function() { 
    
    return CS.Call(4, 16, 22, false, this); 
}
/* Void */
_jstype.definition.MoveGraphicalLineStart = function() { 
    
    return CS.Call(4, 16, 23, false, this); 
}
/* Void */
_jstype.definition.MoveLeft = function() { 
    
    return CS.Call(4, 16, 24, false, this); 
}
/* Void */
_jstype.definition.MoveLineEnd = function() { 
    
    return CS.Call(4, 16, 25, false, this); 
}
/* Void */
_jstype.definition.MoveLineStart = function() { 
    
    return CS.Call(4, 16, 26, false, this); 
}
/* Void */
_jstype.definition.MoveParagraphBackward = function() { 
    
    return CS.Call(4, 16, 27, false, this); 
}
/* Void */
_jstype.definition.MoveParagraphForward = function() { 
    
    return CS.Call(4, 16, 28, false, this); 
}
/* Void */
_jstype.definition.MoveRight = function() { 
    
    return CS.Call(4, 16, 29, false, this); 
}
/* Void */
_jstype.definition.MoveSelectionToAltCursor = function() { 
    
    return CS.Call(4, 16, 30, false, this); 
}
/* Void */
_jstype.definition.MoveTextEnd = function() { 
    
    return CS.Call(4, 16, 31, false, this); 
}
/* Void */
_jstype.definition.MoveTextStart = function() { 
    
    return CS.Call(4, 16, 32, false, this); 
}
/* Void */
_jstype.definition.MoveToEndOfPreviousWord = function() { 
    
    return CS.Call(4, 16, 33, false, this); 
}
/* Void */
_jstype.definition.MoveToStartOfNextWord = function() { 
    
    return CS.Call(4, 16, 34, false, this); 
}
/* Void */
_jstype.definition.MoveUp = function() { 
    
    return CS.Call(4, 16, 35, false, this); 
}
/* Void */
_jstype.definition.MoveWordLeft = function() { 
    
    return CS.Call(4, 16, 36, false, this); 
}
/* Void */
_jstype.definition.MoveWordRight = function() { 
    
    return CS.Call(4, 16, 37, false, this); 
}
/* Void */
_jstype.definition.OnFocus = function() { 
    
    return CS.Call(4, 16, 38, false, this); 
}
/* Void */
_jstype.definition.OnLostFocus = function() { 
    
    return CS.Call(4, 16, 39, false, this); 
}
/* Boolean */
_jstype.definition.Paste = function() { 
    
    return CS.Call(4, 16, 40, false, this); 
}
/* Void */
_jstype.definition.ReplaceSelection = function(a0/*String*/) { 
    
    return CS.Call(4, 16, 41, false, this, a0); 
}
/* Void */
_jstype.definition.SaveBackup = function() { 
    
    return CS.Call(4, 16, 42, false, this); 
}
/* Void */
_jstype.definition.SelectAll = function() { 
    
    return CS.Call(4, 16, 43, false, this); 
}
/* Void */
_jstype.definition.SelectCurrentParagraph = function() { 
    
    return CS.Call(4, 16, 44, false, this); 
}
/* Void */
_jstype.definition.SelectCurrentWord = function() { 
    
    return CS.Call(4, 16, 45, false, this); 
}
/* Void */
_jstype.definition.SelectDown = function() { 
    
    return CS.Call(4, 16, 46, false, this); 
}
/* Void */
_jstype.definition.SelectGraphicalLineEnd = function() { 
    
    return CS.Call(4, 16, 47, false, this); 
}
/* Void */
_jstype.definition.SelectGraphicalLineStart = function() { 
    
    return CS.Call(4, 16, 48, false, this); 
}
/* Void */
_jstype.definition.SelectLeft = function() { 
    
    return CS.Call(4, 16, 49, false, this); 
}
/* Void */
_jstype.definition.SelectNone = function() { 
    
    return CS.Call(4, 16, 50, false, this); 
}
/* Void */
_jstype.definition.SelectParagraphBackward = function() { 
    
    return CS.Call(4, 16, 51, false, this); 
}
/* Void */
_jstype.definition.SelectParagraphForward = function() { 
    
    return CS.Call(4, 16, 52, false, this); 
}
/* Void */
_jstype.definition.SelectRight = function() { 
    
    return CS.Call(4, 16, 53, false, this); 
}
/* Void */
_jstype.definition.SelectTextEnd = function() { 
    
    return CS.Call(4, 16, 54, false, this); 
}
/* Void */
_jstype.definition.SelectTextStart = function() { 
    
    return CS.Call(4, 16, 55, false, this); 
}
/* Void */
_jstype.definition.SelectToEndOfPreviousWord = function() { 
    
    return CS.Call(4, 16, 56, false, this); 
}
/* Void */
_jstype.definition.SelectToPosition = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 16, 57, false, this, a0); 
}
/* Void */
_jstype.definition.SelectToStartOfNextWord = function() { 
    
    return CS.Call(4, 16, 58, false, this); 
}
/* Void */
_jstype.definition.SelectUp = function() { 
    
    return CS.Call(4, 16, 59, false, this); 
}
/* Void */
_jstype.definition.SelectWordLeft = function() { 
    
    return CS.Call(4, 16, 60, false, this); 
}
/* Void */
_jstype.definition.SelectWordRight = function() { 
    
    return CS.Call(4, 16, 61, false, this); 
}
/* Void */
_jstype.definition.Undo = function() { 
    
    return CS.Call(4, 16, 62, false, this); 
}
/* Void */
_jstype.definition.UpdateScrollOffsetIfNeeded = function() { 
    
    return CS.Call(4, 16, 63, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$TextGenerator
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.TextGenerator",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 17, 0, true, this); }
_jstype.definition.ctor$$Int32 = function(a0) { CS.Call(5, 17, 1, true, this, a0); }

// fields

// properties

_jstype.definition.get_verts = function() { return CS.Call(2, 17, 0, false, this); }
_jstype.definition.set_verts = function(v) { return CS.Call(3, 17, 0, false, this, v); }

_jstype.definition.get_characters = function() { return CS.Call(2, 17, 1, false, this); }
_jstype.definition.set_characters = function(v) { return CS.Call(3, 17, 1, false, this, v); }

_jstype.definition.get_lines = function() { return CS.Call(2, 17, 2, false, this); }
_jstype.definition.set_lines = function(v) { return CS.Call(3, 17, 2, false, this, v); }

_jstype.definition.get_rectExtents = function() { return CS.Call(2, 17, 3, false, this); }
_jstype.definition.set_rectExtents = function(v) { return CS.Call(3, 17, 3, false, this, v); }

_jstype.definition.get_vertexCount = function() { return CS.Call(2, 17, 4, false, this); }
_jstype.definition.set_vertexCount = function(v) { return CS.Call(3, 17, 4, false, this, v); }

_jstype.definition.get_characterCount = function() { return CS.Call(2, 17, 5, false, this); }
_jstype.definition.set_characterCount = function(v) { return CS.Call(3, 17, 5, false, this, v); }

_jstype.definition.get_characterCountVisible = function() { return CS.Call(2, 17, 6, false, this); }
_jstype.definition.set_characterCountVisible = function(v) { return CS.Call(3, 17, 6, false, this, v); }

_jstype.definition.get_lineCount = function() { return CS.Call(2, 17, 7, false, this); }
_jstype.definition.set_lineCount = function(v) { return CS.Call(3, 17, 7, false, this, v); }

_jstype.definition.get_fontSizeUsedForBestFit = function() { return CS.Call(2, 17, 8, false, this); }
_jstype.definition.set_fontSizeUsedForBestFit = function(v) { return CS.Call(3, 17, 8, false, this, v); }

// methods

/* Void */
_jstype.definition.GetCharacters = function(a0/*List`1*/) { 
    
    return CS.Call(4, 17, 0, false, this, a0); 
}
/* UICharInfo[] */
_jstype.definition.GetCharactersArray = function() { 
    
    return CS.Call(4, 17, 1, false, this); 
}
/* Void */
_jstype.definition.GetLines = function(a0/*List`1*/) { 
    
    return CS.Call(4, 17, 2, false, this, a0); 
}
/* UILineInfo[] */
_jstype.definition.GetLinesArray = function() { 
    
    return CS.Call(4, 17, 3, false, this); 
}
/* Single */
_jstype.definition.GetPreferredHeight = function(a0/*String*/, a1/*TextGenerationSettings*/) { 
    
    return CS.Call(4, 17, 4, false, this, a0, a1); 
}
/* Single */
_jstype.definition.GetPreferredWidth = function(a0/*String*/, a1/*TextGenerationSettings*/) { 
    
    return CS.Call(4, 17, 5, false, this, a0, a1); 
}
/* Void */
_jstype.definition.GetVertices = function(a0/*List`1*/) { 
    
    return CS.Call(4, 17, 6, false, this, a0); 
}
/* UIVertex[] */
_jstype.definition.GetVerticesArray = function() { 
    
    return CS.Call(4, 17, 7, false, this); 
}
/* Void */
_jstype.definition.Invalidate = function() { 
    
    return CS.Call(4, 17, 8, false, this); 
}
/* Boolean */
_jstype.definition.Populate = function(a0/*String*/, a1/*TextGenerationSettings*/) { 
    
    return CS.Call(4, 17, 9, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$TrackedReference
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.TrackedReference",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 18, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 18, 1, false, this); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*TrackedReference*/, a1/*TrackedReference*/) { 
    
    return CS.Call(4, 18, 2, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Implicit = function(a0/*TrackedReference*/) { 
    
    return CS.Call(4, 18, 3, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*TrackedReference*/, a1/*TrackedReference*/) { 
    
    return CS.Call(4, 18, 4, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$WWW
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.WWW",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 19, 0, true, this, a0); }
_jstype.definition.ctor$$String$$WWWForm = function(a0, a1) { CS.Call(5, 19, 1, true, this, a0, a1); }
_jstype.definition.ctor$$String$$Byte$Array = function(a0, a1) { CS.Call(5, 19, 2, true, this, a0, a1); }
_jstype.definition.ctor$$String$$Byte$Array$$Dictionary$2$String$String = function(a0, a1, a2) { CS.Call(5, 19, 3, true, this, a0, a1, a2); }

// fields

// properties

_jstype.definition.get_responseHeaders = function() { return CS.Call(2, 19, 0, false, this); }
_jstype.definition.set_responseHeaders = function(v) { return CS.Call(3, 19, 0, false, this, v); }

_jstype.definition.get_text = function() { return CS.Call(2, 19, 1, false, this); }
_jstype.definition.set_text = function(v) { return CS.Call(3, 19, 1, false, this, v); }

_jstype.definition.get_bytes = function() { return CS.Call(2, 19, 2, false, this); }
_jstype.definition.set_bytes = function(v) { return CS.Call(3, 19, 2, false, this, v); }

_jstype.definition.get_size = function() { return CS.Call(2, 19, 3, false, this); }
_jstype.definition.set_size = function(v) { return CS.Call(3, 19, 3, false, this, v); }

_jstype.definition.get_error = function() { return CS.Call(2, 19, 4, false, this); }
_jstype.definition.set_error = function(v) { return CS.Call(3, 19, 4, false, this, v); }

_jstype.definition.get_texture = function() { return CS.Call(2, 19, 5, false, this); }
_jstype.definition.set_texture = function(v) { return CS.Call(3, 19, 5, false, this, v); }

_jstype.definition.get_textureNonReadable = function() { return CS.Call(2, 19, 6, false, this); }
_jstype.definition.set_textureNonReadable = function(v) { return CS.Call(3, 19, 6, false, this, v); }

_jstype.definition.get_audioClip = function() { return CS.Call(2, 19, 7, false, this); }
_jstype.definition.set_audioClip = function(v) { return CS.Call(3, 19, 7, false, this, v); }

_jstype.definition.get_movie = function() { return CS.Call(2, 19, 8, false, this); }
_jstype.definition.set_movie = function(v) { return CS.Call(3, 19, 8, false, this, v); }

_jstype.definition.get_isDone = function() { return CS.Call(2, 19, 9, false, this); }
_jstype.definition.set_isDone = function(v) { return CS.Call(3, 19, 9, false, this, v); }

_jstype.definition.get_progress = function() { return CS.Call(2, 19, 10, false, this); }
_jstype.definition.set_progress = function(v) { return CS.Call(3, 19, 10, false, this, v); }

_jstype.definition.get_uploadProgress = function() { return CS.Call(2, 19, 11, false, this); }
_jstype.definition.set_uploadProgress = function(v) { return CS.Call(3, 19, 11, false, this, v); }

_jstype.definition.get_bytesDownloaded = function() { return CS.Call(2, 19, 12, false, this); }
_jstype.definition.set_bytesDownloaded = function(v) { return CS.Call(3, 19, 12, false, this, v); }

_jstype.definition.get_url = function() { return CS.Call(2, 19, 13, false, this); }
_jstype.definition.set_url = function(v) { return CS.Call(3, 19, 13, false, this, v); }

_jstype.definition.get_assetBundle = function() { return CS.Call(2, 19, 14, false, this); }
_jstype.definition.set_assetBundle = function(v) { return CS.Call(3, 19, 14, false, this, v); }

_jstype.definition.get_threadPriority = function() { return CS.Call(2, 19, 15, false, this); }
_jstype.definition.set_threadPriority = function(v) { return CS.Call(3, 19, 15, false, this, v); }

// methods

/* Void */
_jstype.definition.Dispose = function() { 
    
    return CS.Call(4, 19, 0, false, this); 
}
/* AudioClip */
_jstype.definition.GetAudioClip$$Boolean$$Boolean$$AudioType = function(a0/*Boolean*/, a1/*Boolean*/, a2/*AudioType*/) { 
    
    return CS.Call(4, 19, 1, false, this, a0, a1, a2); 
}
/* AudioClip */
_jstype.definition.GetAudioClip$$Boolean$$Boolean = function(a0/*Boolean*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 19, 2, false, this, a0, a1); 
}
/* AudioClip */
_jstype.definition.GetAudioClip$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 19, 3, false, this, a0); 
}
/* AudioClip */
_jstype.definition.GetAudioClipCompressed$$Boolean$$AudioType = function(a0/*Boolean*/, a1/*AudioType*/) { 
    
    return CS.Call(4, 19, 4, false, this, a0, a1); 
}
/* AudioClip */
_jstype.definition.GetAudioClipCompressed$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 19, 5, false, this, a0); 
}
/* AudioClip */
_jstype.definition.GetAudioClipCompressed = function() { 
    
    return CS.Call(4, 19, 6, false, this); 
}
/* Void */
_jstype.definition.InitWWW = function(a0/*String*/, a1/*Byte[]*/, a2/*String[]*/) { 
    
    return CS.Call(4, 19, 7, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.LoadImageIntoTexture = function(a0/*Texture2D*/) { 
    
    return CS.Call(4, 19, 8, false, this, a0); 
}
/* Void */
_jstype.definition.LoadUnityWeb = function() { 
    
    return CS.Call(4, 19, 9, false, this); 
}
/* static String  */
_jstype.staticDefinition.EscapeURL$$String$$Encoding = function(a0/*String*/, a1/*Encoding*/) { 
    
    return CS.Call(4, 19, 10, true, a0, a1); 
}
/* static String  */
_jstype.staticDefinition.EscapeURL$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 19, 11, true, a0); 
}
/* static WWW  */
_jstype.staticDefinition.LoadFromCacheOrDownload$$String$$Int32$$UInt32 = function(a0/*String*/, a1/*Int32*/, a2/*UInt32*/) { 
    
    return CS.Call(4, 19, 12, true, a0, a1, a2); 
}
/* static WWW  */
_jstype.staticDefinition.LoadFromCacheOrDownload$$String$$Int32 = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 19, 13, true, a0, a1); 
}
/* static String  */
_jstype.staticDefinition.UnEscapeURL$$String$$Encoding = function(a0/*String*/, a1/*Encoding*/) { 
    
    return CS.Call(4, 19, 14, true, a0, a1); 
}
/* static String  */
_jstype.staticDefinition.UnEscapeURL$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 19, 15, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Serialization$UnitySurrogateSelector
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Serialization.UnitySurrogateSelector",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 20, 0, true, this); }

// fields

// properties

// methods

/* Void */
_jstype.definition.ChainSelector = function(a0/*ISurrogateSelector*/) { 
    
    return CS.Call(4, 20, 0, false, this, a0); 
}
/* ISurrogateSelector */
_jstype.definition.GetNextSelector = function() { 
    
    return CS.Call(4, 20, 1, false, this); 
}
/* ISerializationSurrogate */
_jstype.definition.GetSurrogate = function(a0/*Type*/, a1/*StreamingContext*/, a2/*ISurrogateSelector&*/) { 
    
    return CS.Call(4, 20, 2, false, this, a0, a1, a2); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Physics
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Physics",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 21, 0, true, this); }

// fields

_jstype.staticFields.kIgnoreRaycastLayer =  { 
            get: function() { return CS.Call(0, 21, 0, true); }, 
            set: function(v) { return CS.Call(1, 21, 0, true, v); } 
        };

_jstype.staticFields.kDefaultRaycastLayers =  { 
            get: function() { return CS.Call(0, 21, 1, true); }, 
            set: function(v) { return CS.Call(1, 21, 1, true, v); } 
        };

_jstype.staticFields.kAllLayers =  { 
            get: function() { return CS.Call(0, 21, 2, true); }, 
            set: function(v) { return CS.Call(1, 21, 2, true, v); } 
        };

_jstype.staticFields.IgnoreRaycastLayer =  { 
            get: function() { return CS.Call(0, 21, 3, true); }, 
            set: function(v) { return CS.Call(1, 21, 3, true, v); } 
        };

_jstype.staticFields.DefaultRaycastLayers =  { 
            get: function() { return CS.Call(0, 21, 4, true); }, 
            set: function(v) { return CS.Call(1, 21, 4, true, v); } 
        };

_jstype.staticFields.AllLayers =  { 
            get: function() { return CS.Call(0, 21, 5, true); }, 
            set: function(v) { return CS.Call(1, 21, 5, true, v); } 
        };

// properties

_jstype.staticDefinition.get_gravity = function() { return CS.Call(2, 21, 0, true); }
_jstype.staticDefinition.set_gravity = function(v) { return CS.Call(3, 21, 0, true, v); }

_jstype.staticDefinition.get_minPenetrationForPenalty = function() { return CS.Call(2, 21, 1, true); }
_jstype.staticDefinition.set_minPenetrationForPenalty = function(v) { return CS.Call(3, 21, 1, true, v); }

_jstype.staticDefinition.get_bounceThreshold = function() { return CS.Call(2, 21, 2, true); }
_jstype.staticDefinition.set_bounceThreshold = function(v) { return CS.Call(3, 21, 2, true, v); }

_jstype.staticDefinition.get_sleepVelocity = function() { return CS.Call(2, 21, 3, true); }
_jstype.staticDefinition.set_sleepVelocity = function(v) { return CS.Call(3, 21, 3, true, v); }

_jstype.staticDefinition.get_sleepAngularVelocity = function() { return CS.Call(2, 21, 4, true); }
_jstype.staticDefinition.set_sleepAngularVelocity = function(v) { return CS.Call(3, 21, 4, true, v); }

_jstype.staticDefinition.get_maxAngularVelocity = function() { return CS.Call(2, 21, 5, true); }
_jstype.staticDefinition.set_maxAngularVelocity = function(v) { return CS.Call(3, 21, 5, true, v); }

_jstype.staticDefinition.get_solverIterationCount = function() { return CS.Call(2, 21, 6, true); }
_jstype.staticDefinition.set_solverIterationCount = function(v) { return CS.Call(3, 21, 6, true, v); }

// methods

/* static Boolean  */
_jstype.staticDefinition.CapsuleCast$$Vector3$$Vector3$$Single$$Vector3$$RaycastHit$$Single$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/, a4/*RaycastHit&*/, a5/*Single*/, a6/*Int32*/) { 
    
    return CS.Call(4, 21, 0, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static Boolean  */
_jstype.staticDefinition.CapsuleCast$$Vector3$$Vector3$$Single$$Vector3$$Single$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/, a4/*Single*/, a5/*Int32*/) { 
    
    return CS.Call(4, 21, 1, true, a0, a1, a2, a3, a4, a5); 
}
/* static Boolean  */
_jstype.staticDefinition.CapsuleCast$$Vector3$$Vector3$$Single$$Vector3$$RaycastHit$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/, a4/*RaycastHit&*/, a5/*Single*/) { 
    
    return CS.Call(4, 21, 2, true, a0, a1, a2, a3, a4, a5); 
}
/* static Boolean  */
_jstype.staticDefinition.CapsuleCast$$Vector3$$Vector3$$Single$$Vector3$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/, a4/*Single*/) { 
    
    return CS.Call(4, 21, 3, true, a0, a1, a2, a3, a4); 
}
/* static Boolean  */
_jstype.staticDefinition.CapsuleCast$$Vector3$$Vector3$$Single$$Vector3$$RaycastHit = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/, a4/*RaycastHit&*/) { 
    
    return CS.Call(4, 21, 4, true, a0, a1, a2, a3, a4); 
}
/* static Boolean  */
_jstype.staticDefinition.CapsuleCast$$Vector3$$Vector3$$Single$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/) { 
    
    return CS.Call(4, 21, 5, true, a0, a1, a2, a3); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.CapsuleCastAll$$Vector3$$Vector3$$Single$$Vector3$$Single$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/, a4/*Single*/, a5/*Int32*/) { 
    
    return CS.Call(4, 21, 6, true, a0, a1, a2, a3, a4, a5); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.CapsuleCastAll$$Vector3$$Vector3$$Single$$Vector3$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/, a4/*Single*/) { 
    
    return CS.Call(4, 21, 7, true, a0, a1, a2, a3, a4); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.CapsuleCastAll$$Vector3$$Vector3$$Single$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Vector3*/) { 
    
    return CS.Call(4, 21, 8, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.CheckCapsule$$Vector3$$Vector3$$Single$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Int32*/) { 
    
    return CS.Call(4, 21, 9, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.CheckCapsule$$Vector3$$Vector3$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 21, 10, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.CheckSphere$$Vector3$$Single$$Int32 = function(a0/*Vector3*/, a1/*Single*/, a2/*Int32*/) { 
    
    return CS.Call(4, 21, 11, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.CheckSphere$$Vector3$$Single = function(a0/*Vector3*/, a1/*Single*/) { 
    
    return CS.Call(4, 21, 12, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.GetIgnoreLayerCollision = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 21, 13, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.IgnoreCollision$$Collider$$Collider$$Boolean = function(a0/*Collider*/, a1/*Collider*/, a2/*Boolean*/) { 
    
    return CS.Call(4, 21, 14, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.IgnoreCollision$$Collider$$Collider = function(a0/*Collider*/, a1/*Collider*/) { 
    
    return CS.Call(4, 21, 15, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.IgnoreLayerCollision$$Int32$$Int32$$Boolean = function(a0/*Int32*/, a1/*Int32*/, a2/*Boolean*/) { 
    
    return CS.Call(4, 21, 16, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.IgnoreLayerCollision$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 21, 17, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.Linecast$$Vector3$$Vector3$$RaycastHit$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*RaycastHit&*/, a3/*Int32*/) { 
    
    return CS.Call(4, 21, 18, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.Linecast$$Vector3$$Vector3$$RaycastHit = function(a0/*Vector3*/, a1/*Vector3*/, a2/*RaycastHit&*/) { 
    
    return CS.Call(4, 21, 19, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Linecast$$Vector3$$Vector3$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Int32*/) { 
    
    return CS.Call(4, 21, 20, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Linecast$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 21, 21, true, a0, a1); 
}
/* static Collider[]  */
_jstype.staticDefinition.OverlapSphere$$Vector3$$Single$$Int32 = function(a0/*Vector3*/, a1/*Single*/, a2/*Int32*/) { 
    
    return CS.Call(4, 21, 22, true, a0, a1, a2); 
}
/* static Collider[]  */
_jstype.staticDefinition.OverlapSphere$$Vector3$$Single = function(a0/*Vector3*/, a1/*Single*/) { 
    
    return CS.Call(4, 21, 23, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Vector3$$Vector3$$RaycastHit$$Single$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*RaycastHit&*/, a3/*Single*/, a4/*Int32*/) { 
    
    return CS.Call(4, 21, 24, true, a0, a1, a2, a3, a4); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Vector3$$Vector3$$Single$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Int32*/) { 
    
    return CS.Call(4, 21, 25, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Ray$$RaycastHit$$Single$$Int32 = function(a0/*Ray*/, a1/*RaycastHit&*/, a2/*Single*/, a3/*Int32*/) { 
    
    return CS.Call(4, 21, 26, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Vector3$$Vector3$$RaycastHit$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*RaycastHit&*/, a3/*Single*/) { 
    
    return CS.Call(4, 21, 27, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Ray$$RaycastHit$$Single = function(a0/*Ray*/, a1/*RaycastHit&*/, a2/*Single*/) { 
    
    return CS.Call(4, 21, 28, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Ray$$Single$$Int32 = function(a0/*Ray*/, a1/*Single*/, a2/*Int32*/) { 
    
    return CS.Call(4, 21, 29, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Vector3$$Vector3$$RaycastHit = function(a0/*Vector3*/, a1/*Vector3*/, a2/*RaycastHit&*/) { 
    
    return CS.Call(4, 21, 30, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Vector3$$Vector3$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 21, 31, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Ray$$RaycastHit = function(a0/*Ray*/, a1/*RaycastHit&*/) { 
    
    return CS.Call(4, 21, 32, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Ray$$Single = function(a0/*Ray*/, a1/*Single*/) { 
    
    return CS.Call(4, 21, 33, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 21, 34, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast$$Ray = function(a0/*Ray*/) { 
    
    return CS.Call(4, 21, 35, true, a0); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.RaycastAll$$Vector3$$Vector3$$Single$$Int32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Int32*/) { 
    
    return CS.Call(4, 21, 36, true, a0, a1, a2, a3); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.RaycastAll$$Ray$$Single$$Int32 = function(a0/*Ray*/, a1/*Single*/, a2/*Int32*/) { 
    
    return CS.Call(4, 21, 37, true, a0, a1, a2); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.RaycastAll$$Vector3$$Vector3$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 21, 38, true, a0, a1, a2); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.RaycastAll$$Ray$$Single = function(a0/*Ray*/, a1/*Single*/) { 
    
    return CS.Call(4, 21, 39, true, a0, a1); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.RaycastAll$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 21, 40, true, a0, a1); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.RaycastAll$$Ray = function(a0/*Ray*/) { 
    
    return CS.Call(4, 21, 41, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Vector3$$Single$$Vector3$$RaycastHit$$Single$$Int32 = function(a0/*Vector3*/, a1/*Single*/, a2/*Vector3*/, a3/*RaycastHit&*/, a4/*Single*/, a5/*Int32*/) { 
    
    return CS.Call(4, 21, 42, true, a0, a1, a2, a3, a4, a5); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Ray$$Single$$RaycastHit$$Single$$Int32 = function(a0/*Ray*/, a1/*Single*/, a2/*RaycastHit&*/, a3/*Single*/, a4/*Int32*/) { 
    
    return CS.Call(4, 21, 43, true, a0, a1, a2, a3, a4); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Vector3$$Single$$Vector3$$RaycastHit$$Single = function(a0/*Vector3*/, a1/*Single*/, a2/*Vector3*/, a3/*RaycastHit&*/, a4/*Single*/) { 
    
    return CS.Call(4, 21, 44, true, a0, a1, a2, a3, a4); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Ray$$Single$$Single$$Int32 = function(a0/*Ray*/, a1/*Single*/, a2/*Single*/, a3/*Int32*/) { 
    
    return CS.Call(4, 21, 45, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Ray$$Single$$RaycastHit$$Single = function(a0/*Ray*/, a1/*Single*/, a2/*RaycastHit&*/, a3/*Single*/) { 
    
    return CS.Call(4, 21, 46, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Vector3$$Single$$Vector3$$RaycastHit = function(a0/*Vector3*/, a1/*Single*/, a2/*Vector3*/, a3/*RaycastHit&*/) { 
    
    return CS.Call(4, 21, 47, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Ray$$Single$$RaycastHit = function(a0/*Ray*/, a1/*Single*/, a2/*RaycastHit&*/) { 
    
    return CS.Call(4, 21, 48, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Ray$$Single$$Single = function(a0/*Ray*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 21, 49, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.SphereCast$$Ray$$Single = function(a0/*Ray*/, a1/*Single*/) { 
    
    return CS.Call(4, 21, 50, true, a0, a1); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.SphereCastAll$$Vector3$$Single$$Vector3$$Single$$Int32 = function(a0/*Vector3*/, a1/*Single*/, a2/*Vector3*/, a3/*Single*/, a4/*Int32*/) { 
    
    return CS.Call(4, 21, 51, true, a0, a1, a2, a3, a4); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.SphereCastAll$$Vector3$$Single$$Vector3$$Single = function(a0/*Vector3*/, a1/*Single*/, a2/*Vector3*/, a3/*Single*/) { 
    
    return CS.Call(4, 21, 52, true, a0, a1, a2, a3); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.SphereCastAll$$Ray$$Single$$Single$$Int32 = function(a0/*Ray*/, a1/*Single*/, a2/*Single*/, a3/*Int32*/) { 
    
    return CS.Call(4, 21, 53, true, a0, a1, a2, a3); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.SphereCastAll$$Ray$$Single$$Single = function(a0/*Ray*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 21, 54, true, a0, a1, a2); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.SphereCastAll$$Vector3$$Single$$Vector3 = function(a0/*Vector3*/, a1/*Single*/, a2/*Vector3*/) { 
    
    return CS.Call(4, 21, 55, true, a0, a1, a2); 
}
/* static RaycastHit[]  */
_jstype.staticDefinition.SphereCastAll$$Ray$$Single = function(a0/*Ray*/, a1/*Single*/) { 
    
    return CS.Call(4, 21, 56, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Rigidbody
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Rigidbody",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 22, 0, true, this); }

// fields

// properties

_jstype.definition.get_velocity = function() { return CS.Call(2, 22, 0, false, this); }
_jstype.definition.set_velocity = function(v) { return CS.Call(3, 22, 0, false, this, v); }

_jstype.definition.get_angularVelocity = function() { return CS.Call(2, 22, 1, false, this); }
_jstype.definition.set_angularVelocity = function(v) { return CS.Call(3, 22, 1, false, this, v); }

_jstype.definition.get_drag = function() { return CS.Call(2, 22, 2, false, this); }
_jstype.definition.set_drag = function(v) { return CS.Call(3, 22, 2, false, this, v); }

_jstype.definition.get_angularDrag = function() { return CS.Call(2, 22, 3, false, this); }
_jstype.definition.set_angularDrag = function(v) { return CS.Call(3, 22, 3, false, this, v); }

_jstype.definition.get_mass = function() { return CS.Call(2, 22, 4, false, this); }
_jstype.definition.set_mass = function(v) { return CS.Call(3, 22, 4, false, this, v); }

_jstype.definition.get_useGravity = function() { return CS.Call(2, 22, 5, false, this); }
_jstype.definition.set_useGravity = function(v) { return CS.Call(3, 22, 5, false, this, v); }

_jstype.definition.get_isKinematic = function() { return CS.Call(2, 22, 6, false, this); }
_jstype.definition.set_isKinematic = function(v) { return CS.Call(3, 22, 6, false, this, v); }

_jstype.definition.get_freezeRotation = function() { return CS.Call(2, 22, 7, false, this); }
_jstype.definition.set_freezeRotation = function(v) { return CS.Call(3, 22, 7, false, this, v); }

_jstype.definition.get_constraints = function() { return CS.Call(2, 22, 8, false, this); }
_jstype.definition.set_constraints = function(v) { return CS.Call(3, 22, 8, false, this, v); }

_jstype.definition.get_collisionDetectionMode = function() { return CS.Call(2, 22, 9, false, this); }
_jstype.definition.set_collisionDetectionMode = function(v) { return CS.Call(3, 22, 9, false, this, v); }

_jstype.definition.get_centerOfMass = function() { return CS.Call(2, 22, 10, false, this); }
_jstype.definition.set_centerOfMass = function(v) { return CS.Call(3, 22, 10, false, this, v); }

_jstype.definition.get_worldCenterOfMass = function() { return CS.Call(2, 22, 11, false, this); }
_jstype.definition.set_worldCenterOfMass = function(v) { return CS.Call(3, 22, 11, false, this, v); }

_jstype.definition.get_inertiaTensorRotation = function() { return CS.Call(2, 22, 12, false, this); }
_jstype.definition.set_inertiaTensorRotation = function(v) { return CS.Call(3, 22, 12, false, this, v); }

_jstype.definition.get_inertiaTensor = function() { return CS.Call(2, 22, 13, false, this); }
_jstype.definition.set_inertiaTensor = function(v) { return CS.Call(3, 22, 13, false, this, v); }

_jstype.definition.get_detectCollisions = function() { return CS.Call(2, 22, 14, false, this); }
_jstype.definition.set_detectCollisions = function(v) { return CS.Call(3, 22, 14, false, this, v); }

_jstype.definition.get_useConeFriction = function() { return CS.Call(2, 22, 15, false, this); }
_jstype.definition.set_useConeFriction = function(v) { return CS.Call(3, 22, 15, false, this, v); }

_jstype.definition.get_position = function() { return CS.Call(2, 22, 16, false, this); }
_jstype.definition.set_position = function(v) { return CS.Call(3, 22, 16, false, this, v); }

_jstype.definition.get_rotation = function() { return CS.Call(2, 22, 17, false, this); }
_jstype.definition.set_rotation = function(v) { return CS.Call(3, 22, 17, false, this, v); }

_jstype.definition.get_interpolation = function() { return CS.Call(2, 22, 18, false, this); }
_jstype.definition.set_interpolation = function(v) { return CS.Call(3, 22, 18, false, this, v); }

_jstype.definition.get_solverIterationCount = function() { return CS.Call(2, 22, 19, false, this); }
_jstype.definition.set_solverIterationCount = function(v) { return CS.Call(3, 22, 19, false, this, v); }

_jstype.definition.get_sleepVelocity = function() { return CS.Call(2, 22, 20, false, this); }
_jstype.definition.set_sleepVelocity = function(v) { return CS.Call(3, 22, 20, false, this, v); }

_jstype.definition.get_sleepAngularVelocity = function() { return CS.Call(2, 22, 21, false, this); }
_jstype.definition.set_sleepAngularVelocity = function(v) { return CS.Call(3, 22, 21, false, this, v); }

_jstype.definition.get_maxAngularVelocity = function() { return CS.Call(2, 22, 22, false, this); }
_jstype.definition.set_maxAngularVelocity = function(v) { return CS.Call(3, 22, 22, false, this, v); }

// methods

/* Void */
_jstype.definition.AddExplosionForce$$Single$$Vector3$$Single$$Single$$ForceMode = function(a0/*Single*/, a1/*Vector3*/, a2/*Single*/, a3/*Single*/, a4/*ForceMode*/) { 
    
    return CS.Call(4, 22, 0, false, this, a0, a1, a2, a3, a4); 
}
/* Void */
_jstype.definition.AddExplosionForce$$Single$$Vector3$$Single$$Single = function(a0/*Single*/, a1/*Vector3*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 22, 1, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.AddExplosionForce$$Single$$Vector3$$Single = function(a0/*Single*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 22, 2, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.AddForce$$Single$$Single$$Single$$ForceMode = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*ForceMode*/) { 
    
    return CS.Call(4, 22, 3, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.AddForce$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 22, 4, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.AddForce$$Vector3$$ForceMode = function(a0/*Vector3*/, a1/*ForceMode*/) { 
    
    return CS.Call(4, 22, 5, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddForce$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 22, 6, false, this, a0); 
}
/* Void */
_jstype.definition.AddForceAtPosition$$Vector3$$Vector3$$ForceMode = function(a0/*Vector3*/, a1/*Vector3*/, a2/*ForceMode*/) { 
    
    return CS.Call(4, 22, 7, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.AddForceAtPosition$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 22, 8, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddRelativeForce$$Single$$Single$$Single$$ForceMode = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*ForceMode*/) { 
    
    return CS.Call(4, 22, 9, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.AddRelativeForce$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 22, 10, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.AddRelativeForce$$Vector3$$ForceMode = function(a0/*Vector3*/, a1/*ForceMode*/) { 
    
    return CS.Call(4, 22, 11, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddRelativeForce$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 22, 12, false, this, a0); 
}
/* Void */
_jstype.definition.AddRelativeTorque$$Single$$Single$$Single$$ForceMode = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*ForceMode*/) { 
    
    return CS.Call(4, 22, 13, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.AddRelativeTorque$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 22, 14, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.AddRelativeTorque$$Vector3$$ForceMode = function(a0/*Vector3*/, a1/*ForceMode*/) { 
    
    return CS.Call(4, 22, 15, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddRelativeTorque$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 22, 16, false, this, a0); 
}
/* Void */
_jstype.definition.AddTorque$$Single$$Single$$Single$$ForceMode = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*ForceMode*/) { 
    
    return CS.Call(4, 22, 17, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.AddTorque$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 22, 18, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.AddTorque$$Vector3$$ForceMode = function(a0/*Vector3*/, a1/*ForceMode*/) { 
    
    return CS.Call(4, 22, 19, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddTorque$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 22, 20, false, this, a0); 
}
/* Vector3 */
_jstype.definition.ClosestPointOnBounds = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 22, 21, false, this, a0); 
}
/* Vector3 */
_jstype.definition.GetPointVelocity = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 22, 22, false, this, a0); 
}
/* Vector3 */
_jstype.definition.GetRelativePointVelocity = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 22, 23, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsSleeping = function() { 
    
    return CS.Call(4, 22, 24, false, this); 
}
/* Void */
_jstype.definition.MovePosition = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 22, 25, false, this, a0); 
}
/* Void */
_jstype.definition.MoveRotation = function(a0/*Quaternion*/) { 
    
    return CS.Call(4, 22, 26, false, this, a0); 
}
/* Void */
_jstype.definition.SetDensity = function(a0/*Single*/) { 
    
    return CS.Call(4, 22, 27, false, this, a0); 
}
/* Void */
_jstype.definition.Sleep = function() { 
    
    return CS.Call(4, 22, 28, false, this); 
}
/* Boolean */
_jstype.definition.SweepTest$$Vector3$$RaycastHit$$Single = function(a0/*Vector3*/, a1/*RaycastHit&*/, a2/*Single*/) { 
    
    return CS.Call(4, 22, 29, false, this, a0, a1, a2); 
}
/* Boolean */
_jstype.definition.SweepTest$$Vector3$$RaycastHit = function(a0/*Vector3*/, a1/*RaycastHit&*/) { 
    
    return CS.Call(4, 22, 30, false, this, a0, a1); 
}
/* RaycastHit[] */
_jstype.definition.SweepTestAll$$Vector3$$Single = function(a0/*Vector3*/, a1/*Single*/) { 
    
    return CS.Call(4, 22, 31, false, this, a0, a1); 
}
/* RaycastHit[] */
_jstype.definition.SweepTestAll$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 22, 32, false, this, a0); 
}
/* Void */
_jstype.definition.WakeUp = function() { 
    
    return CS.Call(4, 22, 33, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Joint
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Joint",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 23, 0, true, this); }

// fields

// properties

_jstype.definition.get_connectedBody = function() { return CS.Call(2, 23, 0, false, this); }
_jstype.definition.set_connectedBody = function(v) { return CS.Call(3, 23, 0, false, this, v); }

_jstype.definition.get_axis = function() { return CS.Call(2, 23, 1, false, this); }
_jstype.definition.set_axis = function(v) { return CS.Call(3, 23, 1, false, this, v); }

_jstype.definition.get_anchor = function() { return CS.Call(2, 23, 2, false, this); }
_jstype.definition.set_anchor = function(v) { return CS.Call(3, 23, 2, false, this, v); }

_jstype.definition.get_connectedAnchor = function() { return CS.Call(2, 23, 3, false, this); }
_jstype.definition.set_connectedAnchor = function(v) { return CS.Call(3, 23, 3, false, this, v); }

_jstype.definition.get_autoConfigureConnectedAnchor = function() { return CS.Call(2, 23, 4, false, this); }
_jstype.definition.set_autoConfigureConnectedAnchor = function(v) { return CS.Call(3, 23, 4, false, this, v); }

_jstype.definition.get_breakForce = function() { return CS.Call(2, 23, 5, false, this); }
_jstype.definition.set_breakForce = function(v) { return CS.Call(3, 23, 5, false, this, v); }

_jstype.definition.get_breakTorque = function() { return CS.Call(2, 23, 6, false, this); }
_jstype.definition.set_breakTorque = function(v) { return CS.Call(3, 23, 6, false, this, v); }

_jstype.definition.get_enableCollision = function() { return CS.Call(2, 23, 7, false, this); }
_jstype.definition.set_enableCollision = function(v) { return CS.Call(3, 23, 7, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$HingeJoint
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.HingeJoint",
    baseTypeName: "UnityEngine.Joint"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 24, 0, true, this); }

// fields

// properties

_jstype.definition.get_motor = function() { return CS.Call(2, 24, 0, false, this); }
_jstype.definition.set_motor = function(v) { return CS.Call(3, 24, 0, false, this, v); }

_jstype.definition.get_limits = function() { return CS.Call(2, 24, 1, false, this); }
_jstype.definition.set_limits = function(v) { return CS.Call(3, 24, 1, false, this, v); }

_jstype.definition.get_spring = function() { return CS.Call(2, 24, 2, false, this); }
_jstype.definition.set_spring = function(v) { return CS.Call(3, 24, 2, false, this, v); }

_jstype.definition.get_useMotor = function() { return CS.Call(2, 24, 3, false, this); }
_jstype.definition.set_useMotor = function(v) { return CS.Call(3, 24, 3, false, this, v); }

_jstype.definition.get_useLimits = function() { return CS.Call(2, 24, 4, false, this); }
_jstype.definition.set_useLimits = function(v) { return CS.Call(3, 24, 4, false, this, v); }

_jstype.definition.get_useSpring = function() { return CS.Call(2, 24, 5, false, this); }
_jstype.definition.set_useSpring = function(v) { return CS.Call(3, 24, 5, false, this, v); }

_jstype.definition.get_velocity = function() { return CS.Call(2, 24, 6, false, this); }
_jstype.definition.set_velocity = function(v) { return CS.Call(3, 24, 6, false, this, v); }

_jstype.definition.get_angle = function() { return CS.Call(2, 24, 7, false, this); }
_jstype.definition.set_angle = function(v) { return CS.Call(3, 24, 7, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$SpringJoint
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.SpringJoint",
    baseTypeName: "UnityEngine.Joint"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 25, 0, true, this); }

// fields

// properties

_jstype.definition.get_spring = function() { return CS.Call(2, 25, 0, false, this); }
_jstype.definition.set_spring = function(v) { return CS.Call(3, 25, 0, false, this, v); }

_jstype.definition.get_damper = function() { return CS.Call(2, 25, 1, false, this); }
_jstype.definition.set_damper = function(v) { return CS.Call(3, 25, 1, false, this, v); }

_jstype.definition.get_minDistance = function() { return CS.Call(2, 25, 2, false, this); }
_jstype.definition.set_minDistance = function(v) { return CS.Call(3, 25, 2, false, this, v); }

_jstype.definition.get_maxDistance = function() { return CS.Call(2, 25, 3, false, this); }
_jstype.definition.set_maxDistance = function(v) { return CS.Call(3, 25, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$FixedJoint
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.FixedJoint",
    baseTypeName: "UnityEngine.Joint"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 26, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$CharacterJoint
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.CharacterJoint",
    baseTypeName: "UnityEngine.Joint"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 27, 0, true, this); }

// fields

// properties

_jstype.definition.get_swingAxis = function() { return CS.Call(2, 27, 0, false, this); }
_jstype.definition.set_swingAxis = function(v) { return CS.Call(3, 27, 0, false, this, v); }

_jstype.definition.get_lowTwistLimit = function() { return CS.Call(2, 27, 1, false, this); }
_jstype.definition.set_lowTwistLimit = function(v) { return CS.Call(3, 27, 1, false, this, v); }

_jstype.definition.get_highTwistLimit = function() { return CS.Call(2, 27, 2, false, this); }
_jstype.definition.set_highTwistLimit = function(v) { return CS.Call(3, 27, 2, false, this, v); }

_jstype.definition.get_swing1Limit = function() { return CS.Call(2, 27, 3, false, this); }
_jstype.definition.set_swing1Limit = function(v) { return CS.Call(3, 27, 3, false, this, v); }

_jstype.definition.get_swing2Limit = function() { return CS.Call(2, 27, 4, false, this); }
_jstype.definition.set_swing2Limit = function(v) { return CS.Call(3, 27, 4, false, this, v); }

_jstype.definition.get_targetRotation = function() { return CS.Call(2, 27, 5, false, this); }
_jstype.definition.set_targetRotation = function(v) { return CS.Call(3, 27, 5, false, this, v); }

_jstype.definition.get_targetAngularVelocity = function() { return CS.Call(2, 27, 6, false, this); }
_jstype.definition.set_targetAngularVelocity = function(v) { return CS.Call(3, 27, 6, false, this, v); }

_jstype.definition.get_rotationDrive = function() { return CS.Call(2, 27, 7, false, this); }
_jstype.definition.set_rotationDrive = function(v) { return CS.Call(3, 27, 7, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ConfigurableJoint
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ConfigurableJoint",
    baseTypeName: "UnityEngine.Joint"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 28, 0, true, this); }

// fields

// properties

_jstype.definition.get_secondaryAxis = function() { return CS.Call(2, 28, 0, false, this); }
_jstype.definition.set_secondaryAxis = function(v) { return CS.Call(3, 28, 0, false, this, v); }

_jstype.definition.get_xMotion = function() { return CS.Call(2, 28, 1, false, this); }
_jstype.definition.set_xMotion = function(v) { return CS.Call(3, 28, 1, false, this, v); }

_jstype.definition.get_yMotion = function() { return CS.Call(2, 28, 2, false, this); }
_jstype.definition.set_yMotion = function(v) { return CS.Call(3, 28, 2, false, this, v); }

_jstype.definition.get_zMotion = function() { return CS.Call(2, 28, 3, false, this); }
_jstype.definition.set_zMotion = function(v) { return CS.Call(3, 28, 3, false, this, v); }

_jstype.definition.get_angularXMotion = function() { return CS.Call(2, 28, 4, false, this); }
_jstype.definition.set_angularXMotion = function(v) { return CS.Call(3, 28, 4, false, this, v); }

_jstype.definition.get_angularYMotion = function() { return CS.Call(2, 28, 5, false, this); }
_jstype.definition.set_angularYMotion = function(v) { return CS.Call(3, 28, 5, false, this, v); }

_jstype.definition.get_angularZMotion = function() { return CS.Call(2, 28, 6, false, this); }
_jstype.definition.set_angularZMotion = function(v) { return CS.Call(3, 28, 6, false, this, v); }

_jstype.definition.get_linearLimit = function() { return CS.Call(2, 28, 7, false, this); }
_jstype.definition.set_linearLimit = function(v) { return CS.Call(3, 28, 7, false, this, v); }

_jstype.definition.get_lowAngularXLimit = function() { return CS.Call(2, 28, 8, false, this); }
_jstype.definition.set_lowAngularXLimit = function(v) { return CS.Call(3, 28, 8, false, this, v); }

_jstype.definition.get_highAngularXLimit = function() { return CS.Call(2, 28, 9, false, this); }
_jstype.definition.set_highAngularXLimit = function(v) { return CS.Call(3, 28, 9, false, this, v); }

_jstype.definition.get_angularYLimit = function() { return CS.Call(2, 28, 10, false, this); }
_jstype.definition.set_angularYLimit = function(v) { return CS.Call(3, 28, 10, false, this, v); }

_jstype.definition.get_angularZLimit = function() { return CS.Call(2, 28, 11, false, this); }
_jstype.definition.set_angularZLimit = function(v) { return CS.Call(3, 28, 11, false, this, v); }

_jstype.definition.get_targetPosition = function() { return CS.Call(2, 28, 12, false, this); }
_jstype.definition.set_targetPosition = function(v) { return CS.Call(3, 28, 12, false, this, v); }

_jstype.definition.get_targetVelocity = function() { return CS.Call(2, 28, 13, false, this); }
_jstype.definition.set_targetVelocity = function(v) { return CS.Call(3, 28, 13, false, this, v); }

_jstype.definition.get_xDrive = function() { return CS.Call(2, 28, 14, false, this); }
_jstype.definition.set_xDrive = function(v) { return CS.Call(3, 28, 14, false, this, v); }

_jstype.definition.get_yDrive = function() { return CS.Call(2, 28, 15, false, this); }
_jstype.definition.set_yDrive = function(v) { return CS.Call(3, 28, 15, false, this, v); }

_jstype.definition.get_zDrive = function() { return CS.Call(2, 28, 16, false, this); }
_jstype.definition.set_zDrive = function(v) { return CS.Call(3, 28, 16, false, this, v); }

_jstype.definition.get_targetRotation = function() { return CS.Call(2, 28, 17, false, this); }
_jstype.definition.set_targetRotation = function(v) { return CS.Call(3, 28, 17, false, this, v); }

_jstype.definition.get_targetAngularVelocity = function() { return CS.Call(2, 28, 18, false, this); }
_jstype.definition.set_targetAngularVelocity = function(v) { return CS.Call(3, 28, 18, false, this, v); }

_jstype.definition.get_rotationDriveMode = function() { return CS.Call(2, 28, 19, false, this); }
_jstype.definition.set_rotationDriveMode = function(v) { return CS.Call(3, 28, 19, false, this, v); }

_jstype.definition.get_angularXDrive = function() { return CS.Call(2, 28, 20, false, this); }
_jstype.definition.set_angularXDrive = function(v) { return CS.Call(3, 28, 20, false, this, v); }

_jstype.definition.get_angularYZDrive = function() { return CS.Call(2, 28, 21, false, this); }
_jstype.definition.set_angularYZDrive = function(v) { return CS.Call(3, 28, 21, false, this, v); }

_jstype.definition.get_slerpDrive = function() { return CS.Call(2, 28, 22, false, this); }
_jstype.definition.set_slerpDrive = function(v) { return CS.Call(3, 28, 22, false, this, v); }

_jstype.definition.get_projectionMode = function() { return CS.Call(2, 28, 23, false, this); }
_jstype.definition.set_projectionMode = function(v) { return CS.Call(3, 28, 23, false, this, v); }

_jstype.definition.get_projectionDistance = function() { return CS.Call(2, 28, 24, false, this); }
_jstype.definition.set_projectionDistance = function(v) { return CS.Call(3, 28, 24, false, this, v); }

_jstype.definition.get_projectionAngle = function() { return CS.Call(2, 28, 25, false, this); }
_jstype.definition.set_projectionAngle = function(v) { return CS.Call(3, 28, 25, false, this, v); }

_jstype.definition.get_configuredInWorldSpace = function() { return CS.Call(2, 28, 26, false, this); }
_jstype.definition.set_configuredInWorldSpace = function(v) { return CS.Call(3, 28, 26, false, this, v); }

_jstype.definition.get_swapBodies = function() { return CS.Call(2, 28, 27, false, this); }
_jstype.definition.set_swapBodies = function(v) { return CS.Call(3, 28, 27, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ConstantForce
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ConstantForce",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 29, 0, true, this); }

// fields

// properties

_jstype.definition.get_force = function() { return CS.Call(2, 29, 0, false, this); }
_jstype.definition.set_force = function(v) { return CS.Call(3, 29, 0, false, this, v); }

_jstype.definition.get_relativeForce = function() { return CS.Call(2, 29, 1, false, this); }
_jstype.definition.set_relativeForce = function(v) { return CS.Call(3, 29, 1, false, this, v); }

_jstype.definition.get_torque = function() { return CS.Call(2, 29, 2, false, this); }
_jstype.definition.set_torque = function(v) { return CS.Call(3, 29, 2, false, this, v); }

_jstype.definition.get_relativeTorque = function() { return CS.Call(2, 29, 3, false, this); }
_jstype.definition.set_relativeTorque = function(v) { return CS.Call(3, 29, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Collider
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Collider",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 30, 0, true, this); }

// fields

// properties

_jstype.definition.get_enabled = function() { return CS.Call(2, 30, 0, false, this); }
_jstype.definition.set_enabled = function(v) { return CS.Call(3, 30, 0, false, this, v); }

_jstype.definition.get_attachedRigidbody = function() { return CS.Call(2, 30, 1, false, this); }
_jstype.definition.set_attachedRigidbody = function(v) { return CS.Call(3, 30, 1, false, this, v); }

_jstype.definition.get_isTrigger = function() { return CS.Call(2, 30, 2, false, this); }
_jstype.definition.set_isTrigger = function(v) { return CS.Call(3, 30, 2, false, this, v); }

_jstype.definition.get_material = function() { return CS.Call(2, 30, 3, false, this); }
_jstype.definition.set_material = function(v) { return CS.Call(3, 30, 3, false, this, v); }

_jstype.definition.get_sharedMaterial = function() { return CS.Call(2, 30, 4, false, this); }
_jstype.definition.set_sharedMaterial = function(v) { return CS.Call(3, 30, 4, false, this, v); }

_jstype.definition.get_bounds = function() { return CS.Call(2, 30, 5, false, this); }
_jstype.definition.set_bounds = function(v) { return CS.Call(3, 30, 5, false, this, v); }

// methods

/* Vector3 */
_jstype.definition.ClosestPointOnBounds = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 30, 0, false, this, a0); 
}
/* Boolean */
_jstype.definition.Raycast = function(a0/*Ray*/, a1/*RaycastHit&*/, a2/*Single*/) { 
    
    return CS.Call(4, 30, 1, false, this, a0, a1, a2); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$BoxCollider
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.BoxCollider",
    baseTypeName: "UnityEngine.Collider"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 31, 0, true, this); }

// fields

// properties

_jstype.definition.get_center = function() { return CS.Call(2, 31, 0, false, this); }
_jstype.definition.set_center = function(v) { return CS.Call(3, 31, 0, false, this, v); }

_jstype.definition.get_size = function() { return CS.Call(2, 31, 1, false, this); }
_jstype.definition.set_size = function(v) { return CS.Call(3, 31, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$SphereCollider
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.SphereCollider",
    baseTypeName: "UnityEngine.Collider"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 32, 0, true, this); }

// fields

// properties

_jstype.definition.get_center = function() { return CS.Call(2, 32, 0, false, this); }
_jstype.definition.set_center = function(v) { return CS.Call(3, 32, 0, false, this, v); }

_jstype.definition.get_radius = function() { return CS.Call(2, 32, 1, false, this); }
_jstype.definition.set_radius = function(v) { return CS.Call(3, 32, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$MeshCollider
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.MeshCollider",
    baseTypeName: "UnityEngine.Collider"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 33, 0, true, this); }

// fields

// properties

_jstype.definition.get_sharedMesh = function() { return CS.Call(2, 33, 0, false, this); }
_jstype.definition.set_sharedMesh = function(v) { return CS.Call(3, 33, 0, false, this, v); }

_jstype.definition.get_convex = function() { return CS.Call(2, 33, 1, false, this); }
_jstype.definition.set_convex = function(v) { return CS.Call(3, 33, 1, false, this, v); }

_jstype.definition.get_smoothSphereCollisions = function() { return CS.Call(2, 33, 2, false, this); }
_jstype.definition.set_smoothSphereCollisions = function(v) { return CS.Call(3, 33, 2, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$CapsuleCollider
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.CapsuleCollider",
    baseTypeName: "UnityEngine.Collider"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 34, 0, true, this); }

// fields

// properties

_jstype.definition.get_center = function() { return CS.Call(2, 34, 0, false, this); }
_jstype.definition.set_center = function(v) { return CS.Call(3, 34, 0, false, this, v); }

_jstype.definition.get_radius = function() { return CS.Call(2, 34, 1, false, this); }
_jstype.definition.set_radius = function(v) { return CS.Call(3, 34, 1, false, this, v); }

_jstype.definition.get_height = function() { return CS.Call(2, 34, 2, false, this); }
_jstype.definition.set_height = function(v) { return CS.Call(3, 34, 2, false, this, v); }

_jstype.definition.get_direction = function() { return CS.Call(2, 34, 3, false, this); }
_jstype.definition.set_direction = function(v) { return CS.Call(3, 34, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$WheelCollider
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.WheelCollider",
    baseTypeName: "UnityEngine.Collider"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 35, 0, true, this); }

// fields

// properties

_jstype.definition.get_center = function() { return CS.Call(2, 35, 0, false, this); }
_jstype.definition.set_center = function(v) { return CS.Call(3, 35, 0, false, this, v); }

_jstype.definition.get_radius = function() { return CS.Call(2, 35, 1, false, this); }
_jstype.definition.set_radius = function(v) { return CS.Call(3, 35, 1, false, this, v); }

_jstype.definition.get_suspensionDistance = function() { return CS.Call(2, 35, 2, false, this); }
_jstype.definition.set_suspensionDistance = function(v) { return CS.Call(3, 35, 2, false, this, v); }

_jstype.definition.get_suspensionSpring = function() { return CS.Call(2, 35, 3, false, this); }
_jstype.definition.set_suspensionSpring = function(v) { return CS.Call(3, 35, 3, false, this, v); }

_jstype.definition.get_mass = function() { return CS.Call(2, 35, 4, false, this); }
_jstype.definition.set_mass = function(v) { return CS.Call(3, 35, 4, false, this, v); }

_jstype.definition.get_forwardFriction = function() { return CS.Call(2, 35, 5, false, this); }
_jstype.definition.set_forwardFriction = function(v) { return CS.Call(3, 35, 5, false, this, v); }

_jstype.definition.get_sidewaysFriction = function() { return CS.Call(2, 35, 6, false, this); }
_jstype.definition.set_sidewaysFriction = function(v) { return CS.Call(3, 35, 6, false, this, v); }

_jstype.definition.get_motorTorque = function() { return CS.Call(2, 35, 7, false, this); }
_jstype.definition.set_motorTorque = function(v) { return CS.Call(3, 35, 7, false, this, v); }

_jstype.definition.get_brakeTorque = function() { return CS.Call(2, 35, 8, false, this); }
_jstype.definition.set_brakeTorque = function(v) { return CS.Call(3, 35, 8, false, this, v); }

_jstype.definition.get_steerAngle = function() { return CS.Call(2, 35, 9, false, this); }
_jstype.definition.set_steerAngle = function(v) { return CS.Call(3, 35, 9, false, this, v); }

_jstype.definition.get_isGrounded = function() { return CS.Call(2, 35, 10, false, this); }
_jstype.definition.set_isGrounded = function(v) { return CS.Call(3, 35, 10, false, this, v); }

_jstype.definition.get_rpm = function() { return CS.Call(2, 35, 11, false, this); }
_jstype.definition.set_rpm = function(v) { return CS.Call(3, 35, 11, false, this, v); }

// methods

/* Boolean */
_jstype.definition.GetGroundHit = function(a0/*WheelHit&*/) { 
    
    return CS.Call(4, 35, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$PhysicMaterial
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.PhysicMaterial",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 36, 0, true, this); }
_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 36, 1, true, this, a0); }

// fields

// properties

_jstype.definition.get_dynamicFriction = function() { return CS.Call(2, 36, 0, false, this); }
_jstype.definition.set_dynamicFriction = function(v) { return CS.Call(3, 36, 0, false, this, v); }

_jstype.definition.get_staticFriction = function() { return CS.Call(2, 36, 1, false, this); }
_jstype.definition.set_staticFriction = function(v) { return CS.Call(3, 36, 1, false, this, v); }

_jstype.definition.get_bounciness = function() { return CS.Call(2, 36, 2, false, this); }
_jstype.definition.set_bounciness = function(v) { return CS.Call(3, 36, 2, false, this, v); }

_jstype.definition.get_frictionDirection2 = function() { return CS.Call(2, 36, 3, false, this); }
_jstype.definition.set_frictionDirection2 = function(v) { return CS.Call(3, 36, 3, false, this, v); }

_jstype.definition.get_dynamicFriction2 = function() { return CS.Call(2, 36, 4, false, this); }
_jstype.definition.set_dynamicFriction2 = function(v) { return CS.Call(3, 36, 4, false, this, v); }

_jstype.definition.get_staticFriction2 = function() { return CS.Call(2, 36, 5, false, this); }
_jstype.definition.set_staticFriction2 = function(v) { return CS.Call(3, 36, 5, false, this, v); }

_jstype.definition.get_frictionCombine = function() { return CS.Call(2, 36, 6, false, this); }
_jstype.definition.set_frictionCombine = function(v) { return CS.Call(3, 36, 6, false, this, v); }

_jstype.definition.get_bounceCombine = function() { return CS.Call(2, 36, 7, false, this); }
_jstype.definition.set_bounceCombine = function(v) { return CS.Call(3, 36, 7, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Collision
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Collision",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 37, 0, true, this); }

// fields

// properties

_jstype.definition.get_relativeVelocity = function() { return CS.Call(2, 37, 0, false, this); }
_jstype.definition.set_relativeVelocity = function(v) { return CS.Call(3, 37, 0, false, this, v); }

_jstype.definition.get_rigidbody = function() { return CS.Call(2, 37, 1, false, this); }
_jstype.definition.set_rigidbody = function(v) { return CS.Call(3, 37, 1, false, this, v); }

_jstype.definition.get_collider = function() { return CS.Call(2, 37, 2, false, this); }
_jstype.definition.set_collider = function(v) { return CS.Call(3, 37, 2, false, this, v); }

_jstype.definition.get_transform = function() { return CS.Call(2, 37, 3, false, this); }
_jstype.definition.set_transform = function(v) { return CS.Call(3, 37, 3, false, this, v); }

_jstype.definition.get_gameObject = function() { return CS.Call(2, 37, 4, false, this); }
_jstype.definition.set_gameObject = function(v) { return CS.Call(3, 37, 4, false, this, v); }

_jstype.definition.get_contacts = function() { return CS.Call(2, 37, 5, false, this); }
_jstype.definition.set_contacts = function(v) { return CS.Call(3, 37, 5, false, this, v); }

// methods

/* IEnumerator */
_jstype.definition.GetEnumerator = function() { 
    
    return CS.Call(4, 37, 0, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ControllerColliderHit
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ControllerColliderHit",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 38, 0, true, this); }

// fields

// properties

_jstype.definition.get_controller = function() { return CS.Call(2, 38, 0, false, this); }
_jstype.definition.set_controller = function(v) { return CS.Call(3, 38, 0, false, this, v); }

_jstype.definition.get_collider = function() { return CS.Call(2, 38, 1, false, this); }
_jstype.definition.set_collider = function(v) { return CS.Call(3, 38, 1, false, this, v); }

_jstype.definition.get_rigidbody = function() { return CS.Call(2, 38, 2, false, this); }
_jstype.definition.set_rigidbody = function(v) { return CS.Call(3, 38, 2, false, this, v); }

_jstype.definition.get_gameObject = function() { return CS.Call(2, 38, 3, false, this); }
_jstype.definition.set_gameObject = function(v) { return CS.Call(3, 38, 3, false, this, v); }

_jstype.definition.get_transform = function() { return CS.Call(2, 38, 4, false, this); }
_jstype.definition.set_transform = function(v) { return CS.Call(3, 38, 4, false, this, v); }

_jstype.definition.get_point = function() { return CS.Call(2, 38, 5, false, this); }
_jstype.definition.set_point = function(v) { return CS.Call(3, 38, 5, false, this, v); }

_jstype.definition.get_normal = function() { return CS.Call(2, 38, 6, false, this); }
_jstype.definition.set_normal = function(v) { return CS.Call(3, 38, 6, false, this, v); }

_jstype.definition.get_moveDirection = function() { return CS.Call(2, 38, 7, false, this); }
_jstype.definition.set_moveDirection = function(v) { return CS.Call(3, 38, 7, false, this, v); }

_jstype.definition.get_moveLength = function() { return CS.Call(2, 38, 8, false, this); }
_jstype.definition.set_moveLength = function(v) { return CS.Call(3, 38, 8, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$CharacterController
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.CharacterController",
    baseTypeName: "UnityEngine.Collider"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 39, 0, true, this); }

// fields

// properties

_jstype.definition.get_isGrounded = function() { return CS.Call(2, 39, 0, false, this); }
_jstype.definition.set_isGrounded = function(v) { return CS.Call(3, 39, 0, false, this, v); }

_jstype.definition.get_velocity = function() { return CS.Call(2, 39, 1, false, this); }
_jstype.definition.set_velocity = function(v) { return CS.Call(3, 39, 1, false, this, v); }

_jstype.definition.get_collisionFlags = function() { return CS.Call(2, 39, 2, false, this); }
_jstype.definition.set_collisionFlags = function(v) { return CS.Call(3, 39, 2, false, this, v); }

_jstype.definition.get_radius = function() { return CS.Call(2, 39, 3, false, this); }
_jstype.definition.set_radius = function(v) { return CS.Call(3, 39, 3, false, this, v); }

_jstype.definition.get_height = function() { return CS.Call(2, 39, 4, false, this); }
_jstype.definition.set_height = function(v) { return CS.Call(3, 39, 4, false, this, v); }

_jstype.definition.get_center = function() { return CS.Call(2, 39, 5, false, this); }
_jstype.definition.set_center = function(v) { return CS.Call(3, 39, 5, false, this, v); }

_jstype.definition.get_slopeLimit = function() { return CS.Call(2, 39, 6, false, this); }
_jstype.definition.set_slopeLimit = function(v) { return CS.Call(3, 39, 6, false, this, v); }

_jstype.definition.get_stepOffset = function() { return CS.Call(2, 39, 7, false, this); }
_jstype.definition.set_stepOffset = function(v) { return CS.Call(3, 39, 7, false, this, v); }

_jstype.definition.get_detectCollisions = function() { return CS.Call(2, 39, 8, false, this); }
_jstype.definition.set_detectCollisions = function(v) { return CS.Call(3, 39, 8, false, this, v); }

// methods

/* CollisionFlags */
_jstype.definition.Move = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 39, 0, false, this, a0); 
}
/* Boolean */
_jstype.definition.SimpleMove = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 39, 1, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Cloth
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Cloth",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 40, 0, true, this); }

// fields

// properties

_jstype.definition.get_bendingStiffness = function() { return CS.Call(2, 40, 0, false, this); }
_jstype.definition.set_bendingStiffness = function(v) { return CS.Call(3, 40, 0, false, this, v); }

_jstype.definition.get_stretchingStiffness = function() { return CS.Call(2, 40, 1, false, this); }
_jstype.definition.set_stretchingStiffness = function(v) { return CS.Call(3, 40, 1, false, this, v); }

_jstype.definition.get_damping = function() { return CS.Call(2, 40, 2, false, this); }
_jstype.definition.set_damping = function(v) { return CS.Call(3, 40, 2, false, this, v); }

_jstype.definition.get_thickness = function() { return CS.Call(2, 40, 3, false, this); }
_jstype.definition.set_thickness = function(v) { return CS.Call(3, 40, 3, false, this, v); }

_jstype.definition.get_externalAcceleration = function() { return CS.Call(2, 40, 4, false, this); }
_jstype.definition.set_externalAcceleration = function(v) { return CS.Call(3, 40, 4, false, this, v); }

_jstype.definition.get_randomAcceleration = function() { return CS.Call(2, 40, 5, false, this); }
_jstype.definition.set_randomAcceleration = function(v) { return CS.Call(3, 40, 5, false, this, v); }

_jstype.definition.get_useGravity = function() { return CS.Call(2, 40, 6, false, this); }
_jstype.definition.set_useGravity = function(v) { return CS.Call(3, 40, 6, false, this, v); }

_jstype.definition.get_selfCollision = function() { return CS.Call(2, 40, 7, false, this); }
_jstype.definition.set_selfCollision = function(v) { return CS.Call(3, 40, 7, false, this, v); }

_jstype.definition.get_enabled = function() { return CS.Call(2, 40, 8, false, this); }
_jstype.definition.set_enabled = function(v) { return CS.Call(3, 40, 8, false, this, v); }

_jstype.definition.get_vertices = function() { return CS.Call(2, 40, 9, false, this); }
_jstype.definition.set_vertices = function(v) { return CS.Call(3, 40, 9, false, this, v); }

_jstype.definition.get_normals = function() { return CS.Call(2, 40, 10, false, this); }
_jstype.definition.set_normals = function(v) { return CS.Call(3, 40, 10, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$TerrainCollider
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.TerrainCollider",
    baseTypeName: "UnityEngine.Collider"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 41, 0, true, this); }

// fields

// properties

_jstype.definition.get_terrainData = function() { return CS.Call(2, 41, 0, false, this); }
_jstype.definition.set_terrainData = function(v) { return CS.Call(3, 41, 0, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Physics2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Physics2D",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 42, 0, true, this); }

// fields

_jstype.staticFields.IgnoreRaycastLayer =  { 
            get: function() { return CS.Call(0, 42, 0, true); }, 
            set: function(v) { return CS.Call(1, 42, 0, true, v); } 
        };

_jstype.staticFields.DefaultRaycastLayers =  { 
            get: function() { return CS.Call(0, 42, 1, true); }, 
            set: function(v) { return CS.Call(1, 42, 1, true, v); } 
        };

_jstype.staticFields.AllLayers =  { 
            get: function() { return CS.Call(0, 42, 2, true); }, 
            set: function(v) { return CS.Call(1, 42, 2, true, v); } 
        };

// properties

_jstype.staticDefinition.get_velocityIterations = function() { return CS.Call(2, 42, 0, true); }
_jstype.staticDefinition.set_velocityIterations = function(v) { return CS.Call(3, 42, 0, true, v); }

_jstype.staticDefinition.get_positionIterations = function() { return CS.Call(2, 42, 1, true); }
_jstype.staticDefinition.set_positionIterations = function(v) { return CS.Call(3, 42, 1, true, v); }

_jstype.staticDefinition.get_gravity = function() { return CS.Call(2, 42, 2, true); }
_jstype.staticDefinition.set_gravity = function(v) { return CS.Call(3, 42, 2, true, v); }

_jstype.staticDefinition.get_raycastsHitTriggers = function() { return CS.Call(2, 42, 3, true); }
_jstype.staticDefinition.set_raycastsHitTriggers = function(v) { return CS.Call(3, 42, 3, true, v); }

_jstype.staticDefinition.get_raycastsStartInColliders = function() { return CS.Call(2, 42, 4, true); }
_jstype.staticDefinition.set_raycastsStartInColliders = function(v) { return CS.Call(3, 42, 4, true, v); }

_jstype.staticDefinition.get_changeStopsCallbacks = function() { return CS.Call(2, 42, 5, true); }
_jstype.staticDefinition.set_changeStopsCallbacks = function(v) { return CS.Call(3, 42, 5, true, v); }

_jstype.staticDefinition.get_velocityThreshold = function() { return CS.Call(2, 42, 6, true); }
_jstype.staticDefinition.set_velocityThreshold = function(v) { return CS.Call(3, 42, 6, true, v); }

_jstype.staticDefinition.get_maxLinearCorrection = function() { return CS.Call(2, 42, 7, true); }
_jstype.staticDefinition.set_maxLinearCorrection = function(v) { return CS.Call(3, 42, 7, true, v); }

_jstype.staticDefinition.get_maxAngularCorrection = function() { return CS.Call(2, 42, 8, true); }
_jstype.staticDefinition.set_maxAngularCorrection = function(v) { return CS.Call(3, 42, 8, true, v); }

_jstype.staticDefinition.get_maxTranslationSpeed = function() { return CS.Call(2, 42, 9, true); }
_jstype.staticDefinition.set_maxTranslationSpeed = function(v) { return CS.Call(3, 42, 9, true, v); }

_jstype.staticDefinition.get_maxRotationSpeed = function() { return CS.Call(2, 42, 10, true); }
_jstype.staticDefinition.set_maxRotationSpeed = function(v) { return CS.Call(3, 42, 10, true, v); }

_jstype.staticDefinition.get_minPenetrationForPenalty = function() { return CS.Call(2, 42, 11, true); }
_jstype.staticDefinition.set_minPenetrationForPenalty = function(v) { return CS.Call(3, 42, 11, true, v); }

_jstype.staticDefinition.get_baumgarteScale = function() { return CS.Call(2, 42, 12, true); }
_jstype.staticDefinition.set_baumgarteScale = function(v) { return CS.Call(3, 42, 12, true, v); }

_jstype.staticDefinition.get_baumgarteTOIScale = function() { return CS.Call(2, 42, 13, true); }
_jstype.staticDefinition.set_baumgarteTOIScale = function(v) { return CS.Call(3, 42, 13, true, v); }

_jstype.staticDefinition.get_timeToSleep = function() { return CS.Call(2, 42, 14, true); }
_jstype.staticDefinition.set_timeToSleep = function(v) { return CS.Call(3, 42, 14, true, v); }

_jstype.staticDefinition.get_linearSleepTolerance = function() { return CS.Call(2, 42, 15, true); }
_jstype.staticDefinition.set_linearSleepTolerance = function(v) { return CS.Call(3, 42, 15, true, v); }

_jstype.staticDefinition.get_angularSleepTolerance = function() { return CS.Call(2, 42, 16, true); }
_jstype.staticDefinition.set_angularSleepTolerance = function(v) { return CS.Call(3, 42, 16, true, v); }

// methods

/* static RaycastHit2D  */
_jstype.staticDefinition.BoxCast$$Vector2$$Vector2$$Single$$Vector2$$Single$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Vector2*/, a4/*Single*/, a5/*Int32*/, a6/*Single*/, a7/*Single*/) { 
    
    return CS.Call(4, 42, 0, true, a0, a1, a2, a3, a4, a5, a6, a7); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.BoxCast$$Vector2$$Vector2$$Single$$Vector2$$Single$$Int32$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Vector2*/, a4/*Single*/, a5/*Int32*/, a6/*Single*/) { 
    
    return CS.Call(4, 42, 1, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.BoxCast$$Vector2$$Vector2$$Single$$Vector2$$Single$$Int32 = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Vector2*/, a4/*Single*/, a5/*Int32*/) { 
    
    return CS.Call(4, 42, 2, true, a0, a1, a2, a3, a4, a5); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.BoxCast$$Vector2$$Vector2$$Single$$Vector2$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Vector2*/, a4/*Single*/) { 
    
    return CS.Call(4, 42, 3, true, a0, a1, a2, a3, a4); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.BoxCast$$Vector2$$Vector2$$Single$$Vector2 = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Vector2*/) { 
    
    return CS.Call(4, 42, 4, true, a0, a1, a2, a3); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.BoxCastAll$$Vector2$$Vector2$$Single$$Vector2$$Single$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Vector2*/, a4/*Single*/, a5/*Int32*/, a6/*Single*/, a7/*Single*/) { 
    
    return CS.Call(4, 42, 5, true, a0, a1, a2, a3, a4, a5, a6, a7); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.BoxCastAll$$Vector2$$Vector2$$Single$$Vector2$$Single$$Int32$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Vector2*/, a4/*Single*/, a5/*Int32*/, a6/*Single*/) { 
    
    return CS.Call(4, 42, 6, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.BoxCastAll$$Vector2$$Vector2$$Single$$Vector2$$Single$$Int32 = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Vector2*/, a4/*Single*/, a5/*Int32*/) { 
    
    return CS.Call(4, 42, 7, true, a0, a1, a2, a3, a4, a5); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.BoxCastAll$$Vector2$$Vector2$$Single$$Vector2$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Vector2*/, a4/*Single*/) { 
    
    return CS.Call(4, 42, 8, true, a0, a1, a2, a3, a4); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.BoxCastAll$$Vector2$$Vector2$$Single$$Vector2 = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Vector2*/) { 
    
    return CS.Call(4, 42, 9, true, a0, a1, a2, a3); 
}
/* static Int32  */
_jstype.staticDefinition.BoxCastNonAlloc$$Vector2$$Vector2$$Single$$Vector2$$RaycastHit2D$Array$$Single$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Vector2*/, a4/*RaycastHit2D[]*/, a5/*Single*/, a6/*Int32*/, a7/*Single*/, a8/*Single*/) { 
    
    return CS.Call(4, 42, 10, true, a0, a1, a2, a3, a4, a5, a6, a7, a8); 
}
/* static Int32  */
_jstype.staticDefinition.BoxCastNonAlloc$$Vector2$$Vector2$$Single$$Vector2$$RaycastHit2D$Array$$Single$$Int32$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Vector2*/, a4/*RaycastHit2D[]*/, a5/*Single*/, a6/*Int32*/, a7/*Single*/) { 
    
    return CS.Call(4, 42, 11, true, a0, a1, a2, a3, a4, a5, a6, a7); 
}
/* static Int32  */
_jstype.staticDefinition.BoxCastNonAlloc$$Vector2$$Vector2$$Single$$Vector2$$RaycastHit2D$Array$$Single$$Int32 = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Vector2*/, a4/*RaycastHit2D[]*/, a5/*Single*/, a6/*Int32*/) { 
    
    return CS.Call(4, 42, 12, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static Int32  */
_jstype.staticDefinition.BoxCastNonAlloc$$Vector2$$Vector2$$Single$$Vector2$$RaycastHit2D$Array$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Vector2*/, a4/*RaycastHit2D[]*/, a5/*Single*/) { 
    
    return CS.Call(4, 42, 13, true, a0, a1, a2, a3, a4, a5); 
}
/* static Int32  */
_jstype.staticDefinition.BoxCastNonAlloc$$Vector2$$Vector2$$Single$$Vector2$$RaycastHit2D$Array = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Vector2*/, a4/*RaycastHit2D[]*/) { 
    
    return CS.Call(4, 42, 14, true, a0, a1, a2, a3, a4); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.CircleCast$$Vector2$$Single$$Vector2$$Single$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Single*/, a2/*Vector2*/, a3/*Single*/, a4/*Int32*/, a5/*Single*/, a6/*Single*/) { 
    
    return CS.Call(4, 42, 15, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.CircleCast$$Vector2$$Single$$Vector2$$Single$$Int32$$Single = function(a0/*Vector2*/, a1/*Single*/, a2/*Vector2*/, a3/*Single*/, a4/*Int32*/, a5/*Single*/) { 
    
    return CS.Call(4, 42, 16, true, a0, a1, a2, a3, a4, a5); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.CircleCast$$Vector2$$Single$$Vector2$$Single$$Int32 = function(a0/*Vector2*/, a1/*Single*/, a2/*Vector2*/, a3/*Single*/, a4/*Int32*/) { 
    
    return CS.Call(4, 42, 17, true, a0, a1, a2, a3, a4); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.CircleCast$$Vector2$$Single$$Vector2$$Single = function(a0/*Vector2*/, a1/*Single*/, a2/*Vector2*/, a3/*Single*/) { 
    
    return CS.Call(4, 42, 18, true, a0, a1, a2, a3); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.CircleCast$$Vector2$$Single$$Vector2 = function(a0/*Vector2*/, a1/*Single*/, a2/*Vector2*/) { 
    
    return CS.Call(4, 42, 19, true, a0, a1, a2); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.CircleCastAll$$Vector2$$Single$$Vector2$$Single$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Single*/, a2/*Vector2*/, a3/*Single*/, a4/*Int32*/, a5/*Single*/, a6/*Single*/) { 
    
    return CS.Call(4, 42, 20, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.CircleCastAll$$Vector2$$Single$$Vector2$$Single$$Int32$$Single = function(a0/*Vector2*/, a1/*Single*/, a2/*Vector2*/, a3/*Single*/, a4/*Int32*/, a5/*Single*/) { 
    
    return CS.Call(4, 42, 21, true, a0, a1, a2, a3, a4, a5); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.CircleCastAll$$Vector2$$Single$$Vector2$$Single$$Int32 = function(a0/*Vector2*/, a1/*Single*/, a2/*Vector2*/, a3/*Single*/, a4/*Int32*/) { 
    
    return CS.Call(4, 42, 22, true, a0, a1, a2, a3, a4); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.CircleCastAll$$Vector2$$Single$$Vector2$$Single = function(a0/*Vector2*/, a1/*Single*/, a2/*Vector2*/, a3/*Single*/) { 
    
    return CS.Call(4, 42, 23, true, a0, a1, a2, a3); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.CircleCastAll$$Vector2$$Single$$Vector2 = function(a0/*Vector2*/, a1/*Single*/, a2/*Vector2*/) { 
    
    return CS.Call(4, 42, 24, true, a0, a1, a2); 
}
/* static Int32  */
_jstype.staticDefinition.CircleCastNonAlloc$$Vector2$$Single$$Vector2$$RaycastHit2D$Array$$Single$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Single*/, a2/*Vector2*/, a3/*RaycastHit2D[]*/, a4/*Single*/, a5/*Int32*/, a6/*Single*/, a7/*Single*/) { 
    
    return CS.Call(4, 42, 25, true, a0, a1, a2, a3, a4, a5, a6, a7); 
}
/* static Int32  */
_jstype.staticDefinition.CircleCastNonAlloc$$Vector2$$Single$$Vector2$$RaycastHit2D$Array$$Single$$Int32$$Single = function(a0/*Vector2*/, a1/*Single*/, a2/*Vector2*/, a3/*RaycastHit2D[]*/, a4/*Single*/, a5/*Int32*/, a6/*Single*/) { 
    
    return CS.Call(4, 42, 26, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static Int32  */
_jstype.staticDefinition.CircleCastNonAlloc$$Vector2$$Single$$Vector2$$RaycastHit2D$Array$$Single$$Int32 = function(a0/*Vector2*/, a1/*Single*/, a2/*Vector2*/, a3/*RaycastHit2D[]*/, a4/*Single*/, a5/*Int32*/) { 
    
    return CS.Call(4, 42, 27, true, a0, a1, a2, a3, a4, a5); 
}
/* static Int32  */
_jstype.staticDefinition.CircleCastNonAlloc$$Vector2$$Single$$Vector2$$RaycastHit2D$Array$$Single = function(a0/*Vector2*/, a1/*Single*/, a2/*Vector2*/, a3/*RaycastHit2D[]*/, a4/*Single*/) { 
    
    return CS.Call(4, 42, 28, true, a0, a1, a2, a3, a4); 
}
/* static Int32  */
_jstype.staticDefinition.CircleCastNonAlloc$$Vector2$$Single$$Vector2$$RaycastHit2D$Array = function(a0/*Vector2*/, a1/*Single*/, a2/*Vector2*/, a3/*RaycastHit2D[]*/) { 
    
    return CS.Call(4, 42, 29, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.GetIgnoreCollision = function(a0/*Collider2D*/, a1/*Collider2D*/) { 
    
    return CS.Call(4, 42, 30, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.GetIgnoreLayerCollision = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 42, 31, true, a0, a1); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.GetRayIntersection$$Ray$$Single$$Int32 = function(a0/*Ray*/, a1/*Single*/, a2/*Int32*/) { 
    
    return CS.Call(4, 42, 32, true, a0, a1, a2); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.GetRayIntersection$$Ray$$Single = function(a0/*Ray*/, a1/*Single*/) { 
    
    return CS.Call(4, 42, 33, true, a0, a1); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.GetRayIntersection$$Ray = function(a0/*Ray*/) { 
    
    return CS.Call(4, 42, 34, true, a0); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.GetRayIntersectionAll$$Ray$$Single$$Int32 = function(a0/*Ray*/, a1/*Single*/, a2/*Int32*/) { 
    
    return CS.Call(4, 42, 35, true, a0, a1, a2); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.GetRayIntersectionAll$$Ray$$Single = function(a0/*Ray*/, a1/*Single*/) { 
    
    return CS.Call(4, 42, 36, true, a0, a1); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.GetRayIntersectionAll$$Ray = function(a0/*Ray*/) { 
    
    return CS.Call(4, 42, 37, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.GetRayIntersectionNonAlloc$$Ray$$RaycastHit2D$Array$$Single$$Int32 = function(a0/*Ray*/, a1/*RaycastHit2D[]*/, a2/*Single*/, a3/*Int32*/) { 
    
    return CS.Call(4, 42, 38, true, a0, a1, a2, a3); 
}
/* static Int32  */
_jstype.staticDefinition.GetRayIntersectionNonAlloc$$Ray$$RaycastHit2D$Array$$Single = function(a0/*Ray*/, a1/*RaycastHit2D[]*/, a2/*Single*/) { 
    
    return CS.Call(4, 42, 39, true, a0, a1, a2); 
}
/* static Int32  */
_jstype.staticDefinition.GetRayIntersectionNonAlloc$$Ray$$RaycastHit2D$Array = function(a0/*Ray*/, a1/*RaycastHit2D[]*/) { 
    
    return CS.Call(4, 42, 40, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.IgnoreCollision$$Collider2D$$Collider2D$$Boolean = function(a0/*Collider2D*/, a1/*Collider2D*/, a2/*Boolean*/) { 
    
    return CS.Call(4, 42, 41, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.IgnoreCollision$$Collider2D$$Collider2D = function(a0/*Collider2D*/, a1/*Collider2D*/) { 
    
    return CS.Call(4, 42, 42, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.IgnoreLayerCollision$$Int32$$Int32$$Boolean = function(a0/*Int32*/, a1/*Int32*/, a2/*Boolean*/) { 
    
    return CS.Call(4, 42, 43, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.IgnoreLayerCollision$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 42, 44, true, a0, a1); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.Linecast$$Vector2$$Vector2$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Int32*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 42, 45, true, a0, a1, a2, a3, a4); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.Linecast$$Vector2$$Vector2$$Int32$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Int32*/, a3/*Single*/) { 
    
    return CS.Call(4, 42, 46, true, a0, a1, a2, a3); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.Linecast$$Vector2$$Vector2$$Int32 = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Int32*/) { 
    
    return CS.Call(4, 42, 47, true, a0, a1, a2); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.Linecast$$Vector2$$Vector2 = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 42, 48, true, a0, a1); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.LinecastAll$$Vector2$$Vector2$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Int32*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 42, 49, true, a0, a1, a2, a3, a4); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.LinecastAll$$Vector2$$Vector2$$Int32$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Int32*/, a3/*Single*/) { 
    
    return CS.Call(4, 42, 50, true, a0, a1, a2, a3); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.LinecastAll$$Vector2$$Vector2$$Int32 = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Int32*/) { 
    
    return CS.Call(4, 42, 51, true, a0, a1, a2); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.LinecastAll$$Vector2$$Vector2 = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 42, 52, true, a0, a1); 
}
/* static Int32  */
_jstype.staticDefinition.LinecastNonAlloc$$Vector2$$Vector2$$RaycastHit2D$Array$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*RaycastHit2D[]*/, a3/*Int32*/, a4/*Single*/, a5/*Single*/) { 
    
    return CS.Call(4, 42, 53, true, a0, a1, a2, a3, a4, a5); 
}
/* static Int32  */
_jstype.staticDefinition.LinecastNonAlloc$$Vector2$$Vector2$$RaycastHit2D$Array$$Int32$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*RaycastHit2D[]*/, a3/*Int32*/, a4/*Single*/) { 
    
    return CS.Call(4, 42, 54, true, a0, a1, a2, a3, a4); 
}
/* static Int32  */
_jstype.staticDefinition.LinecastNonAlloc$$Vector2$$Vector2$$RaycastHit2D$Array$$Int32 = function(a0/*Vector2*/, a1/*Vector2*/, a2/*RaycastHit2D[]*/, a3/*Int32*/) { 
    
    return CS.Call(4, 42, 55, true, a0, a1, a2, a3); 
}
/* static Int32  */
_jstype.staticDefinition.LinecastNonAlloc$$Vector2$$Vector2$$RaycastHit2D$Array = function(a0/*Vector2*/, a1/*Vector2*/, a2/*RaycastHit2D[]*/) { 
    
    return CS.Call(4, 42, 56, true, a0, a1, a2); 
}
/* static Collider2D  */
_jstype.staticDefinition.OverlapArea$$Vector2$$Vector2$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Int32*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 42, 57, true, a0, a1, a2, a3, a4); 
}
/* static Collider2D  */
_jstype.staticDefinition.OverlapArea$$Vector2$$Vector2$$Int32$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Int32*/, a3/*Single*/) { 
    
    return CS.Call(4, 42, 58, true, a0, a1, a2, a3); 
}
/* static Collider2D  */
_jstype.staticDefinition.OverlapArea$$Vector2$$Vector2$$Int32 = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Int32*/) { 
    
    return CS.Call(4, 42, 59, true, a0, a1, a2); 
}
/* static Collider2D  */
_jstype.staticDefinition.OverlapArea$$Vector2$$Vector2 = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 42, 60, true, a0, a1); 
}
/* static Collider2D[]  */
_jstype.staticDefinition.OverlapAreaAll$$Vector2$$Vector2$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Int32*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 42, 61, true, a0, a1, a2, a3, a4); 
}
/* static Collider2D[]  */
_jstype.staticDefinition.OverlapAreaAll$$Vector2$$Vector2$$Int32$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Int32*/, a3/*Single*/) { 
    
    return CS.Call(4, 42, 62, true, a0, a1, a2, a3); 
}
/* static Collider2D[]  */
_jstype.staticDefinition.OverlapAreaAll$$Vector2$$Vector2$$Int32 = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Int32*/) { 
    
    return CS.Call(4, 42, 63, true, a0, a1, a2); 
}
/* static Collider2D[]  */
_jstype.staticDefinition.OverlapAreaAll$$Vector2$$Vector2 = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 42, 64, true, a0, a1); 
}
/* static Int32  */
_jstype.staticDefinition.OverlapAreaNonAlloc$$Vector2$$Vector2$$Collider2D$Array$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Collider2D[]*/, a3/*Int32*/, a4/*Single*/, a5/*Single*/) { 
    
    return CS.Call(4, 42, 65, true, a0, a1, a2, a3, a4, a5); 
}
/* static Int32  */
_jstype.staticDefinition.OverlapAreaNonAlloc$$Vector2$$Vector2$$Collider2D$Array$$Int32$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Collider2D[]*/, a3/*Int32*/, a4/*Single*/) { 
    
    return CS.Call(4, 42, 66, true, a0, a1, a2, a3, a4); 
}
/* static Int32  */
_jstype.staticDefinition.OverlapAreaNonAlloc$$Vector2$$Vector2$$Collider2D$Array$$Int32 = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Collider2D[]*/, a3/*Int32*/) { 
    
    return CS.Call(4, 42, 67, true, a0, a1, a2, a3); 
}
/* static Int32  */
_jstype.staticDefinition.OverlapAreaNonAlloc$$Vector2$$Vector2$$Collider2D$Array = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Collider2D[]*/) { 
    
    return CS.Call(4, 42, 68, true, a0, a1, a2); 
}
/* static Collider2D  */
_jstype.staticDefinition.OverlapCircle$$Vector2$$Single$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Single*/, a2/*Int32*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 42, 69, true, a0, a1, a2, a3, a4); 
}
/* static Collider2D  */
_jstype.staticDefinition.OverlapCircle$$Vector2$$Single$$Int32$$Single = function(a0/*Vector2*/, a1/*Single*/, a2/*Int32*/, a3/*Single*/) { 
    
    return CS.Call(4, 42, 70, true, a0, a1, a2, a3); 
}
/* static Collider2D  */
_jstype.staticDefinition.OverlapCircle$$Vector2$$Single$$Int32 = function(a0/*Vector2*/, a1/*Single*/, a2/*Int32*/) { 
    
    return CS.Call(4, 42, 71, true, a0, a1, a2); 
}
/* static Collider2D  */
_jstype.staticDefinition.OverlapCircle$$Vector2$$Single = function(a0/*Vector2*/, a1/*Single*/) { 
    
    return CS.Call(4, 42, 72, true, a0, a1); 
}
/* static Collider2D[]  */
_jstype.staticDefinition.OverlapCircleAll$$Vector2$$Single$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Single*/, a2/*Int32*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 42, 73, true, a0, a1, a2, a3, a4); 
}
/* static Collider2D[]  */
_jstype.staticDefinition.OverlapCircleAll$$Vector2$$Single$$Int32$$Single = function(a0/*Vector2*/, a1/*Single*/, a2/*Int32*/, a3/*Single*/) { 
    
    return CS.Call(4, 42, 74, true, a0, a1, a2, a3); 
}
/* static Collider2D[]  */
_jstype.staticDefinition.OverlapCircleAll$$Vector2$$Single$$Int32 = function(a0/*Vector2*/, a1/*Single*/, a2/*Int32*/) { 
    
    return CS.Call(4, 42, 75, true, a0, a1, a2); 
}
/* static Collider2D[]  */
_jstype.staticDefinition.OverlapCircleAll$$Vector2$$Single = function(a0/*Vector2*/, a1/*Single*/) { 
    
    return CS.Call(4, 42, 76, true, a0, a1); 
}
/* static Int32  */
_jstype.staticDefinition.OverlapCircleNonAlloc$$Vector2$$Single$$Collider2D$Array$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Single*/, a2/*Collider2D[]*/, a3/*Int32*/, a4/*Single*/, a5/*Single*/) { 
    
    return CS.Call(4, 42, 77, true, a0, a1, a2, a3, a4, a5); 
}
/* static Int32  */
_jstype.staticDefinition.OverlapCircleNonAlloc$$Vector2$$Single$$Collider2D$Array$$Int32$$Single = function(a0/*Vector2*/, a1/*Single*/, a2/*Collider2D[]*/, a3/*Int32*/, a4/*Single*/) { 
    
    return CS.Call(4, 42, 78, true, a0, a1, a2, a3, a4); 
}
/* static Int32  */
_jstype.staticDefinition.OverlapCircleNonAlloc$$Vector2$$Single$$Collider2D$Array$$Int32 = function(a0/*Vector2*/, a1/*Single*/, a2/*Collider2D[]*/, a3/*Int32*/) { 
    
    return CS.Call(4, 42, 79, true, a0, a1, a2, a3); 
}
/* static Int32  */
_jstype.staticDefinition.OverlapCircleNonAlloc$$Vector2$$Single$$Collider2D$Array = function(a0/*Vector2*/, a1/*Single*/, a2/*Collider2D[]*/) { 
    
    return CS.Call(4, 42, 80, true, a0, a1, a2); 
}
/* static Collider2D  */
_jstype.staticDefinition.OverlapPoint$$Vector2$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Int32*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 42, 81, true, a0, a1, a2, a3); 
}
/* static Collider2D  */
_jstype.staticDefinition.OverlapPoint$$Vector2$$Int32$$Single = function(a0/*Vector2*/, a1/*Int32*/, a2/*Single*/) { 
    
    return CS.Call(4, 42, 82, true, a0, a1, a2); 
}
/* static Collider2D  */
_jstype.staticDefinition.OverlapPoint$$Vector2$$Int32 = function(a0/*Vector2*/, a1/*Int32*/) { 
    
    return CS.Call(4, 42, 83, true, a0, a1); 
}
/* static Collider2D  */
_jstype.staticDefinition.OverlapPoint$$Vector2 = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 42, 84, true, a0); 
}
/* static Collider2D[]  */
_jstype.staticDefinition.OverlapPointAll$$Vector2$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Int32*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 42, 85, true, a0, a1, a2, a3); 
}
/* static Collider2D[]  */
_jstype.staticDefinition.OverlapPointAll$$Vector2$$Int32$$Single = function(a0/*Vector2*/, a1/*Int32*/, a2/*Single*/) { 
    
    return CS.Call(4, 42, 86, true, a0, a1, a2); 
}
/* static Collider2D[]  */
_jstype.staticDefinition.OverlapPointAll$$Vector2$$Int32 = function(a0/*Vector2*/, a1/*Int32*/) { 
    
    return CS.Call(4, 42, 87, true, a0, a1); 
}
/* static Collider2D[]  */
_jstype.staticDefinition.OverlapPointAll$$Vector2 = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 42, 88, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.OverlapPointNonAlloc$$Vector2$$Collider2D$Array$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Collider2D[]*/, a2/*Int32*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 42, 89, true, a0, a1, a2, a3, a4); 
}
/* static Int32  */
_jstype.staticDefinition.OverlapPointNonAlloc$$Vector2$$Collider2D$Array$$Int32$$Single = function(a0/*Vector2*/, a1/*Collider2D[]*/, a2/*Int32*/, a3/*Single*/) { 
    
    return CS.Call(4, 42, 90, true, a0, a1, a2, a3); 
}
/* static Int32  */
_jstype.staticDefinition.OverlapPointNonAlloc$$Vector2$$Collider2D$Array$$Int32 = function(a0/*Vector2*/, a1/*Collider2D[]*/, a2/*Int32*/) { 
    
    return CS.Call(4, 42, 91, true, a0, a1, a2); 
}
/* static Int32  */
_jstype.staticDefinition.OverlapPointNonAlloc$$Vector2$$Collider2D$Array = function(a0/*Vector2*/, a1/*Collider2D[]*/) { 
    
    return CS.Call(4, 42, 92, true, a0, a1); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.Raycast$$Vector2$$Vector2$$Single$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Int32*/, a4/*Single*/, a5/*Single*/) { 
    
    return CS.Call(4, 42, 93, true, a0, a1, a2, a3, a4, a5); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.Raycast$$Vector2$$Vector2$$Single$$Int32$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Int32*/, a4/*Single*/) { 
    
    return CS.Call(4, 42, 94, true, a0, a1, a2, a3, a4); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.Raycast$$Vector2$$Vector2$$Single$$Int32 = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Int32*/) { 
    
    return CS.Call(4, 42, 95, true, a0, a1, a2, a3); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.Raycast$$Vector2$$Vector2$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/) { 
    
    return CS.Call(4, 42, 96, true, a0, a1, a2); 
}
/* static RaycastHit2D  */
_jstype.staticDefinition.Raycast$$Vector2$$Vector2 = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 42, 97, true, a0, a1); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.RaycastAll$$Vector2$$Vector2$$Single$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Int32*/, a4/*Single*/, a5/*Single*/) { 
    
    return CS.Call(4, 42, 98, true, a0, a1, a2, a3, a4, a5); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.RaycastAll$$Vector2$$Vector2$$Single$$Int32$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Int32*/, a4/*Single*/) { 
    
    return CS.Call(4, 42, 99, true, a0, a1, a2, a3, a4); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.RaycastAll$$Vector2$$Vector2$$Single$$Int32 = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/, a3/*Int32*/) { 
    
    return CS.Call(4, 42, 100, true, a0, a1, a2, a3); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.RaycastAll$$Vector2$$Vector2$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/) { 
    
    return CS.Call(4, 42, 101, true, a0, a1, a2); 
}
/* static RaycastHit2D[]  */
_jstype.staticDefinition.RaycastAll$$Vector2$$Vector2 = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 42, 102, true, a0, a1); 
}
/* static Int32  */
_jstype.staticDefinition.RaycastNonAlloc$$Vector2$$Vector2$$RaycastHit2D$Array$$Single$$Int32$$Single$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*RaycastHit2D[]*/, a3/*Single*/, a4/*Int32*/, a5/*Single*/, a6/*Single*/) { 
    
    return CS.Call(4, 42, 103, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static Int32  */
_jstype.staticDefinition.RaycastNonAlloc$$Vector2$$Vector2$$RaycastHit2D$Array$$Single$$Int32$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*RaycastHit2D[]*/, a3/*Single*/, a4/*Int32*/, a5/*Single*/) { 
    
    return CS.Call(4, 42, 104, true, a0, a1, a2, a3, a4, a5); 
}
/* static Int32  */
_jstype.staticDefinition.RaycastNonAlloc$$Vector2$$Vector2$$RaycastHit2D$Array$$Single$$Int32 = function(a0/*Vector2*/, a1/*Vector2*/, a2/*RaycastHit2D[]*/, a3/*Single*/, a4/*Int32*/) { 
    
    return CS.Call(4, 42, 105, true, a0, a1, a2, a3, a4); 
}
/* static Int32  */
_jstype.staticDefinition.RaycastNonAlloc$$Vector2$$Vector2$$RaycastHit2D$Array$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*RaycastHit2D[]*/, a3/*Single*/) { 
    
    return CS.Call(4, 42, 106, true, a0, a1, a2, a3); 
}
/* static Int32  */
_jstype.staticDefinition.RaycastNonAlloc$$Vector2$$Vector2$$RaycastHit2D$Array = function(a0/*Vector2*/, a1/*Vector2*/, a2/*RaycastHit2D[]*/) { 
    
    return CS.Call(4, 42, 107, true, a0, a1, a2); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Rigidbody2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Rigidbody2D",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 43, 0, true, this); }

// fields

// properties

_jstype.definition.get_position = function() { return CS.Call(2, 43, 0, false, this); }
_jstype.definition.set_position = function(v) { return CS.Call(3, 43, 0, false, this, v); }

_jstype.definition.get_rotation = function() { return CS.Call(2, 43, 1, false, this); }
_jstype.definition.set_rotation = function(v) { return CS.Call(3, 43, 1, false, this, v); }

_jstype.definition.get_velocity = function() { return CS.Call(2, 43, 2, false, this); }
_jstype.definition.set_velocity = function(v) { return CS.Call(3, 43, 2, false, this, v); }

_jstype.definition.get_angularVelocity = function() { return CS.Call(2, 43, 3, false, this); }
_jstype.definition.set_angularVelocity = function(v) { return CS.Call(3, 43, 3, false, this, v); }

_jstype.definition.get_mass = function() { return CS.Call(2, 43, 4, false, this); }
_jstype.definition.set_mass = function(v) { return CS.Call(3, 43, 4, false, this, v); }

_jstype.definition.get_centerOfMass = function() { return CS.Call(2, 43, 5, false, this); }
_jstype.definition.set_centerOfMass = function(v) { return CS.Call(3, 43, 5, false, this, v); }

_jstype.definition.get_worldCenterOfMass = function() { return CS.Call(2, 43, 6, false, this); }
_jstype.definition.set_worldCenterOfMass = function(v) { return CS.Call(3, 43, 6, false, this, v); }

_jstype.definition.get_inertia = function() { return CS.Call(2, 43, 7, false, this); }
_jstype.definition.set_inertia = function(v) { return CS.Call(3, 43, 7, false, this, v); }

_jstype.definition.get_drag = function() { return CS.Call(2, 43, 8, false, this); }
_jstype.definition.set_drag = function(v) { return CS.Call(3, 43, 8, false, this, v); }

_jstype.definition.get_angularDrag = function() { return CS.Call(2, 43, 9, false, this); }
_jstype.definition.set_angularDrag = function(v) { return CS.Call(3, 43, 9, false, this, v); }

_jstype.definition.get_gravityScale = function() { return CS.Call(2, 43, 10, false, this); }
_jstype.definition.set_gravityScale = function(v) { return CS.Call(3, 43, 10, false, this, v); }

_jstype.definition.get_isKinematic = function() { return CS.Call(2, 43, 11, false, this); }
_jstype.definition.set_isKinematic = function(v) { return CS.Call(3, 43, 11, false, this, v); }

_jstype.definition.get_fixedAngle = function() { return CS.Call(2, 43, 12, false, this); }
_jstype.definition.set_fixedAngle = function(v) { return CS.Call(3, 43, 12, false, this, v); }

_jstype.definition.get_simulated = function() { return CS.Call(2, 43, 13, false, this); }
_jstype.definition.set_simulated = function(v) { return CS.Call(3, 43, 13, false, this, v); }

_jstype.definition.get_interpolation = function() { return CS.Call(2, 43, 14, false, this); }
_jstype.definition.set_interpolation = function(v) { return CS.Call(3, 43, 14, false, this, v); }

_jstype.definition.get_sleepMode = function() { return CS.Call(2, 43, 15, false, this); }
_jstype.definition.set_sleepMode = function(v) { return CS.Call(3, 43, 15, false, this, v); }

_jstype.definition.get_collisionDetectionMode = function() { return CS.Call(2, 43, 16, false, this); }
_jstype.definition.set_collisionDetectionMode = function(v) { return CS.Call(3, 43, 16, false, this, v); }

// methods

/* Void */
_jstype.definition.AddForce$$Vector2$$ForceMode2D = function(a0/*Vector2*/, a1/*ForceMode2D*/) { 
    
    return CS.Call(4, 43, 0, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddForce$$Vector2 = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 43, 1, false, this, a0); 
}
/* Void */
_jstype.definition.AddForceAtPosition$$Vector2$$Vector2$$ForceMode2D = function(a0/*Vector2*/, a1/*Vector2*/, a2/*ForceMode2D*/) { 
    
    return CS.Call(4, 43, 2, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.AddForceAtPosition$$Vector2$$Vector2 = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 43, 3, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddRelativeForce$$Vector2$$ForceMode2D = function(a0/*Vector2*/, a1/*ForceMode2D*/) { 
    
    return CS.Call(4, 43, 4, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddRelativeForce$$Vector2 = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 43, 5, false, this, a0); 
}
/* Void */
_jstype.definition.AddTorque$$Single$$ForceMode2D = function(a0/*Single*/, a1/*ForceMode2D*/) { 
    
    return CS.Call(4, 43, 6, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddTorque$$Single = function(a0/*Single*/) { 
    
    return CS.Call(4, 43, 7, false, this, a0); 
}
/* Vector2 */
_jstype.definition.GetPoint = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 43, 8, false, this, a0); 
}
/* Vector2 */
_jstype.definition.GetPointVelocity = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 43, 9, false, this, a0); 
}
/* Vector2 */
_jstype.definition.GetRelativePoint = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 43, 10, false, this, a0); 
}
/* Vector2 */
_jstype.definition.GetRelativePointVelocity = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 43, 11, false, this, a0); 
}
/* Vector2 */
_jstype.definition.GetRelativeVector = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 43, 12, false, this, a0); 
}
/* Vector2 */
_jstype.definition.GetVector = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 43, 13, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsAwake = function() { 
    
    return CS.Call(4, 43, 14, false, this); 
}
/* Boolean */
_jstype.definition.IsSleeping = function() { 
    
    return CS.Call(4, 43, 15, false, this); 
}
/* Void */
_jstype.definition.MovePosition = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 43, 16, false, this, a0); 
}
/* Void */
_jstype.definition.MoveRotation = function(a0/*Single*/) { 
    
    return CS.Call(4, 43, 17, false, this, a0); 
}
/* Void */
_jstype.definition.Sleep = function() { 
    
    return CS.Call(4, 43, 18, false, this); 
}
/* Void */
_jstype.definition.WakeUp = function() { 
    
    return CS.Call(4, 43, 19, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Collider2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Collider2D",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 44, 0, true, this); }

// fields

// properties

_jstype.definition.get_isTrigger = function() { return CS.Call(2, 44, 0, false, this); }
_jstype.definition.set_isTrigger = function(v) { return CS.Call(3, 44, 0, false, this, v); }

_jstype.definition.get_attachedRigidbody = function() { return CS.Call(2, 44, 1, false, this); }
_jstype.definition.set_attachedRigidbody = function(v) { return CS.Call(3, 44, 1, false, this, v); }

_jstype.definition.get_shapeCount = function() { return CS.Call(2, 44, 2, false, this); }
_jstype.definition.set_shapeCount = function(v) { return CS.Call(3, 44, 2, false, this, v); }

_jstype.definition.get_bounds = function() { return CS.Call(2, 44, 3, false, this); }
_jstype.definition.set_bounds = function(v) { return CS.Call(3, 44, 3, false, this, v); }

_jstype.definition.get_sharedMaterial = function() { return CS.Call(2, 44, 4, false, this); }
_jstype.definition.set_sharedMaterial = function(v) { return CS.Call(3, 44, 4, false, this, v); }

// methods

/* Boolean */
_jstype.definition.OverlapPoint = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 44, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$CircleCollider2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.CircleCollider2D",
    baseTypeName: "UnityEngine.Collider2D"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 45, 0, true, this); }

// fields

// properties

_jstype.definition.get_center = function() { return CS.Call(2, 45, 0, false, this); }
_jstype.definition.set_center = function(v) { return CS.Call(3, 45, 0, false, this, v); }

_jstype.definition.get_radius = function() { return CS.Call(2, 45, 1, false, this); }
_jstype.definition.set_radius = function(v) { return CS.Call(3, 45, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$BoxCollider2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.BoxCollider2D",
    baseTypeName: "UnityEngine.Collider2D"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 46, 0, true, this); }

// fields

// properties

_jstype.definition.get_center = function() { return CS.Call(2, 46, 0, false, this); }
_jstype.definition.set_center = function(v) { return CS.Call(3, 46, 0, false, this, v); }

_jstype.definition.get_size = function() { return CS.Call(2, 46, 1, false, this); }
_jstype.definition.set_size = function(v) { return CS.Call(3, 46, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EdgeCollider2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.EdgeCollider2D",
    baseTypeName: "UnityEngine.Collider2D"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 47, 0, true, this); }

// fields

// properties

_jstype.definition.get_edgeCount = function() { return CS.Call(2, 47, 0, false, this); }
_jstype.definition.set_edgeCount = function(v) { return CS.Call(3, 47, 0, false, this, v); }

_jstype.definition.get_pointCount = function() { return CS.Call(2, 47, 1, false, this); }
_jstype.definition.set_pointCount = function(v) { return CS.Call(3, 47, 1, false, this, v); }

_jstype.definition.get_points = function() { return CS.Call(2, 47, 2, false, this); }
_jstype.definition.set_points = function(v) { return CS.Call(3, 47, 2, false, this, v); }

// methods

/* Void */
_jstype.definition.Reset = function() { 
    
    return CS.Call(4, 47, 0, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$PolygonCollider2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.PolygonCollider2D",
    baseTypeName: "UnityEngine.Collider2D"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 48, 0, true, this); }

// fields

// properties

_jstype.definition.get_points = function() { return CS.Call(2, 48, 0, false, this); }
_jstype.definition.set_points = function(v) { return CS.Call(3, 48, 0, false, this, v); }

_jstype.definition.get_pathCount = function() { return CS.Call(2, 48, 1, false, this); }
_jstype.definition.set_pathCount = function(v) { return CS.Call(3, 48, 1, false, this, v); }

// methods

/* Void */
_jstype.definition.CreatePrimitive$$Int32$$Vector2$$Vector2 = function(a0/*Int32*/, a1/*Vector2*/, a2/*Vector2*/) { 
    
    return CS.Call(4, 48, 0, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.CreatePrimitive$$Int32$$Vector2 = function(a0/*Int32*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 48, 1, false, this, a0, a1); 
}
/* Void */
_jstype.definition.CreatePrimitive$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 48, 2, false, this, a0); 
}
/* Vector2[] */
_jstype.definition.GetPath = function(a0/*Int32*/) { 
    
    return CS.Call(4, 48, 3, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetTotalPointCount = function() { 
    
    return CS.Call(4, 48, 4, false, this); 
}
/* Void */
_jstype.definition.SetPath = function(a0/*Int32*/, a1/*Vector2[]*/) { 
    
    return CS.Call(4, 48, 5, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Collision2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Collision2D",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 49, 0, true, this); }

// fields

// properties

_jstype.definition.get_rigidbody = function() { return CS.Call(2, 49, 0, false, this); }
_jstype.definition.set_rigidbody = function(v) { return CS.Call(3, 49, 0, false, this, v); }

_jstype.definition.get_collider = function() { return CS.Call(2, 49, 1, false, this); }
_jstype.definition.set_collider = function(v) { return CS.Call(3, 49, 1, false, this, v); }

_jstype.definition.get_transform = function() { return CS.Call(2, 49, 2, false, this); }
_jstype.definition.set_transform = function(v) { return CS.Call(3, 49, 2, false, this, v); }

_jstype.definition.get_gameObject = function() { return CS.Call(2, 49, 3, false, this); }
_jstype.definition.set_gameObject = function(v) { return CS.Call(3, 49, 3, false, this, v); }

_jstype.definition.get_contacts = function() { return CS.Call(2, 49, 4, false, this); }
_jstype.definition.set_contacts = function(v) { return CS.Call(3, 49, 4, false, this, v); }

_jstype.definition.get_relativeVelocity = function() { return CS.Call(2, 49, 5, false, this); }
_jstype.definition.set_relativeVelocity = function(v) { return CS.Call(3, 49, 5, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Joint2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Joint2D",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 50, 0, true, this); }

// fields

// properties

_jstype.definition.get_connectedBody = function() { return CS.Call(2, 50, 0, false, this); }
_jstype.definition.set_connectedBody = function(v) { return CS.Call(3, 50, 0, false, this, v); }

_jstype.definition.get_collideConnected = function() { return CS.Call(2, 50, 1, false, this); }
_jstype.definition.set_collideConnected = function(v) { return CS.Call(3, 50, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AnchoredJoint2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AnchoredJoint2D",
    baseTypeName: "UnityEngine.Joint2D"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 51, 0, true, this); }

// fields

// properties

_jstype.definition.get_anchor = function() { return CS.Call(2, 51, 0, false, this); }
_jstype.definition.set_anchor = function(v) { return CS.Call(3, 51, 0, false, this, v); }

_jstype.definition.get_connectedAnchor = function() { return CS.Call(2, 51, 1, false, this); }
_jstype.definition.set_connectedAnchor = function(v) { return CS.Call(3, 51, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$SpringJoint2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.SpringJoint2D",
    baseTypeName: "UnityEngine.AnchoredJoint2D"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 52, 0, true, this); }

// fields

// properties

_jstype.definition.get_distance = function() { return CS.Call(2, 52, 0, false, this); }
_jstype.definition.set_distance = function(v) { return CS.Call(3, 52, 0, false, this, v); }

_jstype.definition.get_dampingRatio = function() { return CS.Call(2, 52, 1, false, this); }
_jstype.definition.set_dampingRatio = function(v) { return CS.Call(3, 52, 1, false, this, v); }

_jstype.definition.get_frequency = function() { return CS.Call(2, 52, 2, false, this); }
_jstype.definition.set_frequency = function(v) { return CS.Call(3, 52, 2, false, this, v); }

// methods

/* Vector2 */
_jstype.definition.GetReactionForce = function(a0/*Single*/) { 
    
    return CS.Call(4, 52, 0, false, this, a0); 
}
/* Single */
_jstype.definition.GetReactionTorque = function(a0/*Single*/) { 
    
    return CS.Call(4, 52, 1, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$DistanceJoint2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.DistanceJoint2D",
    baseTypeName: "UnityEngine.AnchoredJoint2D"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 53, 0, true, this); }

// fields

// properties

_jstype.definition.get_distance = function() { return CS.Call(2, 53, 0, false, this); }
_jstype.definition.set_distance = function(v) { return CS.Call(3, 53, 0, false, this, v); }

_jstype.definition.get_maxDistanceOnly = function() { return CS.Call(2, 53, 1, false, this); }
_jstype.definition.set_maxDistanceOnly = function(v) { return CS.Call(3, 53, 1, false, this, v); }

// methods

/* Vector2 */
_jstype.definition.GetReactionForce = function(a0/*Single*/) { 
    
    return CS.Call(4, 53, 0, false, this, a0); 
}
/* Single */
_jstype.definition.GetReactionTorque = function(a0/*Single*/) { 
    
    return CS.Call(4, 53, 1, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$HingeJoint2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.HingeJoint2D",
    baseTypeName: "UnityEngine.AnchoredJoint2D"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 54, 0, true, this); }

// fields

// properties

_jstype.definition.get_useMotor = function() { return CS.Call(2, 54, 0, false, this); }
_jstype.definition.set_useMotor = function(v) { return CS.Call(3, 54, 0, false, this, v); }

_jstype.definition.get_useLimits = function() { return CS.Call(2, 54, 1, false, this); }
_jstype.definition.set_useLimits = function(v) { return CS.Call(3, 54, 1, false, this, v); }

_jstype.definition.get_motor = function() { return CS.Call(2, 54, 2, false, this); }
_jstype.definition.set_motor = function(v) { return CS.Call(3, 54, 2, false, this, v); }

_jstype.definition.get_limits = function() { return CS.Call(2, 54, 3, false, this); }
_jstype.definition.set_limits = function(v) { return CS.Call(3, 54, 3, false, this, v); }

_jstype.definition.get_limitState = function() { return CS.Call(2, 54, 4, false, this); }
_jstype.definition.set_limitState = function(v) { return CS.Call(3, 54, 4, false, this, v); }

_jstype.definition.get_referenceAngle = function() { return CS.Call(2, 54, 5, false, this); }
_jstype.definition.set_referenceAngle = function(v) { return CS.Call(3, 54, 5, false, this, v); }

_jstype.definition.get_jointAngle = function() { return CS.Call(2, 54, 6, false, this); }
_jstype.definition.set_jointAngle = function(v) { return CS.Call(3, 54, 6, false, this, v); }

_jstype.definition.get_jointSpeed = function() { return CS.Call(2, 54, 7, false, this); }
_jstype.definition.set_jointSpeed = function(v) { return CS.Call(3, 54, 7, false, this, v); }

// methods

/* Single */
_jstype.definition.GetMotorTorque = function(a0/*Single*/) { 
    
    return CS.Call(4, 54, 0, false, this, a0); 
}
/* Vector2 */
_jstype.definition.GetReactionForce = function(a0/*Single*/) { 
    
    return CS.Call(4, 54, 1, false, this, a0); 
}
/* Single */
_jstype.definition.GetReactionTorque = function(a0/*Single*/) { 
    
    return CS.Call(4, 54, 2, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$SliderJoint2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.SliderJoint2D",
    baseTypeName: "UnityEngine.AnchoredJoint2D"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 55, 0, true, this); }

// fields

// properties

_jstype.definition.get_angle = function() { return CS.Call(2, 55, 0, false, this); }
_jstype.definition.set_angle = function(v) { return CS.Call(3, 55, 0, false, this, v); }

_jstype.definition.get_useMotor = function() { return CS.Call(2, 55, 1, false, this); }
_jstype.definition.set_useMotor = function(v) { return CS.Call(3, 55, 1, false, this, v); }

_jstype.definition.get_useLimits = function() { return CS.Call(2, 55, 2, false, this); }
_jstype.definition.set_useLimits = function(v) { return CS.Call(3, 55, 2, false, this, v); }

_jstype.definition.get_motor = function() { return CS.Call(2, 55, 3, false, this); }
_jstype.definition.set_motor = function(v) { return CS.Call(3, 55, 3, false, this, v); }

_jstype.definition.get_limits = function() { return CS.Call(2, 55, 4, false, this); }
_jstype.definition.set_limits = function(v) { return CS.Call(3, 55, 4, false, this, v); }

_jstype.definition.get_limitState = function() { return CS.Call(2, 55, 5, false, this); }
_jstype.definition.set_limitState = function(v) { return CS.Call(3, 55, 5, false, this, v); }

_jstype.definition.get_referenceAngle = function() { return CS.Call(2, 55, 6, false, this); }
_jstype.definition.set_referenceAngle = function(v) { return CS.Call(3, 55, 6, false, this, v); }

_jstype.definition.get_jointTranslation = function() { return CS.Call(2, 55, 7, false, this); }
_jstype.definition.set_jointTranslation = function(v) { return CS.Call(3, 55, 7, false, this, v); }

_jstype.definition.get_jointSpeed = function() { return CS.Call(2, 55, 8, false, this); }
_jstype.definition.set_jointSpeed = function(v) { return CS.Call(3, 55, 8, false, this, v); }

// methods

/* Single */
_jstype.definition.GetMotorForce = function(a0/*Single*/) { 
    
    return CS.Call(4, 55, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$WheelJoint2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.WheelJoint2D",
    baseTypeName: "UnityEngine.AnchoredJoint2D"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 56, 0, true, this); }

// fields

// properties

_jstype.definition.get_suspension = function() { return CS.Call(2, 56, 0, false, this); }
_jstype.definition.set_suspension = function(v) { return CS.Call(3, 56, 0, false, this, v); }

_jstype.definition.get_useMotor = function() { return CS.Call(2, 56, 1, false, this); }
_jstype.definition.set_useMotor = function(v) { return CS.Call(3, 56, 1, false, this, v); }

_jstype.definition.get_motor = function() { return CS.Call(2, 56, 2, false, this); }
_jstype.definition.set_motor = function(v) { return CS.Call(3, 56, 2, false, this, v); }

_jstype.definition.get_jointTranslation = function() { return CS.Call(2, 56, 3, false, this); }
_jstype.definition.set_jointTranslation = function(v) { return CS.Call(3, 56, 3, false, this, v); }

_jstype.definition.get_jointSpeed = function() { return CS.Call(2, 56, 4, false, this); }
_jstype.definition.set_jointSpeed = function(v) { return CS.Call(3, 56, 4, false, this, v); }

// methods

/* Single */
_jstype.definition.GetMotorTorque = function(a0/*Single*/) { 
    
    return CS.Call(4, 56, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$PhysicsMaterial2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.PhysicsMaterial2D",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 57, 0, true, this); }
_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 57, 1, true, this, a0); }

// fields

// properties

_jstype.definition.get_bounciness = function() { return CS.Call(2, 57, 0, false, this); }
_jstype.definition.set_bounciness = function(v) { return CS.Call(3, 57, 0, false, this, v); }

_jstype.definition.get_friction = function() { return CS.Call(2, 57, 1, false, this); }
_jstype.definition.set_friction = function(v) { return CS.Call(3, 57, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$NavMeshAgent
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.NavMeshAgent",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 58, 0, true, this); }

// fields

// properties

_jstype.definition.get_destination = function() { return CS.Call(2, 58, 0, false, this); }
_jstype.definition.set_destination = function(v) { return CS.Call(3, 58, 0, false, this, v); }

_jstype.definition.get_stoppingDistance = function() { return CS.Call(2, 58, 1, false, this); }
_jstype.definition.set_stoppingDistance = function(v) { return CS.Call(3, 58, 1, false, this, v); }

_jstype.definition.get_velocity = function() { return CS.Call(2, 58, 2, false, this); }
_jstype.definition.set_velocity = function(v) { return CS.Call(3, 58, 2, false, this, v); }

_jstype.definition.get_nextPosition = function() { return CS.Call(2, 58, 3, false, this); }
_jstype.definition.set_nextPosition = function(v) { return CS.Call(3, 58, 3, false, this, v); }

_jstype.definition.get_steeringTarget = function() { return CS.Call(2, 58, 4, false, this); }
_jstype.definition.set_steeringTarget = function(v) { return CS.Call(3, 58, 4, false, this, v); }

_jstype.definition.get_desiredVelocity = function() { return CS.Call(2, 58, 5, false, this); }
_jstype.definition.set_desiredVelocity = function(v) { return CS.Call(3, 58, 5, false, this, v); }

_jstype.definition.get_remainingDistance = function() { return CS.Call(2, 58, 6, false, this); }
_jstype.definition.set_remainingDistance = function(v) { return CS.Call(3, 58, 6, false, this, v); }

_jstype.definition.get_baseOffset = function() { return CS.Call(2, 58, 7, false, this); }
_jstype.definition.set_baseOffset = function(v) { return CS.Call(3, 58, 7, false, this, v); }

_jstype.definition.get_isOnOffMeshLink = function() { return CS.Call(2, 58, 8, false, this); }
_jstype.definition.set_isOnOffMeshLink = function(v) { return CS.Call(3, 58, 8, false, this, v); }

_jstype.definition.get_currentOffMeshLinkData = function() { return CS.Call(2, 58, 9, false, this); }
_jstype.definition.set_currentOffMeshLinkData = function(v) { return CS.Call(3, 58, 9, false, this, v); }

_jstype.definition.get_nextOffMeshLinkData = function() { return CS.Call(2, 58, 10, false, this); }
_jstype.definition.set_nextOffMeshLinkData = function(v) { return CS.Call(3, 58, 10, false, this, v); }

_jstype.definition.get_autoTraverseOffMeshLink = function() { return CS.Call(2, 58, 11, false, this); }
_jstype.definition.set_autoTraverseOffMeshLink = function(v) { return CS.Call(3, 58, 11, false, this, v); }

_jstype.definition.get_autoBraking = function() { return CS.Call(2, 58, 12, false, this); }
_jstype.definition.set_autoBraking = function(v) { return CS.Call(3, 58, 12, false, this, v); }

_jstype.definition.get_autoRepath = function() { return CS.Call(2, 58, 13, false, this); }
_jstype.definition.set_autoRepath = function(v) { return CS.Call(3, 58, 13, false, this, v); }

_jstype.definition.get_hasPath = function() { return CS.Call(2, 58, 14, false, this); }
_jstype.definition.set_hasPath = function(v) { return CS.Call(3, 58, 14, false, this, v); }

_jstype.definition.get_pathPending = function() { return CS.Call(2, 58, 15, false, this); }
_jstype.definition.set_pathPending = function(v) { return CS.Call(3, 58, 15, false, this, v); }

_jstype.definition.get_isPathStale = function() { return CS.Call(2, 58, 16, false, this); }
_jstype.definition.set_isPathStale = function(v) { return CS.Call(3, 58, 16, false, this, v); }

_jstype.definition.get_pathStatus = function() { return CS.Call(2, 58, 17, false, this); }
_jstype.definition.set_pathStatus = function(v) { return CS.Call(3, 58, 17, false, this, v); }

_jstype.definition.get_pathEndPosition = function() { return CS.Call(2, 58, 18, false, this); }
_jstype.definition.set_pathEndPosition = function(v) { return CS.Call(3, 58, 18, false, this, v); }

_jstype.definition.get_path = function() { return CS.Call(2, 58, 19, false, this); }
_jstype.definition.set_path = function(v) { return CS.Call(3, 58, 19, false, this, v); }

_jstype.definition.get_walkableMask = function() { return CS.Call(2, 58, 20, false, this); }
_jstype.definition.set_walkableMask = function(v) { return CS.Call(3, 58, 20, false, this, v); }

_jstype.definition.get_speed = function() { return CS.Call(2, 58, 21, false, this); }
_jstype.definition.set_speed = function(v) { return CS.Call(3, 58, 21, false, this, v); }

_jstype.definition.get_angularSpeed = function() { return CS.Call(2, 58, 22, false, this); }
_jstype.definition.set_angularSpeed = function(v) { return CS.Call(3, 58, 22, false, this, v); }

_jstype.definition.get_acceleration = function() { return CS.Call(2, 58, 23, false, this); }
_jstype.definition.set_acceleration = function(v) { return CS.Call(3, 58, 23, false, this, v); }

_jstype.definition.get_updatePosition = function() { return CS.Call(2, 58, 24, false, this); }
_jstype.definition.set_updatePosition = function(v) { return CS.Call(3, 58, 24, false, this, v); }

_jstype.definition.get_updateRotation = function() { return CS.Call(2, 58, 25, false, this); }
_jstype.definition.set_updateRotation = function(v) { return CS.Call(3, 58, 25, false, this, v); }

_jstype.definition.get_radius = function() { return CS.Call(2, 58, 26, false, this); }
_jstype.definition.set_radius = function(v) { return CS.Call(3, 58, 26, false, this, v); }

_jstype.definition.get_height = function() { return CS.Call(2, 58, 27, false, this); }
_jstype.definition.set_height = function(v) { return CS.Call(3, 58, 27, false, this, v); }

_jstype.definition.get_obstacleAvoidanceType = function() { return CS.Call(2, 58, 28, false, this); }
_jstype.definition.set_obstacleAvoidanceType = function(v) { return CS.Call(3, 58, 28, false, this, v); }

_jstype.definition.get_avoidancePriority = function() { return CS.Call(2, 58, 29, false, this); }
_jstype.definition.set_avoidancePriority = function(v) { return CS.Call(3, 58, 29, false, this, v); }

// methods

/* Void */
_jstype.definition.ActivateCurrentOffMeshLink = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 58, 0, false, this, a0); 
}
/* Boolean */
_jstype.definition.CalculatePath = function(a0/*Vector3*/, a1/*NavMeshPath*/) { 
    
    return CS.Call(4, 58, 1, false, this, a0, a1); 
}
/* Void */
_jstype.definition.CompleteOffMeshLink = function() { 
    
    return CS.Call(4, 58, 2, false, this); 
}
/* Boolean */
_jstype.definition.FindClosestEdge = function(a0/*NavMeshHit&*/) { 
    
    return CS.Call(4, 58, 3, false, this, a0); 
}
/* Single */
_jstype.definition.GetLayerCost = function(a0/*Int32*/) { 
    
    return CS.Call(4, 58, 4, false, this, a0); 
}
/* Void */
_jstype.definition.Move = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 58, 5, false, this, a0); 
}
/* Boolean */
_jstype.definition.Raycast = function(a0/*Vector3*/, a1/*NavMeshHit&*/) { 
    
    return CS.Call(4, 58, 6, false, this, a0, a1); 
}
/* Void */
_jstype.definition.ResetPath = function() { 
    
    return CS.Call(4, 58, 7, false, this); 
}
/* Void */
_jstype.definition.Resume = function() { 
    
    return CS.Call(4, 58, 8, false, this); 
}
/* Boolean */
_jstype.definition.SamplePathPosition = function(a0/*Int32*/, a1/*Single*/, a2/*NavMeshHit&*/) { 
    
    return CS.Call(4, 58, 9, false, this, a0, a1, a2); 
}
/* Boolean */
_jstype.definition.SetDestination = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 58, 10, false, this, a0); 
}
/* Void */
_jstype.definition.SetLayerCost = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 58, 11, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.SetPath = function(a0/*NavMeshPath*/) { 
    
    return CS.Call(4, 58, 12, false, this, a0); 
}
/* Void */
_jstype.definition.Stop$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 58, 13, false, this, a0); 
}
/* Void */
_jstype.definition.Stop = function() { 
    
    return CS.Call(4, 58, 14, false, this); 
}
/* Boolean */
_jstype.definition.Warp = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 58, 15, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$NavMesh
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.NavMesh",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 59, 0, true, this); }

// fields

// properties

// methods

/* static Void  */
_jstype.staticDefinition.AddOffMeshLinks = function() { 
    
    return CS.Call(4, 59, 0, true); 
}
/* static Boolean  */
_jstype.staticDefinition.CalculatePath = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Int32*/, a3/*NavMeshPath*/) { 
    
    return CS.Call(4, 59, 1, true, a0, a1, a2, a3); 
}
/* static NavMeshTriangulation  */
_jstype.staticDefinition.CalculateTriangulation = function() { 
    
    return CS.Call(4, 59, 2, true); 
}
/* static Boolean  */
_jstype.staticDefinition.FindClosestEdge = function(a0/*Vector3*/, a1/*NavMeshHit&*/, a2/*Int32*/) { 
    
    return CS.Call(4, 59, 3, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.GetLayerCost = function(a0/*Int32*/) { 
    
    return CS.Call(4, 59, 4, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.GetNavMeshLayerFromName = function(a0/*String*/) { 
    
    return CS.Call(4, 59, 5, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.Raycast = function(a0/*Vector3*/, a1/*Vector3*/, a2/*NavMeshHit&*/, a3/*Int32*/) { 
    
    return CS.Call(4, 59, 6, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.RestoreNavMesh = function() { 
    
    return CS.Call(4, 59, 7, true); 
}
/* static Boolean  */
_jstype.staticDefinition.SamplePosition = function(a0/*Vector3*/, a1/*NavMeshHit&*/, a2/*Single*/, a3/*Int32*/) { 
    
    return CS.Call(4, 59, 8, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.SetLayerCost = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 59, 9, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$OffMeshLink
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.OffMeshLink",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 60, 0, true, this); }

// fields

// properties

_jstype.definition.get_activated = function() { return CS.Call(2, 60, 0, false, this); }
_jstype.definition.set_activated = function(v) { return CS.Call(3, 60, 0, false, this, v); }

_jstype.definition.get_occupied = function() { return CS.Call(2, 60, 1, false, this); }
_jstype.definition.set_occupied = function(v) { return CS.Call(3, 60, 1, false, this, v); }

_jstype.definition.get_costOverride = function() { return CS.Call(2, 60, 2, false, this); }
_jstype.definition.set_costOverride = function(v) { return CS.Call(3, 60, 2, false, this, v); }

_jstype.definition.get_biDirectional = function() { return CS.Call(2, 60, 3, false, this); }
_jstype.definition.set_biDirectional = function(v) { return CS.Call(3, 60, 3, false, this, v); }

_jstype.definition.get_navMeshLayer = function() { return CS.Call(2, 60, 4, false, this); }
_jstype.definition.set_navMeshLayer = function(v) { return CS.Call(3, 60, 4, false, this, v); }

_jstype.definition.get_autoUpdatePositions = function() { return CS.Call(2, 60, 5, false, this); }
_jstype.definition.set_autoUpdatePositions = function(v) { return CS.Call(3, 60, 5, false, this, v); }

_jstype.definition.get_startTransform = function() { return CS.Call(2, 60, 6, false, this); }
_jstype.definition.set_startTransform = function(v) { return CS.Call(3, 60, 6, false, this, v); }

_jstype.definition.get_endTransform = function() { return CS.Call(2, 60, 7, false, this); }
_jstype.definition.set_endTransform = function(v) { return CS.Call(3, 60, 7, false, this, v); }

// methods

/* Void */
_jstype.definition.UpdatePositions = function() { 
    
    return CS.Call(4, 60, 0, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$NavMeshPath
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.NavMeshPath",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 61, 0, true, this); }

// fields

// properties

_jstype.definition.get_corners = function() { return CS.Call(2, 61, 0, false, this); }
_jstype.definition.set_corners = function(v) { return CS.Call(3, 61, 0, false, this, v); }

_jstype.definition.get_status = function() { return CS.Call(2, 61, 1, false, this); }
_jstype.definition.set_status = function(v) { return CS.Call(3, 61, 1, false, this, v); }

// methods

/* Void */
_jstype.definition.ClearCorners = function() { 
    
    return CS.Call(4, 61, 0, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$NavMeshObstacle
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.NavMeshObstacle",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 62, 0, true, this); }

// fields

// properties

_jstype.definition.get_height = function() { return CS.Call(2, 62, 0, false, this); }
_jstype.definition.set_height = function(v) { return CS.Call(3, 62, 0, false, this, v); }

_jstype.definition.get_radius = function() { return CS.Call(2, 62, 1, false, this); }
_jstype.definition.set_radius = function(v) { return CS.Call(3, 62, 1, false, this, v); }

_jstype.definition.get_velocity = function() { return CS.Call(2, 62, 2, false, this); }
_jstype.definition.set_velocity = function(v) { return CS.Call(3, 62, 2, false, this, v); }

_jstype.definition.get_carving = function() { return CS.Call(2, 62, 3, false, this); }
_jstype.definition.set_carving = function(v) { return CS.Call(3, 62, 3, false, this, v); }

_jstype.definition.get_carvingMoveThreshold = function() { return CS.Call(2, 62, 4, false, this); }
_jstype.definition.set_carvingMoveThreshold = function(v) { return CS.Call(3, 62, 4, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AudioSettings
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AudioSettings",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 63, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_driverCaps = function() { return CS.Call(2, 63, 0, true); }
_jstype.staticDefinition.set_driverCaps = function(v) { return CS.Call(3, 63, 0, true, v); }

_jstype.staticDefinition.get_speakerMode = function() { return CS.Call(2, 63, 1, true); }
_jstype.staticDefinition.set_speakerMode = function(v) { return CS.Call(3, 63, 1, true, v); }

_jstype.staticDefinition.get_dspTime = function() { return CS.Call(2, 63, 2, true); }
_jstype.staticDefinition.set_dspTime = function(v) { return CS.Call(3, 63, 2, true, v); }

_jstype.staticDefinition.get_outputSampleRate = function() { return CS.Call(2, 63, 3, true); }
_jstype.staticDefinition.set_outputSampleRate = function(v) { return CS.Call(3, 63, 3, true, v); }

// methods

/* static Void  */
_jstype.staticDefinition.GetDSPBufferSize = function(a0/*Int32&*/, a1/*Int32&*/) { 
    
    return CS.Call(4, 63, 0, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetDSPBufferSize = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 63, 1, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AudioClip
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AudioClip",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 64, 0, true, this); }

// fields

// properties

_jstype.definition.get_length = function() { return CS.Call(2, 64, 0, false, this); }
_jstype.definition.set_length = function(v) { return CS.Call(3, 64, 0, false, this, v); }

_jstype.definition.get_samples = function() { return CS.Call(2, 64, 1, false, this); }
_jstype.definition.set_samples = function(v) { return CS.Call(3, 64, 1, false, this, v); }

_jstype.definition.get_channels = function() { return CS.Call(2, 64, 2, false, this); }
_jstype.definition.set_channels = function(v) { return CS.Call(3, 64, 2, false, this, v); }

_jstype.definition.get_frequency = function() { return CS.Call(2, 64, 3, false, this); }
_jstype.definition.set_frequency = function(v) { return CS.Call(3, 64, 3, false, this, v); }

_jstype.definition.get_isReadyToPlay = function() { return CS.Call(2, 64, 4, false, this); }
_jstype.definition.set_isReadyToPlay = function(v) { return CS.Call(3, 64, 4, false, this, v); }

// methods

/* Void */
_jstype.definition.GetData = function(a0/*Single[]*/, a1/*Int32*/) { 
    
    return CS.Call(4, 64, 0, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetData = function(a0/*Single[]*/, a1/*Int32*/) { 
    
    return CS.Call(4, 64, 1, false, this, a0, a1); 
}
/* static AudioClip  */
_jstype.staticDefinition.Create$$String$$Int32$$Int32$$Int32$$Boolean$$Boolean$$PCMReaderCallback$$PCMSetPositionCallback = function(a0/*String*/, a1/*Int32*/, a2/*Int32*/, a3/*Int32*/, a4/*Boolean*/, a5/*Boolean*/, a6/*PCMReaderCallback*/, a7/*PCMSetPositionCallback*/) { 
    
    return CS.Call(4, 64, 2, true, a0, a1, a2, a3, a4, a5, a6, a7); 
}
/* static AudioClip  */
_jstype.staticDefinition.Create$$String$$Int32$$Int32$$Int32$$Boolean$$Boolean$$PCMReaderCallback = function(a0/*String*/, a1/*Int32*/, a2/*Int32*/, a3/*Int32*/, a4/*Boolean*/, a5/*Boolean*/, a6/*PCMReaderCallback*/) { 
    
    return CS.Call(4, 64, 3, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static AudioClip  */
_jstype.staticDefinition.Create$$String$$Int32$$Int32$$Int32$$Boolean$$Boolean = function(a0/*String*/, a1/*Int32*/, a2/*Int32*/, a3/*Int32*/, a4/*Boolean*/, a5/*Boolean*/) { 
    
    return CS.Call(4, 64, 4, true, a0, a1, a2, a3, a4, a5); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AudioListener
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AudioListener",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 65, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_volume = function() { return CS.Call(2, 65, 0, true); }
_jstype.staticDefinition.set_volume = function(v) { return CS.Call(3, 65, 0, true, v); }

_jstype.staticDefinition.get_pause = function() { return CS.Call(2, 65, 1, true); }
_jstype.staticDefinition.set_pause = function(v) { return CS.Call(3, 65, 1, true, v); }

_jstype.definition.get_velocityUpdateMode = function() { return CS.Call(2, 65, 2, false, this); }
_jstype.definition.set_velocityUpdateMode = function(v) { return CS.Call(3, 65, 2, false, this, v); }

// methods

/* static Void  */
_jstype.staticDefinition.GetOutputData$$Single$Array$$Int32 = function(a0/*Single[]*/, a1/*Int32*/) { 
    
    return CS.Call(4, 65, 0, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.GetSpectrumData$$Single$Array$$Int32$$FFTWindow = function(a0/*Single[]*/, a1/*Int32*/, a2/*FFTWindow*/) { 
    
    return CS.Call(4, 65, 1, true, a0, a1, a2); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AudioSource
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AudioSource",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 66, 0, true, this); }

// fields

// properties

_jstype.definition.get_volume = function() { return CS.Call(2, 66, 0, false, this); }
_jstype.definition.set_volume = function(v) { return CS.Call(3, 66, 0, false, this, v); }

_jstype.definition.get_pitch = function() { return CS.Call(2, 66, 1, false, this); }
_jstype.definition.set_pitch = function(v) { return CS.Call(3, 66, 1, false, this, v); }

_jstype.definition.get_time = function() { return CS.Call(2, 66, 2, false, this); }
_jstype.definition.set_time = function(v) { return CS.Call(3, 66, 2, false, this, v); }

_jstype.definition.get_timeSamples = function() { return CS.Call(2, 66, 3, false, this); }
_jstype.definition.set_timeSamples = function(v) { return CS.Call(3, 66, 3, false, this, v); }

_jstype.definition.get_clip = function() { return CS.Call(2, 66, 4, false, this); }
_jstype.definition.set_clip = function(v) { return CS.Call(3, 66, 4, false, this, v); }

_jstype.definition.get_isPlaying = function() { return CS.Call(2, 66, 5, false, this); }
_jstype.definition.set_isPlaying = function(v) { return CS.Call(3, 66, 5, false, this, v); }

_jstype.definition.get_loop = function() { return CS.Call(2, 66, 6, false, this); }
_jstype.definition.set_loop = function(v) { return CS.Call(3, 66, 6, false, this, v); }

_jstype.definition.get_ignoreListenerVolume = function() { return CS.Call(2, 66, 7, false, this); }
_jstype.definition.set_ignoreListenerVolume = function(v) { return CS.Call(3, 66, 7, false, this, v); }

_jstype.definition.get_playOnAwake = function() { return CS.Call(2, 66, 8, false, this); }
_jstype.definition.set_playOnAwake = function(v) { return CS.Call(3, 66, 8, false, this, v); }

_jstype.definition.get_ignoreListenerPause = function() { return CS.Call(2, 66, 9, false, this); }
_jstype.definition.set_ignoreListenerPause = function(v) { return CS.Call(3, 66, 9, false, this, v); }

_jstype.definition.get_velocityUpdateMode = function() { return CS.Call(2, 66, 10, false, this); }
_jstype.definition.set_velocityUpdateMode = function(v) { return CS.Call(3, 66, 10, false, this, v); }

_jstype.definition.get_panLevel = function() { return CS.Call(2, 66, 11, false, this); }
_jstype.definition.set_panLevel = function(v) { return CS.Call(3, 66, 11, false, this, v); }

_jstype.definition.get_bypassEffects = function() { return CS.Call(2, 66, 12, false, this); }
_jstype.definition.set_bypassEffects = function(v) { return CS.Call(3, 66, 12, false, this, v); }

_jstype.definition.get_bypassListenerEffects = function() { return CS.Call(2, 66, 13, false, this); }
_jstype.definition.set_bypassListenerEffects = function(v) { return CS.Call(3, 66, 13, false, this, v); }

_jstype.definition.get_bypassReverbZones = function() { return CS.Call(2, 66, 14, false, this); }
_jstype.definition.set_bypassReverbZones = function(v) { return CS.Call(3, 66, 14, false, this, v); }

_jstype.definition.get_dopplerLevel = function() { return CS.Call(2, 66, 15, false, this); }
_jstype.definition.set_dopplerLevel = function(v) { return CS.Call(3, 66, 15, false, this, v); }

_jstype.definition.get_spread = function() { return CS.Call(2, 66, 16, false, this); }
_jstype.definition.set_spread = function(v) { return CS.Call(3, 66, 16, false, this, v); }

_jstype.definition.get_priority = function() { return CS.Call(2, 66, 17, false, this); }
_jstype.definition.set_priority = function(v) { return CS.Call(3, 66, 17, false, this, v); }

_jstype.definition.get_mute = function() { return CS.Call(2, 66, 18, false, this); }
_jstype.definition.set_mute = function(v) { return CS.Call(3, 66, 18, false, this, v); }

_jstype.definition.get_minDistance = function() { return CS.Call(2, 66, 19, false, this); }
_jstype.definition.set_minDistance = function(v) { return CS.Call(3, 66, 19, false, this, v); }

_jstype.definition.get_maxDistance = function() { return CS.Call(2, 66, 20, false, this); }
_jstype.definition.set_maxDistance = function(v) { return CS.Call(3, 66, 20, false, this, v); }

_jstype.definition.get_pan = function() { return CS.Call(2, 66, 21, false, this); }
_jstype.definition.set_pan = function(v) { return CS.Call(3, 66, 21, false, this, v); }

_jstype.definition.get_rolloffMode = function() { return CS.Call(2, 66, 22, false, this); }
_jstype.definition.set_rolloffMode = function(v) { return CS.Call(3, 66, 22, false, this, v); }

// methods

/* Void */
_jstype.definition.GetOutputData$$Single$Array$$Int32 = function(a0/*Single[]*/, a1/*Int32*/) { 
    
    return CS.Call(4, 66, 0, false, this, a0, a1); 
}
/* Void */
_jstype.definition.GetSpectrumData$$Single$Array$$Int32$$FFTWindow = function(a0/*Single[]*/, a1/*Int32*/, a2/*FFTWindow*/) { 
    
    return CS.Call(4, 66, 1, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.Pause = function() { 
    
    return CS.Call(4, 66, 2, false, this); 
}
/* Void */
_jstype.definition.Play$$UInt64 = function(a0/*UInt64*/) { 
    
    return CS.Call(4, 66, 3, false, this, a0); 
}
/* Void */
_jstype.definition.Play = function() { 
    
    return CS.Call(4, 66, 4, false, this); 
}
/* Void */
_jstype.definition.PlayDelayed = function(a0/*Single*/) { 
    
    return CS.Call(4, 66, 5, false, this, a0); 
}
/* Void */
_jstype.definition.PlayOneShot$$AudioClip$$Single = function(a0/*AudioClip*/, a1/*Single*/) { 
    
    return CS.Call(4, 66, 6, false, this, a0, a1); 
}
/* Void */
_jstype.definition.PlayOneShot$$AudioClip = function(a0/*AudioClip*/) { 
    
    return CS.Call(4, 66, 7, false, this, a0); 
}
/* Void */
_jstype.definition.PlayScheduled = function(a0/*Double*/) { 
    
    return CS.Call(4, 66, 8, false, this, a0); 
}
/* Void */
_jstype.definition.SetScheduledEndTime = function(a0/*Double*/) { 
    
    return CS.Call(4, 66, 9, false, this, a0); 
}
/* Void */
_jstype.definition.SetScheduledStartTime = function(a0/*Double*/) { 
    
    return CS.Call(4, 66, 10, false, this, a0); 
}
/* Void */
_jstype.definition.Stop = function() { 
    
    return CS.Call(4, 66, 11, false, this); 
}
/* static Void  */
_jstype.staticDefinition.PlayClipAtPoint$$AudioClip$$Vector3$$Single = function(a0/*AudioClip*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 66, 12, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.PlayClipAtPoint$$AudioClip$$Vector3 = function(a0/*AudioClip*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 66, 13, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AudioReverbZone
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AudioReverbZone",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 67, 0, true, this); }

// fields

// properties

_jstype.definition.get_minDistance = function() { return CS.Call(2, 67, 0, false, this); }
_jstype.definition.set_minDistance = function(v) { return CS.Call(3, 67, 0, false, this, v); }

_jstype.definition.get_maxDistance = function() { return CS.Call(2, 67, 1, false, this); }
_jstype.definition.set_maxDistance = function(v) { return CS.Call(3, 67, 1, false, this, v); }

_jstype.definition.get_reverbPreset = function() { return CS.Call(2, 67, 2, false, this); }
_jstype.definition.set_reverbPreset = function(v) { return CS.Call(3, 67, 2, false, this, v); }

_jstype.definition.get_room = function() { return CS.Call(2, 67, 3, false, this); }
_jstype.definition.set_room = function(v) { return CS.Call(3, 67, 3, false, this, v); }

_jstype.definition.get_roomHF = function() { return CS.Call(2, 67, 4, false, this); }
_jstype.definition.set_roomHF = function(v) { return CS.Call(3, 67, 4, false, this, v); }

_jstype.definition.get_roomLF = function() { return CS.Call(2, 67, 5, false, this); }
_jstype.definition.set_roomLF = function(v) { return CS.Call(3, 67, 5, false, this, v); }

_jstype.definition.get_decayTime = function() { return CS.Call(2, 67, 6, false, this); }
_jstype.definition.set_decayTime = function(v) { return CS.Call(3, 67, 6, false, this, v); }

_jstype.definition.get_decayHFRatio = function() { return CS.Call(2, 67, 7, false, this); }
_jstype.definition.set_decayHFRatio = function(v) { return CS.Call(3, 67, 7, false, this, v); }

_jstype.definition.get_reflections = function() { return CS.Call(2, 67, 8, false, this); }
_jstype.definition.set_reflections = function(v) { return CS.Call(3, 67, 8, false, this, v); }

_jstype.definition.get_reflectionsDelay = function() { return CS.Call(2, 67, 9, false, this); }
_jstype.definition.set_reflectionsDelay = function(v) { return CS.Call(3, 67, 9, false, this, v); }

_jstype.definition.get_reverb = function() { return CS.Call(2, 67, 10, false, this); }
_jstype.definition.set_reverb = function(v) { return CS.Call(3, 67, 10, false, this, v); }

_jstype.definition.get_reverbDelay = function() { return CS.Call(2, 67, 11, false, this); }
_jstype.definition.set_reverbDelay = function(v) { return CS.Call(3, 67, 11, false, this, v); }

_jstype.definition.get_HFReference = function() { return CS.Call(2, 67, 12, false, this); }
_jstype.definition.set_HFReference = function(v) { return CS.Call(3, 67, 12, false, this, v); }

_jstype.definition.get_LFReference = function() { return CS.Call(2, 67, 13, false, this); }
_jstype.definition.set_LFReference = function(v) { return CS.Call(3, 67, 13, false, this, v); }

_jstype.definition.get_roomRolloffFactor = function() { return CS.Call(2, 67, 14, false, this); }
_jstype.definition.set_roomRolloffFactor = function(v) { return CS.Call(3, 67, 14, false, this, v); }

_jstype.definition.get_diffusion = function() { return CS.Call(2, 67, 15, false, this); }
_jstype.definition.set_diffusion = function(v) { return CS.Call(3, 67, 15, false, this, v); }

_jstype.definition.get_density = function() { return CS.Call(2, 67, 16, false, this); }
_jstype.definition.set_density = function(v) { return CS.Call(3, 67, 16, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AudioLowPassFilter
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AudioLowPassFilter",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 68, 0, true, this); }

// fields

// properties

_jstype.definition.get_cutoffFrequency = function() { return CS.Call(2, 68, 0, false, this); }
_jstype.definition.set_cutoffFrequency = function(v) { return CS.Call(3, 68, 0, false, this, v); }

_jstype.definition.get_lowpassResonaceQ = function() { return CS.Call(2, 68, 1, false, this); }
_jstype.definition.set_lowpassResonaceQ = function(v) { return CS.Call(3, 68, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AudioHighPassFilter
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AudioHighPassFilter",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 69, 0, true, this); }

// fields

// properties

_jstype.definition.get_cutoffFrequency = function() { return CS.Call(2, 69, 0, false, this); }
_jstype.definition.set_cutoffFrequency = function(v) { return CS.Call(3, 69, 0, false, this, v); }

_jstype.definition.get_highpassResonaceQ = function() { return CS.Call(2, 69, 1, false, this); }
_jstype.definition.set_highpassResonaceQ = function(v) { return CS.Call(3, 69, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AudioDistortionFilter
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AudioDistortionFilter",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 70, 0, true, this); }

// fields

// properties

_jstype.definition.get_distortionLevel = function() { return CS.Call(2, 70, 0, false, this); }
_jstype.definition.set_distortionLevel = function(v) { return CS.Call(3, 70, 0, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AudioEchoFilter
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AudioEchoFilter",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 71, 0, true, this); }

// fields

// properties

_jstype.definition.get_delay = function() { return CS.Call(2, 71, 0, false, this); }
_jstype.definition.set_delay = function(v) { return CS.Call(3, 71, 0, false, this, v); }

_jstype.definition.get_decayRatio = function() { return CS.Call(2, 71, 1, false, this); }
_jstype.definition.set_decayRatio = function(v) { return CS.Call(3, 71, 1, false, this, v); }

_jstype.definition.get_dryMix = function() { return CS.Call(2, 71, 2, false, this); }
_jstype.definition.set_dryMix = function(v) { return CS.Call(3, 71, 2, false, this, v); }

_jstype.definition.get_wetMix = function() { return CS.Call(2, 71, 3, false, this); }
_jstype.definition.set_wetMix = function(v) { return CS.Call(3, 71, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AudioChorusFilter
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AudioChorusFilter",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 72, 0, true, this); }

// fields

// properties

_jstype.definition.get_dryMix = function() { return CS.Call(2, 72, 0, false, this); }
_jstype.definition.set_dryMix = function(v) { return CS.Call(3, 72, 0, false, this, v); }

_jstype.definition.get_wetMix1 = function() { return CS.Call(2, 72, 1, false, this); }
_jstype.definition.set_wetMix1 = function(v) { return CS.Call(3, 72, 1, false, this, v); }

_jstype.definition.get_wetMix2 = function() { return CS.Call(2, 72, 2, false, this); }
_jstype.definition.set_wetMix2 = function(v) { return CS.Call(3, 72, 2, false, this, v); }

_jstype.definition.get_wetMix3 = function() { return CS.Call(2, 72, 3, false, this); }
_jstype.definition.set_wetMix3 = function(v) { return CS.Call(3, 72, 3, false, this, v); }

_jstype.definition.get_delay = function() { return CS.Call(2, 72, 4, false, this); }
_jstype.definition.set_delay = function(v) { return CS.Call(3, 72, 4, false, this, v); }

_jstype.definition.get_rate = function() { return CS.Call(2, 72, 5, false, this); }
_jstype.definition.set_rate = function(v) { return CS.Call(3, 72, 5, false, this, v); }

_jstype.definition.get_depth = function() { return CS.Call(2, 72, 6, false, this); }
_jstype.definition.set_depth = function(v) { return CS.Call(3, 72, 6, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AudioReverbFilter
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AudioReverbFilter",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 73, 0, true, this); }

// fields

// properties

_jstype.definition.get_reverbPreset = function() { return CS.Call(2, 73, 0, false, this); }
_jstype.definition.set_reverbPreset = function(v) { return CS.Call(3, 73, 0, false, this, v); }

_jstype.definition.get_dryLevel = function() { return CS.Call(2, 73, 1, false, this); }
_jstype.definition.set_dryLevel = function(v) { return CS.Call(3, 73, 1, false, this, v); }

_jstype.definition.get_room = function() { return CS.Call(2, 73, 2, false, this); }
_jstype.definition.set_room = function(v) { return CS.Call(3, 73, 2, false, this, v); }

_jstype.definition.get_roomHF = function() { return CS.Call(2, 73, 3, false, this); }
_jstype.definition.set_roomHF = function(v) { return CS.Call(3, 73, 3, false, this, v); }

_jstype.definition.get_roomRolloff = function() { return CS.Call(2, 73, 4, false, this); }
_jstype.definition.set_roomRolloff = function(v) { return CS.Call(3, 73, 4, false, this, v); }

_jstype.definition.get_decayTime = function() { return CS.Call(2, 73, 5, false, this); }
_jstype.definition.set_decayTime = function(v) { return CS.Call(3, 73, 5, false, this, v); }

_jstype.definition.get_decayHFRatio = function() { return CS.Call(2, 73, 6, false, this); }
_jstype.definition.set_decayHFRatio = function(v) { return CS.Call(3, 73, 6, false, this, v); }

_jstype.definition.get_reflectionsLevel = function() { return CS.Call(2, 73, 7, false, this); }
_jstype.definition.set_reflectionsLevel = function(v) { return CS.Call(3, 73, 7, false, this, v); }

_jstype.definition.get_reflectionsDelay = function() { return CS.Call(2, 73, 8, false, this); }
_jstype.definition.set_reflectionsDelay = function(v) { return CS.Call(3, 73, 8, false, this, v); }

_jstype.definition.get_reverbLevel = function() { return CS.Call(2, 73, 9, false, this); }
_jstype.definition.set_reverbLevel = function(v) { return CS.Call(3, 73, 9, false, this, v); }

_jstype.definition.get_reverbDelay = function() { return CS.Call(2, 73, 10, false, this); }
_jstype.definition.set_reverbDelay = function(v) { return CS.Call(3, 73, 10, false, this, v); }

_jstype.definition.get_diffusion = function() { return CS.Call(2, 73, 11, false, this); }
_jstype.definition.set_diffusion = function(v) { return CS.Call(3, 73, 11, false, this, v); }

_jstype.definition.get_density = function() { return CS.Call(2, 73, 12, false, this); }
_jstype.definition.set_density = function(v) { return CS.Call(3, 73, 12, false, this, v); }

_jstype.definition.get_hfReference = function() { return CS.Call(2, 73, 13, false, this); }
_jstype.definition.set_hfReference = function(v) { return CS.Call(3, 73, 13, false, this, v); }

_jstype.definition.get_roomLF = function() { return CS.Call(2, 73, 14, false, this); }
_jstype.definition.set_roomLF = function(v) { return CS.Call(3, 73, 14, false, this, v); }

_jstype.definition.get_lFReference = function() { return CS.Call(2, 73, 15, false, this); }
_jstype.definition.set_lFReference = function(v) { return CS.Call(3, 73, 15, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Microphone
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Microphone",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 74, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_devices = function() { return CS.Call(2, 74, 0, true); }
_jstype.staticDefinition.set_devices = function(v) { return CS.Call(3, 74, 0, true, v); }

// methods

/* static Void  */
_jstype.staticDefinition.End = function(a0/*String*/) { 
    
    return CS.Call(4, 74, 0, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.GetDeviceCaps = function(a0/*String*/, a1/*Int32&*/, a2/*Int32&*/) { 
    
    return CS.Call(4, 74, 1, true, a0, a1, a2); 
}
/* static Int32  */
_jstype.staticDefinition.GetPosition = function(a0/*String*/) { 
    
    return CS.Call(4, 74, 2, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.IsRecording = function(a0/*String*/) { 
    
    return CS.Call(4, 74, 3, true, a0); 
}
/* static AudioClip  */
_jstype.staticDefinition.Start = function(a0/*String*/, a1/*Boolean*/, a2/*Int32*/, a3/*Int32*/) { 
    
    return CS.Call(4, 74, 4, true, a0, a1, a2, a3); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$WebCamTexture
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.WebCamTexture",
    baseTypeName: "UnityEngine.Texture"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor$$String$$Int32$$Int32$$Int32 = function(a0, a1, a2, a3) { CS.Call(5, 75, 0, true, this, a0, a1, a2, a3); }
_jstype.definition.ctor$$String$$Int32$$Int32 = function(a0, a1, a2) { CS.Call(5, 75, 1, true, this, a0, a1, a2); }
_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 75, 2, true, this, a0); }
_jstype.definition.ctor$$Int32$$Int32$$Int32 = function(a0, a1, a2) { CS.Call(5, 75, 3, true, this, a0, a1, a2); }
_jstype.definition.ctor$$Int32$$Int32 = function(a0, a1) { CS.Call(5, 75, 4, true, this, a0, a1); }
_jstype.definition.ctor = function() { CS.Call(5, 75, 5, true, this); }

// fields

// properties

_jstype.definition.get_isPlaying = function() { return CS.Call(2, 75, 0, false, this); }
_jstype.definition.set_isPlaying = function(v) { return CS.Call(3, 75, 0, false, this, v); }

_jstype.definition.get_deviceName = function() { return CS.Call(2, 75, 1, false, this); }
_jstype.definition.set_deviceName = function(v) { return CS.Call(3, 75, 1, false, this, v); }

_jstype.definition.get_requestedFPS = function() { return CS.Call(2, 75, 2, false, this); }
_jstype.definition.set_requestedFPS = function(v) { return CS.Call(3, 75, 2, false, this, v); }

_jstype.definition.get_requestedWidth = function() { return CS.Call(2, 75, 3, false, this); }
_jstype.definition.set_requestedWidth = function(v) { return CS.Call(3, 75, 3, false, this, v); }

_jstype.definition.get_requestedHeight = function() { return CS.Call(2, 75, 4, false, this); }
_jstype.definition.set_requestedHeight = function(v) { return CS.Call(3, 75, 4, false, this, v); }

_jstype.staticDefinition.get_devices = function() { return CS.Call(2, 75, 5, true); }
_jstype.staticDefinition.set_devices = function(v) { return CS.Call(3, 75, 5, true, v); }

_jstype.definition.get_videoRotationAngle = function() { return CS.Call(2, 75, 6, false, this); }
_jstype.definition.set_videoRotationAngle = function(v) { return CS.Call(3, 75, 6, false, this, v); }

_jstype.definition.get_videoVerticallyMirrored = function() { return CS.Call(2, 75, 7, false, this); }
_jstype.definition.set_videoVerticallyMirrored = function(v) { return CS.Call(3, 75, 7, false, this, v); }

_jstype.definition.get_didUpdateThisFrame = function() { return CS.Call(2, 75, 8, false, this); }
_jstype.definition.set_didUpdateThisFrame = function(v) { return CS.Call(3, 75, 8, false, this, v); }

// methods

/* Color */
_jstype.definition.GetPixel = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 75, 0, false, this, a0, a1); 
}
/* Color[] */
_jstype.definition.GetPixels$$Int32$$Int32$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/, a2/*Int32*/, a3/*Int32*/) { 
    
    return CS.Call(4, 75, 1, false, this, a0, a1, a2, a3); 
}
/* Color[] */
_jstype.definition.GetPixels = function() { 
    
    return CS.Call(4, 75, 2, false, this); 
}
/* Color32[] */
_jstype.definition.GetPixels32$$Color32$Array = function(a0/*Color32[]*/) { 
    
    return CS.Call(4, 75, 3, false, this, a0); 
}
/* Color32[] */
_jstype.definition.GetPixels32 = function() { 
    
    return CS.Call(4, 75, 4, false, this); 
}
/* Void */
_jstype.definition.Pause = function() { 
    
    return CS.Call(4, 75, 5, false, this); 
}
/* Void */
_jstype.definition.Play = function() { 
    
    return CS.Call(4, 75, 6, false, this); 
}
/* Void */
_jstype.definition.Stop = function() { 
    
    return CS.Call(4, 75, 7, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AnimationClipPair
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AnimationClipPair",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 76, 0, true, this); }

// fields

_jstype.fields.originalClip =  { 
            get: function() { return CS.Call(0, 76, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 76, 0, false, this, v); } 
        };

_jstype.fields.overrideClip =  { 
            get: function() { return CS.Call(0, 76, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 76, 1, false, this, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AnimationEvent
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AnimationEvent",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 77, 0, true, this); }

// fields

// properties

_jstype.definition.get_stringParameter = function() { return CS.Call(2, 77, 0, false, this); }
_jstype.definition.set_stringParameter = function(v) { return CS.Call(3, 77, 0, false, this, v); }

_jstype.definition.get_floatParameter = function() { return CS.Call(2, 77, 1, false, this); }
_jstype.definition.set_floatParameter = function(v) { return CS.Call(3, 77, 1, false, this, v); }

_jstype.definition.get_intParameter = function() { return CS.Call(2, 77, 2, false, this); }
_jstype.definition.set_intParameter = function(v) { return CS.Call(3, 77, 2, false, this, v); }

_jstype.definition.get_objectReferenceParameter = function() { return CS.Call(2, 77, 3, false, this); }
_jstype.definition.set_objectReferenceParameter = function(v) { return CS.Call(3, 77, 3, false, this, v); }

_jstype.definition.get_functionName = function() { return CS.Call(2, 77, 4, false, this); }
_jstype.definition.set_functionName = function(v) { return CS.Call(3, 77, 4, false, this, v); }

_jstype.definition.get_time = function() { return CS.Call(2, 77, 5, false, this); }
_jstype.definition.set_time = function(v) { return CS.Call(3, 77, 5, false, this, v); }

_jstype.definition.get_messageOptions = function() { return CS.Call(2, 77, 6, false, this); }
_jstype.definition.set_messageOptions = function(v) { return CS.Call(3, 77, 6, false, this, v); }

_jstype.definition.get_animationState = function() { return CS.Call(2, 77, 7, false, this); }
_jstype.definition.set_animationState = function(v) { return CS.Call(3, 77, 7, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AnimationClip
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AnimationClip",
    baseTypeName: "UnityEngine.Motion"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 78, 0, true, this); }

// fields

// properties

_jstype.definition.get_length = function() { return CS.Call(2, 78, 0, false, this); }
_jstype.definition.set_length = function(v) { return CS.Call(3, 78, 0, false, this, v); }

_jstype.definition.get_frameRate = function() { return CS.Call(2, 78, 1, false, this); }
_jstype.definition.set_frameRate = function(v) { return CS.Call(3, 78, 1, false, this, v); }

_jstype.definition.get_wrapMode = function() { return CS.Call(2, 78, 2, false, this); }
_jstype.definition.set_wrapMode = function(v) { return CS.Call(3, 78, 2, false, this, v); }

_jstype.definition.get_localBounds = function() { return CS.Call(2, 78, 3, false, this); }
_jstype.definition.set_localBounds = function(v) { return CS.Call(3, 78, 3, false, this, v); }

// methods

/* Void */
_jstype.definition.AddEvent = function(a0/*AnimationEvent*/) { 
    
    return CS.Call(4, 78, 0, false, this, a0); 
}
/* Void */
_jstype.definition.ClearCurves = function() { 
    
    return CS.Call(4, 78, 1, false, this); 
}
/* Void */
_jstype.definition.EnsureQuaternionContinuity = function() { 
    
    return CS.Call(4, 78, 2, false, this); 
}
/* Void */
_jstype.definition.SetCurve = function(a0/*String*/, a1/*Type*/, a2/*String*/, a3/*AnimationCurve*/) { 
    
    return CS.Call(4, 78, 3, false, this, a0, a1, a2, a3); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AnimationCurve
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AnimationCurve",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor$$Keyframe$Array = function(a0) { CS.Call(5, 79, 0, true, this, a0); }
_jstype.definition.ctor = function() { CS.Call(5, 79, 1, true, this); }

// fields

// properties

_jstype.definition.get_keys = function() { return CS.Call(2, 79, 0, false, this); }
_jstype.definition.set_keys = function(v) { return CS.Call(3, 79, 0, false, this, v); }

_jstype.definition.get_Item$$Int32 = function(ind0) { return CS.Call(2, 79, 1, false, this, ind0); }
_jstype.definition.set_Item$$Int32 = function(ind0, v) { return CS.Call(3, 79, 1, false, this, ind0, v); }

_jstype.definition.get_length = function() { return CS.Call(2, 79, 2, false, this); }
_jstype.definition.set_length = function(v) { return CS.Call(3, 79, 2, false, this, v); }

_jstype.definition.get_preWrapMode = function() { return CS.Call(2, 79, 3, false, this); }
_jstype.definition.set_preWrapMode = function(v) { return CS.Call(3, 79, 3, false, this, v); }

_jstype.definition.get_postWrapMode = function() { return CS.Call(2, 79, 4, false, this); }
_jstype.definition.set_postWrapMode = function(v) { return CS.Call(3, 79, 4, false, this, v); }

// methods

/* Int32 */
_jstype.definition.AddKey$$Single$$Single = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 79, 0, false, this, a0, a1); 
}
/* Int32 */
_jstype.definition.AddKey$$Keyframe = function(a0/*Keyframe*/) { 
    
    return CS.Call(4, 79, 1, false, this, a0); 
}
/* Single */
_jstype.definition.Evaluate = function(a0/*Single*/) { 
    
    return CS.Call(4, 79, 2, false, this, a0); 
}
/* Int32 */
_jstype.definition.MoveKey = function(a0/*Int32*/, a1/*Keyframe*/) { 
    
    return CS.Call(4, 79, 3, false, this, a0, a1); 
}
/* Void */
_jstype.definition.RemoveKey = function(a0/*Int32*/) { 
    
    return CS.Call(4, 79, 4, false, this, a0); 
}
/* Void */
_jstype.definition.SmoothTangents = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 79, 5, false, this, a0, a1); 
}
/* static AnimationCurve  */
_jstype.staticDefinition.EaseInOut = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 79, 6, true, a0, a1, a2, a3); 
}
/* static AnimationCurve  */
_jstype.staticDefinition.Linear = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 79, 7, true, a0, a1, a2, a3); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Animation
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Animation",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 80, 0, true, this); }

// fields

// properties

_jstype.definition.get_clip = function() { return CS.Call(2, 80, 0, false, this); }
_jstype.definition.set_clip = function(v) { return CS.Call(3, 80, 0, false, this, v); }

_jstype.definition.get_playAutomatically = function() { return CS.Call(2, 80, 1, false, this); }
_jstype.definition.set_playAutomatically = function(v) { return CS.Call(3, 80, 1, false, this, v); }

_jstype.definition.get_wrapMode = function() { return CS.Call(2, 80, 2, false, this); }
_jstype.definition.set_wrapMode = function(v) { return CS.Call(3, 80, 2, false, this, v); }

_jstype.definition.get_isPlaying = function() { return CS.Call(2, 80, 3, false, this); }
_jstype.definition.set_isPlaying = function(v) { return CS.Call(3, 80, 3, false, this, v); }

_jstype.definition.get_Item$$String = function(ind0) { return CS.Call(2, 80, 4, false, this, ind0); }
_jstype.definition.set_Item$$String = function(ind0, v) { return CS.Call(3, 80, 4, false, this, ind0, v); }

_jstype.definition.get_animatePhysics = function() { return CS.Call(2, 80, 5, false, this); }
_jstype.definition.set_animatePhysics = function(v) { return CS.Call(3, 80, 5, false, this, v); }

_jstype.definition.get_cullingType = function() { return CS.Call(2, 80, 6, false, this); }
_jstype.definition.set_cullingType = function(v) { return CS.Call(3, 80, 6, false, this, v); }

_jstype.definition.get_localBounds = function() { return CS.Call(2, 80, 7, false, this); }
_jstype.definition.set_localBounds = function(v) { return CS.Call(3, 80, 7, false, this, v); }

// methods

/* Void */
_jstype.definition.AddClip$$AnimationClip$$String$$Int32$$Int32$$Boolean = function(a0/*AnimationClip*/, a1/*String*/, a2/*Int32*/, a3/*Int32*/, a4/*Boolean*/) { 
    
    return CS.Call(4, 80, 0, false, this, a0, a1, a2, a3, a4); 
}
/* Void */
_jstype.definition.AddClip$$AnimationClip$$String$$Int32$$Int32 = function(a0/*AnimationClip*/, a1/*String*/, a2/*Int32*/, a3/*Int32*/) { 
    
    return CS.Call(4, 80, 1, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.AddClip$$AnimationClip$$String = function(a0/*AnimationClip*/, a1/*String*/) { 
    
    return CS.Call(4, 80, 2, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Blend$$String$$Single$$Single = function(a0/*String*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 80, 3, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.Blend$$String$$Single = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 80, 4, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Blend$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 80, 5, false, this, a0); 
}
/* Void */
_jstype.definition.CrossFade$$String$$Single$$PlayMode = function(a0/*String*/, a1/*Single*/, a2/*PlayMode*/) { 
    
    return CS.Call(4, 80, 6, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.CrossFade$$String$$Single = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 80, 7, false, this, a0, a1); 
}
/* Void */
_jstype.definition.CrossFade$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 80, 8, false, this, a0); 
}
/* AnimationState */
_jstype.definition.CrossFadeQueued$$String$$Single$$QueueMode$$PlayMode = function(a0/*String*/, a1/*Single*/, a2/*QueueMode*/, a3/*PlayMode*/) { 
    
    return CS.Call(4, 80, 9, false, this, a0, a1, a2, a3); 
}
/* AnimationState */
_jstype.definition.CrossFadeQueued$$String$$Single$$QueueMode = function(a0/*String*/, a1/*Single*/, a2/*QueueMode*/) { 
    
    return CS.Call(4, 80, 10, false, this, a0, a1, a2); 
}
/* AnimationState */
_jstype.definition.CrossFadeQueued$$String$$Single = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 80, 11, false, this, a0, a1); 
}
/* AnimationState */
_jstype.definition.CrossFadeQueued$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 80, 12, false, this, a0); 
}
/* AnimationClip */
_jstype.definition.GetClip = function(a0/*String*/) { 
    
    return CS.Call(4, 80, 13, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetClipCount = function() { 
    
    return CS.Call(4, 80, 14, false, this); 
}
/* IEnumerator */
_jstype.definition.GetEnumerator = function() { 
    
    return CS.Call(4, 80, 15, false, this); 
}
/* Boolean */
_jstype.definition.IsPlaying = function(a0/*String*/) { 
    
    return CS.Call(4, 80, 16, false, this, a0); 
}
/* Boolean */
_jstype.definition.Play$$String$$PlayMode = function(a0/*String*/, a1/*PlayMode*/) { 
    
    return CS.Call(4, 80, 17, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.Play$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 80, 18, false, this, a0); 
}
/* Boolean */
_jstype.definition.Play$$PlayMode = function(a0/*PlayMode*/) { 
    
    return CS.Call(4, 80, 19, false, this, a0); 
}
/* Boolean */
_jstype.definition.Play = function() { 
    
    return CS.Call(4, 80, 20, false, this); 
}
/* AnimationState */
_jstype.definition.PlayQueued$$String$$QueueMode$$PlayMode = function(a0/*String*/, a1/*QueueMode*/, a2/*PlayMode*/) { 
    
    return CS.Call(4, 80, 21, false, this, a0, a1, a2); 
}
/* AnimationState */
_jstype.definition.PlayQueued$$String$$QueueMode = function(a0/*String*/, a1/*QueueMode*/) { 
    
    return CS.Call(4, 80, 22, false, this, a0, a1); 
}
/* AnimationState */
_jstype.definition.PlayQueued$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 80, 23, false, this, a0); 
}
/* Void */
_jstype.definition.RemoveClip$$AnimationClip = function(a0/*AnimationClip*/) { 
    
    return CS.Call(4, 80, 24, false, this, a0); 
}
/* Void */
_jstype.definition.RemoveClip$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 80, 25, false, this, a0); 
}
/* Void */
_jstype.definition.Rewind$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 80, 26, false, this, a0); 
}
/* Void */
_jstype.definition.Rewind = function() { 
    
    return CS.Call(4, 80, 27, false, this); 
}
/* Void */
_jstype.definition.Sample = function() { 
    
    return CS.Call(4, 80, 28, false, this); 
}
/* Void */
_jstype.definition.Stop$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 80, 29, false, this, a0); 
}
/* Void */
_jstype.definition.Stop = function() { 
    
    return CS.Call(4, 80, 30, false, this); 
}
/* Void */
_jstype.definition.SyncLayer = function(a0/*Int32*/) { 
    
    return CS.Call(4, 80, 31, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AnimationState
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AnimationState",
    baseTypeName: "UnityEngine.TrackedReference"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 81, 0, true, this); }

// fields

// properties

_jstype.definition.get_enabled = function() { return CS.Call(2, 81, 0, false, this); }
_jstype.definition.set_enabled = function(v) { return CS.Call(3, 81, 0, false, this, v); }

_jstype.definition.get_weight = function() { return CS.Call(2, 81, 1, false, this); }
_jstype.definition.set_weight = function(v) { return CS.Call(3, 81, 1, false, this, v); }

_jstype.definition.get_wrapMode = function() { return CS.Call(2, 81, 2, false, this); }
_jstype.definition.set_wrapMode = function(v) { return CS.Call(3, 81, 2, false, this, v); }

_jstype.definition.get_time = function() { return CS.Call(2, 81, 3, false, this); }
_jstype.definition.set_time = function(v) { return CS.Call(3, 81, 3, false, this, v); }

_jstype.definition.get_normalizedTime = function() { return CS.Call(2, 81, 4, false, this); }
_jstype.definition.set_normalizedTime = function(v) { return CS.Call(3, 81, 4, false, this, v); }

_jstype.definition.get_speed = function() { return CS.Call(2, 81, 5, false, this); }
_jstype.definition.set_speed = function(v) { return CS.Call(3, 81, 5, false, this, v); }

_jstype.definition.get_normalizedSpeed = function() { return CS.Call(2, 81, 6, false, this); }
_jstype.definition.set_normalizedSpeed = function(v) { return CS.Call(3, 81, 6, false, this, v); }

_jstype.definition.get_length = function() { return CS.Call(2, 81, 7, false, this); }
_jstype.definition.set_length = function(v) { return CS.Call(3, 81, 7, false, this, v); }

_jstype.definition.get_layer = function() { return CS.Call(2, 81, 8, false, this); }
_jstype.definition.set_layer = function(v) { return CS.Call(3, 81, 8, false, this, v); }

_jstype.definition.get_clip = function() { return CS.Call(2, 81, 9, false, this); }
_jstype.definition.set_clip = function(v) { return CS.Call(3, 81, 9, false, this, v); }

_jstype.definition.get_name = function() { return CS.Call(2, 81, 10, false, this); }
_jstype.definition.set_name = function(v) { return CS.Call(3, 81, 10, false, this, v); }

_jstype.definition.get_blendMode = function() { return CS.Call(2, 81, 11, false, this); }
_jstype.definition.set_blendMode = function(v) { return CS.Call(3, 81, 11, false, this, v); }

// methods

/* Void */
_jstype.definition.AddMixingTransform$$Transform$$Boolean = function(a0/*Transform*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 81, 0, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddMixingTransform$$Transform = function(a0/*Transform*/) { 
    
    return CS.Call(4, 81, 1, false, this, a0); 
}
/* Void */
_jstype.definition.RemoveMixingTransform = function(a0/*Transform*/) { 
    
    return CS.Call(4, 81, 2, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GameObject
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GameObject",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 82, 0, true, this, a0); }
_jstype.definition.ctor = function() { CS.Call(5, 82, 1, true, this); }
_jstype.definition.ctor$$String$$Type$Array = function(a0, a1) { CS.Call(5, 82, 2, true, this, a0, a1); }

// fields

// properties

_jstype.definition.get_isStatic = function() { return CS.Call(2, 82, 0, false, this); }
_jstype.definition.set_isStatic = function(v) { return CS.Call(3, 82, 0, false, this, v); }

_jstype.definition.get_transform = function() { return CS.Call(2, 82, 1, false, this); }
_jstype.definition.set_transform = function(v) { return CS.Call(3, 82, 1, false, this, v); }

_jstype.definition.get_rigidbody = function() { return CS.Call(2, 82, 2, false, this); }
_jstype.definition.set_rigidbody = function(v) { return CS.Call(3, 82, 2, false, this, v); }

_jstype.definition.get_rigidbody2D = function() { return CS.Call(2, 82, 3, false, this); }
_jstype.definition.set_rigidbody2D = function(v) { return CS.Call(3, 82, 3, false, this, v); }

_jstype.definition.get_camera = function() { return CS.Call(2, 82, 4, false, this); }
_jstype.definition.set_camera = function(v) { return CS.Call(3, 82, 4, false, this, v); }

_jstype.definition.get_light = function() { return CS.Call(2, 82, 5, false, this); }
_jstype.definition.set_light = function(v) { return CS.Call(3, 82, 5, false, this, v); }

_jstype.definition.get_animation = function() { return CS.Call(2, 82, 6, false, this); }
_jstype.definition.set_animation = function(v) { return CS.Call(3, 82, 6, false, this, v); }

_jstype.definition.get_constantForce = function() { return CS.Call(2, 82, 7, false, this); }
_jstype.definition.set_constantForce = function(v) { return CS.Call(3, 82, 7, false, this, v); }

_jstype.definition.get_renderer = function() { return CS.Call(2, 82, 8, false, this); }
_jstype.definition.set_renderer = function(v) { return CS.Call(3, 82, 8, false, this, v); }

_jstype.definition.get_audio = function() { return CS.Call(2, 82, 9, false, this); }
_jstype.definition.set_audio = function(v) { return CS.Call(3, 82, 9, false, this, v); }

_jstype.definition.get_guiText = function() { return CS.Call(2, 82, 10, false, this); }
_jstype.definition.set_guiText = function(v) { return CS.Call(3, 82, 10, false, this, v); }

_jstype.definition.get_guiTexture = function() { return CS.Call(2, 82, 11, false, this); }
_jstype.definition.set_guiTexture = function(v) { return CS.Call(3, 82, 11, false, this, v); }

_jstype.definition.get_collider = function() { return CS.Call(2, 82, 12, false, this); }
_jstype.definition.set_collider = function(v) { return CS.Call(3, 82, 12, false, this, v); }

_jstype.definition.get_collider2D = function() { return CS.Call(2, 82, 13, false, this); }
_jstype.definition.set_collider2D = function(v) { return CS.Call(3, 82, 13, false, this, v); }

_jstype.definition.get_hingeJoint = function() { return CS.Call(2, 82, 14, false, this); }
_jstype.definition.set_hingeJoint = function(v) { return CS.Call(3, 82, 14, false, this, v); }

_jstype.definition.get_particleEmitter = function() { return CS.Call(2, 82, 15, false, this); }
_jstype.definition.set_particleEmitter = function(v) { return CS.Call(3, 82, 15, false, this, v); }

_jstype.definition.get_particleSystem = function() { return CS.Call(2, 82, 16, false, this); }
_jstype.definition.set_particleSystem = function(v) { return CS.Call(3, 82, 16, false, this, v); }

_jstype.definition.get_layer = function() { return CS.Call(2, 82, 17, false, this); }
_jstype.definition.set_layer = function(v) { return CS.Call(3, 82, 17, false, this, v); }

_jstype.definition.get_activeSelf = function() { return CS.Call(2, 82, 18, false, this); }
_jstype.definition.set_activeSelf = function(v) { return CS.Call(3, 82, 18, false, this, v); }

_jstype.definition.get_activeInHierarchy = function() { return CS.Call(2, 82, 19, false, this); }
_jstype.definition.set_activeInHierarchy = function(v) { return CS.Call(3, 82, 19, false, this, v); }

_jstype.definition.get_tag = function() { return CS.Call(2, 82, 20, false, this); }
_jstype.definition.set_tag = function(v) { return CS.Call(3, 82, 20, false, this, v); }

_jstype.definition.get_gameObject = function() { return CS.Call(2, 82, 21, false, this); }
_jstype.definition.set_gameObject = function(v) { return CS.Call(3, 82, 21, false, this, v); }

// methods

/* Component */
_jstype.definition.AddComponent$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 82, 0, false, this, a0); 
}
/* Component */
_jstype.definition.AddComponent$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 82, 1, false, this, a0); 
}
/* T */
_jstype.definition.AddComponent$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 82, 2, false, this, native_t0); 
}
/* Void */
_jstype.definition.BroadcastMessage$$String$$Object$$SendMessageOptions = function(a0/*String*/, a1/*Object*/, a2/*SendMessageOptions*/) { 
    
    return CS.Call(4, 82, 3, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.BroadcastMessage$$String$$SendMessageOptions = function(a0/*String*/, a1/*SendMessageOptions*/) { 
    
    return CS.Call(4, 82, 4, false, this, a0, a1); 
}
/* Void */
_jstype.definition.BroadcastMessage$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 82, 5, false, this, a0, a1); 
}
/* Void */
_jstype.definition.BroadcastMessage$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 82, 6, false, this, a0); 
}
/* Boolean */
_jstype.definition.CompareTag = function(a0/*String*/) { 
    
    return CS.Call(4, 82, 7, false, this, a0); 
}
/* Component */
_jstype.definition.GetComponent$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 82, 8, false, this, a0); 
}
/* Component */
_jstype.definition.GetComponent$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 82, 9, false, this, a0); 
}
/* T */
_jstype.definition.GetComponent$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 82, 10, false, this, native_t0); 
}
/* Component */
_jstype.definition.GetComponentInChildren$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 82, 11, false, this, a0); 
}
/* T */
_jstype.definition.GetComponentInChildren$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 82, 12, false, this, native_t0); 
}
/* Component */
_jstype.definition.GetComponentInParent$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 82, 13, false, this, a0); 
}
/* T */
_jstype.definition.GetComponentInParent$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 82, 14, false, this, native_t0); 
}
/* Void */
_jstype.definition.GetComponents$$Type$$List$1$Component = function(a0/*Type*/, a1/*List`1*/) { 
    
    return CS.Call(4, 82, 15, false, this, a0, a1); 
}
/* Void */
_jstype.definition.GetComponents$1$$List$1 = function(t0, a0/*List`1*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 82, 16, false, this, native_t0, a0); 
}
/* Component[] */
_jstype.definition.GetComponents$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 82, 17, false, this, a0); 
}
/* T[] */
_jstype.definition.GetComponents$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 82, 18, false, this, native_t0); 
}
/* Component[] */
_jstype.definition.GetComponentsInChildren$$Type$$Boolean = function(a0/*Type*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 82, 19, false, this, a0, a1); 
}
/* Void */
_jstype.definition.GetComponentsInChildren$1$$Boolean$$List$1 = function(t0, a0/*Boolean*/, a1/*List`1*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 82, 20, false, this, native_t0, a0, a1); 
}
/* T[] */
_jstype.definition.GetComponentsInChildren$1$$Boolean = function(t0, a0/*Boolean*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 82, 21, false, this, native_t0, a0); 
}
/* Component[] */
_jstype.definition.GetComponentsInChildren$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 82, 22, false, this, a0); 
}
/* Void */
_jstype.definition.GetComponentsInChildren$1$$List$1 = function(t0, a0/*List`1*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 82, 23, false, this, native_t0, a0); 
}
/* T[] */
_jstype.definition.GetComponentsInChildren$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 82, 24, false, this, native_t0); 
}
/* Void */
_jstype.definition.GetComponentsInParent$1$$Boolean$$List$1 = function(t0, a0/*Boolean*/, a1/*List`1*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 82, 25, false, this, native_t0, a0, a1); 
}
/* Component[] */
_jstype.definition.GetComponentsInParent$$Type$$Boolean = function(a0/*Type*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 82, 26, false, this, a0, a1); 
}
/* T[] */
_jstype.definition.GetComponentsInParent$1$$Boolean = function(t0, a0/*Boolean*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 82, 27, false, this, native_t0, a0); 
}
/* Component[] */
_jstype.definition.GetComponentsInParent$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 82, 28, false, this, a0); 
}
/* T[] */
_jstype.definition.GetComponentsInParent$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 82, 29, false, this, native_t0); 
}
/* Void */
_jstype.definition.SampleAnimation = function(a0/*AnimationClip*/, a1/*Single*/) { 
    
    return CS.Call(4, 82, 30, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessage$$String$$Object$$SendMessageOptions = function(a0/*String*/, a1/*Object*/, a2/*SendMessageOptions*/) { 
    
    return CS.Call(4, 82, 31, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SendMessage$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 82, 32, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessage$$String$$SendMessageOptions = function(a0/*String*/, a1/*SendMessageOptions*/) { 
    
    return CS.Call(4, 82, 33, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessage$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 82, 34, false, this, a0); 
}
/* Void */
_jstype.definition.SendMessageUpwards$$String$$Object$$SendMessageOptions = function(a0/*String*/, a1/*Object*/, a2/*SendMessageOptions*/) { 
    
    return CS.Call(4, 82, 35, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SendMessageUpwards$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 82, 36, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessageUpwards$$String$$SendMessageOptions = function(a0/*String*/, a1/*SendMessageOptions*/) { 
    
    return CS.Call(4, 82, 37, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessageUpwards$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 82, 38, false, this, a0); 
}
/* Void */
_jstype.definition.SetActive = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 82, 39, false, this, a0); 
}
/* static GameObject  */
_jstype.staticDefinition.CreatePrimitive = function(a0/*PrimitiveType*/) { 
    
    return CS.Call(4, 82, 40, true, a0); 
}
/* static GameObject  */
_jstype.staticDefinition.Find = function(a0/*String*/) { 
    
    return CS.Call(4, 82, 41, true, a0); 
}
/* static GameObject[]  */
_jstype.staticDefinition.FindGameObjectsWithTag = function(a0/*String*/) { 
    
    return CS.Call(4, 82, 42, true, a0); 
}
/* static GameObject  */
_jstype.staticDefinition.FindGameObjectWithTag = function(a0/*String*/) { 
    
    return CS.Call(4, 82, 43, true, a0); 
}
/* static GameObject  */
_jstype.staticDefinition.FindWithTag = function(a0/*String*/) { 
    
    return CS.Call(4, 82, 44, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Animator
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Animator",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 83, 0, true, this); }

// fields

// properties

_jstype.definition.get_isOptimizable = function() { return CS.Call(2, 83, 0, false, this); }
_jstype.definition.set_isOptimizable = function(v) { return CS.Call(3, 83, 0, false, this, v); }

_jstype.definition.get_isHuman = function() { return CS.Call(2, 83, 1, false, this); }
_jstype.definition.set_isHuman = function(v) { return CS.Call(3, 83, 1, false, this, v); }

_jstype.definition.get_hasRootMotion = function() { return CS.Call(2, 83, 2, false, this); }
_jstype.definition.set_hasRootMotion = function(v) { return CS.Call(3, 83, 2, false, this, v); }

_jstype.definition.get_humanScale = function() { return CS.Call(2, 83, 3, false, this); }
_jstype.definition.set_humanScale = function(v) { return CS.Call(3, 83, 3, false, this, v); }

_jstype.definition.get_deltaPosition = function() { return CS.Call(2, 83, 4, false, this); }
_jstype.definition.set_deltaPosition = function(v) { return CS.Call(3, 83, 4, false, this, v); }

_jstype.definition.get_deltaRotation = function() { return CS.Call(2, 83, 5, false, this); }
_jstype.definition.set_deltaRotation = function(v) { return CS.Call(3, 83, 5, false, this, v); }

_jstype.definition.get_rootPosition = function() { return CS.Call(2, 83, 6, false, this); }
_jstype.definition.set_rootPosition = function(v) { return CS.Call(3, 83, 6, false, this, v); }

_jstype.definition.get_rootRotation = function() { return CS.Call(2, 83, 7, false, this); }
_jstype.definition.set_rootRotation = function(v) { return CS.Call(3, 83, 7, false, this, v); }

_jstype.definition.get_applyRootMotion = function() { return CS.Call(2, 83, 8, false, this); }
_jstype.definition.set_applyRootMotion = function(v) { return CS.Call(3, 83, 8, false, this, v); }

_jstype.definition.get_updateMode = function() { return CS.Call(2, 83, 9, false, this); }
_jstype.definition.set_updateMode = function(v) { return CS.Call(3, 83, 9, false, this, v); }

_jstype.definition.get_hasTransformHierarchy = function() { return CS.Call(2, 83, 10, false, this); }
_jstype.definition.set_hasTransformHierarchy = function(v) { return CS.Call(3, 83, 10, false, this, v); }

_jstype.definition.get_gravityWeight = function() { return CS.Call(2, 83, 11, false, this); }
_jstype.definition.set_gravityWeight = function(v) { return CS.Call(3, 83, 11, false, this, v); }

_jstype.definition.get_bodyPosition = function() { return CS.Call(2, 83, 12, false, this); }
_jstype.definition.set_bodyPosition = function(v) { return CS.Call(3, 83, 12, false, this, v); }

_jstype.definition.get_bodyRotation = function() { return CS.Call(2, 83, 13, false, this); }
_jstype.definition.set_bodyRotation = function(v) { return CS.Call(3, 83, 13, false, this, v); }

_jstype.definition.get_stabilizeFeet = function() { return CS.Call(2, 83, 14, false, this); }
_jstype.definition.set_stabilizeFeet = function(v) { return CS.Call(3, 83, 14, false, this, v); }

_jstype.definition.get_layerCount = function() { return CS.Call(2, 83, 15, false, this); }
_jstype.definition.set_layerCount = function(v) { return CS.Call(3, 83, 15, false, this, v); }

_jstype.definition.get_feetPivotActive = function() { return CS.Call(2, 83, 16, false, this); }
_jstype.definition.set_feetPivotActive = function(v) { return CS.Call(3, 83, 16, false, this, v); }

_jstype.definition.get_pivotWeight = function() { return CS.Call(2, 83, 17, false, this); }
_jstype.definition.set_pivotWeight = function(v) { return CS.Call(3, 83, 17, false, this, v); }

_jstype.definition.get_pivotPosition = function() { return CS.Call(2, 83, 18, false, this); }
_jstype.definition.set_pivotPosition = function(v) { return CS.Call(3, 83, 18, false, this, v); }

_jstype.definition.get_isMatchingTarget = function() { return CS.Call(2, 83, 19, false, this); }
_jstype.definition.set_isMatchingTarget = function(v) { return CS.Call(3, 83, 19, false, this, v); }

_jstype.definition.get_speed = function() { return CS.Call(2, 83, 20, false, this); }
_jstype.definition.set_speed = function(v) { return CS.Call(3, 83, 20, false, this, v); }

_jstype.definition.get_targetPosition = function() { return CS.Call(2, 83, 21, false, this); }
_jstype.definition.set_targetPosition = function(v) { return CS.Call(3, 83, 21, false, this, v); }

_jstype.definition.get_targetRotation = function() { return CS.Call(2, 83, 22, false, this); }
_jstype.definition.set_targetRotation = function(v) { return CS.Call(3, 83, 22, false, this, v); }

_jstype.definition.get_cullingMode = function() { return CS.Call(2, 83, 23, false, this); }
_jstype.definition.set_cullingMode = function(v) { return CS.Call(3, 83, 23, false, this, v); }

_jstype.definition.get_playbackTime = function() { return CS.Call(2, 83, 24, false, this); }
_jstype.definition.set_playbackTime = function(v) { return CS.Call(3, 83, 24, false, this, v); }

_jstype.definition.get_recorderStartTime = function() { return CS.Call(2, 83, 25, false, this); }
_jstype.definition.set_recorderStartTime = function(v) { return CS.Call(3, 83, 25, false, this, v); }

_jstype.definition.get_recorderStopTime = function() { return CS.Call(2, 83, 26, false, this); }
_jstype.definition.set_recorderStopTime = function(v) { return CS.Call(3, 83, 26, false, this, v); }

_jstype.definition.get_runtimeAnimatorController = function() { return CS.Call(2, 83, 27, false, this); }
_jstype.definition.set_runtimeAnimatorController = function(v) { return CS.Call(3, 83, 27, false, this, v); }

_jstype.definition.get_avatar = function() { return CS.Call(2, 83, 28, false, this); }
_jstype.definition.set_avatar = function(v) { return CS.Call(3, 83, 28, false, this, v); }

_jstype.definition.get_layersAffectMassCenter = function() { return CS.Call(2, 83, 29, false, this); }
_jstype.definition.set_layersAffectMassCenter = function(v) { return CS.Call(3, 83, 29, false, this, v); }

_jstype.definition.get_leftFeetBottomHeight = function() { return CS.Call(2, 83, 30, false, this); }
_jstype.definition.set_leftFeetBottomHeight = function(v) { return CS.Call(3, 83, 30, false, this, v); }

_jstype.definition.get_rightFeetBottomHeight = function() { return CS.Call(2, 83, 31, false, this); }
_jstype.definition.set_rightFeetBottomHeight = function(v) { return CS.Call(3, 83, 31, false, this, v); }

_jstype.definition.get_logWarnings = function() { return CS.Call(2, 83, 32, false, this); }
_jstype.definition.set_logWarnings = function(v) { return CS.Call(3, 83, 32, false, this, v); }

_jstype.definition.get_fireEvents = function() { return CS.Call(2, 83, 33, false, this); }
_jstype.definition.set_fireEvents = function(v) { return CS.Call(3, 83, 33, false, this, v); }

// methods

/* Void */
_jstype.definition.CrossFade$$String$$Single$$Int32$$Single = function(a0/*String*/, a1/*Single*/, a2/*Int32*/, a3/*Single*/) { 
    
    return CS.Call(4, 83, 0, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.CrossFade$$Int32$$Single$$Int32$$Single = function(a0/*Int32*/, a1/*Single*/, a2/*Int32*/, a3/*Single*/) { 
    
    return CS.Call(4, 83, 1, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.CrossFade$$String$$Single$$Int32 = function(a0/*String*/, a1/*Single*/, a2/*Int32*/) { 
    
    return CS.Call(4, 83, 2, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.CrossFade$$Int32$$Single$$Int32 = function(a0/*Int32*/, a1/*Single*/, a2/*Int32*/) { 
    
    return CS.Call(4, 83, 3, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.CrossFade$$String$$Single = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 83, 4, false, this, a0, a1); 
}
/* Void */
_jstype.definition.CrossFade$$Int32$$Single = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 83, 5, false, this, a0, a1); 
}
/* AnimatorTransitionInfo */
_jstype.definition.GetAnimatorTransitionInfo = function(a0/*Int32*/) { 
    
    return CS.Call(4, 83, 6, false, this, a0); 
}
/* Transform */
_jstype.definition.GetBoneTransform = function(a0/*HumanBodyBones*/) { 
    
    return CS.Call(4, 83, 7, false, this, a0); 
}
/* Boolean */
_jstype.definition.GetBool$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 83, 8, false, this, a0); 
}
/* Boolean */
_jstype.definition.GetBool$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 83, 9, false, this, a0); 
}
/* AnimationInfo[] */
_jstype.definition.GetCurrentAnimationClipState = function(a0/*Int32*/) { 
    
    return CS.Call(4, 83, 10, false, this, a0); 
}
/* AnimatorStateInfo */
_jstype.definition.GetCurrentAnimatorStateInfo = function(a0/*Int32*/) { 
    
    return CS.Call(4, 83, 11, false, this, a0); 
}
/* Single */
_jstype.definition.GetFloat$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 83, 12, false, this, a0); 
}
/* Single */
_jstype.definition.GetFloat$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 83, 13, false, this, a0); 
}
/* Vector3 */
_jstype.definition.GetIKPosition = function(a0/*AvatarIKGoal*/) { 
    
    return CS.Call(4, 83, 14, false, this, a0); 
}
/* Single */
_jstype.definition.GetIKPositionWeight = function(a0/*AvatarIKGoal*/) { 
    
    return CS.Call(4, 83, 15, false, this, a0); 
}
/* Quaternion */
_jstype.definition.GetIKRotation = function(a0/*AvatarIKGoal*/) { 
    
    return CS.Call(4, 83, 16, false, this, a0); 
}
/* Single */
_jstype.definition.GetIKRotationWeight = function(a0/*AvatarIKGoal*/) { 
    
    return CS.Call(4, 83, 17, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetInteger$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 83, 18, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetInteger$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 83, 19, false, this, a0); 
}
/* String */
_jstype.definition.GetLayerName = function(a0/*Int32*/) { 
    
    return CS.Call(4, 83, 20, false, this, a0); 
}
/* Single */
_jstype.definition.GetLayerWeight = function(a0/*Int32*/) { 
    
    return CS.Call(4, 83, 21, false, this, a0); 
}
/* AnimationInfo[] */
_jstype.definition.GetNextAnimationClipState = function(a0/*Int32*/) { 
    
    return CS.Call(4, 83, 22, false, this, a0); 
}
/* AnimatorStateInfo */
_jstype.definition.GetNextAnimatorStateInfo = function(a0/*Int32*/) { 
    
    return CS.Call(4, 83, 23, false, this, a0); 
}
/* Void */
_jstype.definition.InterruptMatchTarget$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 83, 24, false, this, a0); 
}
/* Void */
_jstype.definition.InterruptMatchTarget = function() { 
    
    return CS.Call(4, 83, 25, false, this); 
}
/* Boolean */
_jstype.definition.IsInTransition = function(a0/*Int32*/) { 
    
    return CS.Call(4, 83, 26, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsParameterControlledByCurve$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 83, 27, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsParameterControlledByCurve$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 83, 28, false, this, a0); 
}
/* Void */
_jstype.definition.MatchTarget$$Vector3$$Quaternion$$AvatarTarget$$MatchTargetWeightMask$$Single$$Single = function(a0/*Vector3*/, a1/*Quaternion*/, a2/*AvatarTarget*/, a3/*MatchTargetWeightMask*/, a4/*Single*/, a5/*Single*/) { 
    
    return CS.Call(4, 83, 29, false, this, a0, a1, a2, a3, a4, a5); 
}
/* Void */
_jstype.definition.MatchTarget$$Vector3$$Quaternion$$AvatarTarget$$MatchTargetWeightMask$$Single = function(a0/*Vector3*/, a1/*Quaternion*/, a2/*AvatarTarget*/, a3/*MatchTargetWeightMask*/, a4/*Single*/) { 
    
    return CS.Call(4, 83, 30, false, this, a0, a1, a2, a3, a4); 
}
/* Void */
_jstype.definition.Play$$String$$Int32$$Single = function(a0/*String*/, a1/*Int32*/, a2/*Single*/) { 
    
    return CS.Call(4, 83, 31, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.Play$$Int32$$Int32$$Single = function(a0/*Int32*/, a1/*Int32*/, a2/*Single*/) { 
    
    return CS.Call(4, 83, 32, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.Play$$String$$Int32 = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 83, 33, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Play$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 83, 34, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Play$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 83, 35, false, this, a0); 
}
/* Void */
_jstype.definition.Play$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 83, 36, false, this, a0); 
}
/* Void */
_jstype.definition.Rebind = function() { 
    
    return CS.Call(4, 83, 37, false, this); 
}
/* Void */
_jstype.definition.ResetTrigger$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 83, 38, false, this, a0); 
}
/* Void */
_jstype.definition.ResetTrigger$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 83, 39, false, this, a0); 
}
/* Void */
_jstype.definition.SetBool$$Int32$$Boolean = function(a0/*Int32*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 83, 40, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetBool$$String$$Boolean = function(a0/*String*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 83, 41, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetFloat$$Int32$$Single$$Single$$Single = function(a0/*Int32*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 83, 42, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.SetFloat$$String$$Single$$Single$$Single = function(a0/*String*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 83, 43, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.SetFloat$$String$$Single = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 83, 44, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetFloat$$Int32$$Single = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 83, 45, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetIKPosition = function(a0/*AvatarIKGoal*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 83, 46, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetIKPositionWeight = function(a0/*AvatarIKGoal*/, a1/*Single*/) { 
    
    return CS.Call(4, 83, 47, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetIKRotation = function(a0/*AvatarIKGoal*/, a1/*Quaternion*/) { 
    
    return CS.Call(4, 83, 48, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetIKRotationWeight = function(a0/*AvatarIKGoal*/, a1/*Single*/) { 
    
    return CS.Call(4, 83, 49, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetInteger$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 83, 50, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetInteger$$String$$Int32 = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 83, 51, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetLayerWeight = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 83, 52, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetLookAtPosition = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 83, 53, false, this, a0); 
}
/* Void */
_jstype.definition.SetLookAtWeight$$Single$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 83, 54, false, this, a0, a1, a2, a3, a4); 
}
/* Void */
_jstype.definition.SetLookAtWeight$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 83, 55, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.SetLookAtWeight$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 83, 56, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SetLookAtWeight$$Single$$Single = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 83, 57, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetLookAtWeight$$Single = function(a0/*Single*/) { 
    
    return CS.Call(4, 83, 58, false, this, a0); 
}
/* Void */
_jstype.definition.SetTarget = function(a0/*AvatarTarget*/, a1/*Single*/) { 
    
    return CS.Call(4, 83, 59, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetTrigger$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 83, 60, false, this, a0); 
}
/* Void */
_jstype.definition.SetTrigger$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 83, 61, false, this, a0); 
}
/* Void */
_jstype.definition.StartPlayback = function() { 
    
    return CS.Call(4, 83, 62, false, this); 
}
/* Void */
_jstype.definition.StartRecording = function(a0/*Int32*/) { 
    
    return CS.Call(4, 83, 63, false, this, a0); 
}
/* Void */
_jstype.definition.StopPlayback = function() { 
    
    return CS.Call(4, 83, 64, false, this); 
}
/* Void */
_jstype.definition.StopRecording = function() { 
    
    return CS.Call(4, 83, 65, false, this); 
}
/* Void */
_jstype.definition.Update = function(a0/*Single*/) { 
    
    return CS.Call(4, 83, 66, false, this, a0); 
}
/* static Int32  */
_jstype.staticDefinition.StringToHash = function(a0/*String*/) { 
    
    return CS.Call(4, 83, 67, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AvatarBuilder
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AvatarBuilder",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 84, 0, true, this); }

// fields

// properties

// methods

/* static Avatar  */
_jstype.staticDefinition.BuildGenericAvatar = function(a0/*GameObject*/, a1/*String*/) { 
    
    return CS.Call(4, 84, 0, true, a0, a1); 
}
/* static Avatar  */
_jstype.staticDefinition.BuildHumanAvatar = function(a0/*GameObject*/, a1/*HumanDescription*/) { 
    
    return CS.Call(4, 84, 1, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$RuntimeAnimatorController
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.RuntimeAnimatorController",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 85, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AnimatorOverrideController
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AnimatorOverrideController",
    baseTypeName: "UnityEngine.RuntimeAnimatorController"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 86, 0, true, this); }

// fields

// properties

_jstype.definition.get_runtimeAnimatorController = function() { return CS.Call(2, 86, 0, false, this); }
_jstype.definition.set_runtimeAnimatorController = function(v) { return CS.Call(3, 86, 0, false, this, v); }

_jstype.definition.get_Item$$String = function(ind0) { return CS.Call(2, 86, 1, false, this, ind0); }
_jstype.definition.set_Item$$String = function(ind0, v) { return CS.Call(3, 86, 1, false, this, ind0, v); }

_jstype.definition.get_Item$$AnimationClip = function(ind0) { return CS.Call(2, 86, 2, false, this, ind0); }
_jstype.definition.set_Item$$AnimationClip = function(ind0, v) { return CS.Call(3, 86, 2, false, this, ind0, v); }

_jstype.definition.get_clips = function() { return CS.Call(2, 86, 3, false, this); }
_jstype.definition.set_clips = function(v) { return CS.Call(3, 86, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Avatar
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Avatar",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 87, 0, true, this); }

// fields

// properties

_jstype.definition.get_isValid = function() { return CS.Call(2, 87, 0, false, this); }
_jstype.definition.set_isValid = function(v) { return CS.Call(3, 87, 0, false, this, v); }

_jstype.definition.get_isHuman = function() { return CS.Call(2, 87, 1, false, this); }
_jstype.definition.set_isHuman = function(v) { return CS.Call(3, 87, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$HumanTrait
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.HumanTrait",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 88, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_MuscleCount = function() { return CS.Call(2, 88, 0, true); }
_jstype.staticDefinition.set_MuscleCount = function(v) { return CS.Call(3, 88, 0, true, v); }

_jstype.staticDefinition.get_MuscleName = function() { return CS.Call(2, 88, 1, true); }
_jstype.staticDefinition.set_MuscleName = function(v) { return CS.Call(3, 88, 1, true, v); }

_jstype.staticDefinition.get_BoneCount = function() { return CS.Call(2, 88, 2, true); }
_jstype.staticDefinition.set_BoneCount = function(v) { return CS.Call(3, 88, 2, true, v); }

_jstype.staticDefinition.get_BoneName = function() { return CS.Call(2, 88, 3, true); }
_jstype.staticDefinition.set_BoneName = function(v) { return CS.Call(3, 88, 3, true, v); }

_jstype.staticDefinition.get_RequiredBoneCount = function() { return CS.Call(2, 88, 4, true); }
_jstype.staticDefinition.set_RequiredBoneCount = function(v) { return CS.Call(3, 88, 4, true, v); }

// methods

/* static Int32  */
_jstype.staticDefinition.BoneFromMuscle = function(a0/*Int32*/) { 
    
    return CS.Call(4, 88, 0, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.GetMuscleDefaultMax = function(a0/*Int32*/) { 
    
    return CS.Call(4, 88, 1, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.GetMuscleDefaultMin = function(a0/*Int32*/) { 
    
    return CS.Call(4, 88, 2, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.MuscleFromBone = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 88, 3, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.RequiredBone = function(a0/*Int32*/) { 
    
    return CS.Call(4, 88, 4, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$TreePrototype
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.TreePrototype",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 89, 0, true, this); }

// fields

// properties

_jstype.definition.get_prefab = function() { return CS.Call(2, 89, 0, false, this); }
_jstype.definition.set_prefab = function(v) { return CS.Call(3, 89, 0, false, this, v); }

_jstype.definition.get_bendFactor = function() { return CS.Call(2, 89, 1, false, this); }
_jstype.definition.set_bendFactor = function(v) { return CS.Call(3, 89, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$DetailPrototype
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.DetailPrototype",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 90, 0, true, this); }

// fields

// properties

_jstype.definition.get_prototype = function() { return CS.Call(2, 90, 0, false, this); }
_jstype.definition.set_prototype = function(v) { return CS.Call(3, 90, 0, false, this, v); }

_jstype.definition.get_prototypeTexture = function() { return CS.Call(2, 90, 1, false, this); }
_jstype.definition.set_prototypeTexture = function(v) { return CS.Call(3, 90, 1, false, this, v); }

_jstype.definition.get_minWidth = function() { return CS.Call(2, 90, 2, false, this); }
_jstype.definition.set_minWidth = function(v) { return CS.Call(3, 90, 2, false, this, v); }

_jstype.definition.get_maxWidth = function() { return CS.Call(2, 90, 3, false, this); }
_jstype.definition.set_maxWidth = function(v) { return CS.Call(3, 90, 3, false, this, v); }

_jstype.definition.get_minHeight = function() { return CS.Call(2, 90, 4, false, this); }
_jstype.definition.set_minHeight = function(v) { return CS.Call(3, 90, 4, false, this, v); }

_jstype.definition.get_maxHeight = function() { return CS.Call(2, 90, 5, false, this); }
_jstype.definition.set_maxHeight = function(v) { return CS.Call(3, 90, 5, false, this, v); }

_jstype.definition.get_noiseSpread = function() { return CS.Call(2, 90, 6, false, this); }
_jstype.definition.set_noiseSpread = function(v) { return CS.Call(3, 90, 6, false, this, v); }

_jstype.definition.get_bendFactor = function() { return CS.Call(2, 90, 7, false, this); }
_jstype.definition.set_bendFactor = function(v) { return CS.Call(3, 90, 7, false, this, v); }

_jstype.definition.get_healthyColor = function() { return CS.Call(2, 90, 8, false, this); }
_jstype.definition.set_healthyColor = function(v) { return CS.Call(3, 90, 8, false, this, v); }

_jstype.definition.get_dryColor = function() { return CS.Call(2, 90, 9, false, this); }
_jstype.definition.set_dryColor = function(v) { return CS.Call(3, 90, 9, false, this, v); }

_jstype.definition.get_renderMode = function() { return CS.Call(2, 90, 10, false, this); }
_jstype.definition.set_renderMode = function(v) { return CS.Call(3, 90, 10, false, this, v); }

_jstype.definition.get_usePrototypeMesh = function() { return CS.Call(2, 90, 11, false, this); }
_jstype.definition.set_usePrototypeMesh = function(v) { return CS.Call(3, 90, 11, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$SplatPrototype
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.SplatPrototype",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 91, 0, true, this); }

// fields

// properties

_jstype.definition.get_texture = function() { return CS.Call(2, 91, 0, false, this); }
_jstype.definition.set_texture = function(v) { return CS.Call(3, 91, 0, false, this, v); }

_jstype.definition.get_normalMap = function() { return CS.Call(2, 91, 1, false, this); }
_jstype.definition.set_normalMap = function(v) { return CS.Call(3, 91, 1, false, this, v); }

_jstype.definition.get_tileSize = function() { return CS.Call(2, 91, 2, false, this); }
_jstype.definition.set_tileSize = function(v) { return CS.Call(3, 91, 2, false, this, v); }

_jstype.definition.get_tileOffset = function() { return CS.Call(2, 91, 3, false, this); }
_jstype.definition.set_tileOffset = function(v) { return CS.Call(3, 91, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AssetBundleCreateRequest
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AssetBundleCreateRequest",
    baseTypeName: "UnityEngine.AsyncOperation"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 92, 0, true, this); }

// fields

// properties

_jstype.definition.get_assetBundle = function() { return CS.Call(2, 92, 0, false, this); }
_jstype.definition.set_assetBundle = function(v) { return CS.Call(3, 92, 0, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AssetBundleRequest
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AssetBundleRequest",
    baseTypeName: "UnityEngine.AsyncOperation"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 93, 0, true, this); }

// fields

// properties

_jstype.definition.get_asset = function() { return CS.Call(2, 93, 0, false, this); }
_jstype.definition.set_asset = function(v) { return CS.Call(3, 93, 0, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AssetBundle
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AssetBundle",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 94, 0, true, this); }

// fields

// properties

_jstype.definition.get_mainAsset = function() { return CS.Call(2, 94, 0, false, this); }
_jstype.definition.set_mainAsset = function(v) { return CS.Call(3, 94, 0, false, this, v); }

// methods

/* Boolean */
_jstype.definition.Contains = function(a0/*String*/) { 
    
    return CS.Call(4, 94, 0, false, this, a0); 
}
/* Object */
_jstype.definition.Load$$String$$Type = function(a0/*String*/, a1/*Type*/) { 
    
    return CS.Call(4, 94, 1, false, this, a0, a1); 
}
/* Object */
_jstype.definition.Load$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 94, 2, false, this, a0); 
}
/* Object[] */
_jstype.definition.LoadAll$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 94, 3, false, this, a0); 
}
/* Object[] */
_jstype.definition.LoadAll = function() { 
    
    return CS.Call(4, 94, 4, false, this); 
}
/* AssetBundleRequest */
_jstype.definition.LoadAsync = function(a0/*String*/, a1/*Type*/) { 
    
    return CS.Call(4, 94, 5, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Unload = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 94, 6, false, this, a0); 
}
/* static AssetBundle  */
_jstype.staticDefinition.CreateFromFile$$String$$Int32 = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 94, 7, true, a0, a1); 
}
/* static AssetBundle  */
_jstype.staticDefinition.CreateFromFile$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 94, 8, true, a0); 
}
/* static AssetBundleCreateRequest  */
_jstype.staticDefinition.CreateFromMemory = function(a0/*Byte[]*/) { 
    
    return CS.Call(4, 94, 9, true, a0); 
}
/* static AssetBundle  */
_jstype.staticDefinition.CreateFromMemoryImmediate = function(a0/*Byte[]*/) { 
    
    return CS.Call(4, 94, 10, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$SystemInfo
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.SystemInfo",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 95, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_operatingSystem = function() { return CS.Call(2, 95, 0, true); }
_jstype.staticDefinition.set_operatingSystem = function(v) { return CS.Call(3, 95, 0, true, v); }

_jstype.staticDefinition.get_processorType = function() { return CS.Call(2, 95, 1, true); }
_jstype.staticDefinition.set_processorType = function(v) { return CS.Call(3, 95, 1, true, v); }

_jstype.staticDefinition.get_processorCount = function() { return CS.Call(2, 95, 2, true); }
_jstype.staticDefinition.set_processorCount = function(v) { return CS.Call(3, 95, 2, true, v); }

_jstype.staticDefinition.get_systemMemorySize = function() { return CS.Call(2, 95, 3, true); }
_jstype.staticDefinition.set_systemMemorySize = function(v) { return CS.Call(3, 95, 3, true, v); }

_jstype.staticDefinition.get_graphicsMemorySize = function() { return CS.Call(2, 95, 4, true); }
_jstype.staticDefinition.set_graphicsMemorySize = function(v) { return CS.Call(3, 95, 4, true, v); }

_jstype.staticDefinition.get_graphicsDeviceName = function() { return CS.Call(2, 95, 5, true); }
_jstype.staticDefinition.set_graphicsDeviceName = function(v) { return CS.Call(3, 95, 5, true, v); }

_jstype.staticDefinition.get_graphicsDeviceVendor = function() { return CS.Call(2, 95, 6, true); }
_jstype.staticDefinition.set_graphicsDeviceVendor = function(v) { return CS.Call(3, 95, 6, true, v); }

_jstype.staticDefinition.get_graphicsDeviceID = function() { return CS.Call(2, 95, 7, true); }
_jstype.staticDefinition.set_graphicsDeviceID = function(v) { return CS.Call(3, 95, 7, true, v); }

_jstype.staticDefinition.get_graphicsDeviceVendorID = function() { return CS.Call(2, 95, 8, true); }
_jstype.staticDefinition.set_graphicsDeviceVendorID = function(v) { return CS.Call(3, 95, 8, true, v); }

_jstype.staticDefinition.get_graphicsDeviceVersion = function() { return CS.Call(2, 95, 9, true); }
_jstype.staticDefinition.set_graphicsDeviceVersion = function(v) { return CS.Call(3, 95, 9, true, v); }

_jstype.staticDefinition.get_graphicsShaderLevel = function() { return CS.Call(2, 95, 10, true); }
_jstype.staticDefinition.set_graphicsShaderLevel = function(v) { return CS.Call(3, 95, 10, true, v); }

_jstype.staticDefinition.get_graphicsPixelFillrate = function() { return CS.Call(2, 95, 11, true); }
_jstype.staticDefinition.set_graphicsPixelFillrate = function(v) { return CS.Call(3, 95, 11, true, v); }

_jstype.staticDefinition.get_supportsShadows = function() { return CS.Call(2, 95, 12, true); }
_jstype.staticDefinition.set_supportsShadows = function(v) { return CS.Call(3, 95, 12, true, v); }

_jstype.staticDefinition.get_supportsRenderTextures = function() { return CS.Call(2, 95, 13, true); }
_jstype.staticDefinition.set_supportsRenderTextures = function(v) { return CS.Call(3, 95, 13, true, v); }

_jstype.staticDefinition.get_supportsRenderToCubemap = function() { return CS.Call(2, 95, 14, true); }
_jstype.staticDefinition.set_supportsRenderToCubemap = function(v) { return CS.Call(3, 95, 14, true, v); }

_jstype.staticDefinition.get_supportsImageEffects = function() { return CS.Call(2, 95, 15, true); }
_jstype.staticDefinition.set_supportsImageEffects = function(v) { return CS.Call(3, 95, 15, true, v); }

_jstype.staticDefinition.get_supports3DTextures = function() { return CS.Call(2, 95, 16, true); }
_jstype.staticDefinition.set_supports3DTextures = function(v) { return CS.Call(3, 95, 16, true, v); }

_jstype.staticDefinition.get_supportsComputeShaders = function() { return CS.Call(2, 95, 17, true); }
_jstype.staticDefinition.set_supportsComputeShaders = function(v) { return CS.Call(3, 95, 17, true, v); }

_jstype.staticDefinition.get_supportsInstancing = function() { return CS.Call(2, 95, 18, true); }
_jstype.staticDefinition.set_supportsInstancing = function(v) { return CS.Call(3, 95, 18, true, v); }

_jstype.staticDefinition.get_supportsSparseTextures = function() { return CS.Call(2, 95, 19, true); }
_jstype.staticDefinition.set_supportsSparseTextures = function(v) { return CS.Call(3, 95, 19, true, v); }

_jstype.staticDefinition.get_supportedRenderTargetCount = function() { return CS.Call(2, 95, 20, true); }
_jstype.staticDefinition.set_supportedRenderTargetCount = function(v) { return CS.Call(3, 95, 20, true, v); }

_jstype.staticDefinition.get_supportsStencil = function() { return CS.Call(2, 95, 21, true); }
_jstype.staticDefinition.set_supportsStencil = function(v) { return CS.Call(3, 95, 21, true, v); }

_jstype.staticDefinition.get_supportsVertexPrograms = function() { return CS.Call(2, 95, 22, true); }
_jstype.staticDefinition.set_supportsVertexPrograms = function(v) { return CS.Call(3, 95, 22, true, v); }

_jstype.staticDefinition.get_npotSupport = function() { return CS.Call(2, 95, 23, true); }
_jstype.staticDefinition.set_npotSupport = function(v) { return CS.Call(3, 95, 23, true, v); }

_jstype.staticDefinition.get_deviceUniqueIdentifier = function() { return CS.Call(2, 95, 24, true); }
_jstype.staticDefinition.set_deviceUniqueIdentifier = function(v) { return CS.Call(3, 95, 24, true, v); }

_jstype.staticDefinition.get_deviceName = function() { return CS.Call(2, 95, 25, true); }
_jstype.staticDefinition.set_deviceName = function(v) { return CS.Call(3, 95, 25, true, v); }

_jstype.staticDefinition.get_deviceModel = function() { return CS.Call(2, 95, 26, true); }
_jstype.staticDefinition.set_deviceModel = function(v) { return CS.Call(3, 95, 26, true, v); }

_jstype.staticDefinition.get_supportsAccelerometer = function() { return CS.Call(2, 95, 27, true); }
_jstype.staticDefinition.set_supportsAccelerometer = function(v) { return CS.Call(3, 95, 27, true, v); }

_jstype.staticDefinition.get_supportsGyroscope = function() { return CS.Call(2, 95, 28, true); }
_jstype.staticDefinition.set_supportsGyroscope = function(v) { return CS.Call(3, 95, 28, true, v); }

_jstype.staticDefinition.get_supportsLocationService = function() { return CS.Call(2, 95, 29, true); }
_jstype.staticDefinition.set_supportsLocationService = function(v) { return CS.Call(3, 95, 29, true, v); }

_jstype.staticDefinition.get_supportsVibration = function() { return CS.Call(2, 95, 30, true); }
_jstype.staticDefinition.set_supportsVibration = function(v) { return CS.Call(3, 95, 30, true, v); }

_jstype.staticDefinition.get_deviceType = function() { return CS.Call(2, 95, 31, true); }
_jstype.staticDefinition.set_deviceType = function(v) { return CS.Call(3, 95, 31, true, v); }

_jstype.staticDefinition.get_maxTextureSize = function() { return CS.Call(2, 95, 32, true); }
_jstype.staticDefinition.set_maxTextureSize = function(v) { return CS.Call(3, 95, 32, true, v); }

// methods

/* static Boolean  */
_jstype.staticDefinition.SupportsRenderTextureFormat = function(a0/*RenderTextureFormat*/) { 
    
    return CS.Call(4, 95, 0, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$WaitForSeconds
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.WaitForSeconds",
    baseTypeName: "UnityEngine.YieldInstruction"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function(a0) { CS.Call(5, 96, 0, true, this, a0); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$WaitForFixedUpdate
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.WaitForFixedUpdate",
    baseTypeName: "UnityEngine.YieldInstruction"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 97, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$WaitForEndOfFrame
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.WaitForEndOfFrame",
    baseTypeName: "UnityEngine.YieldInstruction"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 98, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Coroutine
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Coroutine",
    baseTypeName: "UnityEngine.YieldInstruction"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ScriptableObject
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ScriptableObject",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 100, 0, true, this); }

// fields

// properties

// methods

/* static ScriptableObject  */
_jstype.staticDefinition.CreateInstance$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 100, 0, true, a0); 
}
/* static ScriptableObject  */
_jstype.staticDefinition.CreateInstance$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 100, 1, true, a0); 
}
/* static T  */
_jstype.staticDefinition.CreateInstance$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 100, 2, true, native_t0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Resources
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Resources",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 101, 0, true, this); }

// fields

// properties

// methods

/* static Object[]  */
_jstype.staticDefinition.FindObjectsOfTypeAll$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 101, 0, true, a0); 
}
/* static T[]  */
_jstype.staticDefinition.FindObjectsOfTypeAll$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 101, 1, true, native_t0); 
}
/* static Object  */
_jstype.staticDefinition.GetBuiltinResource$$Type$$String = function(a0/*Type*/, a1/*String*/) { 
    
    return CS.Call(4, 101, 2, true, a0, a1); 
}
/* static T  */
_jstype.staticDefinition.GetBuiltinResource$1$$String = function(t0, a0/*String*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 101, 3, true, native_t0, a0); 
}
/* static Object  */
_jstype.staticDefinition.Load$$String$$Type = function(a0/*String*/, a1/*Type*/) { 
    
    return CS.Call(4, 101, 4, true, a0, a1); 
}
/* static Object  */
_jstype.staticDefinition.Load$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 101, 5, true, a0); 
}
/* static T  */
_jstype.staticDefinition.Load$1$$String = function(t0, a0/*String*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 101, 6, true, native_t0, a0); 
}
/* static Object[]  */
_jstype.staticDefinition.LoadAll$$String$$Type = function(a0/*String*/, a1/*Type*/) { 
    
    return CS.Call(4, 101, 7, true, a0, a1); 
}
/* static T[]  */
_jstype.staticDefinition.LoadAll$1$$String = function(t0, a0/*String*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 101, 8, true, native_t0, a0); 
}
/* static Object[]  */
_jstype.staticDefinition.LoadAll$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 101, 9, true, a0); 
}
/* static Object  */
_jstype.staticDefinition.LoadAssetAtPath$$String$$Type = function(a0/*String*/, a1/*Type*/) { 
    
    return CS.Call(4, 101, 10, true, a0, a1); 
}
/* static T  */
_jstype.staticDefinition.LoadAssetAtPath$1$$String = function(t0, a0/*String*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 101, 11, true, native_t0, a0); 
}
/* static ResourceRequest  */
_jstype.staticDefinition.LoadAsync$$String$$Type = function(a0/*String*/, a1/*Type*/) { 
    
    return CS.Call(4, 101, 12, true, a0, a1); 
}
/* static ResourceRequest  */
_jstype.staticDefinition.LoadAsync$1$$String = function(t0, a0/*String*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 101, 13, true, native_t0, a0); 
}
/* static ResourceRequest  */
_jstype.staticDefinition.LoadAsync$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 101, 14, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.UnloadAsset = function(a0/*Object*/) { 
    
    return CS.Call(4, 101, 15, true, a0); 
}
/* static AsyncOperation  */
_jstype.staticDefinition.UnloadUnusedAssets = function() { 
    
    return CS.Call(4, 101, 16, true); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Profiler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Profiler",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 102, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_supported = function() { return CS.Call(2, 102, 0, true); }
_jstype.staticDefinition.set_supported = function(v) { return CS.Call(3, 102, 0, true, v); }

_jstype.staticDefinition.get_logFile = function() { return CS.Call(2, 102, 1, true); }
_jstype.staticDefinition.set_logFile = function(v) { return CS.Call(3, 102, 1, true, v); }

_jstype.staticDefinition.get_enableBinaryLog = function() { return CS.Call(2, 102, 2, true); }
_jstype.staticDefinition.set_enableBinaryLog = function(v) { return CS.Call(3, 102, 2, true, v); }

_jstype.staticDefinition.get_enabled = function() { return CS.Call(2, 102, 3, true); }
_jstype.staticDefinition.set_enabled = function(v) { return CS.Call(3, 102, 3, true, v); }

_jstype.staticDefinition.get_usedHeapSize = function() { return CS.Call(2, 102, 4, true); }
_jstype.staticDefinition.set_usedHeapSize = function(v) { return CS.Call(3, 102, 4, true, v); }

// methods

/* static Void  */
_jstype.staticDefinition.AddFramesFromFile = function(a0/*String*/) { 
    
    return CS.Call(4, 102, 0, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.BeginSample$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 102, 1, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.BeginSample$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 102, 2, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.EndSample = function() { 
    
    return CS.Call(4, 102, 3, true); 
}
/* static UInt32  */
_jstype.staticDefinition.GetMonoHeapSize = function() { 
    
    return CS.Call(4, 102, 4, true); 
}
/* static UInt32  */
_jstype.staticDefinition.GetMonoUsedSize = function() { 
    
    return CS.Call(4, 102, 5, true); 
}
/* static Int32  */
_jstype.staticDefinition.GetRuntimeMemorySize = function(a0/*Object*/) { 
    
    return CS.Call(4, 102, 6, true, a0); 
}
/* static UInt32  */
_jstype.staticDefinition.GetTotalAllocatedMemory = function() { 
    
    return CS.Call(4, 102, 7, true); 
}
/* static UInt32  */
_jstype.staticDefinition.GetTotalReservedMemory = function() { 
    
    return CS.Call(4, 102, 8, true); 
}
/* static UInt32  */
_jstype.staticDefinition.GetTotalUnusedReservedMemory = function() { 
    
    return CS.Call(4, 102, 9, true); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$CrashReport
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.CrashReport",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

_jstype.fields.time =  { 
            get: function() { return CS.Call(0, 103, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 103, 0, false, this, v); } 
        };

_jstype.fields.text =  { 
            get: function() { return CS.Call(0, 103, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 103, 1, false, this, v); } 
        };

// properties

_jstype.staticDefinition.get_reports = function() { return CS.Call(2, 103, 0, true); }
_jstype.staticDefinition.set_reports = function(v) { return CS.Call(3, 103, 0, true, v); }

_jstype.staticDefinition.get_lastReport = function() { return CS.Call(2, 103, 1, true); }
_jstype.staticDefinition.set_lastReport = function(v) { return CS.Call(3, 103, 1, true, v); }

// methods

/* Void */
_jstype.definition.Remove = function() { 
    
    return CS.Call(4, 103, 0, false, this); 
}
/* static Void  */
_jstype.staticDefinition.RemoveAll = function() { 
    
    return CS.Call(4, 103, 1, true); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Cursor
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Cursor",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 104, 0, true, this); }

// fields

// properties

// methods

/* static Void  */
_jstype.staticDefinition.SetCursor$$Texture2D$$Vector2$$CursorMode = function(a0/*Texture2D*/, a1/*Vector2*/, a2/*CursorMode*/) { 
    
    return CS.Call(4, 104, 0, true, a0, a1, a2); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$OcclusionArea
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.OcclusionArea",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 105, 0, true, this); }

// fields

// properties

_jstype.definition.get_center = function() { return CS.Call(2, 105, 0, false, this); }
_jstype.definition.set_center = function(v) { return CS.Call(3, 105, 0, false, this, v); }

_jstype.definition.get_size = function() { return CS.Call(2, 105, 1, false, this); }
_jstype.definition.set_size = function(v) { return CS.Call(3, 105, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$OcclusionPortal
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.OcclusionPortal",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 106, 0, true, this); }

// fields

// properties

_jstype.definition.get_open = function() { return CS.Call(2, 106, 0, false, this); }
_jstype.definition.set_open = function(v) { return CS.Call(3, 106, 0, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$RenderSettings
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.RenderSettings",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 107, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_fog = function() { return CS.Call(2, 107, 0, true); }
_jstype.staticDefinition.set_fog = function(v) { return CS.Call(3, 107, 0, true, v); }

_jstype.staticDefinition.get_fogMode = function() { return CS.Call(2, 107, 1, true); }
_jstype.staticDefinition.set_fogMode = function(v) { return CS.Call(3, 107, 1, true, v); }

_jstype.staticDefinition.get_fogColor = function() { return CS.Call(2, 107, 2, true); }
_jstype.staticDefinition.set_fogColor = function(v) { return CS.Call(3, 107, 2, true, v); }

_jstype.staticDefinition.get_fogDensity = function() { return CS.Call(2, 107, 3, true); }
_jstype.staticDefinition.set_fogDensity = function(v) { return CS.Call(3, 107, 3, true, v); }

_jstype.staticDefinition.get_fogStartDistance = function() { return CS.Call(2, 107, 4, true); }
_jstype.staticDefinition.set_fogStartDistance = function(v) { return CS.Call(3, 107, 4, true, v); }

_jstype.staticDefinition.get_fogEndDistance = function() { return CS.Call(2, 107, 5, true); }
_jstype.staticDefinition.set_fogEndDistance = function(v) { return CS.Call(3, 107, 5, true, v); }

_jstype.staticDefinition.get_ambientLight = function() { return CS.Call(2, 107, 6, true); }
_jstype.staticDefinition.set_ambientLight = function(v) { return CS.Call(3, 107, 6, true, v); }

_jstype.staticDefinition.get_haloStrength = function() { return CS.Call(2, 107, 7, true); }
_jstype.staticDefinition.set_haloStrength = function(v) { return CS.Call(3, 107, 7, true, v); }

_jstype.staticDefinition.get_flareStrength = function() { return CS.Call(2, 107, 8, true); }
_jstype.staticDefinition.set_flareStrength = function(v) { return CS.Call(3, 107, 8, true, v); }

_jstype.staticDefinition.get_flareFadeSpeed = function() { return CS.Call(2, 107, 9, true); }
_jstype.staticDefinition.set_flareFadeSpeed = function(v) { return CS.Call(3, 107, 9, true, v); }

_jstype.staticDefinition.get_skybox = function() { return CS.Call(2, 107, 10, true); }
_jstype.staticDefinition.set_skybox = function(v) { return CS.Call(3, 107, 10, true, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$QualitySettings
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.QualitySettings",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 108, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_names = function() { return CS.Call(2, 108, 0, true); }
_jstype.staticDefinition.set_names = function(v) { return CS.Call(3, 108, 0, true, v); }

_jstype.staticDefinition.get_pixelLightCount = function() { return CS.Call(2, 108, 1, true); }
_jstype.staticDefinition.set_pixelLightCount = function(v) { return CS.Call(3, 108, 1, true, v); }

_jstype.staticDefinition.get_shadowProjection = function() { return CS.Call(2, 108, 2, true); }
_jstype.staticDefinition.set_shadowProjection = function(v) { return CS.Call(3, 108, 2, true, v); }

_jstype.staticDefinition.get_shadowCascades = function() { return CS.Call(2, 108, 3, true); }
_jstype.staticDefinition.set_shadowCascades = function(v) { return CS.Call(3, 108, 3, true, v); }

_jstype.staticDefinition.get_shadowDistance = function() { return CS.Call(2, 108, 4, true); }
_jstype.staticDefinition.set_shadowDistance = function(v) { return CS.Call(3, 108, 4, true, v); }

_jstype.staticDefinition.get_masterTextureLimit = function() { return CS.Call(2, 108, 5, true); }
_jstype.staticDefinition.set_masterTextureLimit = function(v) { return CS.Call(3, 108, 5, true, v); }

_jstype.staticDefinition.get_anisotropicFiltering = function() { return CS.Call(2, 108, 6, true); }
_jstype.staticDefinition.set_anisotropicFiltering = function(v) { return CS.Call(3, 108, 6, true, v); }

_jstype.staticDefinition.get_lodBias = function() { return CS.Call(2, 108, 7, true); }
_jstype.staticDefinition.set_lodBias = function(v) { return CS.Call(3, 108, 7, true, v); }

_jstype.staticDefinition.get_maximumLODLevel = function() { return CS.Call(2, 108, 8, true); }
_jstype.staticDefinition.set_maximumLODLevel = function(v) { return CS.Call(3, 108, 8, true, v); }

_jstype.staticDefinition.get_particleRaycastBudget = function() { return CS.Call(2, 108, 9, true); }
_jstype.staticDefinition.set_particleRaycastBudget = function(v) { return CS.Call(3, 108, 9, true, v); }

_jstype.staticDefinition.get_softVegetation = function() { return CS.Call(2, 108, 10, true); }
_jstype.staticDefinition.set_softVegetation = function(v) { return CS.Call(3, 108, 10, true, v); }

_jstype.staticDefinition.get_maxQueuedFrames = function() { return CS.Call(2, 108, 11, true); }
_jstype.staticDefinition.set_maxQueuedFrames = function(v) { return CS.Call(3, 108, 11, true, v); }

_jstype.staticDefinition.get_vSyncCount = function() { return CS.Call(2, 108, 12, true); }
_jstype.staticDefinition.set_vSyncCount = function(v) { return CS.Call(3, 108, 12, true, v); }

_jstype.staticDefinition.get_antiAliasing = function() { return CS.Call(2, 108, 13, true); }
_jstype.staticDefinition.set_antiAliasing = function(v) { return CS.Call(3, 108, 13, true, v); }

_jstype.staticDefinition.get_desiredColorSpace = function() { return CS.Call(2, 108, 14, true); }
_jstype.staticDefinition.set_desiredColorSpace = function(v) { return CS.Call(3, 108, 14, true, v); }

_jstype.staticDefinition.get_activeColorSpace = function() { return CS.Call(2, 108, 15, true); }
_jstype.staticDefinition.set_activeColorSpace = function(v) { return CS.Call(3, 108, 15, true, v); }

_jstype.staticDefinition.get_blendWeights = function() { return CS.Call(2, 108, 16, true); }
_jstype.staticDefinition.set_blendWeights = function(v) { return CS.Call(3, 108, 16, true, v); }

// methods

/* static Void  */
_jstype.staticDefinition.DecreaseLevel$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 108, 0, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.DecreaseLevel = function() { 
    
    return CS.Call(4, 108, 1, true); 
}
/* static Int32  */
_jstype.staticDefinition.GetQualityLevel = function() { 
    
    return CS.Call(4, 108, 2, true); 
}
/* static Void  */
_jstype.staticDefinition.IncreaseLevel$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 108, 3, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.IncreaseLevel = function() { 
    
    return CS.Call(4, 108, 4, true); 
}
/* static Void  */
_jstype.staticDefinition.SetQualityLevel$$Int32$$Boolean = function(a0/*Int32*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 108, 5, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetQualityLevel$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 108, 6, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$MeshFilter
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.MeshFilter",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 109, 0, true, this); }

// fields

// properties

_jstype.definition.get_mesh = function() { return CS.Call(2, 109, 0, false, this); }
_jstype.definition.set_mesh = function(v) { return CS.Call(3, 109, 0, false, this, v); }

_jstype.definition.get_sharedMesh = function() { return CS.Call(2, 109, 1, false, this); }
_jstype.definition.set_sharedMesh = function(v) { return CS.Call(3, 109, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Mesh
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Mesh",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 110, 0, true, this); }

// fields

// properties

_jstype.definition.get_isReadable = function() { return CS.Call(2, 110, 0, false, this); }
_jstype.definition.set_isReadable = function(v) { return CS.Call(3, 110, 0, false, this, v); }

_jstype.definition.get_vertices = function() { return CS.Call(2, 110, 1, false, this); }
_jstype.definition.set_vertices = function(v) { return CS.Call(3, 110, 1, false, this, v); }

_jstype.definition.get_normals = function() { return CS.Call(2, 110, 2, false, this); }
_jstype.definition.set_normals = function(v) { return CS.Call(3, 110, 2, false, this, v); }

_jstype.definition.get_tangents = function() { return CS.Call(2, 110, 3, false, this); }
_jstype.definition.set_tangents = function(v) { return CS.Call(3, 110, 3, false, this, v); }

_jstype.definition.get_uv = function() { return CS.Call(2, 110, 4, false, this); }
_jstype.definition.set_uv = function(v) { return CS.Call(3, 110, 4, false, this, v); }

_jstype.definition.get_uv2 = function() { return CS.Call(2, 110, 5, false, this); }
_jstype.definition.set_uv2 = function(v) { return CS.Call(3, 110, 5, false, this, v); }

_jstype.definition.get_uv1 = function() { return CS.Call(2, 110, 6, false, this); }
_jstype.definition.set_uv1 = function(v) { return CS.Call(3, 110, 6, false, this, v); }

_jstype.definition.get_bounds = function() { return CS.Call(2, 110, 7, false, this); }
_jstype.definition.set_bounds = function(v) { return CS.Call(3, 110, 7, false, this, v); }

_jstype.definition.get_colors = function() { return CS.Call(2, 110, 8, false, this); }
_jstype.definition.set_colors = function(v) { return CS.Call(3, 110, 8, false, this, v); }

_jstype.definition.get_colors32 = function() { return CS.Call(2, 110, 9, false, this); }
_jstype.definition.set_colors32 = function(v) { return CS.Call(3, 110, 9, false, this, v); }

_jstype.definition.get_triangles = function() { return CS.Call(2, 110, 10, false, this); }
_jstype.definition.set_triangles = function(v) { return CS.Call(3, 110, 10, false, this, v); }

_jstype.definition.get_vertexCount = function() { return CS.Call(2, 110, 11, false, this); }
_jstype.definition.set_vertexCount = function(v) { return CS.Call(3, 110, 11, false, this, v); }

_jstype.definition.get_subMeshCount = function() { return CS.Call(2, 110, 12, false, this); }
_jstype.definition.set_subMeshCount = function(v) { return CS.Call(3, 110, 12, false, this, v); }

_jstype.definition.get_boneWeights = function() { return CS.Call(2, 110, 13, false, this); }
_jstype.definition.set_boneWeights = function(v) { return CS.Call(3, 110, 13, false, this, v); }

_jstype.definition.get_bindposes = function() { return CS.Call(2, 110, 14, false, this); }
_jstype.definition.set_bindposes = function(v) { return CS.Call(3, 110, 14, false, this, v); }

_jstype.definition.get_blendShapeCount = function() { return CS.Call(2, 110, 15, false, this); }
_jstype.definition.set_blendShapeCount = function(v) { return CS.Call(3, 110, 15, false, this, v); }

// methods

/* Void */
_jstype.definition.Clear$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 110, 0, false, this, a0); 
}
/* Void */
_jstype.definition.Clear = function() { 
    
    return CS.Call(4, 110, 1, false, this); 
}
/* Void */
_jstype.definition.CombineMeshes$$CombineInstance$Array$$Boolean$$Boolean = function(a0/*CombineInstance[]*/, a1/*Boolean*/, a2/*Boolean*/) { 
    
    return CS.Call(4, 110, 2, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.CombineMeshes$$CombineInstance$Array$$Boolean = function(a0/*CombineInstance[]*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 110, 3, false, this, a0, a1); 
}
/* Void */
_jstype.definition.CombineMeshes$$CombineInstance$Array = function(a0/*CombineInstance[]*/) { 
    
    return CS.Call(4, 110, 4, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetBlendShapeIndex = function(a0/*String*/) { 
    
    return CS.Call(4, 110, 5, false, this, a0); 
}
/* String */
_jstype.definition.GetBlendShapeName = function(a0/*Int32*/) { 
    
    return CS.Call(4, 110, 6, false, this, a0); 
}
/* Int32[] */
_jstype.definition.GetIndices = function(a0/*Int32*/) { 
    
    return CS.Call(4, 110, 7, false, this, a0); 
}
/* MeshTopology */
_jstype.definition.GetTopology = function(a0/*Int32*/) { 
    
    return CS.Call(4, 110, 8, false, this, a0); 
}
/* Int32[] */
_jstype.definition.GetTriangles = function(a0/*Int32*/) { 
    
    return CS.Call(4, 110, 9, false, this, a0); 
}
/* Void */
_jstype.definition.MarkDynamic = function() { 
    
    return CS.Call(4, 110, 10, false, this); 
}
/* Void */
_jstype.definition.Optimize = function() { 
    
    return CS.Call(4, 110, 11, false, this); 
}
/* Void */
_jstype.definition.RecalculateBounds = function() { 
    
    return CS.Call(4, 110, 12, false, this); 
}
/* Void */
_jstype.definition.RecalculateNormals = function() { 
    
    return CS.Call(4, 110, 13, false, this); 
}
/* Void */
_jstype.definition.SetIndices = function(a0/*Int32[]*/, a1/*MeshTopology*/, a2/*Int32*/) { 
    
    return CS.Call(4, 110, 14, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SetTriangles = function(a0/*Int32[]*/, a1/*Int32*/) { 
    
    return CS.Call(4, 110, 15, false, this, a0, a1); 
}
/* Void */
_jstype.definition.UploadMeshData = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 110, 16, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$SkinnedMeshRenderer
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.SkinnedMeshRenderer",
    baseTypeName: "UnityEngine.Renderer"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 111, 0, true, this); }

// fields

// properties

_jstype.definition.get_bones = function() { return CS.Call(2, 111, 0, false, this); }
_jstype.definition.set_bones = function(v) { return CS.Call(3, 111, 0, false, this, v); }

_jstype.definition.get_rootBone = function() { return CS.Call(2, 111, 1, false, this); }
_jstype.definition.set_rootBone = function(v) { return CS.Call(3, 111, 1, false, this, v); }

_jstype.definition.get_quality = function() { return CS.Call(2, 111, 2, false, this); }
_jstype.definition.set_quality = function(v) { return CS.Call(3, 111, 2, false, this, v); }

_jstype.definition.get_sharedMesh = function() { return CS.Call(2, 111, 3, false, this); }
_jstype.definition.set_sharedMesh = function(v) { return CS.Call(3, 111, 3, false, this, v); }

_jstype.definition.get_updateWhenOffscreen = function() { return CS.Call(2, 111, 4, false, this); }
_jstype.definition.set_updateWhenOffscreen = function(v) { return CS.Call(3, 111, 4, false, this, v); }

_jstype.definition.get_localBounds = function() { return CS.Call(2, 111, 5, false, this); }
_jstype.definition.set_localBounds = function(v) { return CS.Call(3, 111, 5, false, this, v); }

// methods

/* Void */
_jstype.definition.BakeMesh = function(a0/*Mesh*/) { 
    
    return CS.Call(4, 111, 0, false, this, a0); 
}
/* Single */
_jstype.definition.GetBlendShapeWeight = function(a0/*Int32*/) { 
    
    return CS.Call(4, 111, 1, false, this, a0); 
}
/* Void */
_jstype.definition.SetBlendShapeWeight = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 111, 2, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Flare
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Flare",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 112, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$LensFlare
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.LensFlare",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 113, 0, true, this); }

// fields

// properties

_jstype.definition.get_flare = function() { return CS.Call(2, 113, 0, false, this); }
_jstype.definition.set_flare = function(v) { return CS.Call(3, 113, 0, false, this, v); }

_jstype.definition.get_brightness = function() { return CS.Call(2, 113, 1, false, this); }
_jstype.definition.set_brightness = function(v) { return CS.Call(3, 113, 1, false, this, v); }

_jstype.definition.get_fadeSpeed = function() { return CS.Call(2, 113, 2, false, this); }
_jstype.definition.set_fadeSpeed = function(v) { return CS.Call(3, 113, 2, false, this, v); }

_jstype.definition.get_color = function() { return CS.Call(2, 113, 3, false, this); }
_jstype.definition.set_color = function(v) { return CS.Call(3, 113, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Renderer
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Renderer",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 114, 0, true, this); }

// fields

// properties

_jstype.definition.get_isPartOfStaticBatch = function() { return CS.Call(2, 114, 0, false, this); }
_jstype.definition.set_isPartOfStaticBatch = function(v) { return CS.Call(3, 114, 0, false, this, v); }

_jstype.definition.get_worldToLocalMatrix = function() { return CS.Call(2, 114, 1, false, this); }
_jstype.definition.set_worldToLocalMatrix = function(v) { return CS.Call(3, 114, 1, false, this, v); }

_jstype.definition.get_localToWorldMatrix = function() { return CS.Call(2, 114, 2, false, this); }
_jstype.definition.set_localToWorldMatrix = function(v) { return CS.Call(3, 114, 2, false, this, v); }

_jstype.definition.get_enabled = function() { return CS.Call(2, 114, 3, false, this); }
_jstype.definition.set_enabled = function(v) { return CS.Call(3, 114, 3, false, this, v); }

_jstype.definition.get_castShadows = function() { return CS.Call(2, 114, 4, false, this); }
_jstype.definition.set_castShadows = function(v) { return CS.Call(3, 114, 4, false, this, v); }

_jstype.definition.get_receiveShadows = function() { return CS.Call(2, 114, 5, false, this); }
_jstype.definition.set_receiveShadows = function(v) { return CS.Call(3, 114, 5, false, this, v); }

_jstype.definition.get_material = function() { return CS.Call(2, 114, 6, false, this); }
_jstype.definition.set_material = function(v) { return CS.Call(3, 114, 6, false, this, v); }

_jstype.definition.get_sharedMaterial = function() { return CS.Call(2, 114, 7, false, this); }
_jstype.definition.set_sharedMaterial = function(v) { return CS.Call(3, 114, 7, false, this, v); }

_jstype.definition.get_sharedMaterials = function() { return CS.Call(2, 114, 8, false, this); }
_jstype.definition.set_sharedMaterials = function(v) { return CS.Call(3, 114, 8, false, this, v); }

_jstype.definition.get_materials = function() { return CS.Call(2, 114, 9, false, this); }
_jstype.definition.set_materials = function(v) { return CS.Call(3, 114, 9, false, this, v); }

_jstype.definition.get_bounds = function() { return CS.Call(2, 114, 10, false, this); }
_jstype.definition.set_bounds = function(v) { return CS.Call(3, 114, 10, false, this, v); }

_jstype.definition.get_lightmapIndex = function() { return CS.Call(2, 114, 11, false, this); }
_jstype.definition.set_lightmapIndex = function(v) { return CS.Call(3, 114, 11, false, this, v); }

_jstype.definition.get_lightmapTilingOffset = function() { return CS.Call(2, 114, 12, false, this); }
_jstype.definition.set_lightmapTilingOffset = function(v) { return CS.Call(3, 114, 12, false, this, v); }

_jstype.definition.get_isVisible = function() { return CS.Call(2, 114, 13, false, this); }
_jstype.definition.set_isVisible = function(v) { return CS.Call(3, 114, 13, false, this, v); }

_jstype.definition.get_useLightProbes = function() { return CS.Call(2, 114, 14, false, this); }
_jstype.definition.set_useLightProbes = function(v) { return CS.Call(3, 114, 14, false, this, v); }

_jstype.definition.get_lightProbeAnchor = function() { return CS.Call(2, 114, 15, false, this); }
_jstype.definition.set_lightProbeAnchor = function(v) { return CS.Call(3, 114, 15, false, this, v); }

_jstype.definition.get_sortingLayerName = function() { return CS.Call(2, 114, 16, false, this); }
_jstype.definition.set_sortingLayerName = function(v) { return CS.Call(3, 114, 16, false, this, v); }

_jstype.definition.get_sortingLayerID = function() { return CS.Call(2, 114, 17, false, this); }
_jstype.definition.set_sortingLayerID = function(v) { return CS.Call(3, 114, 17, false, this, v); }

_jstype.definition.get_sortingOrder = function() { return CS.Call(2, 114, 18, false, this); }
_jstype.definition.set_sortingOrder = function(v) { return CS.Call(3, 114, 18, false, this, v); }

// methods

/* Void */
_jstype.definition.GetPropertyBlock = function(a0/*MaterialPropertyBlock*/) { 
    
    return CS.Call(4, 114, 0, false, this, a0); 
}
/* Void */
_jstype.definition.Render = function(a0/*Int32*/) { 
    
    return CS.Call(4, 114, 1, false, this, a0); 
}
/* Void */
_jstype.definition.SetPropertyBlock = function(a0/*MaterialPropertyBlock*/) { 
    
    return CS.Call(4, 114, 2, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Projector
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Projector",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 115, 0, true, this); }

// fields

// properties

_jstype.definition.get_nearClipPlane = function() { return CS.Call(2, 115, 0, false, this); }
_jstype.definition.set_nearClipPlane = function(v) { return CS.Call(3, 115, 0, false, this, v); }

_jstype.definition.get_farClipPlane = function() { return CS.Call(2, 115, 1, false, this); }
_jstype.definition.set_farClipPlane = function(v) { return CS.Call(3, 115, 1, false, this, v); }

_jstype.definition.get_fieldOfView = function() { return CS.Call(2, 115, 2, false, this); }
_jstype.definition.set_fieldOfView = function(v) { return CS.Call(3, 115, 2, false, this, v); }

_jstype.definition.get_aspectRatio = function() { return CS.Call(2, 115, 3, false, this); }
_jstype.definition.set_aspectRatio = function(v) { return CS.Call(3, 115, 3, false, this, v); }

_jstype.definition.get_isOrthoGraphic = function() { return CS.Call(2, 115, 4, false, this); }
_jstype.definition.set_isOrthoGraphic = function(v) { return CS.Call(3, 115, 4, false, this, v); }

_jstype.definition.get_orthographic = function() { return CS.Call(2, 115, 5, false, this); }
_jstype.definition.set_orthographic = function(v) { return CS.Call(3, 115, 5, false, this, v); }

_jstype.definition.get_orthographicSize = function() { return CS.Call(2, 115, 6, false, this); }
_jstype.definition.set_orthographicSize = function(v) { return CS.Call(3, 115, 6, false, this, v); }

_jstype.definition.get_orthoGraphicSize = function() { return CS.Call(2, 115, 7, false, this); }
_jstype.definition.set_orthoGraphicSize = function(v) { return CS.Call(3, 115, 7, false, this, v); }

_jstype.definition.get_ignoreLayers = function() { return CS.Call(2, 115, 8, false, this); }
_jstype.definition.set_ignoreLayers = function(v) { return CS.Call(3, 115, 8, false, this, v); }

_jstype.definition.get_material = function() { return CS.Call(2, 115, 9, false, this); }
_jstype.definition.set_material = function(v) { return CS.Call(3, 115, 9, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Skybox
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Skybox",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 116, 0, true, this); }

// fields

// properties

_jstype.definition.get_material = function() { return CS.Call(2, 116, 0, false, this); }
_jstype.definition.set_material = function(v) { return CS.Call(3, 116, 0, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$TextMesh
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.TextMesh",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 117, 0, true, this); }

// fields

// properties

_jstype.definition.get_text = function() { return CS.Call(2, 117, 0, false, this); }
_jstype.definition.set_text = function(v) { return CS.Call(3, 117, 0, false, this, v); }

_jstype.definition.get_font = function() { return CS.Call(2, 117, 1, false, this); }
_jstype.definition.set_font = function(v) { return CS.Call(3, 117, 1, false, this, v); }

_jstype.definition.get_fontSize = function() { return CS.Call(2, 117, 2, false, this); }
_jstype.definition.set_fontSize = function(v) { return CS.Call(3, 117, 2, false, this, v); }

_jstype.definition.get_fontStyle = function() { return CS.Call(2, 117, 3, false, this); }
_jstype.definition.set_fontStyle = function(v) { return CS.Call(3, 117, 3, false, this, v); }

_jstype.definition.get_offsetZ = function() { return CS.Call(2, 117, 4, false, this); }
_jstype.definition.set_offsetZ = function(v) { return CS.Call(3, 117, 4, false, this, v); }

_jstype.definition.get_alignment = function() { return CS.Call(2, 117, 5, false, this); }
_jstype.definition.set_alignment = function(v) { return CS.Call(3, 117, 5, false, this, v); }

_jstype.definition.get_anchor = function() { return CS.Call(2, 117, 6, false, this); }
_jstype.definition.set_anchor = function(v) { return CS.Call(3, 117, 6, false, this, v); }

_jstype.definition.get_characterSize = function() { return CS.Call(2, 117, 7, false, this); }
_jstype.definition.set_characterSize = function(v) { return CS.Call(3, 117, 7, false, this, v); }

_jstype.definition.get_lineSpacing = function() { return CS.Call(2, 117, 8, false, this); }
_jstype.definition.set_lineSpacing = function(v) { return CS.Call(3, 117, 8, false, this, v); }

_jstype.definition.get_tabSize = function() { return CS.Call(2, 117, 9, false, this); }
_jstype.definition.set_tabSize = function(v) { return CS.Call(3, 117, 9, false, this, v); }

_jstype.definition.get_richText = function() { return CS.Call(2, 117, 10, false, this); }
_jstype.definition.set_richText = function(v) { return CS.Call(3, 117, 10, false, this, v); }

_jstype.definition.get_color = function() { return CS.Call(2, 117, 11, false, this); }
_jstype.definition.set_color = function(v) { return CS.Call(3, 117, 11, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ParticleEmitter
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ParticleEmitter",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 118, 0, true, this); }

// fields

// properties

_jstype.definition.get_emit = function() { return CS.Call(2, 118, 0, false, this); }
_jstype.definition.set_emit = function(v) { return CS.Call(3, 118, 0, false, this, v); }

_jstype.definition.get_minSize = function() { return CS.Call(2, 118, 1, false, this); }
_jstype.definition.set_minSize = function(v) { return CS.Call(3, 118, 1, false, this, v); }

_jstype.definition.get_maxSize = function() { return CS.Call(2, 118, 2, false, this); }
_jstype.definition.set_maxSize = function(v) { return CS.Call(3, 118, 2, false, this, v); }

_jstype.definition.get_minEnergy = function() { return CS.Call(2, 118, 3, false, this); }
_jstype.definition.set_minEnergy = function(v) { return CS.Call(3, 118, 3, false, this, v); }

_jstype.definition.get_maxEnergy = function() { return CS.Call(2, 118, 4, false, this); }
_jstype.definition.set_maxEnergy = function(v) { return CS.Call(3, 118, 4, false, this, v); }

_jstype.definition.get_minEmission = function() { return CS.Call(2, 118, 5, false, this); }
_jstype.definition.set_minEmission = function(v) { return CS.Call(3, 118, 5, false, this, v); }

_jstype.definition.get_maxEmission = function() { return CS.Call(2, 118, 6, false, this); }
_jstype.definition.set_maxEmission = function(v) { return CS.Call(3, 118, 6, false, this, v); }

_jstype.definition.get_emitterVelocityScale = function() { return CS.Call(2, 118, 7, false, this); }
_jstype.definition.set_emitterVelocityScale = function(v) { return CS.Call(3, 118, 7, false, this, v); }

_jstype.definition.get_worldVelocity = function() { return CS.Call(2, 118, 8, false, this); }
_jstype.definition.set_worldVelocity = function(v) { return CS.Call(3, 118, 8, false, this, v); }

_jstype.definition.get_localVelocity = function() { return CS.Call(2, 118, 9, false, this); }
_jstype.definition.set_localVelocity = function(v) { return CS.Call(3, 118, 9, false, this, v); }

_jstype.definition.get_rndVelocity = function() { return CS.Call(2, 118, 10, false, this); }
_jstype.definition.set_rndVelocity = function(v) { return CS.Call(3, 118, 10, false, this, v); }

_jstype.definition.get_useWorldSpace = function() { return CS.Call(2, 118, 11, false, this); }
_jstype.definition.set_useWorldSpace = function(v) { return CS.Call(3, 118, 11, false, this, v); }

_jstype.definition.get_rndRotation = function() { return CS.Call(2, 118, 12, false, this); }
_jstype.definition.set_rndRotation = function(v) { return CS.Call(3, 118, 12, false, this, v); }

_jstype.definition.get_angularVelocity = function() { return CS.Call(2, 118, 13, false, this); }
_jstype.definition.set_angularVelocity = function(v) { return CS.Call(3, 118, 13, false, this, v); }

_jstype.definition.get_rndAngularVelocity = function() { return CS.Call(2, 118, 14, false, this); }
_jstype.definition.set_rndAngularVelocity = function(v) { return CS.Call(3, 118, 14, false, this, v); }

_jstype.definition.get_particles = function() { return CS.Call(2, 118, 15, false, this); }
_jstype.definition.set_particles = function(v) { return CS.Call(3, 118, 15, false, this, v); }

_jstype.definition.get_particleCount = function() { return CS.Call(2, 118, 16, false, this); }
_jstype.definition.set_particleCount = function(v) { return CS.Call(3, 118, 16, false, this, v); }

_jstype.definition.get_enabled = function() { return CS.Call(2, 118, 17, false, this); }
_jstype.definition.set_enabled = function(v) { return CS.Call(3, 118, 17, false, this, v); }

// methods

/* Void */
_jstype.definition.ClearParticles = function() { 
    
    return CS.Call(4, 118, 0, false, this); 
}
/* Void */
_jstype.definition.Emit$$Vector3$$Vector3$$Single$$Single$$Color$$Single$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Single*/, a4/*Color*/, a5/*Single*/, a6/*Single*/) { 
    
    return CS.Call(4, 118, 1, false, this, a0, a1, a2, a3, a4, a5, a6); 
}
/* Void */
_jstype.definition.Emit$$Vector3$$Vector3$$Single$$Single$$Color = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Single*/, a4/*Color*/) { 
    
    return CS.Call(4, 118, 2, false, this, a0, a1, a2, a3, a4); 
}
/* Void */
_jstype.definition.Emit$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 118, 3, false, this, a0); 
}
/* Void */
_jstype.definition.Emit = function() { 
    
    return CS.Call(4, 118, 4, false, this); 
}
/* Void */
_jstype.definition.Simulate = function(a0/*Single*/) { 
    
    return CS.Call(4, 118, 5, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ParticleAnimator
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ParticleAnimator",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 119, 0, true, this); }

// fields

// properties

_jstype.definition.get_doesAnimateColor = function() { return CS.Call(2, 119, 0, false, this); }
_jstype.definition.set_doesAnimateColor = function(v) { return CS.Call(3, 119, 0, false, this, v); }

_jstype.definition.get_worldRotationAxis = function() { return CS.Call(2, 119, 1, false, this); }
_jstype.definition.set_worldRotationAxis = function(v) { return CS.Call(3, 119, 1, false, this, v); }

_jstype.definition.get_localRotationAxis = function() { return CS.Call(2, 119, 2, false, this); }
_jstype.definition.set_localRotationAxis = function(v) { return CS.Call(3, 119, 2, false, this, v); }

_jstype.definition.get_sizeGrow = function() { return CS.Call(2, 119, 3, false, this); }
_jstype.definition.set_sizeGrow = function(v) { return CS.Call(3, 119, 3, false, this, v); }

_jstype.definition.get_rndForce = function() { return CS.Call(2, 119, 4, false, this); }
_jstype.definition.set_rndForce = function(v) { return CS.Call(3, 119, 4, false, this, v); }

_jstype.definition.get_force = function() { return CS.Call(2, 119, 5, false, this); }
_jstype.definition.set_force = function(v) { return CS.Call(3, 119, 5, false, this, v); }

_jstype.definition.get_damping = function() { return CS.Call(2, 119, 6, false, this); }
_jstype.definition.set_damping = function(v) { return CS.Call(3, 119, 6, false, this, v); }

_jstype.definition.get_autodestruct = function() { return CS.Call(2, 119, 7, false, this); }
_jstype.definition.set_autodestruct = function(v) { return CS.Call(3, 119, 7, false, this, v); }

_jstype.definition.get_colorAnimation = function() { return CS.Call(2, 119, 8, false, this); }
_jstype.definition.set_colorAnimation = function(v) { return CS.Call(3, 119, 8, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$TrailRenderer
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.TrailRenderer",
    baseTypeName: "UnityEngine.Renderer"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 120, 0, true, this); }

// fields

// properties

_jstype.definition.get_time = function() { return CS.Call(2, 120, 0, false, this); }
_jstype.definition.set_time = function(v) { return CS.Call(3, 120, 0, false, this, v); }

_jstype.definition.get_startWidth = function() { return CS.Call(2, 120, 1, false, this); }
_jstype.definition.set_startWidth = function(v) { return CS.Call(3, 120, 1, false, this, v); }

_jstype.definition.get_endWidth = function() { return CS.Call(2, 120, 2, false, this); }
_jstype.definition.set_endWidth = function(v) { return CS.Call(3, 120, 2, false, this, v); }

_jstype.definition.get_autodestruct = function() { return CS.Call(2, 120, 3, false, this); }
_jstype.definition.set_autodestruct = function(v) { return CS.Call(3, 120, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ParticleRenderer
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ParticleRenderer",
    baseTypeName: "UnityEngine.Renderer"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 121, 0, true, this); }

// fields

// properties

_jstype.definition.get_particleRenderMode = function() { return CS.Call(2, 121, 0, false, this); }
_jstype.definition.set_particleRenderMode = function(v) { return CS.Call(3, 121, 0, false, this, v); }

_jstype.definition.get_lengthScale = function() { return CS.Call(2, 121, 1, false, this); }
_jstype.definition.set_lengthScale = function(v) { return CS.Call(3, 121, 1, false, this, v); }

_jstype.definition.get_velocityScale = function() { return CS.Call(2, 121, 2, false, this); }
_jstype.definition.set_velocityScale = function(v) { return CS.Call(3, 121, 2, false, this, v); }

_jstype.definition.get_cameraVelocityScale = function() { return CS.Call(2, 121, 3, false, this); }
_jstype.definition.set_cameraVelocityScale = function(v) { return CS.Call(3, 121, 3, false, this, v); }

_jstype.definition.get_maxParticleSize = function() { return CS.Call(2, 121, 4, false, this); }
_jstype.definition.set_maxParticleSize = function(v) { return CS.Call(3, 121, 4, false, this, v); }

_jstype.definition.get_uvAnimationXTile = function() { return CS.Call(2, 121, 5, false, this); }
_jstype.definition.set_uvAnimationXTile = function(v) { return CS.Call(3, 121, 5, false, this, v); }

_jstype.definition.get_uvAnimationYTile = function() { return CS.Call(2, 121, 6, false, this); }
_jstype.definition.set_uvAnimationYTile = function(v) { return CS.Call(3, 121, 6, false, this, v); }

_jstype.definition.get_uvAnimationCycles = function() { return CS.Call(2, 121, 7, false, this); }
_jstype.definition.set_uvAnimationCycles = function(v) { return CS.Call(3, 121, 7, false, this, v); }

_jstype.definition.get_maxPartileSize = function() { return CS.Call(2, 121, 8, false, this); }
_jstype.definition.set_maxPartileSize = function(v) { return CS.Call(3, 121, 8, false, this, v); }

_jstype.definition.get_uvTiles = function() { return CS.Call(2, 121, 9, false, this); }
_jstype.definition.set_uvTiles = function(v) { return CS.Call(3, 121, 9, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$LineRenderer
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.LineRenderer",
    baseTypeName: "UnityEngine.Renderer"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 122, 0, true, this); }

// fields

// properties

_jstype.definition.get_useWorldSpace = function() { return CS.Call(2, 122, 0, false, this); }
_jstype.definition.set_useWorldSpace = function(v) { return CS.Call(3, 122, 0, false, this, v); }

// methods

/* Void */
_jstype.definition.SetColors = function(a0/*Color*/, a1/*Color*/) { 
    
    return CS.Call(4, 122, 0, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetPosition = function(a0/*Int32*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 122, 1, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetVertexCount = function(a0/*Int32*/) { 
    
    return CS.Call(4, 122, 2, false, this, a0); 
}
/* Void */
_jstype.definition.SetWidth = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 122, 3, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$MaterialPropertyBlock
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.MaterialPropertyBlock",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 123, 0, true, this); }

// fields

// properties

_jstype.definition.get_isEmpty = function() { return CS.Call(2, 123, 0, false, this); }
_jstype.definition.set_isEmpty = function(v) { return CS.Call(3, 123, 0, false, this, v); }

// methods

/* Void */
_jstype.definition.AddColor$$String$$Color = function(a0/*String*/, a1/*Color*/) { 
    
    return CS.Call(4, 123, 0, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddColor$$Int32$$Color = function(a0/*Int32*/, a1/*Color*/) { 
    
    return CS.Call(4, 123, 1, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddFloat$$String$$Single = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 123, 2, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddFloat$$Int32$$Single = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 123, 3, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddMatrix$$Int32$$Matrix4x4 = function(a0/*Int32*/, a1/*Matrix4x4*/) { 
    
    return CS.Call(4, 123, 4, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddMatrix$$String$$Matrix4x4 = function(a0/*String*/, a1/*Matrix4x4*/) { 
    
    return CS.Call(4, 123, 5, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddTexture$$Int32$$Texture = function(a0/*Int32*/, a1/*Texture*/) { 
    
    return CS.Call(4, 123, 6, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddTexture$$String$$Texture = function(a0/*String*/, a1/*Texture*/) { 
    
    return CS.Call(4, 123, 7, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddVector$$String$$Vector4 = function(a0/*String*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 123, 8, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddVector$$Int32$$Vector4 = function(a0/*Int32*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 123, 9, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Clear = function() { 
    
    return CS.Call(4, 123, 10, false, this); 
}
/* Single */
_jstype.definition.GetFloat$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 123, 11, false, this, a0); 
}
/* Single */
_jstype.definition.GetFloat$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 123, 12, false, this, a0); 
}
/* Matrix4x4 */
_jstype.definition.GetMatrix$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 123, 13, false, this, a0); 
}
/* Matrix4x4 */
_jstype.definition.GetMatrix$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 123, 14, false, this, a0); 
}
/* Texture */
_jstype.definition.GetTexture$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 123, 15, false, this, a0); 
}
/* Texture */
_jstype.definition.GetTexture$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 123, 16, false, this, a0); 
}
/* Vector4 */
_jstype.definition.GetVector$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 123, 17, false, this, a0); 
}
/* Vector4 */
_jstype.definition.GetVector$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 123, 18, false, this, a0); 
}
/* Void */
_jstype.definition.SetColor$$String$$Color = function(a0/*String*/, a1/*Color*/) { 
    
    return CS.Call(4, 123, 19, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetColor$$Int32$$Color = function(a0/*Int32*/, a1/*Color*/) { 
    
    return CS.Call(4, 123, 20, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetFloat$$Int32$$Single = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 123, 21, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetFloat$$String$$Single = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 123, 22, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetMatrix$$Int32$$Matrix4x4 = function(a0/*Int32*/, a1/*Matrix4x4*/) { 
    
    return CS.Call(4, 123, 23, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetMatrix$$String$$Matrix4x4 = function(a0/*String*/, a1/*Matrix4x4*/) { 
    
    return CS.Call(4, 123, 24, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetTexture$$Int32$$Texture = function(a0/*Int32*/, a1/*Texture*/) { 
    
    return CS.Call(4, 123, 25, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetTexture$$String$$Texture = function(a0/*String*/, a1/*Texture*/) { 
    
    return CS.Call(4, 123, 26, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetVector$$String$$Vector4 = function(a0/*String*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 123, 27, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetVector$$Int32$$Vector4 = function(a0/*Int32*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 123, 28, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Graphics
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Graphics",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 124, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_activeColorBuffer = function() { return CS.Call(2, 124, 0, true); }
_jstype.staticDefinition.set_activeColorBuffer = function(v) { return CS.Call(3, 124, 0, true, v); }

_jstype.staticDefinition.get_activeDepthBuffer = function() { return CS.Call(2, 124, 1, true); }
_jstype.staticDefinition.set_activeDepthBuffer = function(v) { return CS.Call(3, 124, 1, true, v); }

// methods

/* static Void  */
_jstype.staticDefinition.Blit$$Texture$$RenderTexture$$Material$$Int32 = function(a0/*Texture*/, a1/*RenderTexture*/, a2/*Material*/, a3/*Int32*/) { 
    
    return CS.Call(4, 124, 0, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.Blit$$Texture$$RenderTexture$$Material = function(a0/*Texture*/, a1/*RenderTexture*/, a2/*Material*/) { 
    
    return CS.Call(4, 124, 1, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.Blit$$Texture$$Material$$Int32 = function(a0/*Texture*/, a1/*Material*/, a2/*Int32*/) { 
    
    return CS.Call(4, 124, 2, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.Blit$$Texture$$Material = function(a0/*Texture*/, a1/*Material*/) { 
    
    return CS.Call(4, 124, 3, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.Blit$$Texture$$RenderTexture = function(a0/*Texture*/, a1/*RenderTexture*/) { 
    
    return CS.Call(4, 124, 4, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.BlitMultiTap = function(a0/*Texture*/, a1/*RenderTexture*/, a2/*Material*/, a3/*Vector2[]*/) { 
    
    return CS.Call(4, 124, 5, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.ClearRandomWriteTargets = function() { 
    
    return CS.Call(4, 124, 6, true); 
}
/* static Void  */
_jstype.staticDefinition.DrawMesh$$Mesh$$Vector3$$Quaternion$$Material$$Int32$$Camera$$Int32$$MaterialPropertyBlock$$Boolean$$Boolean = function(a0/*Mesh*/, a1/*Vector3*/, a2/*Quaternion*/, a3/*Material*/, a4/*Int32*/, a5/*Camera*/, a6/*Int32*/, a7/*MaterialPropertyBlock*/, a8/*Boolean*/, a9/*Boolean*/) { 
    
    return CS.Call(4, 124, 7, true, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9); 
}
/* static Void  */
_jstype.staticDefinition.DrawMesh$$Mesh$$Matrix4x4$$Material$$Int32$$Camera$$Int32$$MaterialPropertyBlock$$Boolean$$Boolean = function(a0/*Mesh*/, a1/*Matrix4x4*/, a2/*Material*/, a3/*Int32*/, a4/*Camera*/, a5/*Int32*/, a6/*MaterialPropertyBlock*/, a7/*Boolean*/, a8/*Boolean*/) { 
    
    return CS.Call(4, 124, 8, true, a0, a1, a2, a3, a4, a5, a6, a7, a8); 
}
/* static Void  */
_jstype.staticDefinition.DrawMesh$$Mesh$$Vector3$$Quaternion$$Material$$Int32$$Camera$$Int32$$MaterialPropertyBlock = function(a0/*Mesh*/, a1/*Vector3*/, a2/*Quaternion*/, a3/*Material*/, a4/*Int32*/, a5/*Camera*/, a6/*Int32*/, a7/*MaterialPropertyBlock*/) { 
    
    return CS.Call(4, 124, 9, true, a0, a1, a2, a3, a4, a5, a6, a7); 
}
/* static Void  */
_jstype.staticDefinition.DrawMesh$$Mesh$$Vector3$$Quaternion$$Material$$Int32$$Camera$$Int32 = function(a0/*Mesh*/, a1/*Vector3*/, a2/*Quaternion*/, a3/*Material*/, a4/*Int32*/, a5/*Camera*/, a6/*Int32*/) { 
    
    return CS.Call(4, 124, 10, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static Void  */
_jstype.staticDefinition.DrawMesh$$Mesh$$Matrix4x4$$Material$$Int32$$Camera$$Int32$$MaterialPropertyBlock = function(a0/*Mesh*/, a1/*Matrix4x4*/, a2/*Material*/, a3/*Int32*/, a4/*Camera*/, a5/*Int32*/, a6/*MaterialPropertyBlock*/) { 
    
    return CS.Call(4, 124, 11, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static Void  */
_jstype.staticDefinition.DrawMesh$$Mesh$$Matrix4x4$$Material$$Int32$$Camera$$Int32 = function(a0/*Mesh*/, a1/*Matrix4x4*/, a2/*Material*/, a3/*Int32*/, a4/*Camera*/, a5/*Int32*/) { 
    
    return CS.Call(4, 124, 12, true, a0, a1, a2, a3, a4, a5); 
}
/* static Void  */
_jstype.staticDefinition.DrawMesh$$Mesh$$Vector3$$Quaternion$$Material$$Int32$$Camera = function(a0/*Mesh*/, a1/*Vector3*/, a2/*Quaternion*/, a3/*Material*/, a4/*Int32*/, a5/*Camera*/) { 
    
    return CS.Call(4, 124, 13, true, a0, a1, a2, a3, a4, a5); 
}
/* static Void  */
_jstype.staticDefinition.DrawMesh$$Mesh$$Vector3$$Quaternion$$Material$$Int32 = function(a0/*Mesh*/, a1/*Vector3*/, a2/*Quaternion*/, a3/*Material*/, a4/*Int32*/) { 
    
    return CS.Call(4, 124, 14, true, a0, a1, a2, a3, a4); 
}
/* static Void  */
_jstype.staticDefinition.DrawMesh$$Mesh$$Matrix4x4$$Material$$Int32$$Camera = function(a0/*Mesh*/, a1/*Matrix4x4*/, a2/*Material*/, a3/*Int32*/, a4/*Camera*/) { 
    
    return CS.Call(4, 124, 15, true, a0, a1, a2, a3, a4); 
}
/* static Void  */
_jstype.staticDefinition.DrawMesh$$Mesh$$Matrix4x4$$Material$$Int32 = function(a0/*Mesh*/, a1/*Matrix4x4*/, a2/*Material*/, a3/*Int32*/) { 
    
    return CS.Call(4, 124, 16, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.DrawMeshNow$$Mesh$$Vector3$$Quaternion$$Int32 = function(a0/*Mesh*/, a1/*Vector3*/, a2/*Quaternion*/, a3/*Int32*/) { 
    
    return CS.Call(4, 124, 17, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.DrawMeshNow$$Mesh$$Vector3$$Quaternion = function(a0/*Mesh*/, a1/*Vector3*/, a2/*Quaternion*/) { 
    
    return CS.Call(4, 124, 18, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.DrawMeshNow$$Mesh$$Matrix4x4$$Int32 = function(a0/*Mesh*/, a1/*Matrix4x4*/, a2/*Int32*/) { 
    
    return CS.Call(4, 124, 19, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.DrawMeshNow$$Mesh$$Matrix4x4 = function(a0/*Mesh*/, a1/*Matrix4x4*/) { 
    
    return CS.Call(4, 124, 20, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DrawProcedural$$MeshTopology$$Int32$$Int32 = function(a0/*MeshTopology*/, a1/*Int32*/, a2/*Int32*/) { 
    
    return CS.Call(4, 124, 21, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.DrawProcedural$$MeshTopology$$Int32 = function(a0/*MeshTopology*/, a1/*Int32*/) { 
    
    return CS.Call(4, 124, 22, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DrawProceduralIndirect$$MeshTopology$$ComputeBuffer$$Int32 = function(a0/*MeshTopology*/, a1/*ComputeBuffer*/, a2/*Int32*/) { 
    
    return CS.Call(4, 124, 23, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.DrawProceduralIndirect$$MeshTopology$$ComputeBuffer = function(a0/*MeshTopology*/, a1/*ComputeBuffer*/) { 
    
    return CS.Call(4, 124, 24, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DrawTexture$$Rect$$Texture$$Rect$$Int32$$Int32$$Int32$$Int32$$Color$$Material = function(a0/*Rect*/, a1/*Texture*/, a2/*Rect*/, a3/*Int32*/, a4/*Int32*/, a5/*Int32*/, a6/*Int32*/, a7/*Color*/, a8/*Material*/) { 
    
    return CS.Call(4, 124, 25, true, a0, a1, a2, a3, a4, a5, a6, a7, a8); 
}
/* static Void  */
_jstype.staticDefinition.DrawTexture$$Rect$$Texture$$Rect$$Int32$$Int32$$Int32$$Int32$$Material = function(a0/*Rect*/, a1/*Texture*/, a2/*Rect*/, a3/*Int32*/, a4/*Int32*/, a5/*Int32*/, a6/*Int32*/, a7/*Material*/) { 
    
    return CS.Call(4, 124, 26, true, a0, a1, a2, a3, a4, a5, a6, a7); 
}
/* static Void  */
_jstype.staticDefinition.DrawTexture$$Rect$$Texture$$Rect$$Int32$$Int32$$Int32$$Int32$$Color = function(a0/*Rect*/, a1/*Texture*/, a2/*Rect*/, a3/*Int32*/, a4/*Int32*/, a5/*Int32*/, a6/*Int32*/, a7/*Color*/) { 
    
    return CS.Call(4, 124, 27, true, a0, a1, a2, a3, a4, a5, a6, a7); 
}
/* static Void  */
_jstype.staticDefinition.DrawTexture$$Rect$$Texture$$Rect$$Int32$$Int32$$Int32$$Int32 = function(a0/*Rect*/, a1/*Texture*/, a2/*Rect*/, a3/*Int32*/, a4/*Int32*/, a5/*Int32*/, a6/*Int32*/) { 
    
    return CS.Call(4, 124, 28, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static Void  */
_jstype.staticDefinition.DrawTexture$$Rect$$Texture$$Int32$$Int32$$Int32$$Int32$$Material = function(a0/*Rect*/, a1/*Texture*/, a2/*Int32*/, a3/*Int32*/, a4/*Int32*/, a5/*Int32*/, a6/*Material*/) { 
    
    return CS.Call(4, 124, 29, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static Void  */
_jstype.staticDefinition.DrawTexture$$Rect$$Texture$$Int32$$Int32$$Int32$$Int32 = function(a0/*Rect*/, a1/*Texture*/, a2/*Int32*/, a3/*Int32*/, a4/*Int32*/, a5/*Int32*/) { 
    
    return CS.Call(4, 124, 30, true, a0, a1, a2, a3, a4, a5); 
}
/* static Void  */
_jstype.staticDefinition.DrawTexture$$Rect$$Texture$$Material = function(a0/*Rect*/, a1/*Texture*/, a2/*Material*/) { 
    
    return CS.Call(4, 124, 31, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.DrawTexture$$Rect$$Texture = function(a0/*Rect*/, a1/*Texture*/) { 
    
    return CS.Call(4, 124, 32, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetRandomWriteTarget$$Int32$$RenderTexture = function(a0/*Int32*/, a1/*RenderTexture*/) { 
    
    return CS.Call(4, 124, 33, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetRandomWriteTarget$$Int32$$ComputeBuffer = function(a0/*Int32*/, a1/*ComputeBuffer*/) { 
    
    return CS.Call(4, 124, 34, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetRenderTarget$$RenderTexture$$Int32$$CubemapFace = function(a0/*RenderTexture*/, a1/*Int32*/, a2/*CubemapFace*/) { 
    
    return CS.Call(4, 124, 35, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.SetRenderTarget$$RenderBuffer$Array$$RenderBuffer = function(a0/*RenderBuffer[]*/, a1/*RenderBuffer*/) { 
    
    return CS.Call(4, 124, 36, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetRenderTarget$$RenderTexture$$Int32 = function(a0/*RenderTexture*/, a1/*Int32*/) { 
    
    return CS.Call(4, 124, 37, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetRenderTarget$$RenderBuffer$$RenderBuffer = function(a0/*RenderBuffer*/, a1/*RenderBuffer*/) { 
    
    return CS.Call(4, 124, 38, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetRenderTarget$$RenderTexture = function(a0/*RenderTexture*/) { 
    
    return CS.Call(4, 124, 39, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$LightmapData
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.LightmapData",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 125, 0, true, this); }

// fields

// properties

_jstype.definition.get_lightmapFar = function() { return CS.Call(2, 125, 0, false, this); }
_jstype.definition.set_lightmapFar = function(v) { return CS.Call(3, 125, 0, false, this, v); }

_jstype.definition.get_lightmapNear = function() { return CS.Call(2, 125, 1, false, this); }
_jstype.definition.set_lightmapNear = function(v) { return CS.Call(3, 125, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$LightProbes
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.LightProbes",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 126, 0, true, this); }

// fields

// properties

_jstype.definition.get_positions = function() { return CS.Call(2, 126, 0, false, this); }
_jstype.definition.set_positions = function(v) { return CS.Call(3, 126, 0, false, this, v); }

_jstype.definition.get_coefficients = function() { return CS.Call(2, 126, 1, false, this); }
_jstype.definition.set_coefficients = function(v) { return CS.Call(3, 126, 1, false, this, v); }

_jstype.definition.get_count = function() { return CS.Call(2, 126, 2, false, this); }
_jstype.definition.set_count = function(v) { return CS.Call(3, 126, 2, false, this, v); }

_jstype.definition.get_cellCount = function() { return CS.Call(2, 126, 3, false, this); }
_jstype.definition.set_cellCount = function(v) { return CS.Call(3, 126, 3, false, this, v); }

// methods

/* Void */
_jstype.definition.GetInterpolatedLightProbe = function(a0/*Vector3*/, a1/*Renderer*/, a2/*Single[]*/) { 
    
    return CS.Call(4, 126, 0, false, this, a0, a1, a2); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$LightmapSettings
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.LightmapSettings",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 127, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_lightmaps = function() { return CS.Call(2, 127, 0, true); }
_jstype.staticDefinition.set_lightmaps = function(v) { return CS.Call(3, 127, 0, true, v); }

_jstype.staticDefinition.get_lightmapsMode = function() { return CS.Call(2, 127, 1, true); }
_jstype.staticDefinition.set_lightmapsMode = function(v) { return CS.Call(3, 127, 1, true, v); }

_jstype.staticDefinition.get_bakedColorSpace = function() { return CS.Call(2, 127, 2, true); }
_jstype.staticDefinition.set_bakedColorSpace = function(v) { return CS.Call(3, 127, 2, true, v); }

_jstype.staticDefinition.get_lightProbes = function() { return CS.Call(2, 127, 3, true); }
_jstype.staticDefinition.set_lightProbes = function(v) { return CS.Call(3, 127, 3, true, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GeometryUtility
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GeometryUtility",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 128, 0, true, this); }

// fields

// properties

// methods

/* static Plane[]  */
_jstype.staticDefinition.CalculateFrustumPlanes$$Matrix4x4 = function(a0/*Matrix4x4*/) { 
    
    return CS.Call(4, 128, 0, true, a0); 
}
/* static Plane[]  */
_jstype.staticDefinition.CalculateFrustumPlanes$$Camera = function(a0/*Camera*/) { 
    
    return CS.Call(4, 128, 1, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.TestPlanesAABB = function(a0/*Plane[]*/, a1/*Bounds*/) { 
    
    return CS.Call(4, 128, 2, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Screen
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Screen",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 129, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_resolutions = function() { return CS.Call(2, 129, 0, true); }
_jstype.staticDefinition.set_resolutions = function(v) { return CS.Call(3, 129, 0, true, v); }

_jstype.staticDefinition.get_GetResolution = function() { return CS.Call(2, 129, 1, true); }
_jstype.staticDefinition.set_GetResolution = function(v) { return CS.Call(3, 129, 1, true, v); }

_jstype.staticDefinition.get_currentResolution = function() { return CS.Call(2, 129, 2, true); }
_jstype.staticDefinition.set_currentResolution = function(v) { return CS.Call(3, 129, 2, true, v); }

_jstype.staticDefinition.get_showCursor = function() { return CS.Call(2, 129, 3, true); }
_jstype.staticDefinition.set_showCursor = function(v) { return CS.Call(3, 129, 3, true, v); }

_jstype.staticDefinition.get_lockCursor = function() { return CS.Call(2, 129, 4, true); }
_jstype.staticDefinition.set_lockCursor = function(v) { return CS.Call(3, 129, 4, true, v); }

_jstype.staticDefinition.get_width = function() { return CS.Call(2, 129, 5, true); }
_jstype.staticDefinition.set_width = function(v) { return CS.Call(3, 129, 5, true, v); }

_jstype.staticDefinition.get_height = function() { return CS.Call(2, 129, 6, true); }
_jstype.staticDefinition.set_height = function(v) { return CS.Call(3, 129, 6, true, v); }

_jstype.staticDefinition.get_dpi = function() { return CS.Call(2, 129, 7, true); }
_jstype.staticDefinition.set_dpi = function(v) { return CS.Call(3, 129, 7, true, v); }

_jstype.staticDefinition.get_fullScreen = function() { return CS.Call(2, 129, 8, true); }
_jstype.staticDefinition.set_fullScreen = function(v) { return CS.Call(3, 129, 8, true, v); }

_jstype.staticDefinition.get_autorotateToPortrait = function() { return CS.Call(2, 129, 9, true); }
_jstype.staticDefinition.set_autorotateToPortrait = function(v) { return CS.Call(3, 129, 9, true, v); }

_jstype.staticDefinition.get_autorotateToPortraitUpsideDown = function() { return CS.Call(2, 129, 10, true); }
_jstype.staticDefinition.set_autorotateToPortraitUpsideDown = function(v) { return CS.Call(3, 129, 10, true, v); }

_jstype.staticDefinition.get_autorotateToLandscapeLeft = function() { return CS.Call(2, 129, 11, true); }
_jstype.staticDefinition.set_autorotateToLandscapeLeft = function(v) { return CS.Call(3, 129, 11, true, v); }

_jstype.staticDefinition.get_autorotateToLandscapeRight = function() { return CS.Call(2, 129, 12, true); }
_jstype.staticDefinition.set_autorotateToLandscapeRight = function(v) { return CS.Call(3, 129, 12, true, v); }

_jstype.staticDefinition.get_orientation = function() { return CS.Call(2, 129, 13, true); }
_jstype.staticDefinition.set_orientation = function(v) { return CS.Call(3, 129, 13, true, v); }

_jstype.staticDefinition.get_sleepTimeout = function() { return CS.Call(2, 129, 14, true); }
_jstype.staticDefinition.set_sleepTimeout = function(v) { return CS.Call(3, 129, 14, true, v); }

// methods

/* static Void  */
_jstype.staticDefinition.SetResolution$$Int32$$Int32$$Boolean$$Int32 = function(a0/*Int32*/, a1/*Int32*/, a2/*Boolean*/, a3/*Int32*/) { 
    
    return CS.Call(4, 129, 0, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.SetResolution$$Int32$$Int32$$Boolean = function(a0/*Int32*/, a1/*Int32*/, a2/*Boolean*/) { 
    
    return CS.Call(4, 129, 1, true, a0, a1, a2); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$SleepTimeout
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.SleepTimeout",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 130, 0, true, this); }

// fields

_jstype.staticFields.NeverSleep =  { 
            get: function() { return CS.Call(0, 130, 0, true); }, 
            set: function(v) { return CS.Call(1, 130, 0, true, v); } 
        };

_jstype.staticFields.SystemSetting =  { 
            get: function() { return CS.Call(0, 130, 1, true); }, 
            set: function(v) { return CS.Call(1, 130, 1, true, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GL
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GL",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 131, 0, true, this); }

// fields

_jstype.staticFields.TRIANGLES =  { 
            get: function() { return CS.Call(0, 131, 0, true); }, 
            set: function(v) { return CS.Call(1, 131, 0, true, v); } 
        };

_jstype.staticFields.TRIANGLE_STRIP =  { 
            get: function() { return CS.Call(0, 131, 1, true); }, 
            set: function(v) { return CS.Call(1, 131, 1, true, v); } 
        };

_jstype.staticFields.QUADS =  { 
            get: function() { return CS.Call(0, 131, 2, true); }, 
            set: function(v) { return CS.Call(1, 131, 2, true, v); } 
        };

_jstype.staticFields.LINES =  { 
            get: function() { return CS.Call(0, 131, 3, true); }, 
            set: function(v) { return CS.Call(1, 131, 3, true, v); } 
        };

// properties

_jstype.staticDefinition.get_modelview = function() { return CS.Call(2, 131, 0, true); }
_jstype.staticDefinition.set_modelview = function(v) { return CS.Call(3, 131, 0, true, v); }

_jstype.staticDefinition.get_wireframe = function() { return CS.Call(2, 131, 1, true); }
_jstype.staticDefinition.set_wireframe = function(v) { return CS.Call(3, 131, 1, true, v); }

_jstype.staticDefinition.get_sRGBWrite = function() { return CS.Call(2, 131, 2, true); }
_jstype.staticDefinition.set_sRGBWrite = function(v) { return CS.Call(3, 131, 2, true, v); }

// methods

/* static Void  */
_jstype.staticDefinition.Begin = function(a0/*Int32*/) { 
    
    return CS.Call(4, 131, 0, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.Clear$$Boolean$$Boolean$$Color$$Single = function(a0/*Boolean*/, a1/*Boolean*/, a2/*Color*/, a3/*Single*/) { 
    
    return CS.Call(4, 131, 1, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.Clear$$Boolean$$Boolean$$Color = function(a0/*Boolean*/, a1/*Boolean*/, a2/*Color*/) { 
    
    return CS.Call(4, 131, 2, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.ClearWithSkybox = function(a0/*Boolean*/, a1/*Camera*/) { 
    
    return CS.Call(4, 131, 3, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.Color = function(a0/*Color*/) { 
    
    return CS.Call(4, 131, 4, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.End = function() { 
    
    return CS.Call(4, 131, 5, true); 
}
/* static Matrix4x4  */
_jstype.staticDefinition.GetGPUProjectionMatrix = function(a0/*Matrix4x4*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 131, 6, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.InvalidateState = function() { 
    
    return CS.Call(4, 131, 7, true); 
}
/* static Void  */
_jstype.staticDefinition.IssuePluginEvent = function(a0/*Int32*/) { 
    
    return CS.Call(4, 131, 8, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.LoadIdentity = function() { 
    
    return CS.Call(4, 131, 9, true); 
}
/* static Void  */
_jstype.staticDefinition.LoadOrtho = function() { 
    
    return CS.Call(4, 131, 10, true); 
}
/* static Void  */
_jstype.staticDefinition.LoadPixelMatrix$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 131, 11, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.LoadPixelMatrix = function() { 
    
    return CS.Call(4, 131, 12, true); 
}
/* static Void  */
_jstype.staticDefinition.LoadProjectionMatrix = function(a0/*Matrix4x4*/) { 
    
    return CS.Call(4, 131, 13, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.MultiTexCoord = function(a0/*Int32*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 131, 14, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.MultiTexCoord2 = function(a0/*Int32*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 131, 15, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.MultiTexCoord3 = function(a0/*Int32*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 131, 16, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.MultMatrix = function(a0/*Matrix4x4*/) { 
    
    return CS.Call(4, 131, 17, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.PopMatrix = function() { 
    
    return CS.Call(4, 131, 18, true); 
}
/* static Void  */
_jstype.staticDefinition.PushMatrix = function() { 
    
    return CS.Call(4, 131, 19, true); 
}
/* static Void  */
_jstype.staticDefinition.SetRevertBackfacing = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 131, 20, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.TexCoord = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 131, 21, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.TexCoord2 = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 131, 22, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.TexCoord3 = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 131, 23, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.Vertex = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 131, 24, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.Vertex3 = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 131, 25, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.Viewport = function(a0/*Rect*/) { 
    
    return CS.Call(4, 131, 26, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$MeshRenderer
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.MeshRenderer",
    baseTypeName: "UnityEngine.Renderer"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 132, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$StaticBatchingUtility
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.StaticBatchingUtility",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 133, 0, true, this); }

// fields

// properties

// methods

/* static Void  */
_jstype.staticDefinition.Combine$$GameObject$Array$$GameObject = function(a0/*GameObject[]*/, a1/*GameObject*/) { 
    
    return CS.Call(4, 133, 0, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.Combine$$GameObject = function(a0/*GameObject*/) { 
    
    return CS.Call(4, 133, 1, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Texture
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Texture",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 134, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_masterTextureLimit = function() { return CS.Call(2, 134, 0, true); }
_jstype.staticDefinition.set_masterTextureLimit = function(v) { return CS.Call(3, 134, 0, true, v); }

_jstype.staticDefinition.get_anisotropicFiltering = function() { return CS.Call(2, 134, 1, true); }
_jstype.staticDefinition.set_anisotropicFiltering = function(v) { return CS.Call(3, 134, 1, true, v); }

_jstype.definition.get_width = function() { return CS.Call(2, 134, 2, false, this); }
_jstype.definition.set_width = function(v) { return CS.Call(3, 134, 2, false, this, v); }

_jstype.definition.get_height = function() { return CS.Call(2, 134, 3, false, this); }
_jstype.definition.set_height = function(v) { return CS.Call(3, 134, 3, false, this, v); }

_jstype.definition.get_filterMode = function() { return CS.Call(2, 134, 4, false, this); }
_jstype.definition.set_filterMode = function(v) { return CS.Call(3, 134, 4, false, this, v); }

_jstype.definition.get_anisoLevel = function() { return CS.Call(2, 134, 5, false, this); }
_jstype.definition.set_anisoLevel = function(v) { return CS.Call(3, 134, 5, false, this, v); }

_jstype.definition.get_wrapMode = function() { return CS.Call(2, 134, 6, false, this); }
_jstype.definition.set_wrapMode = function(v) { return CS.Call(3, 134, 6, false, this, v); }

_jstype.definition.get_mipMapBias = function() { return CS.Call(2, 134, 7, false, this); }
_jstype.definition.set_mipMapBias = function(v) { return CS.Call(3, 134, 7, false, this, v); }

_jstype.definition.get_texelSize = function() { return CS.Call(2, 134, 8, false, this); }
_jstype.definition.set_texelSize = function(v) { return CS.Call(3, 134, 8, false, this, v); }

// methods

/* Int32 */
_jstype.definition.GetNativeTextureID = function() { 
    
    return CS.Call(4, 134, 0, false, this); 
}
/* IntPtr */
_jstype.definition.GetNativeTexturePtr = function() { 
    
    return CS.Call(4, 134, 1, false, this); 
}
/* static Void  */
_jstype.staticDefinition.SetGlobalAnisotropicFilteringLimits = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 134, 2, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Texture2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Texture2D",
    baseTypeName: "UnityEngine.Texture"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor$$Int32$$Int32 = function(a0, a1) { CS.Call(5, 135, 0, true, this, a0, a1); }
_jstype.definition.ctor$$Int32$$Int32$$TextureFormat$$Boolean = function(a0, a1, a2, a3) { CS.Call(5, 135, 1, true, this, a0, a1, a2, a3); }
_jstype.definition.ctor$$Int32$$Int32$$TextureFormat$$Boolean$$Boolean = function(a0, a1, a2, a3, a4) { CS.Call(5, 135, 2, true, this, a0, a1, a2, a3, a4); }

// fields

// properties

_jstype.definition.get_mipmapCount = function() { return CS.Call(2, 135, 0, false, this); }
_jstype.definition.set_mipmapCount = function(v) { return CS.Call(3, 135, 0, false, this, v); }

_jstype.definition.get_format = function() { return CS.Call(2, 135, 1, false, this); }
_jstype.definition.set_format = function(v) { return CS.Call(3, 135, 1, false, this, v); }

_jstype.staticDefinition.get_whiteTexture = function() { return CS.Call(2, 135, 2, true); }
_jstype.staticDefinition.set_whiteTexture = function(v) { return CS.Call(3, 135, 2, true, v); }

_jstype.staticDefinition.get_blackTexture = function() { return CS.Call(2, 135, 3, true); }
_jstype.staticDefinition.set_blackTexture = function(v) { return CS.Call(3, 135, 3, true, v); }

// methods

/* Void */
_jstype.definition.Apply$$Boolean$$Boolean = function(a0/*Boolean*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 135, 0, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Apply$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 135, 1, false, this, a0); 
}
/* Void */
_jstype.definition.Apply = function() { 
    
    return CS.Call(4, 135, 2, false, this); 
}
/* Void */
_jstype.definition.Compress = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 135, 3, false, this, a0); 
}
/* Byte[] */
_jstype.definition.EncodeToJPG$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 135, 4, false, this, a0); 
}
/* Byte[] */
_jstype.definition.EncodeToJPG = function() { 
    
    return CS.Call(4, 135, 5, false, this); 
}
/* Byte[] */
_jstype.definition.EncodeToPNG = function() { 
    
    return CS.Call(4, 135, 6, false, this); 
}
/* Color */
_jstype.definition.GetPixel = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 135, 7, false, this, a0, a1); 
}
/* Color */
_jstype.definition.GetPixelBilinear = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 135, 8, false, this, a0, a1); 
}
/* Color[] */
_jstype.definition.GetPixels$$Int32$$Int32$$Int32$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/, a2/*Int32*/, a3/*Int32*/, a4/*Int32*/) { 
    
    return CS.Call(4, 135, 9, false, this, a0, a1, a2, a3, a4); 
}
/* Color[] */
_jstype.definition.GetPixels$$Int32$$Int32$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/, a2/*Int32*/, a3/*Int32*/) { 
    
    return CS.Call(4, 135, 10, false, this, a0, a1, a2, a3); 
}
/* Color[] */
_jstype.definition.GetPixels$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 135, 11, false, this, a0); 
}
/* Color[] */
_jstype.definition.GetPixels = function() { 
    
    return CS.Call(4, 135, 12, false, this); 
}
/* Color32[] */
_jstype.definition.GetPixels32$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 135, 13, false, this, a0); 
}
/* Color32[] */
_jstype.definition.GetPixels32 = function() { 
    
    return CS.Call(4, 135, 14, false, this); 
}
/* Boolean */
_jstype.definition.LoadImage = function(a0/*Byte[]*/) { 
    
    return CS.Call(4, 135, 15, false, this, a0); 
}
/* Void */
_jstype.definition.LoadRawTextureData = function(a0/*Byte[]*/) { 
    
    return CS.Call(4, 135, 16, false, this, a0); 
}
/* Rect[] */
_jstype.definition.PackTextures$$Texture2D$Array$$Int32$$Int32$$Boolean = function(a0/*Texture2D[]*/, a1/*Int32*/, a2/*Int32*/, a3/*Boolean*/) { 
    
    return CS.Call(4, 135, 17, false, this, a0, a1, a2, a3); 
}
/* Rect[] */
_jstype.definition.PackTextures$$Texture2D$Array$$Int32$$Int32 = function(a0/*Texture2D[]*/, a1/*Int32*/, a2/*Int32*/) { 
    
    return CS.Call(4, 135, 18, false, this, a0, a1, a2); 
}
/* Rect[] */
_jstype.definition.PackTextures$$Texture2D$Array$$Int32 = function(a0/*Texture2D[]*/, a1/*Int32*/) { 
    
    return CS.Call(4, 135, 19, false, this, a0, a1); 
}
/* Void */
_jstype.definition.ReadPixels$$Rect$$Int32$$Int32$$Boolean = function(a0/*Rect*/, a1/*Int32*/, a2/*Int32*/, a3/*Boolean*/) { 
    
    return CS.Call(4, 135, 20, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.ReadPixels$$Rect$$Int32$$Int32 = function(a0/*Rect*/, a1/*Int32*/, a2/*Int32*/) { 
    
    return CS.Call(4, 135, 21, false, this, a0, a1, a2); 
}
/* Boolean */
_jstype.definition.Resize$$Int32$$Int32$$TextureFormat$$Boolean = function(a0/*Int32*/, a1/*Int32*/, a2/*TextureFormat*/, a3/*Boolean*/) { 
    
    return CS.Call(4, 135, 22, false, this, a0, a1, a2, a3); 
}
/* Boolean */
_jstype.definition.Resize$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 135, 23, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetPixel = function(a0/*Int32*/, a1/*Int32*/, a2/*Color*/) { 
    
    return CS.Call(4, 135, 24, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SetPixels$$Int32$$Int32$$Int32$$Int32$$Color$Array$$Int32 = function(a0/*Int32*/, a1/*Int32*/, a2/*Int32*/, a3/*Int32*/, a4/*Color[]*/, a5/*Int32*/) { 
    
    return CS.Call(4, 135, 25, false, this, a0, a1, a2, a3, a4, a5); 
}
/* Void */
_jstype.definition.SetPixels$$Int32$$Int32$$Int32$$Int32$$Color$Array = function(a0/*Int32*/, a1/*Int32*/, a2/*Int32*/, a3/*Int32*/, a4/*Color[]*/) { 
    
    return CS.Call(4, 135, 26, false, this, a0, a1, a2, a3, a4); 
}
/* Void */
_jstype.definition.SetPixels$$Color$Array$$Int32 = function(a0/*Color[]*/, a1/*Int32*/) { 
    
    return CS.Call(4, 135, 27, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetPixels$$Color$Array = function(a0/*Color[]*/) { 
    
    return CS.Call(4, 135, 28, false, this, a0); 
}
/* Void */
_jstype.definition.SetPixels32$$Color32$Array$$Int32 = function(a0/*Color32[]*/, a1/*Int32*/) { 
    
    return CS.Call(4, 135, 29, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetPixels32$$Color32$Array = function(a0/*Color32[]*/) { 
    
    return CS.Call(4, 135, 30, false, this, a0); 
}
/* Void */
_jstype.definition.UpdateExternalTexture = function(a0/*IntPtr*/) { 
    
    return CS.Call(4, 135, 31, false, this, a0); 
}
/* static Texture2D  */
_jstype.staticDefinition.CreateExternalTexture = function(a0/*Int32*/, a1/*Int32*/, a2/*TextureFormat*/, a3/*Boolean*/, a4/*Boolean*/, a5/*IntPtr*/) { 
    
    return CS.Call(4, 135, 32, true, a0, a1, a2, a3, a4, a5); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Cubemap
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Cubemap",
    baseTypeName: "UnityEngine.Texture"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function(a0, a1, a2) { CS.Call(5, 136, 0, true, this, a0, a1, a2); }

// fields

// properties

_jstype.definition.get_format = function() { return CS.Call(2, 136, 0, false, this); }
_jstype.definition.set_format = function(v) { return CS.Call(3, 136, 0, false, this, v); }

// methods

/* Void */
_jstype.definition.Apply$$Boolean$$Boolean = function(a0/*Boolean*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 136, 0, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Apply$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 136, 1, false, this, a0); 
}
/* Void */
_jstype.definition.Apply = function() { 
    
    return CS.Call(4, 136, 2, false, this); 
}
/* Color */
_jstype.definition.GetPixel = function(a0/*CubemapFace*/, a1/*Int32*/, a2/*Int32*/) { 
    
    return CS.Call(4, 136, 3, false, this, a0, a1, a2); 
}
/* Color[] */
_jstype.definition.GetPixels$$CubemapFace$$Int32 = function(a0/*CubemapFace*/, a1/*Int32*/) { 
    
    return CS.Call(4, 136, 4, false, this, a0, a1); 
}
/* Color[] */
_jstype.definition.GetPixels$$CubemapFace = function(a0/*CubemapFace*/) { 
    
    return CS.Call(4, 136, 5, false, this, a0); 
}
/* Void */
_jstype.definition.SetPixel = function(a0/*CubemapFace*/, a1/*Int32*/, a2/*Int32*/, a3/*Color*/) { 
    
    return CS.Call(4, 136, 6, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.SetPixels$$Color$Array$$CubemapFace$$Int32 = function(a0/*Color[]*/, a1/*CubemapFace*/, a2/*Int32*/) { 
    
    return CS.Call(4, 136, 7, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SetPixels$$Color$Array$$CubemapFace = function(a0/*Color[]*/, a1/*CubemapFace*/) { 
    
    return CS.Call(4, 136, 8, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SmoothEdges$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 136, 9, false, this, a0); 
}
/* Void */
_jstype.definition.SmoothEdges = function() { 
    
    return CS.Call(4, 136, 10, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Texture3D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Texture3D",
    baseTypeName: "UnityEngine.Texture"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function(a0, a1, a2, a3, a4) { CS.Call(5, 137, 0, true, this, a0, a1, a2, a3, a4); }

// fields

// properties

_jstype.definition.get_depth = function() { return CS.Call(2, 137, 0, false, this); }
_jstype.definition.set_depth = function(v) { return CS.Call(3, 137, 0, false, this, v); }

_jstype.definition.get_format = function() { return CS.Call(2, 137, 1, false, this); }
_jstype.definition.set_format = function(v) { return CS.Call(3, 137, 1, false, this, v); }

// methods

/* Void */
_jstype.definition.Apply$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 137, 0, false, this, a0); 
}
/* Void */
_jstype.definition.Apply = function() { 
    
    return CS.Call(4, 137, 1, false, this); 
}
/* Color[] */
_jstype.definition.GetPixels$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 137, 2, false, this, a0); 
}
/* Color[] */
_jstype.definition.GetPixels = function() { 
    
    return CS.Call(4, 137, 3, false, this); 
}
/* Void */
_jstype.definition.SetPixels$$Color$Array$$Int32 = function(a0/*Color[]*/, a1/*Int32*/) { 
    
    return CS.Call(4, 137, 4, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetPixels$$Color$Array = function(a0/*Color[]*/) { 
    
    return CS.Call(4, 137, 5, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$SparseTexture
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.SparseTexture",
    baseTypeName: "UnityEngine.Texture"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor$$Int32$$Int32$$TextureFormat$$Int32 = function(a0, a1, a2, a3) { CS.Call(5, 138, 0, true, this, a0, a1, a2, a3); }
_jstype.definition.ctor$$Int32$$Int32$$TextureFormat$$Int32$$Boolean = function(a0, a1, a2, a3, a4) { CS.Call(5, 138, 1, true, this, a0, a1, a2, a3, a4); }

// fields

// properties

_jstype.definition.get_tileWidth = function() { return CS.Call(2, 138, 0, false, this); }
_jstype.definition.set_tileWidth = function(v) { return CS.Call(3, 138, 0, false, this, v); }

_jstype.definition.get_tileHeight = function() { return CS.Call(2, 138, 1, false, this); }
_jstype.definition.set_tileHeight = function(v) { return CS.Call(3, 138, 1, false, this, v); }

_jstype.definition.get_isCreated = function() { return CS.Call(2, 138, 2, false, this); }
_jstype.definition.set_isCreated = function(v) { return CS.Call(3, 138, 2, false, this, v); }

// methods

/* Void */
_jstype.definition.UnloadTile = function(a0/*Int32*/, a1/*Int32*/, a2/*Int32*/) { 
    
    return CS.Call(4, 138, 0, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.UpdateTile = function(a0/*Int32*/, a1/*Int32*/, a2/*Int32*/, a3/*Color32[]*/) { 
    
    return CS.Call(4, 138, 1, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.UpdateTileRaw = function(a0/*Int32*/, a1/*Int32*/, a2/*Int32*/, a3/*Byte[]*/) { 
    
    return CS.Call(4, 138, 2, false, this, a0, a1, a2, a3); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$RenderTexture
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.RenderTexture",
    baseTypeName: "UnityEngine.Texture"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor$$Int32$$Int32$$Int32$$RenderTextureFormat$$RenderTextureReadWrite = function(a0, a1, a2, a3, a4) { CS.Call(5, 139, 0, true, this, a0, a1, a2, a3, a4); }
_jstype.definition.ctor$$Int32$$Int32$$Int32$$RenderTextureFormat = function(a0, a1, a2, a3) { CS.Call(5, 139, 1, true, this, a0, a1, a2, a3); }
_jstype.definition.ctor$$Int32$$Int32$$Int32 = function(a0, a1, a2) { CS.Call(5, 139, 2, true, this, a0, a1, a2); }

// fields

// properties

_jstype.definition.get_width = function() { return CS.Call(2, 139, 0, false, this); }
_jstype.definition.set_width = function(v) { return CS.Call(3, 139, 0, false, this, v); }

_jstype.definition.get_height = function() { return CS.Call(2, 139, 1, false, this); }
_jstype.definition.set_height = function(v) { return CS.Call(3, 139, 1, false, this, v); }

_jstype.definition.get_depth = function() { return CS.Call(2, 139, 2, false, this); }
_jstype.definition.set_depth = function(v) { return CS.Call(3, 139, 2, false, this, v); }

_jstype.definition.get_isPowerOfTwo = function() { return CS.Call(2, 139, 3, false, this); }
_jstype.definition.set_isPowerOfTwo = function(v) { return CS.Call(3, 139, 3, false, this, v); }

_jstype.definition.get_sRGB = function() { return CS.Call(2, 139, 4, false, this); }
_jstype.definition.set_sRGB = function(v) { return CS.Call(3, 139, 4, false, this, v); }

_jstype.definition.get_format = function() { return CS.Call(2, 139, 5, false, this); }
_jstype.definition.set_format = function(v) { return CS.Call(3, 139, 5, false, this, v); }

_jstype.definition.get_useMipMap = function() { return CS.Call(2, 139, 6, false, this); }
_jstype.definition.set_useMipMap = function(v) { return CS.Call(3, 139, 6, false, this, v); }

_jstype.definition.get_generateMips = function() { return CS.Call(2, 139, 7, false, this); }
_jstype.definition.set_generateMips = function(v) { return CS.Call(3, 139, 7, false, this, v); }

_jstype.definition.get_isCubemap = function() { return CS.Call(2, 139, 8, false, this); }
_jstype.definition.set_isCubemap = function(v) { return CS.Call(3, 139, 8, false, this, v); }

_jstype.definition.get_isVolume = function() { return CS.Call(2, 139, 9, false, this); }
_jstype.definition.set_isVolume = function(v) { return CS.Call(3, 139, 9, false, this, v); }

_jstype.definition.get_volumeDepth = function() { return CS.Call(2, 139, 10, false, this); }
_jstype.definition.set_volumeDepth = function(v) { return CS.Call(3, 139, 10, false, this, v); }

_jstype.definition.get_antiAliasing = function() { return CS.Call(2, 139, 11, false, this); }
_jstype.definition.set_antiAliasing = function(v) { return CS.Call(3, 139, 11, false, this, v); }

_jstype.definition.get_enableRandomWrite = function() { return CS.Call(2, 139, 12, false, this); }
_jstype.definition.set_enableRandomWrite = function(v) { return CS.Call(3, 139, 12, false, this, v); }

_jstype.definition.get_colorBuffer = function() { return CS.Call(2, 139, 13, false, this); }
_jstype.definition.set_colorBuffer = function(v) { return CS.Call(3, 139, 13, false, this, v); }

_jstype.definition.get_depthBuffer = function() { return CS.Call(2, 139, 14, false, this); }
_jstype.definition.set_depthBuffer = function(v) { return CS.Call(3, 139, 14, false, this, v); }

_jstype.staticDefinition.get_active = function() { return CS.Call(2, 139, 15, true); }
_jstype.staticDefinition.set_active = function(v) { return CS.Call(3, 139, 15, true, v); }

// methods

/* Boolean */
_jstype.definition.Create = function() { 
    
    return CS.Call(4, 139, 0, false, this); 
}
/* Void */
_jstype.definition.DiscardContents$$Boolean$$Boolean = function(a0/*Boolean*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 139, 1, false, this, a0, a1); 
}
/* Void */
_jstype.definition.DiscardContents = function() { 
    
    return CS.Call(4, 139, 2, false, this); 
}
/* Vector2 */
_jstype.definition.GetTexelOffset = function() { 
    
    return CS.Call(4, 139, 3, false, this); 
}
/* Boolean */
_jstype.definition.IsCreated = function() { 
    
    return CS.Call(4, 139, 4, false, this); 
}
/* Void */
_jstype.definition.MarkRestoreExpected = function() { 
    
    return CS.Call(4, 139, 5, false, this); 
}
/* Void */
_jstype.definition.Release = function() { 
    
    return CS.Call(4, 139, 6, false, this); 
}
/* Void */
_jstype.definition.SetGlobalShaderProperty = function(a0/*String*/) { 
    
    return CS.Call(4, 139, 7, false, this, a0); 
}
/* static RenderTexture  */
_jstype.staticDefinition.GetTemporary$$Int32$$Int32$$Int32$$RenderTextureFormat$$RenderTextureReadWrite$$Int32 = function(a0/*Int32*/, a1/*Int32*/, a2/*Int32*/, a3/*RenderTextureFormat*/, a4/*RenderTextureReadWrite*/, a5/*Int32*/) { 
    
    return CS.Call(4, 139, 8, true, a0, a1, a2, a3, a4, a5); 
}
/* static RenderTexture  */
_jstype.staticDefinition.GetTemporary$$Int32$$Int32$$Int32$$RenderTextureFormat$$RenderTextureReadWrite = function(a0/*Int32*/, a1/*Int32*/, a2/*Int32*/, a3/*RenderTextureFormat*/, a4/*RenderTextureReadWrite*/) { 
    
    return CS.Call(4, 139, 9, true, a0, a1, a2, a3, a4); 
}
/* static RenderTexture  */
_jstype.staticDefinition.GetTemporary$$Int32$$Int32$$Int32$$RenderTextureFormat = function(a0/*Int32*/, a1/*Int32*/, a2/*Int32*/, a3/*RenderTextureFormat*/) { 
    
    return CS.Call(4, 139, 10, true, a0, a1, a2, a3); 
}
/* static RenderTexture  */
_jstype.staticDefinition.GetTemporary$$Int32$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/, a2/*Int32*/) { 
    
    return CS.Call(4, 139, 11, true, a0, a1, a2); 
}
/* static RenderTexture  */
_jstype.staticDefinition.GetTemporary$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 139, 12, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.ReleaseTemporary = function(a0/*RenderTexture*/) { 
    
    return CS.Call(4, 139, 13, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.SupportsStencil = function(a0/*RenderTexture*/) { 
    
    return CS.Call(4, 139, 14, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GUIElement
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GUIElement",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 140, 0, true, this); }

// fields

// properties

// methods

/* Rect */
_jstype.definition.GetScreenRect$$Camera = function(a0/*Camera*/) { 
    
    return CS.Call(4, 140, 0, false, this, a0); 
}
/* Rect */
_jstype.definition.GetScreenRect = function() { 
    
    return CS.Call(4, 140, 1, false, this); 
}
/* Boolean */
_jstype.definition.HitTest$$Vector3$$Camera = function(a0/*Vector3*/, a1/*Camera*/) { 
    
    return CS.Call(4, 140, 2, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.HitTest$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 140, 3, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GUITexture
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GUITexture",
    baseTypeName: "UnityEngine.GUIElement"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 141, 0, true, this); }

// fields

// properties

_jstype.definition.get_color = function() { return CS.Call(2, 141, 0, false, this); }
_jstype.definition.set_color = function(v) { return CS.Call(3, 141, 0, false, this, v); }

_jstype.definition.get_texture = function() { return CS.Call(2, 141, 1, false, this); }
_jstype.definition.set_texture = function(v) { return CS.Call(3, 141, 1, false, this, v); }

_jstype.definition.get_pixelInset = function() { return CS.Call(2, 141, 2, false, this); }
_jstype.definition.set_pixelInset = function(v) { return CS.Call(3, 141, 2, false, this, v); }

_jstype.definition.get_border = function() { return CS.Call(2, 141, 3, false, this); }
_jstype.definition.set_border = function(v) { return CS.Call(3, 141, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GUIText
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GUIText",
    baseTypeName: "UnityEngine.GUIElement"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 142, 0, true, this); }

// fields

// properties

_jstype.definition.get_text = function() { return CS.Call(2, 142, 0, false, this); }
_jstype.definition.set_text = function(v) { return CS.Call(3, 142, 0, false, this, v); }

_jstype.definition.get_material = function() { return CS.Call(2, 142, 1, false, this); }
_jstype.definition.set_material = function(v) { return CS.Call(3, 142, 1, false, this, v); }

_jstype.definition.get_pixelOffset = function() { return CS.Call(2, 142, 2, false, this); }
_jstype.definition.set_pixelOffset = function(v) { return CS.Call(3, 142, 2, false, this, v); }

_jstype.definition.get_font = function() { return CS.Call(2, 142, 3, false, this); }
_jstype.definition.set_font = function(v) { return CS.Call(3, 142, 3, false, this, v); }

_jstype.definition.get_alignment = function() { return CS.Call(2, 142, 4, false, this); }
_jstype.definition.set_alignment = function(v) { return CS.Call(3, 142, 4, false, this, v); }

_jstype.definition.get_anchor = function() { return CS.Call(2, 142, 5, false, this); }
_jstype.definition.set_anchor = function(v) { return CS.Call(3, 142, 5, false, this, v); }

_jstype.definition.get_lineSpacing = function() { return CS.Call(2, 142, 6, false, this); }
_jstype.definition.set_lineSpacing = function(v) { return CS.Call(3, 142, 6, false, this, v); }

_jstype.definition.get_tabSize = function() { return CS.Call(2, 142, 7, false, this); }
_jstype.definition.set_tabSize = function(v) { return CS.Call(3, 142, 7, false, this, v); }

_jstype.definition.get_fontSize = function() { return CS.Call(2, 142, 8, false, this); }
_jstype.definition.set_fontSize = function(v) { return CS.Call(3, 142, 8, false, this, v); }

_jstype.definition.get_fontStyle = function() { return CS.Call(2, 142, 9, false, this); }
_jstype.definition.set_fontStyle = function(v) { return CS.Call(3, 142, 9, false, this, v); }

_jstype.definition.get_richText = function() { return CS.Call(2, 142, 10, false, this); }
_jstype.definition.set_richText = function(v) { return CS.Call(3, 142, 10, false, this, v); }

_jstype.definition.get_color = function() { return CS.Call(2, 142, 11, false, this); }
_jstype.definition.set_color = function(v) { return CS.Call(3, 142, 11, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Font
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Font",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 143, 0, true, this); }
_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 143, 1, true, this, a0); }

// fields

// properties

_jstype.definition.get_material = function() { return CS.Call(2, 143, 0, false, this); }
_jstype.definition.set_material = function(v) { return CS.Call(3, 143, 0, false, this, v); }

_jstype.definition.get_fontNames = function() { return CS.Call(2, 143, 1, false, this); }
_jstype.definition.set_fontNames = function(v) { return CS.Call(3, 143, 1, false, this, v); }

_jstype.definition.get_characterInfo = function() { return CS.Call(2, 143, 2, false, this); }
_jstype.definition.set_characterInfo = function(v) { return CS.Call(3, 143, 2, false, this, v); }

_jstype.definition.get_dynamic = function() { return CS.Call(2, 143, 3, false, this); }
_jstype.definition.set_dynamic = function(v) { return CS.Call(3, 143, 3, false, this, v); }

_jstype.definition.get_fontSize = function() { return CS.Call(2, 143, 4, false, this); }
_jstype.definition.set_fontSize = function(v) { return CS.Call(3, 143, 4, false, this, v); }

// methods

/* Boolean */
_jstype.definition.GetCharacterInfo$$Char$$CharacterInfo$$Int32$$FontStyle = function(a0/*Char*/, a1/*CharacterInfo&*/, a2/*Int32*/, a3/*FontStyle*/) { 
    
    return CS.Call(4, 143, 0, false, this, a0, a1, a2, a3); 
}
/* Boolean */
_jstype.definition.GetCharacterInfo$$Char$$CharacterInfo$$Int32 = function(a0/*Char*/, a1/*CharacterInfo&*/, a2/*Int32*/) { 
    
    return CS.Call(4, 143, 1, false, this, a0, a1, a2); 
}
/* Boolean */
_jstype.definition.GetCharacterInfo$$Char$$CharacterInfo = function(a0/*Char*/, a1/*CharacterInfo&*/) { 
    
    return CS.Call(4, 143, 2, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.HasCharacter = function(a0/*Char*/) { 
    
    return CS.Call(4, 143, 3, false, this, a0); 
}
/* Void */
_jstype.definition.RequestCharactersInTexture$$String$$Int32$$FontStyle = function(a0/*String*/, a1/*Int32*/, a2/*FontStyle*/) { 
    
    return CS.Call(4, 143, 4, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.RequestCharactersInTexture$$String$$Int32 = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 143, 5, false, this, a0, a1); 
}
/* Void */
_jstype.definition.RequestCharactersInTexture$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 143, 6, false, this, a0); 
}
/* static Int32  */
_jstype.staticDefinition.GetMaxVertsForString = function(a0/*String*/) { 
    
    return CS.Call(4, 143, 7, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GUILayer
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GUILayer",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 144, 0, true, this); }

// fields

// properties

// methods

/* GUIElement */
_jstype.definition.HitTest = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 144, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$LODGroup
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.LODGroup",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 145, 0, true, this); }

// fields

// properties

_jstype.definition.get_localReferencePoint = function() { return CS.Call(2, 145, 0, false, this); }
_jstype.definition.set_localReferencePoint = function(v) { return CS.Call(3, 145, 0, false, this, v); }

_jstype.definition.get_size = function() { return CS.Call(2, 145, 1, false, this); }
_jstype.definition.set_size = function(v) { return CS.Call(3, 145, 1, false, this, v); }

_jstype.definition.get_lodCount = function() { return CS.Call(2, 145, 2, false, this); }
_jstype.definition.set_lodCount = function(v) { return CS.Call(3, 145, 2, false, this, v); }

_jstype.definition.get_enabled = function() { return CS.Call(2, 145, 3, false, this); }
_jstype.definition.set_enabled = function(v) { return CS.Call(3, 145, 3, false, this, v); }

// methods

/* Void */
_jstype.definition.ForceLOD = function(a0/*Int32*/) { 
    
    return CS.Call(4, 145, 0, false, this, a0); 
}
/* Void */
_jstype.definition.RecalculateBounds = function() { 
    
    return CS.Call(4, 145, 1, false, this); 
}
/* Void */
_jstype.definition.SetLODS = function(a0/*LOD[]*/) { 
    
    return CS.Call(4, 145, 2, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Gradient
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Gradient",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 146, 0, true, this); }

// fields

// properties

_jstype.definition.get_colorKeys = function() { return CS.Call(2, 146, 0, false, this); }
_jstype.definition.set_colorKeys = function(v) { return CS.Call(3, 146, 0, false, this, v); }

_jstype.definition.get_alphaKeys = function() { return CS.Call(2, 146, 1, false, this); }
_jstype.definition.set_alphaKeys = function(v) { return CS.Call(3, 146, 1, false, this, v); }

// methods

/* Color */
_jstype.definition.Evaluate = function(a0/*Single*/) { 
    
    return CS.Call(4, 146, 0, false, this, a0); 
}
/* Void */
_jstype.definition.SetKeys = function(a0/*GradientColorKey[]*/, a1/*GradientAlphaKey[]*/) { 
    
    return CS.Call(4, 146, 1, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GUI
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GUI",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 147, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_skin = function() { return CS.Call(2, 147, 0, true); }
_jstype.staticDefinition.set_skin = function(v) { return CS.Call(3, 147, 0, true, v); }

_jstype.staticDefinition.get_color = function() { return CS.Call(2, 147, 1, true); }
_jstype.staticDefinition.set_color = function(v) { return CS.Call(3, 147, 1, true, v); }

_jstype.staticDefinition.get_backgroundColor = function() { return CS.Call(2, 147, 2, true); }
_jstype.staticDefinition.set_backgroundColor = function(v) { return CS.Call(3, 147, 2, true, v); }

_jstype.staticDefinition.get_contentColor = function() { return CS.Call(2, 147, 3, true); }
_jstype.staticDefinition.set_contentColor = function(v) { return CS.Call(3, 147, 3, true, v); }

_jstype.staticDefinition.get_changed = function() { return CS.Call(2, 147, 4, true); }
_jstype.staticDefinition.set_changed = function(v) { return CS.Call(3, 147, 4, true, v); }

_jstype.staticDefinition.get_enabled = function() { return CS.Call(2, 147, 5, true); }
_jstype.staticDefinition.set_enabled = function(v) { return CS.Call(3, 147, 5, true, v); }

_jstype.staticDefinition.get_matrix = function() { return CS.Call(2, 147, 6, true); }
_jstype.staticDefinition.set_matrix = function(v) { return CS.Call(3, 147, 6, true, v); }

_jstype.staticDefinition.get_tooltip = function() { return CS.Call(2, 147, 7, true); }
_jstype.staticDefinition.set_tooltip = function(v) { return CS.Call(3, 147, 7, true, v); }

_jstype.staticDefinition.get_depth = function() { return CS.Call(2, 147, 8, true); }
_jstype.staticDefinition.set_depth = function(v) { return CS.Call(3, 147, 8, true, v); }

// methods

/* static Void  */
_jstype.staticDefinition.BeginGroup$$Rect$$String$$GUIStyle = function(a0/*Rect*/, a1/*String*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 0, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.BeginGroup$$Rect$$Texture$$GUIStyle = function(a0/*Rect*/, a1/*Texture*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 1, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.BeginGroup$$Rect$$GUIContent$$GUIStyle = function(a0/*Rect*/, a1/*GUIContent*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 2, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.BeginGroup$$Rect$$Texture = function(a0/*Rect*/, a1/*Texture*/) { 
    
    return CS.Call(4, 147, 3, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.BeginGroup$$Rect$$String = function(a0/*Rect*/, a1/*String*/) { 
    
    return CS.Call(4, 147, 4, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.BeginGroup$$Rect$$GUIStyle = function(a0/*Rect*/, a1/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 5, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.BeginGroup$$Rect$$GUIContent = function(a0/*Rect*/, a1/*GUIContent*/) { 
    
    return CS.Call(4, 147, 6, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.BeginGroup$$Rect = function(a0/*Rect*/) { 
    
    return CS.Call(4, 147, 7, true, a0); 
}
/* static Vector2  */
_jstype.staticDefinition.BeginScrollView$$Rect$$Vector2$$Rect$$Boolean$$Boolean$$GUIStyle$$GUIStyle = function(a0/*Rect*/, a1/*Vector2*/, a2/*Rect*/, a3/*Boolean*/, a4/*Boolean*/, a5/*GUIStyle*/, a6/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 8, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static Vector2  */
_jstype.staticDefinition.BeginScrollView$$Rect$$Vector2$$Rect$$GUIStyle$$GUIStyle = function(a0/*Rect*/, a1/*Vector2*/, a2/*Rect*/, a3/*GUIStyle*/, a4/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 9, true, a0, a1, a2, a3, a4); 
}
/* static Vector2  */
_jstype.staticDefinition.BeginScrollView$$Rect$$Vector2$$Rect$$Boolean$$Boolean = function(a0/*Rect*/, a1/*Vector2*/, a2/*Rect*/, a3/*Boolean*/, a4/*Boolean*/) { 
    
    return CS.Call(4, 147, 10, true, a0, a1, a2, a3, a4); 
}
/* static Vector2  */
_jstype.staticDefinition.BeginScrollView$$Rect$$Vector2$$Rect = function(a0/*Rect*/, a1/*Vector2*/, a2/*Rect*/) { 
    
    return CS.Call(4, 147, 11, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.Box$$Rect$$String$$GUIStyle = function(a0/*Rect*/, a1/*String*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 12, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.Box$$Rect$$Texture$$GUIStyle = function(a0/*Rect*/, a1/*Texture*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 13, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.Box$$Rect$$GUIContent$$GUIStyle = function(a0/*Rect*/, a1/*GUIContent*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 14, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.Box$$Rect$$String = function(a0/*Rect*/, a1/*String*/) { 
    
    return CS.Call(4, 147, 15, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.Box$$Rect$$Texture = function(a0/*Rect*/, a1/*Texture*/) { 
    
    return CS.Call(4, 147, 16, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.Box$$Rect$$GUIContent = function(a0/*Rect*/, a1/*GUIContent*/) { 
    
    return CS.Call(4, 147, 17, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.BringWindowToBack = function(a0/*Int32*/) { 
    
    return CS.Call(4, 147, 18, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.BringWindowToFront = function(a0/*Int32*/) { 
    
    return CS.Call(4, 147, 19, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.Button$$Rect$$Texture$$GUIStyle = function(a0/*Rect*/, a1/*Texture*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 20, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Button$$Rect$$String$$GUIStyle = function(a0/*Rect*/, a1/*String*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 21, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Button$$Rect$$GUIContent$$GUIStyle = function(a0/*Rect*/, a1/*GUIContent*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 22, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Button$$Rect$$Texture = function(a0/*Rect*/, a1/*Texture*/) { 
    
    return CS.Call(4, 147, 23, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.Button$$Rect$$String = function(a0/*Rect*/, a1/*String*/) { 
    
    return CS.Call(4, 147, 24, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.Button$$Rect$$GUIContent = function(a0/*Rect*/, a1/*GUIContent*/) { 
    
    return CS.Call(4, 147, 25, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DragWindow$$Rect = function(a0/*Rect*/) { 
    
    return CS.Call(4, 147, 26, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.DragWindow = function() { 
    
    return CS.Call(4, 147, 27, true); 
}
/* static Void  */
_jstype.staticDefinition.DrawTexture$$Rect$$Texture$$ScaleMode$$Boolean$$Single = function(a0/*Rect*/, a1/*Texture*/, a2/*ScaleMode*/, a3/*Boolean*/, a4/*Single*/) { 
    
    return CS.Call(4, 147, 28, true, a0, a1, a2, a3, a4); 
}
/* static Void  */
_jstype.staticDefinition.DrawTexture$$Rect$$Texture$$ScaleMode$$Boolean = function(a0/*Rect*/, a1/*Texture*/, a2/*ScaleMode*/, a3/*Boolean*/) { 
    
    return CS.Call(4, 147, 29, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.DrawTexture$$Rect$$Texture$$ScaleMode = function(a0/*Rect*/, a1/*Texture*/, a2/*ScaleMode*/) { 
    
    return CS.Call(4, 147, 30, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.DrawTexture$$Rect$$Texture = function(a0/*Rect*/, a1/*Texture*/) { 
    
    return CS.Call(4, 147, 31, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DrawTextureWithTexCoords$$Rect$$Texture$$Rect$$Boolean = function(a0/*Rect*/, a1/*Texture*/, a2/*Rect*/, a3/*Boolean*/) { 
    
    return CS.Call(4, 147, 32, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.DrawTextureWithTexCoords$$Rect$$Texture$$Rect = function(a0/*Rect*/, a1/*Texture*/, a2/*Rect*/) { 
    
    return CS.Call(4, 147, 33, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.EndGroup = function() { 
    
    return CS.Call(4, 147, 34, true); 
}
/* static Void  */
_jstype.staticDefinition.EndScrollView$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 147, 35, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.EndScrollView = function() { 
    
    return CS.Call(4, 147, 36, true); 
}
/* static Void  */
_jstype.staticDefinition.FocusControl = function(a0/*String*/) { 
    
    return CS.Call(4, 147, 37, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.FocusWindow = function(a0/*Int32*/) { 
    
    return CS.Call(4, 147, 38, true, a0); 
}
/* static String  */
_jstype.staticDefinition.GetNameOfFocusedControl = function() { 
    
    return CS.Call(4, 147, 39, true); 
}
/* static Single  */
_jstype.staticDefinition.HorizontalScrollbar$$Rect$$Single$$Single$$Single$$Single$$GUIStyle = function(a0/*Rect*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*Single*/, a5/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 40, true, a0, a1, a2, a3, a4, a5); 
}
/* static Single  */
_jstype.staticDefinition.HorizontalScrollbar$$Rect$$Single$$Single$$Single$$Single = function(a0/*Rect*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 147, 41, true, a0, a1, a2, a3, a4); 
}
/* static Single  */
_jstype.staticDefinition.HorizontalSlider$$Rect$$Single$$Single$$Single$$GUIStyle$$GUIStyle = function(a0/*Rect*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*GUIStyle*/, a5/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 42, true, a0, a1, a2, a3, a4, a5); 
}
/* static Single  */
_jstype.staticDefinition.HorizontalSlider$$Rect$$Single$$Single$$Single = function(a0/*Rect*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 147, 43, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.Label$$Rect$$GUIContent$$GUIStyle = function(a0/*Rect*/, a1/*GUIContent*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 44, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.Label$$Rect$$Texture$$GUIStyle = function(a0/*Rect*/, a1/*Texture*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 45, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.Label$$Rect$$String$$GUIStyle = function(a0/*Rect*/, a1/*String*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 46, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.Label$$Rect$$GUIContent = function(a0/*Rect*/, a1/*GUIContent*/) { 
    
    return CS.Call(4, 147, 47, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.Label$$Rect$$String = function(a0/*Rect*/, a1/*String*/) { 
    
    return CS.Call(4, 147, 48, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.Label$$Rect$$Texture = function(a0/*Rect*/, a1/*Texture*/) { 
    
    return CS.Call(4, 147, 49, true, a0, a1); 
}
/* static Rect  */
_jstype.staticDefinition.ModalWindow$$Int32$$Rect$$WindowFunction$$GUIContent$$GUIStyle = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*GUIContent*/, a4/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 50, true, a0, a1, a2, a3, a4); 
}
/* static Rect  */
_jstype.staticDefinition.ModalWindow$$Int32$$Rect$$WindowFunction$$String$$GUIStyle = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*String*/, a4/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 51, true, a0, a1, a2, a3, a4); 
}
/* static Rect  */
_jstype.staticDefinition.ModalWindow$$Int32$$Rect$$WindowFunction$$Texture$$GUIStyle = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*Texture*/, a4/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 52, true, a0, a1, a2, a3, a4); 
}
/* static Rect  */
_jstype.staticDefinition.ModalWindow$$Int32$$Rect$$WindowFunction$$String = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*String*/) { 
    
    return CS.Call(4, 147, 53, true, a0, a1, a2, a3); 
}
/* static Rect  */
_jstype.staticDefinition.ModalWindow$$Int32$$Rect$$WindowFunction$$GUIContent = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*GUIContent*/) { 
    
    return CS.Call(4, 147, 54, true, a0, a1, a2, a3); 
}
/* static Rect  */
_jstype.staticDefinition.ModalWindow$$Int32$$Rect$$WindowFunction$$Texture = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*Texture*/) { 
    
    return CS.Call(4, 147, 55, true, a0, a1, a2, a3); 
}
/* static String  */
_jstype.staticDefinition.PasswordField$$Rect$$String$$Char$$Int32$$GUIStyle = function(a0/*Rect*/, a1/*String*/, a2/*Char*/, a3/*Int32*/, a4/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 56, true, a0, a1, a2, a3, a4); 
}
/* static String  */
_jstype.staticDefinition.PasswordField$$Rect$$String$$Char$$Int32 = function(a0/*Rect*/, a1/*String*/, a2/*Char*/, a3/*Int32*/) { 
    
    return CS.Call(4, 147, 57, true, a0, a1, a2, a3); 
}
/* static String  */
_jstype.staticDefinition.PasswordField$$Rect$$String$$Char$$GUIStyle = function(a0/*Rect*/, a1/*String*/, a2/*Char*/, a3/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 58, true, a0, a1, a2, a3); 
}
/* static String  */
_jstype.staticDefinition.PasswordField$$Rect$$String$$Char = function(a0/*Rect*/, a1/*String*/, a2/*Char*/) { 
    
    return CS.Call(4, 147, 59, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.RepeatButton$$Rect$$String$$GUIStyle = function(a0/*Rect*/, a1/*String*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 60, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.RepeatButton$$Rect$$Texture$$GUIStyle = function(a0/*Rect*/, a1/*Texture*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 61, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.RepeatButton$$Rect$$GUIContent$$GUIStyle = function(a0/*Rect*/, a1/*GUIContent*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 62, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.RepeatButton$$Rect$$Texture = function(a0/*Rect*/, a1/*Texture*/) { 
    
    return CS.Call(4, 147, 63, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.RepeatButton$$Rect$$GUIContent = function(a0/*Rect*/, a1/*GUIContent*/) { 
    
    return CS.Call(4, 147, 64, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.RepeatButton$$Rect$$String = function(a0/*Rect*/, a1/*String*/) { 
    
    return CS.Call(4, 147, 65, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.ScrollTo = function(a0/*Rect*/) { 
    
    return CS.Call(4, 147, 66, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.ScrollTowards = function(a0/*Rect*/, a1/*Single*/) { 
    
    return CS.Call(4, 147, 67, true, a0, a1); 
}
/* static Int32  */
_jstype.staticDefinition.SelectionGrid$$Rect$$Int32$$Texture$Array$$Int32$$GUIStyle = function(a0/*Rect*/, a1/*Int32*/, a2/*Texture[]*/, a3/*Int32*/, a4/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 68, true, a0, a1, a2, a3, a4); 
}
/* static Int32  */
_jstype.staticDefinition.SelectionGrid$$Rect$$Int32$$String$Array$$Int32$$GUIStyle = function(a0/*Rect*/, a1/*Int32*/, a2/*String[]*/, a3/*Int32*/, a4/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 69, true, a0, a1, a2, a3, a4); 
}
/* static Int32  */
_jstype.staticDefinition.SelectionGrid$$Rect$$Int32$$GUIContent$Array$$Int32$$GUIStyle = function(a0/*Rect*/, a1/*Int32*/, a2/*GUIContent[]*/, a3/*Int32*/, a4/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 70, true, a0, a1, a2, a3, a4); 
}
/* static Int32  */
_jstype.staticDefinition.SelectionGrid$$Rect$$Int32$$GUIContent$Array$$Int32 = function(a0/*Rect*/, a1/*Int32*/, a2/*GUIContent[]*/, a3/*Int32*/) { 
    
    return CS.Call(4, 147, 71, true, a0, a1, a2, a3); 
}
/* static Int32  */
_jstype.staticDefinition.SelectionGrid$$Rect$$Int32$$String$Array$$Int32 = function(a0/*Rect*/, a1/*Int32*/, a2/*String[]*/, a3/*Int32*/) { 
    
    return CS.Call(4, 147, 72, true, a0, a1, a2, a3); 
}
/* static Int32  */
_jstype.staticDefinition.SelectionGrid$$Rect$$Int32$$Texture$Array$$Int32 = function(a0/*Rect*/, a1/*Int32*/, a2/*Texture[]*/, a3/*Int32*/) { 
    
    return CS.Call(4, 147, 73, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.SetNextControlName = function(a0/*String*/) { 
    
    return CS.Call(4, 147, 74, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Slider = function(a0/*Rect*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*Single*/, a5/*GUIStyle*/, a6/*GUIStyle*/, a7/*Boolean*/, a8/*Int32*/) { 
    
    return CS.Call(4, 147, 75, true, a0, a1, a2, a3, a4, a5, a6, a7, a8); 
}
/* static String  */
_jstype.staticDefinition.TextArea$$Rect$$String$$Int32$$GUIStyle = function(a0/*Rect*/, a1/*String*/, a2/*Int32*/, a3/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 76, true, a0, a1, a2, a3); 
}
/* static String  */
_jstype.staticDefinition.TextArea$$Rect$$String$$Int32 = function(a0/*Rect*/, a1/*String*/, a2/*Int32*/) { 
    
    return CS.Call(4, 147, 77, true, a0, a1, a2); 
}
/* static String  */
_jstype.staticDefinition.TextArea$$Rect$$String$$GUIStyle = function(a0/*Rect*/, a1/*String*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 78, true, a0, a1, a2); 
}
/* static String  */
_jstype.staticDefinition.TextArea$$Rect$$String = function(a0/*Rect*/, a1/*String*/) { 
    
    return CS.Call(4, 147, 79, true, a0, a1); 
}
/* static String  */
_jstype.staticDefinition.TextField$$Rect$$String$$Int32$$GUIStyle = function(a0/*Rect*/, a1/*String*/, a2/*Int32*/, a3/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 80, true, a0, a1, a2, a3); 
}
/* static String  */
_jstype.staticDefinition.TextField$$Rect$$String$$Int32 = function(a0/*Rect*/, a1/*String*/, a2/*Int32*/) { 
    
    return CS.Call(4, 147, 81, true, a0, a1, a2); 
}
/* static String  */
_jstype.staticDefinition.TextField$$Rect$$String$$GUIStyle = function(a0/*Rect*/, a1/*String*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 82, true, a0, a1, a2); 
}
/* static String  */
_jstype.staticDefinition.TextField$$Rect$$String = function(a0/*Rect*/, a1/*String*/) { 
    
    return CS.Call(4, 147, 83, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.Toggle$$Rect$$Int32$$Boolean$$GUIContent$$GUIStyle = function(a0/*Rect*/, a1/*Int32*/, a2/*Boolean*/, a3/*GUIContent*/, a4/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 84, true, a0, a1, a2, a3, a4); 
}
/* static Boolean  */
_jstype.staticDefinition.Toggle$$Rect$$Boolean$$GUIContent$$GUIStyle = function(a0/*Rect*/, a1/*Boolean*/, a2/*GUIContent*/, a3/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 85, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.Toggle$$Rect$$Boolean$$Texture$$GUIStyle = function(a0/*Rect*/, a1/*Boolean*/, a2/*Texture*/, a3/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 86, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.Toggle$$Rect$$Boolean$$String$$GUIStyle = function(a0/*Rect*/, a1/*Boolean*/, a2/*String*/, a3/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 87, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.Toggle$$Rect$$Boolean$$GUIContent = function(a0/*Rect*/, a1/*Boolean*/, a2/*GUIContent*/) { 
    
    return CS.Call(4, 147, 88, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Toggle$$Rect$$Boolean$$Texture = function(a0/*Rect*/, a1/*Boolean*/, a2/*Texture*/) { 
    
    return CS.Call(4, 147, 89, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.Toggle$$Rect$$Boolean$$String = function(a0/*Rect*/, a1/*Boolean*/, a2/*String*/) { 
    
    return CS.Call(4, 147, 90, true, a0, a1, a2); 
}
/* static Int32  */
_jstype.staticDefinition.Toolbar$$Rect$$Int32$$GUIContent$Array$$GUIStyle = function(a0/*Rect*/, a1/*Int32*/, a2/*GUIContent[]*/, a3/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 91, true, a0, a1, a2, a3); 
}
/* static Int32  */
_jstype.staticDefinition.Toolbar$$Rect$$Int32$$Texture$Array$$GUIStyle = function(a0/*Rect*/, a1/*Int32*/, a2/*Texture[]*/, a3/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 92, true, a0, a1, a2, a3); 
}
/* static Int32  */
_jstype.staticDefinition.Toolbar$$Rect$$Int32$$String$Array$$GUIStyle = function(a0/*Rect*/, a1/*Int32*/, a2/*String[]*/, a3/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 93, true, a0, a1, a2, a3); 
}
/* static Int32  */
_jstype.staticDefinition.Toolbar$$Rect$$Int32$$Texture$Array = function(a0/*Rect*/, a1/*Int32*/, a2/*Texture[]*/) { 
    
    return CS.Call(4, 147, 94, true, a0, a1, a2); 
}
/* static Int32  */
_jstype.staticDefinition.Toolbar$$Rect$$Int32$$GUIContent$Array = function(a0/*Rect*/, a1/*Int32*/, a2/*GUIContent[]*/) { 
    
    return CS.Call(4, 147, 95, true, a0, a1, a2); 
}
/* static Int32  */
_jstype.staticDefinition.Toolbar$$Rect$$Int32$$String$Array = function(a0/*Rect*/, a1/*Int32*/, a2/*String[]*/) { 
    
    return CS.Call(4, 147, 96, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.UnfocusWindow = function() { 
    
    return CS.Call(4, 147, 97, true); 
}
/* static Single  */
_jstype.staticDefinition.VerticalScrollbar$$Rect$$Single$$Single$$Single$$Single$$GUIStyle = function(a0/*Rect*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*Single*/, a5/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 98, true, a0, a1, a2, a3, a4, a5); 
}
/* static Single  */
_jstype.staticDefinition.VerticalScrollbar$$Rect$$Single$$Single$$Single$$Single = function(a0/*Rect*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 147, 99, true, a0, a1, a2, a3, a4); 
}
/* static Single  */
_jstype.staticDefinition.VerticalSlider$$Rect$$Single$$Single$$Single$$GUIStyle$$GUIStyle = function(a0/*Rect*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*GUIStyle*/, a5/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 100, true, a0, a1, a2, a3, a4, a5); 
}
/* static Single  */
_jstype.staticDefinition.VerticalSlider$$Rect$$Single$$Single$$Single = function(a0/*Rect*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 147, 101, true, a0, a1, a2, a3); 
}
/* static Rect  */
_jstype.staticDefinition.Window$$Int32$$Rect$$WindowFunction$$String$$GUIStyle = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*String*/, a4/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 102, true, a0, a1, a2, a3, a4); 
}
/* static Rect  */
_jstype.staticDefinition.Window$$Int32$$Rect$$WindowFunction$$GUIContent$$GUIStyle = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*GUIContent*/, a4/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 103, true, a0, a1, a2, a3, a4); 
}
/* static Rect  */
_jstype.staticDefinition.Window$$Int32$$Rect$$WindowFunction$$Texture$$GUIStyle = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*Texture*/, a4/*GUIStyle*/) { 
    
    return CS.Call(4, 147, 104, true, a0, a1, a2, a3, a4); 
}
/* static Rect  */
_jstype.staticDefinition.Window$$Int32$$Rect$$WindowFunction$$Texture = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*Texture*/) { 
    
    return CS.Call(4, 147, 105, true, a0, a1, a2, a3); 
}
/* static Rect  */
_jstype.staticDefinition.Window$$Int32$$Rect$$WindowFunction$$String = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*String*/) { 
    
    return CS.Call(4, 147, 106, true, a0, a1, a2, a3); 
}
/* static Rect  */
_jstype.staticDefinition.Window$$Int32$$Rect$$WindowFunction$$GUIContent = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*GUIContent*/) { 
    
    return CS.Call(4, 147, 107, true, a0, a1, a2, a3); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GUILayout
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GUILayout",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 148, 0, true, this); }

// fields

// properties

// methods

/* static Void  */
_jstype.staticDefinition.BeginArea$$Rect$$String$$GUIStyle = function(a0/*Rect*/, a1/*String*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 148, 0, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.BeginArea$$Rect$$Texture$$GUIStyle = function(a0/*Rect*/, a1/*Texture*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 148, 1, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.BeginArea$$Rect$$GUIContent$$GUIStyle = function(a0/*Rect*/, a1/*GUIContent*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 148, 2, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.BeginArea$$Rect$$GUIStyle = function(a0/*Rect*/, a1/*GUIStyle*/) { 
    
    return CS.Call(4, 148, 3, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.BeginArea$$Rect$$GUIContent = function(a0/*Rect*/, a1/*GUIContent*/) { 
    
    return CS.Call(4, 148, 4, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.BeginArea$$Rect$$Texture = function(a0/*Rect*/, a1/*Texture*/) { 
    
    return CS.Call(4, 148, 5, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.BeginArea$$Rect$$String = function(a0/*Rect*/, a1/*String*/) { 
    
    return CS.Call(4, 148, 6, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.BeginArea$$Rect = function(a0/*Rect*/) { 
    
    return CS.Call(4, 148, 7, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.BeginHorizontal$$GUIContent$$GUIStyle$$GUILayoutOption$Array = function(a0/*GUIContent*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 8, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.BeginHorizontal$$Texture$$GUIStyle$$GUILayoutOption$Array = function(a0/*Texture*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 9, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.BeginHorizontal$$String$$GUIStyle$$GUILayoutOption$Array = function(a0/*String*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 10, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.BeginHorizontal$$GUIStyle$$GUILayoutOption$Array = function(a0/*GUIStyle*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 11, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.BeginHorizontal$$GUILayoutOption$Array = function(a0/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 12, true, jsb_formatParamsArray(0, a0, arguments)); 
}
/* static Vector2  */
_jstype.staticDefinition.BeginScrollView$$Vector2$$Boolean$$Boolean$$GUIStyle$$GUIStyle$$GUIStyle$$GUILayoutOption$Array = function(a0/*Vector2*/, a1/*Boolean*/, a2/*Boolean*/, a3/*GUIStyle*/, a4/*GUIStyle*/, a5/*GUIStyle*/, a6/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 13, true, a0, a1, a2, a3, a4, a5, jsb_formatParamsArray(6, a6, arguments)); 
}
/* static Vector2  */
_jstype.staticDefinition.BeginScrollView$$Vector2$$Boolean$$Boolean$$GUIStyle$$GUIStyle$$GUILayoutOption$Array = function(a0/*Vector2*/, a1/*Boolean*/, a2/*Boolean*/, a3/*GUIStyle*/, a4/*GUIStyle*/, a5/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 14, true, a0, a1, a2, a3, a4, jsb_formatParamsArray(5, a5, arguments)); 
}
/* static Vector2  */
_jstype.staticDefinition.BeginScrollView$$Vector2$$Boolean$$Boolean$$GUILayoutOption$Array = function(a0/*Vector2*/, a1/*Boolean*/, a2/*Boolean*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 15, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static Vector2  */
_jstype.staticDefinition.BeginScrollView$$Vector2$$GUIStyle$$GUIStyle$$GUILayoutOption$Array = function(a0/*Vector2*/, a1/*GUIStyle*/, a2/*GUIStyle*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 16, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static Vector2  */
_jstype.staticDefinition.BeginScrollView$$Vector2$$GUIStyle$$GUILayoutOption$Array = function(a0/*Vector2*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 17, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Vector2  */
_jstype.staticDefinition.BeginScrollView$$Vector2$$GUILayoutOption$Array = function(a0/*Vector2*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 18, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Vector2  */
_jstype.staticDefinition.BeginScrollView$$Vector2$$GUIStyle = function(a0/*Vector2*/, a1/*GUIStyle*/) { 
    
    return CS.Call(4, 148, 19, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.BeginVertical$$String$$GUIStyle$$GUILayoutOption$Array = function(a0/*String*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 20, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.BeginVertical$$GUIContent$$GUIStyle$$GUILayoutOption$Array = function(a0/*GUIContent*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 21, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.BeginVertical$$Texture$$GUIStyle$$GUILayoutOption$Array = function(a0/*Texture*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 22, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.BeginVertical$$GUIStyle$$GUILayoutOption$Array = function(a0/*GUIStyle*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 23, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.BeginVertical$$GUILayoutOption$Array = function(a0/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 24, true, jsb_formatParamsArray(0, a0, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.Box$$GUIContent$$GUIStyle$$GUILayoutOption$Array = function(a0/*GUIContent*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 25, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.Box$$String$$GUIStyle$$GUILayoutOption$Array = function(a0/*String*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 26, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.Box$$Texture$$GUIStyle$$GUILayoutOption$Array = function(a0/*Texture*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 27, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.Box$$String$$GUILayoutOption$Array = function(a0/*String*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 28, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.Box$$GUIContent$$GUILayoutOption$Array = function(a0/*GUIContent*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 29, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.Box$$Texture$$GUILayoutOption$Array = function(a0/*Texture*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 30, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.Button$$String$$GUIStyle$$GUILayoutOption$Array = function(a0/*String*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 31, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.Button$$Texture$$GUIStyle$$GUILayoutOption$Array = function(a0/*Texture*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 32, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.Button$$GUIContent$$GUIStyle$$GUILayoutOption$Array = function(a0/*GUIContent*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 33, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.Button$$String$$GUILayoutOption$Array = function(a0/*String*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 34, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.Button$$Texture$$GUILayoutOption$Array = function(a0/*Texture*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 35, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.Button$$GUIContent$$GUILayoutOption$Array = function(a0/*GUIContent*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 36, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.EndArea = function() { 
    
    return CS.Call(4, 148, 37, true); 
}
/* static Void  */
_jstype.staticDefinition.EndHorizontal = function() { 
    
    return CS.Call(4, 148, 38, true); 
}
/* static Void  */
_jstype.staticDefinition.EndScrollView = function() { 
    
    return CS.Call(4, 148, 39, true); 
}
/* static Void  */
_jstype.staticDefinition.EndVertical = function() { 
    
    return CS.Call(4, 148, 40, true); 
}
/* static GUILayoutOption  */
_jstype.staticDefinition.ExpandHeight = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 148, 41, true, a0); 
}
/* static GUILayoutOption  */
_jstype.staticDefinition.ExpandWidth = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 148, 42, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.FlexibleSpace = function() { 
    
    return CS.Call(4, 148, 43, true); 
}
/* static GUILayoutOption  */
_jstype.staticDefinition.Height = function(a0/*Single*/) { 
    
    return CS.Call(4, 148, 44, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.HorizontalScrollbar$$Single$$Single$$Single$$Single$$GUIStyle$$GUILayoutOption$Array = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*GUIStyle*/, a5/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 45, true, a0, a1, a2, a3, a4, jsb_formatParamsArray(5, a5, arguments)); 
}
/* static Single  */
_jstype.staticDefinition.HorizontalScrollbar$$Single$$Single$$Single$$Single$$GUILayoutOption$Array = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 46, true, a0, a1, a2, a3, jsb_formatParamsArray(4, a4, arguments)); 
}
/* static Single  */
_jstype.staticDefinition.HorizontalSlider$$Single$$Single$$Single$$GUIStyle$$GUIStyle$$GUILayoutOption$Array = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*GUIStyle*/, a4/*GUIStyle*/, a5/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 47, true, a0, a1, a2, a3, a4, jsb_formatParamsArray(5, a5, arguments)); 
}
/* static Single  */
_jstype.staticDefinition.HorizontalSlider$$Single$$Single$$Single$$GUILayoutOption$Array = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 48, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.Label$$Texture$$GUIStyle$$GUILayoutOption$Array = function(a0/*Texture*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 49, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.Label$$String$$GUIStyle$$GUILayoutOption$Array = function(a0/*String*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 50, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.Label$$GUIContent$$GUIStyle$$GUILayoutOption$Array = function(a0/*GUIContent*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 51, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.Label$$String$$GUILayoutOption$Array = function(a0/*String*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 52, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.Label$$GUIContent$$GUILayoutOption$Array = function(a0/*GUIContent*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 53, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.Label$$Texture$$GUILayoutOption$Array = function(a0/*Texture*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 54, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static GUILayoutOption  */
_jstype.staticDefinition.MaxHeight = function(a0/*Single*/) { 
    
    return CS.Call(4, 148, 55, true, a0); 
}
/* static GUILayoutOption  */
_jstype.staticDefinition.MaxWidth = function(a0/*Single*/) { 
    
    return CS.Call(4, 148, 56, true, a0); 
}
/* static GUILayoutOption  */
_jstype.staticDefinition.MinHeight = function(a0/*Single*/) { 
    
    return CS.Call(4, 148, 57, true, a0); 
}
/* static GUILayoutOption  */
_jstype.staticDefinition.MinWidth = function(a0/*Single*/) { 
    
    return CS.Call(4, 148, 58, true, a0); 
}
/* static String  */
_jstype.staticDefinition.PasswordField$$String$$Char$$Int32$$GUIStyle$$GUILayoutOption$Array = function(a0/*String*/, a1/*Char*/, a2/*Int32*/, a3/*GUIStyle*/, a4/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 59, true, a0, a1, a2, a3, jsb_formatParamsArray(4, a4, arguments)); 
}
/* static String  */
_jstype.staticDefinition.PasswordField$$String$$Char$$Int32$$GUILayoutOption$Array = function(a0/*String*/, a1/*Char*/, a2/*Int32*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 60, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static String  */
_jstype.staticDefinition.PasswordField$$String$$Char$$GUIStyle$$GUILayoutOption$Array = function(a0/*String*/, a1/*Char*/, a2/*GUIStyle*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 61, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static String  */
_jstype.staticDefinition.PasswordField$$String$$Char$$GUILayoutOption$Array = function(a0/*String*/, a1/*Char*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 62, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.RepeatButton$$Texture$$GUIStyle$$GUILayoutOption$Array = function(a0/*Texture*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 63, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.RepeatButton$$String$$GUIStyle$$GUILayoutOption$Array = function(a0/*String*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 64, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.RepeatButton$$GUIContent$$GUIStyle$$GUILayoutOption$Array = function(a0/*GUIContent*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 65, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.RepeatButton$$Texture$$GUILayoutOption$Array = function(a0/*Texture*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 66, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.RepeatButton$$String$$GUILayoutOption$Array = function(a0/*String*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 67, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.RepeatButton$$GUIContent$$GUILayoutOption$Array = function(a0/*GUIContent*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 68, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Int32  */
_jstype.staticDefinition.SelectionGrid$$Int32$$String$Array$$Int32$$GUIStyle$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*String[]*/, a2/*Int32*/, a3/*GUIStyle*/, a4/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 69, true, a0, a1, a2, a3, jsb_formatParamsArray(4, a4, arguments)); 
}
/* static Int32  */
_jstype.staticDefinition.SelectionGrid$$Int32$$Texture$Array$$Int32$$GUIStyle$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*Texture[]*/, a2/*Int32*/, a3/*GUIStyle*/, a4/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 70, true, a0, a1, a2, a3, jsb_formatParamsArray(4, a4, arguments)); 
}
/* static Int32  */
_jstype.staticDefinition.SelectionGrid$$Int32$$GUIContent$Array$$Int32$$GUIStyle$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*GUIContent[]*/, a2/*Int32*/, a3/*GUIStyle*/, a4/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 71, true, a0, a1, a2, a3, jsb_formatParamsArray(4, a4, arguments)); 
}
/* static Int32  */
_jstype.staticDefinition.SelectionGrid$$Int32$$String$Array$$Int32$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*String[]*/, a2/*Int32*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 72, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static Int32  */
_jstype.staticDefinition.SelectionGrid$$Int32$$Texture$Array$$Int32$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*Texture[]*/, a2/*Int32*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 73, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static Int32  */
_jstype.staticDefinition.SelectionGrid$$Int32$$GUIContent$Array$$Int32$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*GUIContent[]*/, a2/*Int32*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 74, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static Void  */
_jstype.staticDefinition.Space = function(a0/*Single*/) { 
    
    return CS.Call(4, 148, 75, true, a0); 
}
/* static String  */
_jstype.staticDefinition.TextArea$$String$$Int32$$GUIStyle$$GUILayoutOption$Array = function(a0/*String*/, a1/*Int32*/, a2/*GUIStyle*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 76, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static String  */
_jstype.staticDefinition.TextArea$$String$$Int32$$GUILayoutOption$Array = function(a0/*String*/, a1/*Int32*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 77, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static String  */
_jstype.staticDefinition.TextArea$$String$$GUIStyle$$GUILayoutOption$Array = function(a0/*String*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 78, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static String  */
_jstype.staticDefinition.TextArea$$String$$GUILayoutOption$Array = function(a0/*String*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 79, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static String  */
_jstype.staticDefinition.TextField$$String$$Int32$$GUIStyle$$GUILayoutOption$Array = function(a0/*String*/, a1/*Int32*/, a2/*GUIStyle*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 80, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static String  */
_jstype.staticDefinition.TextField$$String$$GUIStyle$$GUILayoutOption$Array = function(a0/*String*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 81, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static String  */
_jstype.staticDefinition.TextField$$String$$Int32$$GUILayoutOption$Array = function(a0/*String*/, a1/*Int32*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 82, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static String  */
_jstype.staticDefinition.TextField$$String$$GUILayoutOption$Array = function(a0/*String*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 83, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.Toggle$$Boolean$$String$$GUIStyle$$GUILayoutOption$Array = function(a0/*Boolean*/, a1/*String*/, a2/*GUIStyle*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 84, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.Toggle$$Boolean$$Texture$$GUIStyle$$GUILayoutOption$Array = function(a0/*Boolean*/, a1/*Texture*/, a2/*GUIStyle*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 85, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.Toggle$$Boolean$$GUIContent$$GUIStyle$$GUILayoutOption$Array = function(a0/*Boolean*/, a1/*GUIContent*/, a2/*GUIStyle*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 86, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.Toggle$$Boolean$$String$$GUILayoutOption$Array = function(a0/*Boolean*/, a1/*String*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 87, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.Toggle$$Boolean$$Texture$$GUILayoutOption$Array = function(a0/*Boolean*/, a1/*Texture*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 88, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Boolean  */
_jstype.staticDefinition.Toggle$$Boolean$$GUIContent$$GUILayoutOption$Array = function(a0/*Boolean*/, a1/*GUIContent*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 89, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Int32  */
_jstype.staticDefinition.Toolbar$$Int32$$String$Array$$GUIStyle$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*String[]*/, a2/*GUIStyle*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 90, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static Int32  */
_jstype.staticDefinition.Toolbar$$Int32$$Texture$Array$$GUIStyle$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*Texture[]*/, a2/*GUIStyle*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 91, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static Int32  */
_jstype.staticDefinition.Toolbar$$Int32$$GUIContent$Array$$GUIStyle$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*GUIContent[]*/, a2/*GUIStyle*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 92, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static Int32  */
_jstype.staticDefinition.Toolbar$$Int32$$Texture$Array$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*Texture[]*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 93, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Int32  */
_jstype.staticDefinition.Toolbar$$Int32$$String$Array$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*String[]*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 94, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Int32  */
_jstype.staticDefinition.Toolbar$$Int32$$GUIContent$Array$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*GUIContent[]*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 95, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Single  */
_jstype.staticDefinition.VerticalScrollbar$$Single$$Single$$Single$$Single$$GUIStyle$$GUILayoutOption$Array = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*GUIStyle*/, a5/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 96, true, a0, a1, a2, a3, a4, jsb_formatParamsArray(5, a5, arguments)); 
}
/* static Single  */
_jstype.staticDefinition.VerticalScrollbar$$Single$$Single$$Single$$Single$$GUILayoutOption$Array = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 97, true, a0, a1, a2, a3, jsb_formatParamsArray(4, a4, arguments)); 
}
/* static Single  */
_jstype.staticDefinition.VerticalSlider$$Single$$Single$$Single$$GUIStyle$$GUIStyle$$GUILayoutOption$Array = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*GUIStyle*/, a4/*GUIStyle*/, a5/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 98, true, a0, a1, a2, a3, a4, jsb_formatParamsArray(5, a5, arguments)); 
}
/* static Single  */
_jstype.staticDefinition.VerticalSlider$$Single$$Single$$Single$$GUILayoutOption$Array = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 99, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static GUILayoutOption  */
_jstype.staticDefinition.Width = function(a0/*Single*/) { 
    
    return CS.Call(4, 148, 100, true, a0); 
}
/* static Rect  */
_jstype.staticDefinition.Window$$Int32$$Rect$$WindowFunction$$String$$GUIStyle$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*String*/, a4/*GUIStyle*/, a5/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 101, true, a0, a1, a2, a3, a4, jsb_formatParamsArray(5, a5, arguments)); 
}
/* static Rect  */
_jstype.staticDefinition.Window$$Int32$$Rect$$WindowFunction$$Texture$$GUIStyle$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*Texture*/, a4/*GUIStyle*/, a5/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 102, true, a0, a1, a2, a3, a4, jsb_formatParamsArray(5, a5, arguments)); 
}
/* static Rect  */
_jstype.staticDefinition.Window$$Int32$$Rect$$WindowFunction$$GUIContent$$GUIStyle$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*GUIContent*/, a4/*GUIStyle*/, a5/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 103, true, a0, a1, a2, a3, a4, jsb_formatParamsArray(5, a5, arguments)); 
}
/* static Rect  */
_jstype.staticDefinition.Window$$Int32$$Rect$$WindowFunction$$String$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*String*/, a4/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 104, true, a0, a1, a2, a3, jsb_formatParamsArray(4, a4, arguments)); 
}
/* static Rect  */
_jstype.staticDefinition.Window$$Int32$$Rect$$WindowFunction$$Texture$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*Texture*/, a4/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 105, true, a0, a1, a2, a3, jsb_formatParamsArray(4, a4, arguments)); 
}
/* static Rect  */
_jstype.staticDefinition.Window$$Int32$$Rect$$WindowFunction$$GUIContent$$GUILayoutOption$Array = function(a0/*Int32*/, a1/*Rect*/, a2/*WindowFunction*/, a3/*GUIContent*/, a4/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 148, 106, true, a0, a1, a2, a3, jsb_formatParamsArray(4, a4, arguments)); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GUILayoutUtility
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GUILayoutUtility",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 149, 0, true, this); }

// fields

// properties

// methods

/* static Void  */
_jstype.staticDefinition.BeginGroup = function(a0/*String*/) { 
    
    return CS.Call(4, 149, 0, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.EndGroup = function(a0/*String*/) { 
    
    return CS.Call(4, 149, 1, true, a0); 
}
/* static Rect  */
_jstype.staticDefinition.GetAspectRect$$Single$$GUIStyle$$GUILayoutOption$Array = function(a0/*Single*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 149, 2, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Rect  */
_jstype.staticDefinition.GetAspectRect$$Single$$GUIStyle = function(a0/*Single*/, a1/*GUIStyle*/) { 
    
    return CS.Call(4, 149, 3, true, a0, a1); 
}
/* static Rect  */
_jstype.staticDefinition.GetAspectRect$$Single$$GUILayoutOption$Array = function(a0/*Single*/, a1/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 149, 4, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Rect  */
_jstype.staticDefinition.GetAspectRect$$Single = function(a0/*Single*/) { 
    
    return CS.Call(4, 149, 5, true, a0); 
}
/* static Rect  */
_jstype.staticDefinition.GetLastRect = function() { 
    
    return CS.Call(4, 149, 6, true); 
}
/* static Rect  */
_jstype.staticDefinition.GetRect$$Single$$Single$$Single$$Single$$GUIStyle$$GUILayoutOption$Array = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*GUIStyle*/, a5/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 149, 7, true, a0, a1, a2, a3, a4, jsb_formatParamsArray(5, a5, arguments)); 
}
/* static Rect  */
_jstype.staticDefinition.GetRect$$Single$$Single$$Single$$Single$$GUIStyle = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*GUIStyle*/) { 
    
    return CS.Call(4, 149, 8, true, a0, a1, a2, a3, a4); 
}
/* static Rect  */
_jstype.staticDefinition.GetRect$$Single$$Single$$Single$$Single$$GUILayoutOption$Array = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 149, 9, true, a0, a1, a2, a3, jsb_formatParamsArray(4, a4, arguments)); 
}
/* static Rect  */
_jstype.staticDefinition.GetRect$$Single$$Single$$GUIStyle$$GUILayoutOption$Array = function(a0/*Single*/, a1/*Single*/, a2/*GUIStyle*/, a3/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 149, 10, true, a0, a1, a2, jsb_formatParamsArray(3, a3, arguments)); 
}
/* static Rect  */
_jstype.staticDefinition.GetRect$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 149, 11, true, a0, a1, a2, a3); 
}
/* static Rect  */
_jstype.staticDefinition.GetRect$$GUIContent$$GUIStyle$$GUILayoutOption$Array = function(a0/*GUIContent*/, a1/*GUIStyle*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 149, 12, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Rect  */
_jstype.staticDefinition.GetRect$$Single$$Single$$GUIStyle = function(a0/*Single*/, a1/*Single*/, a2/*GUIStyle*/) { 
    
    return CS.Call(4, 149, 13, true, a0, a1, a2); 
}
/* static Rect  */
_jstype.staticDefinition.GetRect$$Single$$Single$$GUILayoutOption$Array = function(a0/*Single*/, a1/*Single*/, a2/*GUILayoutOption[]*/) { 
    
    return CS.Call(4, 149, 14, true, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* static Rect  */
_jstype.staticDefinition.GetRect$$GUIContent$$GUIStyle = function(a0/*GUIContent*/, a1/*GUIStyle*/) { 
    
    return CS.Call(4, 149, 15, true, a0, a1); 
}
/* static Rect  */
_jstype.staticDefinition.GetRect$$Single$$Single = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 149, 16, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GUILayoutOption
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GUILayoutOption",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ExitGUIException
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ExitGUIException",
    baseTypeName: "System.Exception"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 151, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GUIUtility
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GUIUtility",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 152, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_hotControl = function() { return CS.Call(2, 152, 0, true); }
_jstype.staticDefinition.set_hotControl = function(v) { return CS.Call(3, 152, 0, true, v); }

_jstype.staticDefinition.get_keyboardControl = function() { return CS.Call(2, 152, 1, true); }
_jstype.staticDefinition.set_keyboardControl = function(v) { return CS.Call(3, 152, 1, true, v); }

_jstype.staticDefinition.get_hasModalWindow = function() { return CS.Call(2, 152, 2, true); }
_jstype.staticDefinition.set_hasModalWindow = function(v) { return CS.Call(3, 152, 2, true, v); }

// methods

/* static Void  */
_jstype.staticDefinition.ExitGUI = function() { 
    
    return CS.Call(4, 152, 0, true); 
}
/* static Int32  */
_jstype.staticDefinition.GetControlID$$Int32$$FocusType$$Rect = function(a0/*Int32*/, a1/*FocusType*/, a2/*Rect*/) { 
    
    return CS.Call(4, 152, 1, true, a0, a1, a2); 
}
/* static Int32  */
_jstype.staticDefinition.GetControlID$$GUIContent$$FocusType$$Rect = function(a0/*GUIContent*/, a1/*FocusType*/, a2/*Rect*/) { 
    
    return CS.Call(4, 152, 2, true, a0, a1, a2); 
}
/* static Int32  */
_jstype.staticDefinition.GetControlID$$FocusType$$Rect = function(a0/*FocusType*/, a1/*Rect*/) { 
    
    return CS.Call(4, 152, 3, true, a0, a1); 
}
/* static Int32  */
_jstype.staticDefinition.GetControlID$$Int32$$FocusType = function(a0/*Int32*/, a1/*FocusType*/) { 
    
    return CS.Call(4, 152, 4, true, a0, a1); 
}
/* static Int32  */
_jstype.staticDefinition.GetControlID$$GUIContent$$FocusType = function(a0/*GUIContent*/, a1/*FocusType*/) { 
    
    return CS.Call(4, 152, 5, true, a0, a1); 
}
/* static Int32  */
_jstype.staticDefinition.GetControlID$$FocusType = function(a0/*FocusType*/) { 
    
    return CS.Call(4, 152, 6, true, a0); 
}
/* static Object  */
_jstype.staticDefinition.GetStateObject = function(a0/*Type*/, a1/*Int32*/) { 
    
    return CS.Call(4, 152, 7, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.GUIToScreenPoint = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 152, 8, true, a0); 
}
/* static Object  */
_jstype.staticDefinition.QueryStateObject = function(a0/*Type*/, a1/*Int32*/) { 
    
    return CS.Call(4, 152, 9, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.RotateAroundPivot = function(a0/*Single*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 152, 10, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.ScaleAroundPivot = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 152, 11, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.ScreenToGUIPoint = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 152, 12, true, a0); 
}
/* static Rect  */
_jstype.staticDefinition.ScreenToGUIRect = function(a0/*Rect*/) { 
    
    return CS.Call(4, 152, 13, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GUISettings
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GUISettings",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 153, 0, true, this); }

// fields

// properties

_jstype.definition.get_doubleClickSelectsWord = function() { return CS.Call(2, 153, 0, false, this); }
_jstype.definition.set_doubleClickSelectsWord = function(v) { return CS.Call(3, 153, 0, false, this, v); }

_jstype.definition.get_tripleClickSelectsLine = function() { return CS.Call(2, 153, 1, false, this); }
_jstype.definition.set_tripleClickSelectsLine = function(v) { return CS.Call(3, 153, 1, false, this, v); }

_jstype.definition.get_cursorColor = function() { return CS.Call(2, 153, 2, false, this); }
_jstype.definition.set_cursorColor = function(v) { return CS.Call(3, 153, 2, false, this, v); }

_jstype.definition.get_cursorFlashSpeed = function() { return CS.Call(2, 153, 3, false, this); }
_jstype.definition.set_cursorFlashSpeed = function(v) { return CS.Call(3, 153, 3, false, this, v); }

_jstype.definition.get_selectionColor = function() { return CS.Call(2, 153, 4, false, this); }
_jstype.definition.set_selectionColor = function(v) { return CS.Call(3, 153, 4, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GUISkin
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GUISkin",
    baseTypeName: "UnityEngine.ScriptableObject"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 154, 0, true, this); }

// fields

// properties

_jstype.definition.get_font = function() { return CS.Call(2, 154, 0, false, this); }
_jstype.definition.set_font = function(v) { return CS.Call(3, 154, 0, false, this, v); }

_jstype.definition.get_box = function() { return CS.Call(2, 154, 1, false, this); }
_jstype.definition.set_box = function(v) { return CS.Call(3, 154, 1, false, this, v); }

_jstype.definition.get_label = function() { return CS.Call(2, 154, 2, false, this); }
_jstype.definition.set_label = function(v) { return CS.Call(3, 154, 2, false, this, v); }

_jstype.definition.get_textField = function() { return CS.Call(2, 154, 3, false, this); }
_jstype.definition.set_textField = function(v) { return CS.Call(3, 154, 3, false, this, v); }

_jstype.definition.get_textArea = function() { return CS.Call(2, 154, 4, false, this); }
_jstype.definition.set_textArea = function(v) { return CS.Call(3, 154, 4, false, this, v); }

_jstype.definition.get_button = function() { return CS.Call(2, 154, 5, false, this); }
_jstype.definition.set_button = function(v) { return CS.Call(3, 154, 5, false, this, v); }

_jstype.definition.get_toggle = function() { return CS.Call(2, 154, 6, false, this); }
_jstype.definition.set_toggle = function(v) { return CS.Call(3, 154, 6, false, this, v); }

_jstype.definition.get_window = function() { return CS.Call(2, 154, 7, false, this); }
_jstype.definition.set_window = function(v) { return CS.Call(3, 154, 7, false, this, v); }

_jstype.definition.get_horizontalSlider = function() { return CS.Call(2, 154, 8, false, this); }
_jstype.definition.set_horizontalSlider = function(v) { return CS.Call(3, 154, 8, false, this, v); }

_jstype.definition.get_horizontalSliderThumb = function() { return CS.Call(2, 154, 9, false, this); }
_jstype.definition.set_horizontalSliderThumb = function(v) { return CS.Call(3, 154, 9, false, this, v); }

_jstype.definition.get_verticalSlider = function() { return CS.Call(2, 154, 10, false, this); }
_jstype.definition.set_verticalSlider = function(v) { return CS.Call(3, 154, 10, false, this, v); }

_jstype.definition.get_verticalSliderThumb = function() { return CS.Call(2, 154, 11, false, this); }
_jstype.definition.set_verticalSliderThumb = function(v) { return CS.Call(3, 154, 11, false, this, v); }

_jstype.definition.get_horizontalScrollbar = function() { return CS.Call(2, 154, 12, false, this); }
_jstype.definition.set_horizontalScrollbar = function(v) { return CS.Call(3, 154, 12, false, this, v); }

_jstype.definition.get_horizontalScrollbarThumb = function() { return CS.Call(2, 154, 13, false, this); }
_jstype.definition.set_horizontalScrollbarThumb = function(v) { return CS.Call(3, 154, 13, false, this, v); }

_jstype.definition.get_horizontalScrollbarLeftButton = function() { return CS.Call(2, 154, 14, false, this); }
_jstype.definition.set_horizontalScrollbarLeftButton = function(v) { return CS.Call(3, 154, 14, false, this, v); }

_jstype.definition.get_horizontalScrollbarRightButton = function() { return CS.Call(2, 154, 15, false, this); }
_jstype.definition.set_horizontalScrollbarRightButton = function(v) { return CS.Call(3, 154, 15, false, this, v); }

_jstype.definition.get_verticalScrollbar = function() { return CS.Call(2, 154, 16, false, this); }
_jstype.definition.set_verticalScrollbar = function(v) { return CS.Call(3, 154, 16, false, this, v); }

_jstype.definition.get_verticalScrollbarThumb = function() { return CS.Call(2, 154, 17, false, this); }
_jstype.definition.set_verticalScrollbarThumb = function(v) { return CS.Call(3, 154, 17, false, this, v); }

_jstype.definition.get_verticalScrollbarUpButton = function() { return CS.Call(2, 154, 18, false, this); }
_jstype.definition.set_verticalScrollbarUpButton = function(v) { return CS.Call(3, 154, 18, false, this, v); }

_jstype.definition.get_verticalScrollbarDownButton = function() { return CS.Call(2, 154, 19, false, this); }
_jstype.definition.set_verticalScrollbarDownButton = function(v) { return CS.Call(3, 154, 19, false, this, v); }

_jstype.definition.get_scrollView = function() { return CS.Call(2, 154, 20, false, this); }
_jstype.definition.set_scrollView = function(v) { return CS.Call(3, 154, 20, false, this, v); }

_jstype.definition.get_customStyles = function() { return CS.Call(2, 154, 21, false, this); }
_jstype.definition.set_customStyles = function(v) { return CS.Call(3, 154, 21, false, this, v); }

_jstype.definition.get_settings = function() { return CS.Call(2, 154, 22, false, this); }
_jstype.definition.set_settings = function(v) { return CS.Call(3, 154, 22, false, this, v); }

// methods

/* GUIStyle */
_jstype.definition.FindStyle = function(a0/*String*/) { 
    
    return CS.Call(4, 154, 0, false, this, a0); 
}
/* IEnumerator */
_jstype.definition.GetEnumerator = function() { 
    
    return CS.Call(4, 154, 1, false, this); 
}
/* GUIStyle */
_jstype.definition.GetStyle = function(a0/*String*/) { 
    
    return CS.Call(4, 154, 2, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GUIContent
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GUIContent",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 155, 0, true, this); }
_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 155, 1, true, this, a0); }
_jstype.definition.ctor$$Texture = function(a0) { CS.Call(5, 155, 2, true, this, a0); }
_jstype.definition.ctor$$String$$Texture = function(a0, a1) { CS.Call(5, 155, 3, true, this, a0, a1); }
_jstype.definition.ctor$$String$$String = function(a0, a1) { CS.Call(5, 155, 4, true, this, a0, a1); }
_jstype.definition.ctor$$Texture$$String = function(a0, a1) { CS.Call(5, 155, 5, true, this, a0, a1); }
_jstype.definition.ctor$$String$$Texture$$String = function(a0, a1, a2) { CS.Call(5, 155, 6, true, this, a0, a1, a2); }
_jstype.definition.ctor$$GUIContent = function(a0) { CS.Call(5, 155, 7, true, this, a0); }

// fields

_jstype.staticFields.none =  { 
            get: function() { return CS.Call(0, 155, 0, true); }, 
            set: function(v) { return CS.Call(1, 155, 0, true, v); } 
        };

// properties

_jstype.definition.get_text = function() { return CS.Call(2, 155, 0, false, this); }
_jstype.definition.set_text = function(v) { return CS.Call(3, 155, 0, false, this, v); }

_jstype.definition.get_image = function() { return CS.Call(2, 155, 1, false, this); }
_jstype.definition.set_image = function(v) { return CS.Call(3, 155, 1, false, this, v); }

_jstype.definition.get_tooltip = function() { return CS.Call(2, 155, 2, false, this); }
_jstype.definition.set_tooltip = function(v) { return CS.Call(3, 155, 2, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GUIStyleState
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GUIStyleState",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 156, 0, true, this); }

// fields

// properties

_jstype.definition.get_background = function() { return CS.Call(2, 156, 0, false, this); }
_jstype.definition.set_background = function(v) { return CS.Call(3, 156, 0, false, this, v); }

_jstype.definition.get_textColor = function() { return CS.Call(2, 156, 1, false, this); }
_jstype.definition.set_textColor = function(v) { return CS.Call(3, 156, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$RectOffset
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.RectOffset",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 157, 0, true, this); }
_jstype.definition.ctor$$Int32$$Int32$$Int32$$Int32 = function(a0, a1, a2, a3) { CS.Call(5, 157, 1, true, this, a0, a1, a2, a3); }

// fields

// properties

_jstype.definition.get_left = function() { return CS.Call(2, 157, 0, false, this); }
_jstype.definition.set_left = function(v) { return CS.Call(3, 157, 0, false, this, v); }

_jstype.definition.get_right = function() { return CS.Call(2, 157, 1, false, this); }
_jstype.definition.set_right = function(v) { return CS.Call(3, 157, 1, false, this, v); }

_jstype.definition.get_top = function() { return CS.Call(2, 157, 2, false, this); }
_jstype.definition.set_top = function(v) { return CS.Call(3, 157, 2, false, this, v); }

_jstype.definition.get_bottom = function() { return CS.Call(2, 157, 3, false, this); }
_jstype.definition.set_bottom = function(v) { return CS.Call(3, 157, 3, false, this, v); }

_jstype.definition.get_horizontal = function() { return CS.Call(2, 157, 4, false, this); }
_jstype.definition.set_horizontal = function(v) { return CS.Call(3, 157, 4, false, this, v); }

_jstype.definition.get_vertical = function() { return CS.Call(2, 157, 5, false, this); }
_jstype.definition.set_vertical = function(v) { return CS.Call(3, 157, 5, false, this, v); }

// methods

/* Rect */
_jstype.definition.Add = function(a0/*Rect*/) { 
    
    return CS.Call(4, 157, 0, false, this, a0); 
}
/* Rect */
_jstype.definition.Remove = function(a0/*Rect*/) { 
    
    return CS.Call(4, 157, 1, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 157, 2, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GUIStyle
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.GUIStyle",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 158, 0, true, this); }
_jstype.definition.ctor$$GUIStyle = function(a0) { CS.Call(5, 158, 1, true, this, a0); }

// fields

// properties

_jstype.definition.get_name = function() { return CS.Call(2, 158, 0, false, this); }
_jstype.definition.set_name = function(v) { return CS.Call(3, 158, 0, false, this, v); }

_jstype.definition.get_normal = function() { return CS.Call(2, 158, 1, false, this); }
_jstype.definition.set_normal = function(v) { return CS.Call(3, 158, 1, false, this, v); }

_jstype.definition.get_hover = function() { return CS.Call(2, 158, 2, false, this); }
_jstype.definition.set_hover = function(v) { return CS.Call(3, 158, 2, false, this, v); }

_jstype.definition.get_active = function() { return CS.Call(2, 158, 3, false, this); }
_jstype.definition.set_active = function(v) { return CS.Call(3, 158, 3, false, this, v); }

_jstype.definition.get_onNormal = function() { return CS.Call(2, 158, 4, false, this); }
_jstype.definition.set_onNormal = function(v) { return CS.Call(3, 158, 4, false, this, v); }

_jstype.definition.get_onHover = function() { return CS.Call(2, 158, 5, false, this); }
_jstype.definition.set_onHover = function(v) { return CS.Call(3, 158, 5, false, this, v); }

_jstype.definition.get_onActive = function() { return CS.Call(2, 158, 6, false, this); }
_jstype.definition.set_onActive = function(v) { return CS.Call(3, 158, 6, false, this, v); }

_jstype.definition.get_focused = function() { return CS.Call(2, 158, 7, false, this); }
_jstype.definition.set_focused = function(v) { return CS.Call(3, 158, 7, false, this, v); }

_jstype.definition.get_onFocused = function() { return CS.Call(2, 158, 8, false, this); }
_jstype.definition.set_onFocused = function(v) { return CS.Call(3, 158, 8, false, this, v); }

_jstype.definition.get_border = function() { return CS.Call(2, 158, 9, false, this); }
_jstype.definition.set_border = function(v) { return CS.Call(3, 158, 9, false, this, v); }

_jstype.definition.get_margin = function() { return CS.Call(2, 158, 10, false, this); }
_jstype.definition.set_margin = function(v) { return CS.Call(3, 158, 10, false, this, v); }

_jstype.definition.get_padding = function() { return CS.Call(2, 158, 11, false, this); }
_jstype.definition.set_padding = function(v) { return CS.Call(3, 158, 11, false, this, v); }

_jstype.definition.get_overflow = function() { return CS.Call(2, 158, 12, false, this); }
_jstype.definition.set_overflow = function(v) { return CS.Call(3, 158, 12, false, this, v); }

_jstype.definition.get_imagePosition = function() { return CS.Call(2, 158, 13, false, this); }
_jstype.definition.set_imagePosition = function(v) { return CS.Call(3, 158, 13, false, this, v); }

_jstype.definition.get_alignment = function() { return CS.Call(2, 158, 14, false, this); }
_jstype.definition.set_alignment = function(v) { return CS.Call(3, 158, 14, false, this, v); }

_jstype.definition.get_wordWrap = function() { return CS.Call(2, 158, 15, false, this); }
_jstype.definition.set_wordWrap = function(v) { return CS.Call(3, 158, 15, false, this, v); }

_jstype.definition.get_clipping = function() { return CS.Call(2, 158, 16, false, this); }
_jstype.definition.set_clipping = function(v) { return CS.Call(3, 158, 16, false, this, v); }

_jstype.definition.get_contentOffset = function() { return CS.Call(2, 158, 17, false, this); }
_jstype.definition.set_contentOffset = function(v) { return CS.Call(3, 158, 17, false, this, v); }

_jstype.definition.get_fixedWidth = function() { return CS.Call(2, 158, 18, false, this); }
_jstype.definition.set_fixedWidth = function(v) { return CS.Call(3, 158, 18, false, this, v); }

_jstype.definition.get_fixedHeight = function() { return CS.Call(2, 158, 19, false, this); }
_jstype.definition.set_fixedHeight = function(v) { return CS.Call(3, 158, 19, false, this, v); }

_jstype.definition.get_stretchWidth = function() { return CS.Call(2, 158, 20, false, this); }
_jstype.definition.set_stretchWidth = function(v) { return CS.Call(3, 158, 20, false, this, v); }

_jstype.definition.get_stretchHeight = function() { return CS.Call(2, 158, 21, false, this); }
_jstype.definition.set_stretchHeight = function(v) { return CS.Call(3, 158, 21, false, this, v); }

_jstype.definition.get_font = function() { return CS.Call(2, 158, 22, false, this); }
_jstype.definition.set_font = function(v) { return CS.Call(3, 158, 22, false, this, v); }

_jstype.definition.get_fontSize = function() { return CS.Call(2, 158, 23, false, this); }
_jstype.definition.set_fontSize = function(v) { return CS.Call(3, 158, 23, false, this, v); }

_jstype.definition.get_fontStyle = function() { return CS.Call(2, 158, 24, false, this); }
_jstype.definition.set_fontStyle = function(v) { return CS.Call(3, 158, 24, false, this, v); }

_jstype.definition.get_richText = function() { return CS.Call(2, 158, 25, false, this); }
_jstype.definition.set_richText = function(v) { return CS.Call(3, 158, 25, false, this, v); }

_jstype.definition.get_lineHeight = function() { return CS.Call(2, 158, 26, false, this); }
_jstype.definition.set_lineHeight = function(v) { return CS.Call(3, 158, 26, false, this, v); }

_jstype.staticDefinition.get_none = function() { return CS.Call(2, 158, 27, true); }
_jstype.staticDefinition.set_none = function(v) { return CS.Call(3, 158, 27, true, v); }

_jstype.definition.get_isHeightDependantOnWidth = function() { return CS.Call(2, 158, 28, false, this); }
_jstype.definition.set_isHeightDependantOnWidth = function(v) { return CS.Call(3, 158, 28, false, this, v); }

// methods

/* Single */
_jstype.definition.CalcHeight = function(a0/*GUIContent*/, a1/*Single*/) { 
    
    return CS.Call(4, 158, 0, false, this, a0, a1); 
}
/* Void */
_jstype.definition.CalcMinMaxWidth = function(a0/*GUIContent*/, a1/*Single&*/, a2/*Single&*/) { 
    
    return CS.Call(4, 158, 1, false, this, a0, a1, a2); 
}
/* Vector2 */
_jstype.definition.CalcScreenSize = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 158, 2, false, this, a0); 
}
/* Vector2 */
_jstype.definition.CalcSize = function(a0/*GUIContent*/) { 
    
    return CS.Call(4, 158, 3, false, this, a0); 
}
/* Void */
_jstype.definition.Draw$$Rect$$String$$Boolean$$Boolean$$Boolean$$Boolean = function(a0/*Rect*/, a1/*String*/, a2/*Boolean*/, a3/*Boolean*/, a4/*Boolean*/, a5/*Boolean*/) { 
    
    return CS.Call(4, 158, 4, false, this, a0, a1, a2, a3, a4, a5); 
}
/* Void */
_jstype.definition.Draw$$Rect$$Texture$$Boolean$$Boolean$$Boolean$$Boolean = function(a0/*Rect*/, a1/*Texture*/, a2/*Boolean*/, a3/*Boolean*/, a4/*Boolean*/, a5/*Boolean*/) { 
    
    return CS.Call(4, 158, 5, false, this, a0, a1, a2, a3, a4, a5); 
}
/* Void */
_jstype.definition.Draw$$Rect$$GUIContent$$Boolean$$Boolean$$Boolean$$Boolean = function(a0/*Rect*/, a1/*GUIContent*/, a2/*Boolean*/, a3/*Boolean*/, a4/*Boolean*/, a5/*Boolean*/) { 
    
    return CS.Call(4, 158, 6, false, this, a0, a1, a2, a3, a4, a5); 
}
/* Void */
_jstype.definition.Draw$$Rect$$Boolean$$Boolean$$Boolean$$Boolean = function(a0/*Rect*/, a1/*Boolean*/, a2/*Boolean*/, a3/*Boolean*/, a4/*Boolean*/) { 
    
    return CS.Call(4, 158, 7, false, this, a0, a1, a2, a3, a4); 
}
/* Void */
_jstype.definition.Draw$$Rect$$GUIContent$$Int32$$Boolean = function(a0/*Rect*/, a1/*GUIContent*/, a2/*Int32*/, a3/*Boolean*/) { 
    
    return CS.Call(4, 158, 8, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.Draw$$Rect$$GUIContent$$Int32 = function(a0/*Rect*/, a1/*GUIContent*/, a2/*Int32*/) { 
    
    return CS.Call(4, 158, 9, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.DrawCursor = function(a0/*Rect*/, a1/*GUIContent*/, a2/*Int32*/, a3/*Int32*/) { 
    
    return CS.Call(4, 158, 10, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.DrawWithTextSelection$$Rect$$GUIContent$$Int32$$Int32$$Int32 = function(a0/*Rect*/, a1/*GUIContent*/, a2/*Int32*/, a3/*Int32*/, a4/*Int32*/) { 
    
    return CS.Call(4, 158, 11, false, this, a0, a1, a2, a3, a4); 
}
/* Vector2 */
_jstype.definition.GetCursorPixelPosition = function(a0/*Rect*/, a1/*GUIContent*/, a2/*Int32*/) { 
    
    return CS.Call(4, 158, 12, false, this, a0, a1, a2); 
}
/* Int32 */
_jstype.definition.GetCursorStringIndex = function(a0/*Rect*/, a1/*GUIContent*/, a2/*Vector2*/) { 
    
    return CS.Call(4, 158, 13, false, this, a0, a1, a2); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 158, 14, false, this); 
}
/* static GUIStyle  */
_jstype.staticDefinition.op_Implicit = function(a0/*String*/) { 
    
    return CS.Call(4, 158, 15, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Event
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Event",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 159, 0, true, this); }
_jstype.definition.ctor$$Event = function(a0) { CS.Call(5, 159, 1, true, this, a0); }

// fields

// properties

_jstype.definition.get_rawType = function() { return CS.Call(2, 159, 0, false, this); }
_jstype.definition.set_rawType = function(v) { return CS.Call(3, 159, 0, false, this, v); }

_jstype.definition.get_type = function() { return CS.Call(2, 159, 1, false, this); }
_jstype.definition.set_type = function(v) { return CS.Call(3, 159, 1, false, this, v); }

_jstype.definition.get_mousePosition = function() { return CS.Call(2, 159, 2, false, this); }
_jstype.definition.set_mousePosition = function(v) { return CS.Call(3, 159, 2, false, this, v); }

_jstype.definition.get_delta = function() { return CS.Call(2, 159, 3, false, this); }
_jstype.definition.set_delta = function(v) { return CS.Call(3, 159, 3, false, this, v); }

_jstype.definition.get_button = function() { return CS.Call(2, 159, 4, false, this); }
_jstype.definition.set_button = function(v) { return CS.Call(3, 159, 4, false, this, v); }

_jstype.definition.get_modifiers = function() { return CS.Call(2, 159, 5, false, this); }
_jstype.definition.set_modifiers = function(v) { return CS.Call(3, 159, 5, false, this, v); }

_jstype.definition.get_pressure = function() { return CS.Call(2, 159, 6, false, this); }
_jstype.definition.set_pressure = function(v) { return CS.Call(3, 159, 6, false, this, v); }

_jstype.definition.get_clickCount = function() { return CS.Call(2, 159, 7, false, this); }
_jstype.definition.set_clickCount = function(v) { return CS.Call(3, 159, 7, false, this, v); }

_jstype.definition.get_character = function() { return CS.Call(2, 159, 8, false, this); }
_jstype.definition.set_character = function(v) { return CS.Call(3, 159, 8, false, this, v); }

_jstype.definition.get_commandName = function() { return CS.Call(2, 159, 9, false, this); }
_jstype.definition.set_commandName = function(v) { return CS.Call(3, 159, 9, false, this, v); }

_jstype.definition.get_keyCode = function() { return CS.Call(2, 159, 10, false, this); }
_jstype.definition.set_keyCode = function(v) { return CS.Call(3, 159, 10, false, this, v); }

_jstype.definition.get_shift = function() { return CS.Call(2, 159, 11, false, this); }
_jstype.definition.set_shift = function(v) { return CS.Call(3, 159, 11, false, this, v); }

_jstype.definition.get_control = function() { return CS.Call(2, 159, 12, false, this); }
_jstype.definition.set_control = function(v) { return CS.Call(3, 159, 12, false, this, v); }

_jstype.definition.get_alt = function() { return CS.Call(2, 159, 13, false, this); }
_jstype.definition.set_alt = function(v) { return CS.Call(3, 159, 13, false, this, v); }

_jstype.definition.get_command = function() { return CS.Call(2, 159, 14, false, this); }
_jstype.definition.set_command = function(v) { return CS.Call(3, 159, 14, false, this, v); }

_jstype.definition.get_capsLock = function() { return CS.Call(2, 159, 15, false, this); }
_jstype.definition.set_capsLock = function(v) { return CS.Call(3, 159, 15, false, this, v); }

_jstype.definition.get_numeric = function() { return CS.Call(2, 159, 16, false, this); }
_jstype.definition.set_numeric = function(v) { return CS.Call(3, 159, 16, false, this, v); }

_jstype.definition.get_functionKey = function() { return CS.Call(2, 159, 17, false, this); }
_jstype.definition.set_functionKey = function(v) { return CS.Call(3, 159, 17, false, this, v); }

_jstype.staticDefinition.get_current = function() { return CS.Call(2, 159, 18, true); }
_jstype.staticDefinition.set_current = function(v) { return CS.Call(3, 159, 18, true, v); }

_jstype.definition.get_isKey = function() { return CS.Call(2, 159, 19, false, this); }
_jstype.definition.set_isKey = function(v) { return CS.Call(3, 159, 19, false, this, v); }

_jstype.definition.get_isMouse = function() { return CS.Call(2, 159, 20, false, this); }
_jstype.definition.set_isMouse = function(v) { return CS.Call(3, 159, 20, false, this, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 159, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 159, 1, false, this); 
}
/* EventType */
_jstype.definition.GetTypeForControl = function(a0/*Int32*/) { 
    
    return CS.Call(4, 159, 2, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 159, 3, false, this); 
}
/* Void */
_jstype.definition.Use = function() { 
    
    return CS.Call(4, 159, 4, false, this); 
}
/* static Int32  */
_jstype.staticDefinition.GetEventCount = function() { 
    
    return CS.Call(4, 159, 5, true); 
}
/* static Event  */
_jstype.staticDefinition.KeyboardEvent = function(a0/*String*/) { 
    
    return CS.Call(4, 159, 6, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.PopEvent = function(a0/*Event*/) { 
    
    return CS.Call(4, 159, 7, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Gizmos
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Gizmos",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 160, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_color = function() { return CS.Call(2, 160, 0, true); }
_jstype.staticDefinition.set_color = function(v) { return CS.Call(3, 160, 0, true, v); }

_jstype.staticDefinition.get_matrix = function() { return CS.Call(2, 160, 1, true); }
_jstype.staticDefinition.set_matrix = function(v) { return CS.Call(3, 160, 1, true, v); }

// methods

/* static Void  */
_jstype.staticDefinition.DrawCube = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 160, 0, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DrawFrustum = function(a0/*Vector3*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 160, 1, true, a0, a1, a2, a3, a4); 
}
/* static Void  */
_jstype.staticDefinition.DrawGUITexture$$Rect$$Texture$$Int32$$Int32$$Int32$$Int32$$Material = function(a0/*Rect*/, a1/*Texture*/, a2/*Int32*/, a3/*Int32*/, a4/*Int32*/, a5/*Int32*/, a6/*Material*/) { 
    
    return CS.Call(4, 160, 2, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static Void  */
_jstype.staticDefinition.DrawGUITexture$$Rect$$Texture$$Int32$$Int32$$Int32$$Int32 = function(a0/*Rect*/, a1/*Texture*/, a2/*Int32*/, a3/*Int32*/, a4/*Int32*/, a5/*Int32*/) { 
    
    return CS.Call(4, 160, 3, true, a0, a1, a2, a3, a4, a5); 
}
/* static Void  */
_jstype.staticDefinition.DrawGUITexture$$Rect$$Texture$$Material = function(a0/*Rect*/, a1/*Texture*/, a2/*Material*/) { 
    
    return CS.Call(4, 160, 4, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.DrawGUITexture$$Rect$$Texture = function(a0/*Rect*/, a1/*Texture*/) { 
    
    return CS.Call(4, 160, 5, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DrawIcon$$Vector3$$String$$Boolean = function(a0/*Vector3*/, a1/*String*/, a2/*Boolean*/) { 
    
    return CS.Call(4, 160, 6, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.DrawIcon$$Vector3$$String = function(a0/*Vector3*/, a1/*String*/) { 
    
    return CS.Call(4, 160, 7, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DrawLine = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 160, 8, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DrawRay$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 160, 9, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DrawRay$$Ray = function(a0/*Ray*/) { 
    
    return CS.Call(4, 160, 10, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.DrawSphere = function(a0/*Vector3*/, a1/*Single*/) { 
    
    return CS.Call(4, 160, 11, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DrawWireCube = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 160, 12, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DrawWireSphere = function(a0/*Vector3*/, a1/*Single*/) { 
    
    return CS.Call(4, 160, 13, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$LightProbeGroup
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.LightProbeGroup",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 161, 0, true, this); }

// fields

// properties

_jstype.definition.get_probePositions = function() { return CS.Call(2, 161, 0, false, this); }
_jstype.definition.set_probePositions = function(v) { return CS.Call(3, 161, 0, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ParticleSystem
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ParticleSystem",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 162, 0, true, this); }

// fields

// properties

_jstype.definition.get_startDelay = function() { return CS.Call(2, 162, 0, false, this); }
_jstype.definition.set_startDelay = function(v) { return CS.Call(3, 162, 0, false, this, v); }

_jstype.definition.get_isPlaying = function() { return CS.Call(2, 162, 1, false, this); }
_jstype.definition.set_isPlaying = function(v) { return CS.Call(3, 162, 1, false, this, v); }

_jstype.definition.get_isStopped = function() { return CS.Call(2, 162, 2, false, this); }
_jstype.definition.set_isStopped = function(v) { return CS.Call(3, 162, 2, false, this, v); }

_jstype.definition.get_isPaused = function() { return CS.Call(2, 162, 3, false, this); }
_jstype.definition.set_isPaused = function(v) { return CS.Call(3, 162, 3, false, this, v); }

_jstype.definition.get_loop = function() { return CS.Call(2, 162, 4, false, this); }
_jstype.definition.set_loop = function(v) { return CS.Call(3, 162, 4, false, this, v); }

_jstype.definition.get_playOnAwake = function() { return CS.Call(2, 162, 5, false, this); }
_jstype.definition.set_playOnAwake = function(v) { return CS.Call(3, 162, 5, false, this, v); }

_jstype.definition.get_time = function() { return CS.Call(2, 162, 6, false, this); }
_jstype.definition.set_time = function(v) { return CS.Call(3, 162, 6, false, this, v); }

_jstype.definition.get_duration = function() { return CS.Call(2, 162, 7, false, this); }
_jstype.definition.set_duration = function(v) { return CS.Call(3, 162, 7, false, this, v); }

_jstype.definition.get_playbackSpeed = function() { return CS.Call(2, 162, 8, false, this); }
_jstype.definition.set_playbackSpeed = function(v) { return CS.Call(3, 162, 8, false, this, v); }

_jstype.definition.get_particleCount = function() { return CS.Call(2, 162, 9, false, this); }
_jstype.definition.set_particleCount = function(v) { return CS.Call(3, 162, 9, false, this, v); }

_jstype.definition.get_safeCollisionEventSize = function() { return CS.Call(2, 162, 10, false, this); }
_jstype.definition.set_safeCollisionEventSize = function(v) { return CS.Call(3, 162, 10, false, this, v); }

_jstype.definition.get_enableEmission = function() { return CS.Call(2, 162, 11, false, this); }
_jstype.definition.set_enableEmission = function(v) { return CS.Call(3, 162, 11, false, this, v); }

_jstype.definition.get_emissionRate = function() { return CS.Call(2, 162, 12, false, this); }
_jstype.definition.set_emissionRate = function(v) { return CS.Call(3, 162, 12, false, this, v); }

_jstype.definition.get_startSpeed = function() { return CS.Call(2, 162, 13, false, this); }
_jstype.definition.set_startSpeed = function(v) { return CS.Call(3, 162, 13, false, this, v); }

_jstype.definition.get_startSize = function() { return CS.Call(2, 162, 14, false, this); }
_jstype.definition.set_startSize = function(v) { return CS.Call(3, 162, 14, false, this, v); }

_jstype.definition.get_startColor = function() { return CS.Call(2, 162, 15, false, this); }
_jstype.definition.set_startColor = function(v) { return CS.Call(3, 162, 15, false, this, v); }

_jstype.definition.get_startRotation = function() { return CS.Call(2, 162, 16, false, this); }
_jstype.definition.set_startRotation = function(v) { return CS.Call(3, 162, 16, false, this, v); }

_jstype.definition.get_startLifetime = function() { return CS.Call(2, 162, 17, false, this); }
_jstype.definition.set_startLifetime = function(v) { return CS.Call(3, 162, 17, false, this, v); }

_jstype.definition.get_gravityModifier = function() { return CS.Call(2, 162, 18, false, this); }
_jstype.definition.set_gravityModifier = function(v) { return CS.Call(3, 162, 18, false, this, v); }

_jstype.definition.get_maxParticles = function() { return CS.Call(2, 162, 19, false, this); }
_jstype.definition.set_maxParticles = function(v) { return CS.Call(3, 162, 19, false, this, v); }

_jstype.definition.get_simulationSpace = function() { return CS.Call(2, 162, 20, false, this); }
_jstype.definition.set_simulationSpace = function(v) { return CS.Call(3, 162, 20, false, this, v); }

_jstype.definition.get_randomSeed = function() { return CS.Call(2, 162, 21, false, this); }
_jstype.definition.set_randomSeed = function(v) { return CS.Call(3, 162, 21, false, this, v); }

// methods

/* Void */
_jstype.definition.Clear$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 162, 0, false, this, a0); 
}
/* Void */
_jstype.definition.Clear = function() { 
    
    return CS.Call(4, 162, 1, false, this); 
}
/* Void */
_jstype.definition.Emit$$Vector3$$Vector3$$Single$$Single$$Color32 = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Single*/, a4/*Color32*/) { 
    
    return CS.Call(4, 162, 2, false, this, a0, a1, a2, a3, a4); 
}
/* Void */
_jstype.definition.Emit$$Particle = function(a0/*Particle*/) { 
    
    return CS.Call(4, 162, 3, false, this, a0); 
}
/* Void */
_jstype.definition.Emit$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 162, 4, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetCollisionEvents = function(a0/*GameObject*/, a1/*CollisionEvent[]*/) { 
    
    return CS.Call(4, 162, 5, false, this, a0, a1); 
}
/* Int32 */
_jstype.definition.GetParticles = function(a0/*Particle[]*/) { 
    
    return CS.Call(4, 162, 6, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsAlive$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 162, 7, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsAlive = function() { 
    
    return CS.Call(4, 162, 8, false, this); 
}
/* Void */
_jstype.definition.Pause$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 162, 9, false, this, a0); 
}
/* Void */
_jstype.definition.Pause = function() { 
    
    return CS.Call(4, 162, 10, false, this); 
}
/* Void */
_jstype.definition.Play$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 162, 11, false, this, a0); 
}
/* Void */
_jstype.definition.Play = function() { 
    
    return CS.Call(4, 162, 12, false, this); 
}
/* Void */
_jstype.definition.SetParticles = function(a0/*Particle[]*/, a1/*Int32*/) { 
    
    return CS.Call(4, 162, 13, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Simulate$$Single$$Boolean$$Boolean = function(a0/*Single*/, a1/*Boolean*/, a2/*Boolean*/) { 
    
    return CS.Call(4, 162, 14, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.Simulate$$Single$$Boolean = function(a0/*Single*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 162, 15, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Simulate$$Single = function(a0/*Single*/) { 
    
    return CS.Call(4, 162, 16, false, this, a0); 
}
/* Void */
_jstype.definition.Stop$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 162, 17, false, this, a0); 
}
/* Void */
_jstype.definition.Stop = function() { 
    
    return CS.Call(4, 162, 18, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ParticleSystemRenderer
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ParticleSystemRenderer",
    baseTypeName: "UnityEngine.Renderer"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 163, 0, true, this); }

// fields

// properties

_jstype.definition.get_renderMode = function() { return CS.Call(2, 163, 0, false, this); }
_jstype.definition.set_renderMode = function(v) { return CS.Call(3, 163, 0, false, this, v); }

_jstype.definition.get_lengthScale = function() { return CS.Call(2, 163, 1, false, this); }
_jstype.definition.set_lengthScale = function(v) { return CS.Call(3, 163, 1, false, this, v); }

_jstype.definition.get_velocityScale = function() { return CS.Call(2, 163, 2, false, this); }
_jstype.definition.set_velocityScale = function(v) { return CS.Call(3, 163, 2, false, this, v); }

_jstype.definition.get_cameraVelocityScale = function() { return CS.Call(2, 163, 3, false, this); }
_jstype.definition.set_cameraVelocityScale = function(v) { return CS.Call(3, 163, 3, false, this, v); }

_jstype.definition.get_maxParticleSize = function() { return CS.Call(2, 163, 4, false, this); }
_jstype.definition.set_maxParticleSize = function(v) { return CS.Call(3, 163, 4, false, this, v); }

_jstype.definition.get_mesh = function() { return CS.Call(2, 163, 5, false, this); }
_jstype.definition.set_mesh = function(v) { return CS.Call(3, 163, 5, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$TextAsset
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.TextAsset",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 164, 0, true, this); }

// fields

// properties

_jstype.definition.get_text = function() { return CS.Call(2, 164, 0, false, this); }
_jstype.definition.set_text = function(v) { return CS.Call(3, 164, 0, false, this, v); }

_jstype.definition.get_bytes = function() { return CS.Call(2, 164, 1, false, this); }
_jstype.definition.set_bytes = function(v) { return CS.Call(3, 164, 1, false, this, v); }

// methods

/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 164, 0, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Shader
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Shader",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 165, 0, true, this); }

// fields

// properties

_jstype.definition.get_isSupported = function() { return CS.Call(2, 165, 0, false, this); }
_jstype.definition.set_isSupported = function(v) { return CS.Call(3, 165, 0, false, this, v); }

_jstype.definition.get_maximumLOD = function() { return CS.Call(2, 165, 1, false, this); }
_jstype.definition.set_maximumLOD = function(v) { return CS.Call(3, 165, 1, false, this, v); }

_jstype.staticDefinition.get_globalMaximumLOD = function() { return CS.Call(2, 165, 2, true); }
_jstype.staticDefinition.set_globalMaximumLOD = function(v) { return CS.Call(3, 165, 2, true, v); }

_jstype.definition.get_renderQueue = function() { return CS.Call(2, 165, 3, false, this); }
_jstype.definition.set_renderQueue = function(v) { return CS.Call(3, 165, 3, false, this, v); }

// methods

/* static Void  */
_jstype.staticDefinition.DisableKeyword = function(a0/*String*/) { 
    
    return CS.Call(4, 165, 0, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.EnableKeyword = function(a0/*String*/) { 
    
    return CS.Call(4, 165, 1, true, a0); 
}
/* static Shader  */
_jstype.staticDefinition.Find = function(a0/*String*/) { 
    
    return CS.Call(4, 165, 2, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.PropertyToID = function(a0/*String*/) { 
    
    return CS.Call(4, 165, 3, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.SetGlobalBuffer = function(a0/*String*/, a1/*ComputeBuffer*/) { 
    
    return CS.Call(4, 165, 4, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetGlobalColor$$String$$Color = function(a0/*String*/, a1/*Color*/) { 
    
    return CS.Call(4, 165, 5, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetGlobalColor$$Int32$$Color = function(a0/*Int32*/, a1/*Color*/) { 
    
    return CS.Call(4, 165, 6, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetGlobalFloat$$Int32$$Single = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 165, 7, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetGlobalFloat$$String$$Single = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 165, 8, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetGlobalInt$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 165, 9, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetGlobalInt$$String$$Int32 = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 165, 10, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetGlobalMatrix$$String$$Matrix4x4 = function(a0/*String*/, a1/*Matrix4x4*/) { 
    
    return CS.Call(4, 165, 11, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetGlobalMatrix$$Int32$$Matrix4x4 = function(a0/*Int32*/, a1/*Matrix4x4*/) { 
    
    return CS.Call(4, 165, 12, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetGlobalTexGenMode = function(a0/*String*/, a1/*TexGenMode*/) { 
    
    return CS.Call(4, 165, 13, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetGlobalTexture$$String$$Texture = function(a0/*String*/, a1/*Texture*/) { 
    
    return CS.Call(4, 165, 14, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetGlobalTexture$$Int32$$Texture = function(a0/*Int32*/, a1/*Texture*/) { 
    
    return CS.Call(4, 165, 15, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetGlobalTextureMatrixName = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 165, 16, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetGlobalVector$$String$$Vector4 = function(a0/*String*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 165, 17, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetGlobalVector$$Int32$$Vector4 = function(a0/*Int32*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 165, 18, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.WarmupAllShaders = function() { 
    
    return CS.Call(4, 165, 19, true); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Material
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Material",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 166, 0, true, this, a0); }
_jstype.definition.ctor$$Shader = function(a0) { CS.Call(5, 166, 1, true, this, a0); }
_jstype.definition.ctor$$Material = function(a0) { CS.Call(5, 166, 2, true, this, a0); }

// fields

// properties

_jstype.definition.get_shader = function() { return CS.Call(2, 166, 0, false, this); }
_jstype.definition.set_shader = function(v) { return CS.Call(3, 166, 0, false, this, v); }

_jstype.definition.get_color = function() { return CS.Call(2, 166, 1, false, this); }
_jstype.definition.set_color = function(v) { return CS.Call(3, 166, 1, false, this, v); }

_jstype.definition.get_mainTexture = function() { return CS.Call(2, 166, 2, false, this); }
_jstype.definition.set_mainTexture = function(v) { return CS.Call(3, 166, 2, false, this, v); }

_jstype.definition.get_mainTextureOffset = function() { return CS.Call(2, 166, 3, false, this); }
_jstype.definition.set_mainTextureOffset = function(v) { return CS.Call(3, 166, 3, false, this, v); }

_jstype.definition.get_mainTextureScale = function() { return CS.Call(2, 166, 4, false, this); }
_jstype.definition.set_mainTextureScale = function(v) { return CS.Call(3, 166, 4, false, this, v); }

_jstype.definition.get_passCount = function() { return CS.Call(2, 166, 5, false, this); }
_jstype.definition.set_passCount = function(v) { return CS.Call(3, 166, 5, false, this, v); }

_jstype.definition.get_renderQueue = function() { return CS.Call(2, 166, 6, false, this); }
_jstype.definition.set_renderQueue = function(v) { return CS.Call(3, 166, 6, false, this, v); }

_jstype.definition.get_shaderKeywords = function() { return CS.Call(2, 166, 7, false, this); }
_jstype.definition.set_shaderKeywords = function(v) { return CS.Call(3, 166, 7, false, this, v); }

// methods

/* Void */
_jstype.definition.CopyPropertiesFromMaterial = function(a0/*Material*/) { 
    
    return CS.Call(4, 166, 0, false, this, a0); 
}
/* Void */
_jstype.definition.DisableKeyword = function(a0/*String*/) { 
    
    return CS.Call(4, 166, 1, false, this, a0); 
}
/* Void */
_jstype.definition.EnableKeyword = function(a0/*String*/) { 
    
    return CS.Call(4, 166, 2, false, this, a0); 
}
/* Color */
_jstype.definition.GetColor$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 166, 3, false, this, a0); 
}
/* Color */
_jstype.definition.GetColor$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 166, 4, false, this, a0); 
}
/* Single */
_jstype.definition.GetFloat$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 166, 5, false, this, a0); 
}
/* Single */
_jstype.definition.GetFloat$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 166, 6, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetInt$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 166, 7, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetInt$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 166, 8, false, this, a0); 
}
/* Matrix4x4 */
_jstype.definition.GetMatrix$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 166, 9, false, this, a0); 
}
/* Matrix4x4 */
_jstype.definition.GetMatrix$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 166, 10, false, this, a0); 
}
/* String */
_jstype.definition.GetTag$$String$$Boolean$$String = function(a0/*String*/, a1/*Boolean*/, a2/*String*/) { 
    
    return CS.Call(4, 166, 11, false, this, a0, a1, a2); 
}
/* String */
_jstype.definition.GetTag$$String$$Boolean = function(a0/*String*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 166, 12, false, this, a0, a1); 
}
/* Texture */
_jstype.definition.GetTexture$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 166, 13, false, this, a0); 
}
/* Texture */
_jstype.definition.GetTexture$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 166, 14, false, this, a0); 
}
/* Vector2 */
_jstype.definition.GetTextureOffset = function(a0/*String*/) { 
    
    return CS.Call(4, 166, 15, false, this, a0); 
}
/* Vector2 */
_jstype.definition.GetTextureScale = function(a0/*String*/) { 
    
    return CS.Call(4, 166, 16, false, this, a0); 
}
/* Vector4 */
_jstype.definition.GetVector$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 166, 17, false, this, a0); 
}
/* Vector4 */
_jstype.definition.GetVector$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 166, 18, false, this, a0); 
}
/* Boolean */
_jstype.definition.HasProperty$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 166, 19, false, this, a0); 
}
/* Boolean */
_jstype.definition.HasProperty$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 166, 20, false, this, a0); 
}
/* Void */
_jstype.definition.Lerp = function(a0/*Material*/, a1/*Material*/, a2/*Single*/) { 
    
    return CS.Call(4, 166, 21, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SetBuffer = function(a0/*String*/, a1/*ComputeBuffer*/) { 
    
    return CS.Call(4, 166, 22, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetColor$$String$$Color = function(a0/*String*/, a1/*Color*/) { 
    
    return CS.Call(4, 166, 23, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetColor$$Int32$$Color = function(a0/*Int32*/, a1/*Color*/) { 
    
    return CS.Call(4, 166, 24, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetFloat$$String$$Single = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 166, 25, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetFloat$$Int32$$Single = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 166, 26, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetInt$$String$$Int32 = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 166, 27, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetInt$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 166, 28, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetMatrix$$Int32$$Matrix4x4 = function(a0/*Int32*/, a1/*Matrix4x4*/) { 
    
    return CS.Call(4, 166, 29, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetMatrix$$String$$Matrix4x4 = function(a0/*String*/, a1/*Matrix4x4*/) { 
    
    return CS.Call(4, 166, 30, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.SetPass = function(a0/*Int32*/) { 
    
    return CS.Call(4, 166, 31, false, this, a0); 
}
/* Void */
_jstype.definition.SetTexture$$Int32$$Texture = function(a0/*Int32*/, a1/*Texture*/) { 
    
    return CS.Call(4, 166, 32, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetTexture$$String$$Texture = function(a0/*String*/, a1/*Texture*/) { 
    
    return CS.Call(4, 166, 33, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetTextureOffset = function(a0/*String*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 166, 34, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetTextureScale = function(a0/*String*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 166, 35, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetVector$$Int32$$Vector4 = function(a0/*Int32*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 166, 36, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetVector$$String$$Vector4 = function(a0/*String*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 166, 37, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ProceduralPropertyDescription
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ProceduralPropertyDescription",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 167, 0, true, this); }

// fields

_jstype.fields.name =  { 
            get: function() { return CS.Call(0, 167, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 167, 0, false, this, v); } 
        };

_jstype.fields.label =  { 
            get: function() { return CS.Call(0, 167, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 167, 1, false, this, v); } 
        };

_jstype.fields.group =  { 
            get: function() { return CS.Call(0, 167, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 167, 2, false, this, v); } 
        };

_jstype.fields.type =  { 
            get: function() { return CS.Call(0, 167, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 167, 3, false, this, v); } 
        };

_jstype.fields.hasRange =  { 
            get: function() { return CS.Call(0, 167, 4, false, this); }, 
            set: function(v) { return CS.Call(1, 167, 4, false, this, v); } 
        };

_jstype.fields.minimum =  { 
            get: function() { return CS.Call(0, 167, 5, false, this); }, 
            set: function(v) { return CS.Call(1, 167, 5, false, this, v); } 
        };

_jstype.fields.maximum =  { 
            get: function() { return CS.Call(0, 167, 6, false, this); }, 
            set: function(v) { return CS.Call(1, 167, 6, false, this, v); } 
        };

_jstype.fields.step =  { 
            get: function() { return CS.Call(0, 167, 7, false, this); }, 
            set: function(v) { return CS.Call(1, 167, 7, false, this, v); } 
        };

_jstype.fields.enumOptions =  { 
            get: function() { return CS.Call(0, 167, 8, false, this); }, 
            set: function(v) { return CS.Call(1, 167, 8, false, this, v); } 
        };

_jstype.fields.componentLabels =  { 
            get: function() { return CS.Call(0, 167, 9, false, this); }, 
            set: function(v) { return CS.Call(1, 167, 9, false, this, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ProceduralMaterial
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ProceduralMaterial",
    baseTypeName: "UnityEngine.Material"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 168, 0, true, this); }

// fields

// properties

_jstype.definition.get_cacheSize = function() { return CS.Call(2, 168, 0, false, this); }
_jstype.definition.set_cacheSize = function(v) { return CS.Call(3, 168, 0, false, this, v); }

_jstype.definition.get_animationUpdateRate = function() { return CS.Call(2, 168, 1, false, this); }
_jstype.definition.set_animationUpdateRate = function(v) { return CS.Call(3, 168, 1, false, this, v); }

_jstype.definition.get_isProcessing = function() { return CS.Call(2, 168, 2, false, this); }
_jstype.definition.set_isProcessing = function(v) { return CS.Call(3, 168, 2, false, this, v); }

_jstype.definition.get_isCachedDataAvailable = function() { return CS.Call(2, 168, 3, false, this); }
_jstype.definition.set_isCachedDataAvailable = function(v) { return CS.Call(3, 168, 3, false, this, v); }

_jstype.definition.get_isLoadTimeGenerated = function() { return CS.Call(2, 168, 4, false, this); }
_jstype.definition.set_isLoadTimeGenerated = function(v) { return CS.Call(3, 168, 4, false, this, v); }

_jstype.definition.get_loadingBehavior = function() { return CS.Call(2, 168, 5, false, this); }
_jstype.definition.set_loadingBehavior = function(v) { return CS.Call(3, 168, 5, false, this, v); }

_jstype.staticDefinition.get_isSupported = function() { return CS.Call(2, 168, 6, true); }
_jstype.staticDefinition.set_isSupported = function(v) { return CS.Call(3, 168, 6, true, v); }

_jstype.staticDefinition.get_substanceProcessorUsage = function() { return CS.Call(2, 168, 7, true); }
_jstype.staticDefinition.set_substanceProcessorUsage = function(v) { return CS.Call(3, 168, 7, true, v); }

_jstype.definition.get_preset = function() { return CS.Call(2, 168, 8, false, this); }
_jstype.definition.set_preset = function(v) { return CS.Call(3, 168, 8, false, this, v); }

_jstype.definition.get_isReadable = function() { return CS.Call(2, 168, 9, false, this); }
_jstype.definition.set_isReadable = function(v) { return CS.Call(3, 168, 9, false, this, v); }

// methods

/* Void */
_jstype.definition.CacheProceduralProperty = function(a0/*String*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 168, 0, false, this, a0, a1); 
}
/* Void */
_jstype.definition.ClearCache = function() { 
    
    return CS.Call(4, 168, 1, false, this); 
}
/* ProceduralTexture */
_jstype.definition.GetGeneratedTexture = function(a0/*String*/) { 
    
    return CS.Call(4, 168, 2, false, this, a0); 
}
/* Texture[] */
_jstype.definition.GetGeneratedTextures = function() { 
    
    return CS.Call(4, 168, 3, false, this); 
}
/* Boolean */
_jstype.definition.GetProceduralBoolean = function(a0/*String*/) { 
    
    return CS.Call(4, 168, 4, false, this, a0); 
}
/* Color */
_jstype.definition.GetProceduralColor = function(a0/*String*/) { 
    
    return CS.Call(4, 168, 5, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetProceduralEnum = function(a0/*String*/) { 
    
    return CS.Call(4, 168, 6, false, this, a0); 
}
/* Single */
_jstype.definition.GetProceduralFloat = function(a0/*String*/) { 
    
    return CS.Call(4, 168, 7, false, this, a0); 
}
/* ProceduralPropertyDescription[] */
_jstype.definition.GetProceduralPropertyDescriptions = function() { 
    
    return CS.Call(4, 168, 8, false, this); 
}
/* Texture2D */
_jstype.definition.GetProceduralTexture = function(a0/*String*/) { 
    
    return CS.Call(4, 168, 9, false, this, a0); 
}
/* Vector4 */
_jstype.definition.GetProceduralVector = function(a0/*String*/) { 
    
    return CS.Call(4, 168, 10, false, this, a0); 
}
/* Boolean */
_jstype.definition.HasProceduralProperty = function(a0/*String*/) { 
    
    return CS.Call(4, 168, 11, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsProceduralPropertyCached = function(a0/*String*/) { 
    
    return CS.Call(4, 168, 12, false, this, a0); 
}
/* Void */
_jstype.definition.RebuildTextures = function() { 
    
    return CS.Call(4, 168, 13, false, this); 
}
/* Void */
_jstype.definition.RebuildTexturesImmediately = function() { 
    
    return CS.Call(4, 168, 14, false, this); 
}
/* Void */
_jstype.definition.SetProceduralBoolean = function(a0/*String*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 168, 15, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetProceduralColor = function(a0/*String*/, a1/*Color*/) { 
    
    return CS.Call(4, 168, 16, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetProceduralEnum = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 168, 17, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetProceduralFloat = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 168, 18, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetProceduralTexture = function(a0/*String*/, a1/*Texture2D*/) { 
    
    return CS.Call(4, 168, 19, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetProceduralVector = function(a0/*String*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 168, 20, false, this, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.StopRebuilds = function() { 
    
    return CS.Call(4, 168, 21, true); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ProceduralTexture
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ProceduralTexture",
    baseTypeName: "UnityEngine.Texture"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 169, 0, true, this); }

// fields

// properties

_jstype.definition.get_hasAlpha = function() { return CS.Call(2, 169, 0, false, this); }
_jstype.definition.set_hasAlpha = function(v) { return CS.Call(3, 169, 0, false, this, v); }

_jstype.definition.get_format = function() { return CS.Call(2, 169, 1, false, this); }
_jstype.definition.set_format = function(v) { return CS.Call(3, 169, 1, false, this, v); }

// methods

/* Color32[] */
_jstype.definition.GetPixels32 = function(a0/*Int32*/, a1/*Int32*/, a2/*Int32*/, a3/*Int32*/) { 
    
    return CS.Call(4, 169, 0, false, this, a0, a1, a2, a3); 
}
/* ProceduralOutputType */
_jstype.definition.GetProceduralOutputType = function() { 
    
    return CS.Call(4, 169, 1, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Sprite
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Sprite",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 170, 0, true, this); }

// fields

// properties

_jstype.definition.get_bounds = function() { return CS.Call(2, 170, 0, false, this); }
_jstype.definition.set_bounds = function(v) { return CS.Call(3, 170, 0, false, this, v); }

_jstype.definition.get_rect = function() { return CS.Call(2, 170, 1, false, this); }
_jstype.definition.set_rect = function(v) { return CS.Call(3, 170, 1, false, this, v); }

_jstype.definition.get_pixelsPerUnit = function() { return CS.Call(2, 170, 2, false, this); }
_jstype.definition.set_pixelsPerUnit = function(v) { return CS.Call(3, 170, 2, false, this, v); }

_jstype.definition.get_texture = function() { return CS.Call(2, 170, 3, false, this); }
_jstype.definition.set_texture = function(v) { return CS.Call(3, 170, 3, false, this, v); }

_jstype.definition.get_textureRect = function() { return CS.Call(2, 170, 4, false, this); }
_jstype.definition.set_textureRect = function(v) { return CS.Call(3, 170, 4, false, this, v); }

_jstype.definition.get_textureRectOffset = function() { return CS.Call(2, 170, 5, false, this); }
_jstype.definition.set_textureRectOffset = function(v) { return CS.Call(3, 170, 5, false, this, v); }

_jstype.definition.get_packed = function() { return CS.Call(2, 170, 6, false, this); }
_jstype.definition.set_packed = function(v) { return CS.Call(3, 170, 6, false, this, v); }

_jstype.definition.get_packingMode = function() { return CS.Call(2, 170, 7, false, this); }
_jstype.definition.set_packingMode = function(v) { return CS.Call(3, 170, 7, false, this, v); }

_jstype.definition.get_packingRotation = function() { return CS.Call(2, 170, 8, false, this); }
_jstype.definition.set_packingRotation = function(v) { return CS.Call(3, 170, 8, false, this, v); }

_jstype.definition.get_border = function() { return CS.Call(2, 170, 9, false, this); }
_jstype.definition.set_border = function(v) { return CS.Call(3, 170, 9, false, this, v); }

// methods

/* static Sprite  */
_jstype.staticDefinition.Create$$Texture2D$$Rect$$Vector2$$Single$$UInt32$$SpriteMeshType$$Vector4 = function(a0/*Texture2D*/, a1/*Rect*/, a2/*Vector2*/, a3/*Single*/, a4/*UInt32*/, a5/*SpriteMeshType*/, a6/*Vector4*/) { 
    
    return CS.Call(4, 170, 0, true, a0, a1, a2, a3, a4, a5, a6); 
}
/* static Sprite  */
_jstype.staticDefinition.Create$$Texture2D$$Rect$$Vector2$$Single$$UInt32$$SpriteMeshType = function(a0/*Texture2D*/, a1/*Rect*/, a2/*Vector2*/, a3/*Single*/, a4/*UInt32*/, a5/*SpriteMeshType*/) { 
    
    return CS.Call(4, 170, 1, true, a0, a1, a2, a3, a4, a5); 
}
/* static Sprite  */
_jstype.staticDefinition.Create$$Texture2D$$Rect$$Vector2$$Single$$UInt32 = function(a0/*Texture2D*/, a1/*Rect*/, a2/*Vector2*/, a3/*Single*/, a4/*UInt32*/) { 
    
    return CS.Call(4, 170, 2, true, a0, a1, a2, a3, a4); 
}
/* static Sprite  */
_jstype.staticDefinition.Create$$Texture2D$$Rect$$Vector2$$Single = function(a0/*Texture2D*/, a1/*Rect*/, a2/*Vector2*/, a3/*Single*/) { 
    
    return CS.Call(4, 170, 3, true, a0, a1, a2, a3); 
}
/* static Sprite  */
_jstype.staticDefinition.Create$$Texture2D$$Rect$$Vector2 = function(a0/*Texture2D*/, a1/*Rect*/, a2/*Vector2*/) { 
    
    return CS.Call(4, 170, 4, true, a0, a1, a2); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$SpriteRenderer
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.SpriteRenderer",
    baseTypeName: "UnityEngine.Renderer"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 171, 0, true, this); }

// fields

// properties

_jstype.definition.get_sprite = function() { return CS.Call(2, 171, 0, false, this); }
_jstype.definition.set_sprite = function(v) { return CS.Call(3, 171, 0, false, this, v); }

_jstype.definition.get_color = function() { return CS.Call(2, 171, 1, false, this); }
_jstype.definition.set_color = function(v) { return CS.Call(3, 171, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Sprites$DataUtility
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Sprites.DataUtility",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 172, 0, true, this); }

// fields

// properties

// methods

/* static Vector4  */
_jstype.staticDefinition.GetInnerUV = function(a0/*Sprite*/) { 
    
    return CS.Call(4, 172, 0, true, a0); 
}
/* static Vector2  */
_jstype.staticDefinition.GetMinSize = function(a0/*Sprite*/) { 
    
    return CS.Call(4, 172, 1, true, a0); 
}
/* static Vector4  */
_jstype.staticDefinition.GetOuterUV = function(a0/*Sprite*/) { 
    
    return CS.Call(4, 172, 2, true, a0); 
}
/* static Vector4  */
_jstype.staticDefinition.GetPadding = function(a0/*Sprite*/) { 
    
    return CS.Call(4, 172, 3, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$WWWForm
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.WWWForm",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 173, 0, true, this); }

// fields

// properties

_jstype.definition.get_headers = function() { return CS.Call(2, 173, 0, false, this); }
_jstype.definition.set_headers = function(v) { return CS.Call(3, 173, 0, false, this, v); }

_jstype.definition.get_data = function() { return CS.Call(2, 173, 1, false, this); }
_jstype.definition.set_data = function(v) { return CS.Call(3, 173, 1, false, this, v); }

// methods

/* Void */
_jstype.definition.AddBinaryData$$String$$Byte$Array$$String$$String = function(a0/*String*/, a1/*Byte[]*/, a2/*String*/, a3/*String*/) { 
    
    return CS.Call(4, 173, 0, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.AddBinaryData$$String$$Byte$Array$$String = function(a0/*String*/, a1/*Byte[]*/, a2/*String*/) { 
    
    return CS.Call(4, 173, 1, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.AddBinaryData$$String$$Byte$Array = function(a0/*String*/, a1/*Byte[]*/) { 
    
    return CS.Call(4, 173, 2, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddField$$String$$String$$Encoding = function(a0/*String*/, a1/*String*/, a2/*Encoding*/) { 
    
    return CS.Call(4, 173, 3, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.AddField$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 173, 4, false, this, a0, a1); 
}
/* Void */
_jstype.definition.AddField$$String$$Int32 = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 173, 5, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Caching
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Caching",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 174, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_spaceFree = function() { return CS.Call(2, 174, 0, true); }
_jstype.staticDefinition.set_spaceFree = function(v) { return CS.Call(3, 174, 0, true, v); }

_jstype.staticDefinition.get_maximumAvailableDiskSpace = function() { return CS.Call(2, 174, 1, true); }
_jstype.staticDefinition.set_maximumAvailableDiskSpace = function(v) { return CS.Call(3, 174, 1, true, v); }

_jstype.staticDefinition.get_spaceOccupied = function() { return CS.Call(2, 174, 2, true); }
_jstype.staticDefinition.set_spaceOccupied = function(v) { return CS.Call(3, 174, 2, true, v); }

_jstype.staticDefinition.get_expirationDelay = function() { return CS.Call(2, 174, 3, true); }
_jstype.staticDefinition.set_expirationDelay = function(v) { return CS.Call(3, 174, 3, true, v); }

_jstype.staticDefinition.get_enabled = function() { return CS.Call(2, 174, 4, true); }
_jstype.staticDefinition.set_enabled = function(v) { return CS.Call(3, 174, 4, true, v); }

_jstype.staticDefinition.get_ready = function() { return CS.Call(2, 174, 5, true); }
_jstype.staticDefinition.set_ready = function(v) { return CS.Call(3, 174, 5, true, v); }

// methods

/* static Boolean  */
_jstype.staticDefinition.Authorize$$String$$String$$Int64$$Int32$$String = function(a0/*String*/, a1/*String*/, a2/*Int64*/, a3/*Int32*/, a4/*String*/) { 
    
    return CS.Call(4, 174, 0, true, a0, a1, a2, a3, a4); 
}
/* static Boolean  */
_jstype.staticDefinition.Authorize$$String$$String$$Int64$$String = function(a0/*String*/, a1/*String*/, a2/*Int64*/, a3/*String*/) { 
    
    return CS.Call(4, 174, 1, true, a0, a1, a2, a3); 
}
/* static Boolean  */
_jstype.staticDefinition.CleanCache = function() { 
    
    return CS.Call(4, 174, 2, true); 
}
/* static Boolean  */
_jstype.staticDefinition.IsVersionCached = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 174, 3, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.MarkAsUsed = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 174, 4, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AsyncOperation
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.AsyncOperation",
    baseTypeName: "UnityEngine.YieldInstruction"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 175, 0, true, this); }

// fields

// properties

_jstype.definition.get_isDone = function() { return CS.Call(2, 175, 0, false, this); }
_jstype.definition.set_isDone = function(v) { return CS.Call(3, 175, 0, false, this, v); }

_jstype.definition.get_progress = function() { return CS.Call(2, 175, 1, false, this); }
_jstype.definition.set_progress = function(v) { return CS.Call(3, 175, 1, false, this, v); }

_jstype.definition.get_priority = function() { return CS.Call(2, 175, 2, false, this); }
_jstype.definition.set_priority = function(v) { return CS.Call(3, 175, 2, false, this, v); }

_jstype.definition.get_allowSceneActivation = function() { return CS.Call(2, 175, 3, false, this); }
_jstype.definition.set_allowSceneActivation = function(v) { return CS.Call(3, 175, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Application
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Application",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 176, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_loadedLevel = function() { return CS.Call(2, 176, 0, true); }
_jstype.staticDefinition.set_loadedLevel = function(v) { return CS.Call(3, 176, 0, true, v); }

_jstype.staticDefinition.get_loadedLevelName = function() { return CS.Call(2, 176, 1, true); }
_jstype.staticDefinition.set_loadedLevelName = function(v) { return CS.Call(3, 176, 1, true, v); }

_jstype.staticDefinition.get_isLoadingLevel = function() { return CS.Call(2, 176, 2, true); }
_jstype.staticDefinition.set_isLoadingLevel = function(v) { return CS.Call(3, 176, 2, true, v); }

_jstype.staticDefinition.get_levelCount = function() { return CS.Call(2, 176, 3, true); }
_jstype.staticDefinition.set_levelCount = function(v) { return CS.Call(3, 176, 3, true, v); }

_jstype.staticDefinition.get_streamedBytes = function() { return CS.Call(2, 176, 4, true); }
_jstype.staticDefinition.set_streamedBytes = function(v) { return CS.Call(3, 176, 4, true, v); }

_jstype.staticDefinition.get_isPlaying = function() { return CS.Call(2, 176, 5, true); }
_jstype.staticDefinition.set_isPlaying = function(v) { return CS.Call(3, 176, 5, true, v); }

_jstype.staticDefinition.get_isEditor = function() { return CS.Call(2, 176, 6, true); }
_jstype.staticDefinition.set_isEditor = function(v) { return CS.Call(3, 176, 6, true, v); }

_jstype.staticDefinition.get_isWebPlayer = function() { return CS.Call(2, 176, 7, true); }
_jstype.staticDefinition.set_isWebPlayer = function(v) { return CS.Call(3, 176, 7, true, v); }

_jstype.staticDefinition.get_platform = function() { return CS.Call(2, 176, 8, true); }
_jstype.staticDefinition.set_platform = function(v) { return CS.Call(3, 176, 8, true, v); }

_jstype.staticDefinition.get_isMobilePlatform = function() { return CS.Call(2, 176, 9, true); }
_jstype.staticDefinition.set_isMobilePlatform = function(v) { return CS.Call(3, 176, 9, true, v); }

_jstype.staticDefinition.get_isConsolePlatform = function() { return CS.Call(2, 176, 10, true); }
_jstype.staticDefinition.set_isConsolePlatform = function(v) { return CS.Call(3, 176, 10, true, v); }

_jstype.staticDefinition.get_runInBackground = function() { return CS.Call(2, 176, 11, true); }
_jstype.staticDefinition.set_runInBackground = function(v) { return CS.Call(3, 176, 11, true, v); }

_jstype.staticDefinition.get_dataPath = function() { return CS.Call(2, 176, 12, true); }
_jstype.staticDefinition.set_dataPath = function(v) { return CS.Call(3, 176, 12, true, v); }

_jstype.staticDefinition.get_streamingAssetsPath = function() { return CS.Call(2, 176, 13, true); }
_jstype.staticDefinition.set_streamingAssetsPath = function(v) { return CS.Call(3, 176, 13, true, v); }

_jstype.staticDefinition.get_persistentDataPath = function() { return CS.Call(2, 176, 14, true); }
_jstype.staticDefinition.set_persistentDataPath = function(v) { return CS.Call(3, 176, 14, true, v); }

_jstype.staticDefinition.get_temporaryCachePath = function() { return CS.Call(2, 176, 15, true); }
_jstype.staticDefinition.set_temporaryCachePath = function(v) { return CS.Call(3, 176, 15, true, v); }

_jstype.staticDefinition.get_srcValue = function() { return CS.Call(2, 176, 16, true); }
_jstype.staticDefinition.set_srcValue = function(v) { return CS.Call(3, 176, 16, true, v); }

_jstype.staticDefinition.get_absoluteURL = function() { return CS.Call(2, 176, 17, true); }
_jstype.staticDefinition.set_absoluteURL = function(v) { return CS.Call(3, 176, 17, true, v); }

_jstype.staticDefinition.get_unityVersion = function() { return CS.Call(2, 176, 18, true); }
_jstype.staticDefinition.set_unityVersion = function(v) { return CS.Call(3, 176, 18, true, v); }

_jstype.staticDefinition.get_webSecurityEnabled = function() { return CS.Call(2, 176, 19, true); }
_jstype.staticDefinition.set_webSecurityEnabled = function(v) { return CS.Call(3, 176, 19, true, v); }

_jstype.staticDefinition.get_webSecurityHostUrl = function() { return CS.Call(2, 176, 20, true); }
_jstype.staticDefinition.set_webSecurityHostUrl = function(v) { return CS.Call(3, 176, 20, true, v); }

_jstype.staticDefinition.get_targetFrameRate = function() { return CS.Call(2, 176, 21, true); }
_jstype.staticDefinition.set_targetFrameRate = function(v) { return CS.Call(3, 176, 21, true, v); }

_jstype.staticDefinition.get_systemLanguage = function() { return CS.Call(2, 176, 22, true); }
_jstype.staticDefinition.set_systemLanguage = function(v) { return CS.Call(3, 176, 22, true, v); }

_jstype.staticDefinition.get_backgroundLoadingPriority = function() { return CS.Call(2, 176, 23, true); }
_jstype.staticDefinition.set_backgroundLoadingPriority = function(v) { return CS.Call(3, 176, 23, true, v); }

_jstype.staticDefinition.get_internetReachability = function() { return CS.Call(2, 176, 24, true); }
_jstype.staticDefinition.set_internetReachability = function(v) { return CS.Call(3, 176, 24, true, v); }

_jstype.staticDefinition.get_genuine = function() { return CS.Call(2, 176, 25, true); }
_jstype.staticDefinition.set_genuine = function(v) { return CS.Call(3, 176, 25, true, v); }

_jstype.staticDefinition.get_genuineCheckAvailable = function() { return CS.Call(2, 176, 26, true); }
_jstype.staticDefinition.set_genuineCheckAvailable = function(v) { return CS.Call(3, 176, 26, true, v); }

// methods

/* static Void  */
_jstype.staticDefinition.CancelQuit = function() { 
    
    return CS.Call(4, 176, 0, true); 
}
/* static Boolean  */
_jstype.staticDefinition.CanStreamedLevelBeLoaded$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 176, 1, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.CanStreamedLevelBeLoaded$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 176, 2, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.CaptureScreenshot$$String$$Int32 = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 176, 3, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.CaptureScreenshot$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 176, 4, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.ExternalCall = function(a0/*String*/, a1/*Object[]*/) { 
    
    return CS.Call(4, 176, 5, true, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* static Single  */
_jstype.staticDefinition.GetStreamProgressForLevel$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 176, 6, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.GetStreamProgressForLevel$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 176, 7, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.HasProLicense = function() { 
    
    return CS.Call(4, 176, 8, true); 
}
/* static Boolean  */
_jstype.staticDefinition.HasUserAuthorization = function(a0/*UserAuthorization*/) { 
    
    return CS.Call(4, 176, 9, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.LoadLevel$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 176, 10, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.LoadLevel$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 176, 11, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.LoadLevelAdditive$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 176, 12, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.LoadLevelAdditive$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 176, 13, true, a0); 
}
/* static AsyncOperation  */
_jstype.staticDefinition.LoadLevelAdditiveAsync$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 176, 14, true, a0); 
}
/* static AsyncOperation  */
_jstype.staticDefinition.LoadLevelAdditiveAsync$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 176, 15, true, a0); 
}
/* static AsyncOperation  */
_jstype.staticDefinition.LoadLevelAsync$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 176, 16, true, a0); 
}
/* static AsyncOperation  */
_jstype.staticDefinition.LoadLevelAsync$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 176, 17, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.OpenURL = function(a0/*String*/) { 
    
    return CS.Call(4, 176, 18, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.Quit = function() { 
    
    return CS.Call(4, 176, 19, true); 
}
/* static Void  */
_jstype.staticDefinition.RegisterLogCallback = function(a0/*LogCallback*/) { 
    
    return CS.Call(4, 176, 20, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.RegisterLogCallbackThreaded = function(a0/*LogCallback*/) { 
    
    return CS.Call(4, 176, 21, true, a0); 
}
/* static AsyncOperation  */
_jstype.staticDefinition.RequestUserAuthorization = function(a0/*UserAuthorization*/) { 
    
    return CS.Call(4, 176, 22, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Behaviour
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Behaviour",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 177, 0, true, this); }

// fields

// properties

_jstype.definition.get_enabled = function() { return CS.Call(2, 177, 0, false, this); }
_jstype.definition.set_enabled = function(v) { return CS.Call(3, 177, 0, false, this, v); }

_jstype.definition.get_isActiveAndEnabled = function() { return CS.Call(2, 177, 1, false, this); }
_jstype.definition.set_isActiveAndEnabled = function(v) { return CS.Call(3, 177, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Camera
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Camera",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 178, 0, true, this); }

// fields

// properties

_jstype.definition.get_fieldOfView = function() { return CS.Call(2, 178, 0, false, this); }
_jstype.definition.set_fieldOfView = function(v) { return CS.Call(3, 178, 0, false, this, v); }

_jstype.definition.get_nearClipPlane = function() { return CS.Call(2, 178, 1, false, this); }
_jstype.definition.set_nearClipPlane = function(v) { return CS.Call(3, 178, 1, false, this, v); }

_jstype.definition.get_farClipPlane = function() { return CS.Call(2, 178, 2, false, this); }
_jstype.definition.set_farClipPlane = function(v) { return CS.Call(3, 178, 2, false, this, v); }

_jstype.definition.get_renderingPath = function() { return CS.Call(2, 178, 3, false, this); }
_jstype.definition.set_renderingPath = function(v) { return CS.Call(3, 178, 3, false, this, v); }

_jstype.definition.get_actualRenderingPath = function() { return CS.Call(2, 178, 4, false, this); }
_jstype.definition.set_actualRenderingPath = function(v) { return CS.Call(3, 178, 4, false, this, v); }

_jstype.definition.get_hdr = function() { return CS.Call(2, 178, 5, false, this); }
_jstype.definition.set_hdr = function(v) { return CS.Call(3, 178, 5, false, this, v); }

_jstype.definition.get_orthographicSize = function() { return CS.Call(2, 178, 6, false, this); }
_jstype.definition.set_orthographicSize = function(v) { return CS.Call(3, 178, 6, false, this, v); }

_jstype.definition.get_orthographic = function() { return CS.Call(2, 178, 7, false, this); }
_jstype.definition.set_orthographic = function(v) { return CS.Call(3, 178, 7, false, this, v); }

_jstype.definition.get_transparencySortMode = function() { return CS.Call(2, 178, 8, false, this); }
_jstype.definition.set_transparencySortMode = function(v) { return CS.Call(3, 178, 8, false, this, v); }

_jstype.definition.get_isOrthoGraphic = function() { return CS.Call(2, 178, 9, false, this); }
_jstype.definition.set_isOrthoGraphic = function(v) { return CS.Call(3, 178, 9, false, this, v); }

_jstype.definition.get_depth = function() { return CS.Call(2, 178, 10, false, this); }
_jstype.definition.set_depth = function(v) { return CS.Call(3, 178, 10, false, this, v); }

_jstype.definition.get_aspect = function() { return CS.Call(2, 178, 11, false, this); }
_jstype.definition.set_aspect = function(v) { return CS.Call(3, 178, 11, false, this, v); }

_jstype.definition.get_cullingMask = function() { return CS.Call(2, 178, 12, false, this); }
_jstype.definition.set_cullingMask = function(v) { return CS.Call(3, 178, 12, false, this, v); }

_jstype.definition.get_eventMask = function() { return CS.Call(2, 178, 13, false, this); }
_jstype.definition.set_eventMask = function(v) { return CS.Call(3, 178, 13, false, this, v); }

_jstype.definition.get_backgroundColor = function() { return CS.Call(2, 178, 14, false, this); }
_jstype.definition.set_backgroundColor = function(v) { return CS.Call(3, 178, 14, false, this, v); }

_jstype.definition.get_rect = function() { return CS.Call(2, 178, 15, false, this); }
_jstype.definition.set_rect = function(v) { return CS.Call(3, 178, 15, false, this, v); }

_jstype.definition.get_pixelRect = function() { return CS.Call(2, 178, 16, false, this); }
_jstype.definition.set_pixelRect = function(v) { return CS.Call(3, 178, 16, false, this, v); }

_jstype.definition.get_targetTexture = function() { return CS.Call(2, 178, 17, false, this); }
_jstype.definition.set_targetTexture = function(v) { return CS.Call(3, 178, 17, false, this, v); }

_jstype.definition.get_pixelWidth = function() { return CS.Call(2, 178, 18, false, this); }
_jstype.definition.set_pixelWidth = function(v) { return CS.Call(3, 178, 18, false, this, v); }

_jstype.definition.get_pixelHeight = function() { return CS.Call(2, 178, 19, false, this); }
_jstype.definition.set_pixelHeight = function(v) { return CS.Call(3, 178, 19, false, this, v); }

_jstype.definition.get_cameraToWorldMatrix = function() { return CS.Call(2, 178, 20, false, this); }
_jstype.definition.set_cameraToWorldMatrix = function(v) { return CS.Call(3, 178, 20, false, this, v); }

_jstype.definition.get_worldToCameraMatrix = function() { return CS.Call(2, 178, 21, false, this); }
_jstype.definition.set_worldToCameraMatrix = function(v) { return CS.Call(3, 178, 21, false, this, v); }

_jstype.definition.get_projectionMatrix = function() { return CS.Call(2, 178, 22, false, this); }
_jstype.definition.set_projectionMatrix = function(v) { return CS.Call(3, 178, 22, false, this, v); }

_jstype.definition.get_velocity = function() { return CS.Call(2, 178, 23, false, this); }
_jstype.definition.set_velocity = function(v) { return CS.Call(3, 178, 23, false, this, v); }

_jstype.definition.get_clearFlags = function() { return CS.Call(2, 178, 24, false, this); }
_jstype.definition.set_clearFlags = function(v) { return CS.Call(3, 178, 24, false, this, v); }

_jstype.definition.get_stereoEnabled = function() { return CS.Call(2, 178, 25, false, this); }
_jstype.definition.set_stereoEnabled = function(v) { return CS.Call(3, 178, 25, false, this, v); }

_jstype.definition.get_stereoSeparation = function() { return CS.Call(2, 178, 26, false, this); }
_jstype.definition.set_stereoSeparation = function(v) { return CS.Call(3, 178, 26, false, this, v); }

_jstype.definition.get_stereoConvergence = function() { return CS.Call(2, 178, 27, false, this); }
_jstype.definition.set_stereoConvergence = function(v) { return CS.Call(3, 178, 27, false, this, v); }

_jstype.staticDefinition.get_main = function() { return CS.Call(2, 178, 28, true); }
_jstype.staticDefinition.set_main = function(v) { return CS.Call(3, 178, 28, true, v); }

_jstype.staticDefinition.get_current = function() { return CS.Call(2, 178, 29, true); }
_jstype.staticDefinition.set_current = function(v) { return CS.Call(3, 178, 29, true, v); }

_jstype.staticDefinition.get_allCameras = function() { return CS.Call(2, 178, 30, true); }
_jstype.staticDefinition.set_allCameras = function(v) { return CS.Call(3, 178, 30, true, v); }

_jstype.staticDefinition.get_allCamerasCount = function() { return CS.Call(2, 178, 31, true); }
_jstype.staticDefinition.set_allCamerasCount = function(v) { return CS.Call(3, 178, 31, true, v); }

_jstype.definition.get_useOcclusionCulling = function() { return CS.Call(2, 178, 32, false, this); }
_jstype.definition.set_useOcclusionCulling = function(v) { return CS.Call(3, 178, 32, false, this, v); }

_jstype.definition.get_layerCullDistances = function() { return CS.Call(2, 178, 33, false, this); }
_jstype.definition.set_layerCullDistances = function(v) { return CS.Call(3, 178, 33, false, this, v); }

_jstype.definition.get_layerCullSpherical = function() { return CS.Call(2, 178, 34, false, this); }
_jstype.definition.set_layerCullSpherical = function(v) { return CS.Call(3, 178, 34, false, this, v); }

_jstype.definition.get_depthTextureMode = function() { return CS.Call(2, 178, 35, false, this); }
_jstype.definition.set_depthTextureMode = function(v) { return CS.Call(3, 178, 35, false, this, v); }

_jstype.definition.get_clearStencilAfterLightingPass = function() { return CS.Call(2, 178, 36, false, this); }
_jstype.definition.set_clearStencilAfterLightingPass = function(v) { return CS.Call(3, 178, 36, false, this, v); }

// methods

/* Matrix4x4 */
_jstype.definition.CalculateObliqueMatrix = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 178, 0, false, this, a0); 
}
/* Void */
_jstype.definition.CopyFrom = function(a0/*Camera*/) { 
    
    return CS.Call(4, 178, 1, false, this, a0); 
}
/* Void */
_jstype.definition.Render = function() { 
    
    return CS.Call(4, 178, 2, false, this); 
}
/* Void */
_jstype.definition.RenderDontRestore = function() { 
    
    return CS.Call(4, 178, 3, false, this); 
}
/* Boolean */
_jstype.definition.RenderToCubemap$$Cubemap$$Int32 = function(a0/*Cubemap*/, a1/*Int32*/) { 
    
    return CS.Call(4, 178, 4, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.RenderToCubemap$$RenderTexture$$Int32 = function(a0/*RenderTexture*/, a1/*Int32*/) { 
    
    return CS.Call(4, 178, 5, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.RenderToCubemap$$Cubemap = function(a0/*Cubemap*/) { 
    
    return CS.Call(4, 178, 6, false, this, a0); 
}
/* Boolean */
_jstype.definition.RenderToCubemap$$RenderTexture = function(a0/*RenderTexture*/) { 
    
    return CS.Call(4, 178, 7, false, this, a0); 
}
/* Void */
_jstype.definition.RenderWithShader = function(a0/*Shader*/, a1/*String*/) { 
    
    return CS.Call(4, 178, 8, false, this, a0, a1); 
}
/* Void */
_jstype.definition.ResetAspect = function() { 
    
    return CS.Call(4, 178, 9, false, this); 
}
/* Void */
_jstype.definition.ResetProjectionMatrix = function() { 
    
    return CS.Call(4, 178, 10, false, this); 
}
/* Void */
_jstype.definition.ResetReplacementShader = function() { 
    
    return CS.Call(4, 178, 11, false, this); 
}
/* Void */
_jstype.definition.ResetWorldToCameraMatrix = function() { 
    
    return CS.Call(4, 178, 12, false, this); 
}
/* Ray */
_jstype.definition.ScreenPointToRay = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 178, 13, false, this, a0); 
}
/* Vector3 */
_jstype.definition.ScreenToViewportPoint = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 178, 14, false, this, a0); 
}
/* Vector3 */
_jstype.definition.ScreenToWorldPoint = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 178, 15, false, this, a0); 
}
/* Void */
_jstype.definition.SetReplacementShader = function(a0/*Shader*/, a1/*String*/) { 
    
    return CS.Call(4, 178, 16, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetTargetBuffers$$RenderBuffer$$RenderBuffer = function(a0/*RenderBuffer*/, a1/*RenderBuffer*/) { 
    
    return CS.Call(4, 178, 17, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetTargetBuffers$$RenderBuffer$Array$$RenderBuffer = function(a0/*RenderBuffer[]*/, a1/*RenderBuffer*/) { 
    
    return CS.Call(4, 178, 18, false, this, a0, a1); 
}
/* Ray */
_jstype.definition.ViewportPointToRay = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 178, 19, false, this, a0); 
}
/* Vector3 */
_jstype.definition.ViewportToScreenPoint = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 178, 20, false, this, a0); 
}
/* Vector3 */
_jstype.definition.ViewportToWorldPoint = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 178, 21, false, this, a0); 
}
/* Vector3 */
_jstype.definition.WorldToScreenPoint = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 178, 22, false, this, a0); 
}
/* Vector3 */
_jstype.definition.WorldToViewportPoint = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 178, 23, false, this, a0); 
}
/* static Int32  */
_jstype.staticDefinition.GetAllCameras = function(a0/*Camera[]*/) { 
    
    return CS.Call(4, 178, 24, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.SetupCurrent = function(a0/*Camera*/) { 
    
    return CS.Call(4, 178, 25, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ComputeShader
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ComputeShader",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 179, 0, true, this); }

// fields

// properties

// methods

/* Void */
_jstype.definition.Dispatch = function(a0/*Int32*/, a1/*Int32*/, a2/*Int32*/, a3/*Int32*/) { 
    
    return CS.Call(4, 179, 0, false, this, a0, a1, a2, a3); 
}
/* Int32 */
_jstype.definition.FindKernel = function(a0/*String*/) { 
    
    return CS.Call(4, 179, 1, false, this, a0); 
}
/* Void */
_jstype.definition.SetBuffer = function(a0/*Int32*/, a1/*String*/, a2/*ComputeBuffer*/) { 
    
    return CS.Call(4, 179, 2, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SetFloat = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 179, 3, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetFloats = function(a0/*String*/, a1/*Single[]*/) { 
    
    return CS.Call(4, 179, 4, false, this, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* Void */
_jstype.definition.SetInt = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 179, 5, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetInts = function(a0/*String*/, a1/*Int32[]*/) { 
    
    return CS.Call(4, 179, 6, false, this, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* Void */
_jstype.definition.SetTexture = function(a0/*Int32*/, a1/*String*/, a2/*Texture*/) { 
    
    return CS.Call(4, 179, 7, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SetVector = function(a0/*String*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 179, 8, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ComputeBuffer
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.ComputeBuffer",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor$$Int32$$Int32 = function(a0, a1) { CS.Call(5, 180, 0, true, this, a0, a1); }
_jstype.definition.ctor$$Int32$$Int32$$ComputeBufferType = function(a0, a1, a2) { CS.Call(5, 180, 1, true, this, a0, a1, a2); }

// fields

// properties

_jstype.definition.get_count = function() { return CS.Call(2, 180, 0, false, this); }
_jstype.definition.set_count = function(v) { return CS.Call(3, 180, 0, false, this, v); }

_jstype.definition.get_stride = function() { return CS.Call(2, 180, 1, false, this); }
_jstype.definition.set_stride = function(v) { return CS.Call(3, 180, 1, false, this, v); }

// methods

/* Void */
_jstype.definition.Dispose = function() { 
    
    return CS.Call(4, 180, 0, false, this); 
}
/* Void */
_jstype.definition.GetData = function(a0/*Array*/) { 
    
    return CS.Call(4, 180, 1, false, this, a0); 
}
/* Void */
_jstype.definition.Release = function() { 
    
    return CS.Call(4, 180, 2, false, this); 
}
/* Void */
_jstype.definition.SetData = function(a0/*Array*/) { 
    
    return CS.Call(4, 180, 3, false, this, a0); 
}
/* static Void  */
_jstype.staticDefinition.CopyCount = function(a0/*ComputeBuffer*/, a1/*ComputeBuffer*/, a2/*Int32*/) { 
    
    return CS.Call(4, 180, 4, true, a0, a1, a2); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Debug
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Debug",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 181, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_developerConsoleVisible = function() { return CS.Call(2, 181, 0, true); }
_jstype.staticDefinition.set_developerConsoleVisible = function(v) { return CS.Call(3, 181, 0, true, v); }

_jstype.staticDefinition.get_isDebugBuild = function() { return CS.Call(2, 181, 1, true); }
_jstype.staticDefinition.set_isDebugBuild = function(v) { return CS.Call(3, 181, 1, true, v); }

// methods

/* static Void  */
_jstype.staticDefinition.Break = function() { 
    
    return CS.Call(4, 181, 0, true); 
}
/* static Void  */
_jstype.staticDefinition.ClearDeveloperConsole = function() { 
    
    return CS.Call(4, 181, 1, true); 
}
/* static Void  */
_jstype.staticDefinition.DebugBreak = function() { 
    
    return CS.Call(4, 181, 2, true); 
}
/* static Void  */
_jstype.staticDefinition.DrawLine$$Vector3$$Vector3$$Color$$Single$$Boolean = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Color*/, a3/*Single*/, a4/*Boolean*/) { 
    
    return CS.Call(4, 181, 3, true, a0, a1, a2, a3, a4); 
}
/* static Void  */
_jstype.staticDefinition.DrawLine$$Vector3$$Vector3$$Color$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Color*/, a3/*Single*/) { 
    
    return CS.Call(4, 181, 4, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.DrawLine$$Vector3$$Vector3$$Color = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Color*/) { 
    
    return CS.Call(4, 181, 5, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.DrawLine$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 181, 6, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DrawRay$$Vector3$$Vector3$$Color$$Single$$Boolean = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Color*/, a3/*Single*/, a4/*Boolean*/) { 
    
    return CS.Call(4, 181, 7, true, a0, a1, a2, a3, a4); 
}
/* static Void  */
_jstype.staticDefinition.DrawRay$$Vector3$$Vector3$$Color$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Color*/, a3/*Single*/) { 
    
    return CS.Call(4, 181, 8, true, a0, a1, a2, a3); 
}
/* static Void  */
_jstype.staticDefinition.DrawRay$$Vector3$$Vector3$$Color = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Color*/) { 
    
    return CS.Call(4, 181, 9, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.DrawRay$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 181, 10, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.Log$$Object$$Object = function(a0/*Object*/, a1/*Object*/) { 
    
    return CS.Call(4, 181, 11, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.Log$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 181, 12, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.LogError$$Object$$Object = function(a0/*Object*/, a1/*Object*/) { 
    
    return CS.Call(4, 181, 13, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.LogError$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 181, 14, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.LogException$$Exception$$Object = function(a0/*Exception*/, a1/*Object*/) { 
    
    return CS.Call(4, 181, 15, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.LogException$$Exception = function(a0/*Exception*/) { 
    
    return CS.Call(4, 181, 16, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.LogWarning$$Object$$Object = function(a0/*Object*/, a1/*Object*/) { 
    
    return CS.Call(4, 181, 17, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.LogWarning$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 181, 18, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Display
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Display",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

_jstype.staticFields.displays =  { 
            get: function() { return CS.Call(0, 182, 0, true); }, 
            set: function(v) { return CS.Call(1, 182, 0, true, v); } 
        };

// properties

_jstype.definition.get_renderingWidth = function() { return CS.Call(2, 182, 0, false, this); }
_jstype.definition.set_renderingWidth = function(v) { return CS.Call(3, 182, 0, false, this, v); }

_jstype.definition.get_renderingHeight = function() { return CS.Call(2, 182, 1, false, this); }
_jstype.definition.set_renderingHeight = function(v) { return CS.Call(3, 182, 1, false, this, v); }

_jstype.definition.get_systemWidth = function() { return CS.Call(2, 182, 2, false, this); }
_jstype.definition.set_systemWidth = function(v) { return CS.Call(3, 182, 2, false, this, v); }

_jstype.definition.get_systemHeight = function() { return CS.Call(2, 182, 3, false, this); }
_jstype.definition.set_systemHeight = function(v) { return CS.Call(3, 182, 3, false, this, v); }

_jstype.definition.get_colorBuffer = function() { return CS.Call(2, 182, 4, false, this); }
_jstype.definition.set_colorBuffer = function(v) { return CS.Call(3, 182, 4, false, this, v); }

_jstype.definition.get_depthBuffer = function() { return CS.Call(2, 182, 5, false, this); }
_jstype.definition.set_depthBuffer = function(v) { return CS.Call(3, 182, 5, false, this, v); }

_jstype.staticDefinition.get_main = function() { return CS.Call(2, 182, 6, true); }
_jstype.staticDefinition.set_main = function(v) { return CS.Call(3, 182, 6, true, v); }

// methods

/* Void */
_jstype.definition.Activate = function() { 
    
    return CS.Call(4, 182, 0, false, this); 
}
/* Void */
_jstype.definition.SetRenderingResolution = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 182, 1, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$MonoBehaviour
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.MonoBehaviour",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_useGUILayout = function() { return CS.Call(2, 183, 0, false, this); }
_jstype.definition.set_useGUILayout = function(v) { return CS.Call(3, 183, 0, false, this, v); }

// methods

/* Void */
_jstype.definition.CancelInvoke$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 183, 0, false, this, a0); 
}
/* Void */
_jstype.definition.CancelInvoke = function() { 
    
    return CS.Call(4, 183, 1, false, this); 
}
/* Void */
_jstype.definition.Invoke = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 183, 2, false, this, a0, a1); 
}
/* Void */
_jstype.definition.InvokeRepeating = function(a0/*String*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 183, 3, false, this, a0, a1, a2); 
}
/* Boolean */
_jstype.definition.IsInvoking$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 183, 4, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsInvoking = function() { 
    
    return CS.Call(4, 183, 5, false, this); 
}
/* Coroutine */
_jstype.definition.StartCoroutine$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 183, 6, false, this, a0, a1); 
}
/* Coroutine */
_jstype.definition.StartCoroutine$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 183, 7, false, this, a0); 
}
/* Coroutine */
_jstype.definition.StartCoroutine$$IEnumerator = function(a0/*IEnumerator*/) { 
    
    return CS.Call(4, 183, 8, false, this, a0); 
}
/* Coroutine */
_jstype.definition.StartCoroutine_Auto = function(a0/*IEnumerator*/) { 
    
    return CS.Call(4, 183, 9, false, this, a0); 
}
/* Void */
_jstype.definition.StopAllCoroutines = function() { 
    
    return CS.Call(4, 183, 10, false, this); 
}
/* Void */
_jstype.definition.StopCoroutine$$Coroutine = function(a0/*Coroutine*/) { 
    
    return CS.Call(4, 183, 11, false, this, a0); 
}
/* Void */
_jstype.definition.StopCoroutine$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 183, 12, false, this, a0); 
}
/* Void */
_jstype.definition.StopCoroutine$$IEnumerator = function(a0/*IEnumerator*/) { 
    
    return CS.Call(4, 183, 13, false, this, a0); 
}
/* static Void  */
_jstype.staticDefinition.print = function(a0/*Object*/) { 
    
    return CS.Call(4, 183, 14, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Gyroscope
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Gyroscope",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_rotationRate = function() { return CS.Call(2, 184, 0, false, this); }
_jstype.definition.set_rotationRate = function(v) { return CS.Call(3, 184, 0, false, this, v); }

_jstype.definition.get_rotationRateUnbiased = function() { return CS.Call(2, 184, 1, false, this); }
_jstype.definition.set_rotationRateUnbiased = function(v) { return CS.Call(3, 184, 1, false, this, v); }

_jstype.definition.get_gravity = function() { return CS.Call(2, 184, 2, false, this); }
_jstype.definition.set_gravity = function(v) { return CS.Call(3, 184, 2, false, this, v); }

_jstype.definition.get_userAcceleration = function() { return CS.Call(2, 184, 3, false, this); }
_jstype.definition.set_userAcceleration = function(v) { return CS.Call(3, 184, 3, false, this, v); }

_jstype.definition.get_attitude = function() { return CS.Call(2, 184, 4, false, this); }
_jstype.definition.set_attitude = function(v) { return CS.Call(3, 184, 4, false, this, v); }

_jstype.definition.get_enabled = function() { return CS.Call(2, 184, 5, false, this); }
_jstype.definition.set_enabled = function(v) { return CS.Call(3, 184, 5, false, this, v); }

_jstype.definition.get_updateInterval = function() { return CS.Call(2, 184, 6, false, this); }
_jstype.definition.set_updateInterval = function(v) { return CS.Call(3, 184, 6, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$LocationService
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.LocationService",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 185, 0, true, this); }

// fields

// properties

_jstype.definition.get_isEnabledByUser = function() { return CS.Call(2, 185, 0, false, this); }
_jstype.definition.set_isEnabledByUser = function(v) { return CS.Call(3, 185, 0, false, this, v); }

_jstype.definition.get_status = function() { return CS.Call(2, 185, 1, false, this); }
_jstype.definition.set_status = function(v) { return CS.Call(3, 185, 1, false, this, v); }

_jstype.definition.get_lastData = function() { return CS.Call(2, 185, 2, false, this); }
_jstype.definition.set_lastData = function(v) { return CS.Call(3, 185, 2, false, this, v); }

// methods

/* Void */
_jstype.definition.Start$$Single$$Single = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 185, 0, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Start$$Single = function(a0/*Single*/) { 
    
    return CS.Call(4, 185, 1, false, this, a0); 
}
/* Void */
_jstype.definition.Start = function() { 
    
    return CS.Call(4, 185, 2, false, this); 
}
/* Void */
_jstype.definition.Stop = function() { 
    
    return CS.Call(4, 185, 3, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Compass
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Compass",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 186, 0, true, this); }

// fields

// properties

_jstype.definition.get_magneticHeading = function() { return CS.Call(2, 186, 0, false, this); }
_jstype.definition.set_magneticHeading = function(v) { return CS.Call(3, 186, 0, false, this, v); }

_jstype.definition.get_trueHeading = function() { return CS.Call(2, 186, 1, false, this); }
_jstype.definition.set_trueHeading = function(v) { return CS.Call(3, 186, 1, false, this, v); }

_jstype.definition.get_headingAccuracy = function() { return CS.Call(2, 186, 2, false, this); }
_jstype.definition.set_headingAccuracy = function(v) { return CS.Call(3, 186, 2, false, this, v); }

_jstype.definition.get_rawVector = function() { return CS.Call(2, 186, 3, false, this); }
_jstype.definition.set_rawVector = function(v) { return CS.Call(3, 186, 3, false, this, v); }

_jstype.definition.get_timestamp = function() { return CS.Call(2, 186, 4, false, this); }
_jstype.definition.set_timestamp = function(v) { return CS.Call(3, 186, 4, false, this, v); }

_jstype.definition.get_enabled = function() { return CS.Call(2, 186, 5, false, this); }
_jstype.definition.set_enabled = function(v) { return CS.Call(3, 186, 5, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Input
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Input",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 187, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_compensateSensors = function() { return CS.Call(2, 187, 0, true); }
_jstype.staticDefinition.set_compensateSensors = function(v) { return CS.Call(3, 187, 0, true, v); }

_jstype.staticDefinition.get_gyro = function() { return CS.Call(2, 187, 1, true); }
_jstype.staticDefinition.set_gyro = function(v) { return CS.Call(3, 187, 1, true, v); }

_jstype.staticDefinition.get_mousePosition = function() { return CS.Call(2, 187, 2, true); }
_jstype.staticDefinition.set_mousePosition = function(v) { return CS.Call(3, 187, 2, true, v); }

_jstype.staticDefinition.get_mouseScrollDelta = function() { return CS.Call(2, 187, 3, true); }
_jstype.staticDefinition.set_mouseScrollDelta = function(v) { return CS.Call(3, 187, 3, true, v); }

_jstype.staticDefinition.get_mousePresent = function() { return CS.Call(2, 187, 4, true); }
_jstype.staticDefinition.set_mousePresent = function(v) { return CS.Call(3, 187, 4, true, v); }

_jstype.staticDefinition.get_simulateMouseWithTouches = function() { return CS.Call(2, 187, 5, true); }
_jstype.staticDefinition.set_simulateMouseWithTouches = function(v) { return CS.Call(3, 187, 5, true, v); }

_jstype.staticDefinition.get_anyKey = function() { return CS.Call(2, 187, 6, true); }
_jstype.staticDefinition.set_anyKey = function(v) { return CS.Call(3, 187, 6, true, v); }

_jstype.staticDefinition.get_anyKeyDown = function() { return CS.Call(2, 187, 7, true); }
_jstype.staticDefinition.set_anyKeyDown = function(v) { return CS.Call(3, 187, 7, true, v); }

_jstype.staticDefinition.get_inputString = function() { return CS.Call(2, 187, 8, true); }
_jstype.staticDefinition.set_inputString = function(v) { return CS.Call(3, 187, 8, true, v); }

_jstype.staticDefinition.get_acceleration = function() { return CS.Call(2, 187, 9, true); }
_jstype.staticDefinition.set_acceleration = function(v) { return CS.Call(3, 187, 9, true, v); }

_jstype.staticDefinition.get_accelerationEvents = function() { return CS.Call(2, 187, 10, true); }
_jstype.staticDefinition.set_accelerationEvents = function(v) { return CS.Call(3, 187, 10, true, v); }

_jstype.staticDefinition.get_accelerationEventCount = function() { return CS.Call(2, 187, 11, true); }
_jstype.staticDefinition.set_accelerationEventCount = function(v) { return CS.Call(3, 187, 11, true, v); }

_jstype.staticDefinition.get_touches = function() { return CS.Call(2, 187, 12, true); }
_jstype.staticDefinition.set_touches = function(v) { return CS.Call(3, 187, 12, true, v); }

_jstype.staticDefinition.get_touchCount = function() { return CS.Call(2, 187, 13, true); }
_jstype.staticDefinition.set_touchCount = function(v) { return CS.Call(3, 187, 13, true, v); }

_jstype.staticDefinition.get_touchSupported = function() { return CS.Call(2, 187, 14, true); }
_jstype.staticDefinition.set_touchSupported = function(v) { return CS.Call(3, 187, 14, true, v); }

_jstype.staticDefinition.get_multiTouchEnabled = function() { return CS.Call(2, 187, 15, true); }
_jstype.staticDefinition.set_multiTouchEnabled = function(v) { return CS.Call(3, 187, 15, true, v); }

_jstype.staticDefinition.get_location = function() { return CS.Call(2, 187, 16, true); }
_jstype.staticDefinition.set_location = function(v) { return CS.Call(3, 187, 16, true, v); }

_jstype.staticDefinition.get_compass = function() { return CS.Call(2, 187, 17, true); }
_jstype.staticDefinition.set_compass = function(v) { return CS.Call(3, 187, 17, true, v); }

_jstype.staticDefinition.get_deviceOrientation = function() { return CS.Call(2, 187, 18, true); }
_jstype.staticDefinition.set_deviceOrientation = function(v) { return CS.Call(3, 187, 18, true, v); }

_jstype.staticDefinition.get_imeCompositionMode = function() { return CS.Call(2, 187, 19, true); }
_jstype.staticDefinition.set_imeCompositionMode = function(v) { return CS.Call(3, 187, 19, true, v); }

_jstype.staticDefinition.get_compositionString = function() { return CS.Call(2, 187, 20, true); }
_jstype.staticDefinition.set_compositionString = function(v) { return CS.Call(3, 187, 20, true, v); }

_jstype.staticDefinition.get_imeIsSelected = function() { return CS.Call(2, 187, 21, true); }
_jstype.staticDefinition.set_imeIsSelected = function(v) { return CS.Call(3, 187, 21, true, v); }

_jstype.staticDefinition.get_compositionCursorPos = function() { return CS.Call(2, 187, 22, true); }
_jstype.staticDefinition.set_compositionCursorPos = function(v) { return CS.Call(3, 187, 22, true, v); }

// methods

/* static AccelerationEvent  */
_jstype.staticDefinition.GetAccelerationEvent = function(a0/*Int32*/) { 
    
    return CS.Call(4, 187, 0, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.GetAxis = function(a0/*String*/) { 
    
    return CS.Call(4, 187, 1, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.GetAxisRaw = function(a0/*String*/) { 
    
    return CS.Call(4, 187, 2, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetButton = function(a0/*String*/) { 
    
    return CS.Call(4, 187, 3, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetButtonDown = function(a0/*String*/) { 
    
    return CS.Call(4, 187, 4, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetButtonUp = function(a0/*String*/) { 
    
    return CS.Call(4, 187, 5, true, a0); 
}
/* static String[]  */
_jstype.staticDefinition.GetJoystickNames = function() { 
    
    return CS.Call(4, 187, 6, true); 
}
/* static Boolean  */
_jstype.staticDefinition.GetKey$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 187, 7, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetKey$$KeyCode = function(a0/*KeyCode*/) { 
    
    return CS.Call(4, 187, 8, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetKeyDown$$KeyCode = function(a0/*KeyCode*/) { 
    
    return CS.Call(4, 187, 9, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetKeyDown$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 187, 10, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetKeyUp$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 187, 11, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetKeyUp$$KeyCode = function(a0/*KeyCode*/) { 
    
    return CS.Call(4, 187, 12, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetMouseButton = function(a0/*Int32*/) { 
    
    return CS.Call(4, 187, 13, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetMouseButtonDown = function(a0/*Int32*/) { 
    
    return CS.Call(4, 187, 14, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.GetMouseButtonUp = function(a0/*Int32*/) { 
    
    return CS.Call(4, 187, 15, true, a0); 
}
/* static Touch  */
_jstype.staticDefinition.GetTouch = function(a0/*Int32*/) { 
    
    return CS.Call(4, 187, 16, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.ResetInputAxes = function() { 
    
    return CS.Call(4, 187, 17, true); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Object
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Object",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 188, 0, true, this); }

// fields

// properties

_jstype.definition.get_name = function() { return CS.Call(2, 188, 0, false, this); }
_jstype.definition.set_name = function(v) { return CS.Call(3, 188, 0, false, this, v); }

_jstype.definition.get_hideFlags = function() { return CS.Call(2, 188, 1, false, this); }
_jstype.definition.set_hideFlags = function(v) { return CS.Call(3, 188, 1, false, this, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 188, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 188, 1, false, this); 
}
/* Int32 */
_jstype.definition.GetInstanceID = function() { 
    
    return CS.Call(4, 188, 2, false, this); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 188, 3, false, this); 
}
/* static Void  */
_jstype.staticDefinition.Destroy$$Object$$Single = function(a0/*Object*/, a1/*Single*/) { 
    
    return CS.Call(4, 188, 4, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.Destroy$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 188, 5, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.DestroyImmediate$$Object$$Boolean = function(a0/*Object*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 188, 6, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DestroyImmediate$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 188, 7, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.DestroyObject$$Object$$Single = function(a0/*Object*/, a1/*Single*/) { 
    
    return CS.Call(4, 188, 8, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.DestroyObject$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 188, 9, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.DontDestroyOnLoad = function(a0/*Object*/) { 
    
    return CS.Call(4, 188, 10, true, a0); 
}
/* static Object  */
_jstype.staticDefinition.FindObjectOfType$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 188, 11, true, a0); 
}
/* static T  */
_jstype.staticDefinition.FindObjectOfType$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 188, 12, true, native_t0); 
}
/* static Object[]  */
_jstype.staticDefinition.FindObjectsOfType$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 188, 13, true, a0); 
}
/* static T[]  */
_jstype.staticDefinition.FindObjectsOfType$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 188, 14, true, native_t0); 
}
/* static Object  */
_jstype.staticDefinition.Instantiate$$Object$$Vector3$$Quaternion = function(a0/*Object*/, a1/*Vector3*/, a2/*Quaternion*/) { 
    
    return CS.Call(4, 188, 15, true, a0, a1, a2); 
}
/* static Object  */
_jstype.staticDefinition.Instantiate$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 188, 16, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Object*/, a1/*Object*/) { 
    
    return CS.Call(4, 188, 17, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Implicit = function(a0/*Object*/) { 
    
    return CS.Call(4, 188, 18, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Object*/, a1/*Object*/) { 
    
    return CS.Call(4, 188, 19, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Component
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Component",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 189, 0, true, this); }

// fields

// properties

_jstype.definition.get_transform = function() { return CS.Call(2, 189, 0, false, this); }
_jstype.definition.set_transform = function(v) { return CS.Call(3, 189, 0, false, this, v); }

_jstype.definition.get_rigidbody = function() { return CS.Call(2, 189, 1, false, this); }
_jstype.definition.set_rigidbody = function(v) { return CS.Call(3, 189, 1, false, this, v); }

_jstype.definition.get_rigidbody2D = function() { return CS.Call(2, 189, 2, false, this); }
_jstype.definition.set_rigidbody2D = function(v) { return CS.Call(3, 189, 2, false, this, v); }

_jstype.definition.get_camera = function() { return CS.Call(2, 189, 3, false, this); }
_jstype.definition.set_camera = function(v) { return CS.Call(3, 189, 3, false, this, v); }

_jstype.definition.get_light = function() { return CS.Call(2, 189, 4, false, this); }
_jstype.definition.set_light = function(v) { return CS.Call(3, 189, 4, false, this, v); }

_jstype.definition.get_animation = function() { return CS.Call(2, 189, 5, false, this); }
_jstype.definition.set_animation = function(v) { return CS.Call(3, 189, 5, false, this, v); }

_jstype.definition.get_constantForce = function() { return CS.Call(2, 189, 6, false, this); }
_jstype.definition.set_constantForce = function(v) { return CS.Call(3, 189, 6, false, this, v); }

_jstype.definition.get_renderer = function() { return CS.Call(2, 189, 7, false, this); }
_jstype.definition.set_renderer = function(v) { return CS.Call(3, 189, 7, false, this, v); }

_jstype.definition.get_audio = function() { return CS.Call(2, 189, 8, false, this); }
_jstype.definition.set_audio = function(v) { return CS.Call(3, 189, 8, false, this, v); }

_jstype.definition.get_guiText = function() { return CS.Call(2, 189, 9, false, this); }
_jstype.definition.set_guiText = function(v) { return CS.Call(3, 189, 9, false, this, v); }

_jstype.definition.get_guiTexture = function() { return CS.Call(2, 189, 10, false, this); }
_jstype.definition.set_guiTexture = function(v) { return CS.Call(3, 189, 10, false, this, v); }

_jstype.definition.get_collider = function() { return CS.Call(2, 189, 11, false, this); }
_jstype.definition.set_collider = function(v) { return CS.Call(3, 189, 11, false, this, v); }

_jstype.definition.get_collider2D = function() { return CS.Call(2, 189, 12, false, this); }
_jstype.definition.set_collider2D = function(v) { return CS.Call(3, 189, 12, false, this, v); }

_jstype.definition.get_hingeJoint = function() { return CS.Call(2, 189, 13, false, this); }
_jstype.definition.set_hingeJoint = function(v) { return CS.Call(3, 189, 13, false, this, v); }

_jstype.definition.get_particleEmitter = function() { return CS.Call(2, 189, 14, false, this); }
_jstype.definition.set_particleEmitter = function(v) { return CS.Call(3, 189, 14, false, this, v); }

_jstype.definition.get_particleSystem = function() { return CS.Call(2, 189, 15, false, this); }
_jstype.definition.set_particleSystem = function(v) { return CS.Call(3, 189, 15, false, this, v); }

_jstype.definition.get_gameObject = function() { return CS.Call(2, 189, 16, false, this); }
_jstype.definition.set_gameObject = function(v) { return CS.Call(3, 189, 16, false, this, v); }

_jstype.definition.get_tag = function() { return CS.Call(2, 189, 17, false, this); }
_jstype.definition.set_tag = function(v) { return CS.Call(3, 189, 17, false, this, v); }

// methods

/* Void */
_jstype.definition.BroadcastMessage$$String$$Object$$SendMessageOptions = function(a0/*String*/, a1/*Object*/, a2/*SendMessageOptions*/) { 
    
    return CS.Call(4, 189, 0, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.BroadcastMessage$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 189, 1, false, this, a0, a1); 
}
/* Void */
_jstype.definition.BroadcastMessage$$String$$SendMessageOptions = function(a0/*String*/, a1/*SendMessageOptions*/) { 
    
    return CS.Call(4, 189, 2, false, this, a0, a1); 
}
/* Void */
_jstype.definition.BroadcastMessage$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 189, 3, false, this, a0); 
}
/* Boolean */
_jstype.definition.CompareTag = function(a0/*String*/) { 
    
    return CS.Call(4, 189, 4, false, this, a0); 
}
/* Component */
_jstype.definition.GetComponent$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 189, 5, false, this, a0); 
}
/* Component */
_jstype.definition.GetComponent$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 189, 6, false, this, a0); 
}
/* T */
_jstype.definition.GetComponent$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 189, 7, false, this, native_t0); 
}
/* Component */
_jstype.definition.GetComponentInChildren$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 189, 8, false, this, a0); 
}
/* T */
_jstype.definition.GetComponentInChildren$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 189, 9, false, this, native_t0); 
}
/* Component */
_jstype.definition.GetComponentInParent$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 189, 10, false, this, a0); 
}
/* T */
_jstype.definition.GetComponentInParent$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 189, 11, false, this, native_t0); 
}
/* Void */
_jstype.definition.GetComponents$$Type$$List$1$Component = function(a0/*Type*/, a1/*List`1*/) { 
    
    return CS.Call(4, 189, 12, false, this, a0, a1); 
}
/* Component[] */
_jstype.definition.GetComponents$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 189, 13, false, this, a0); 
}
/* Void */
_jstype.definition.GetComponents$1$$List$1 = function(t0, a0/*List`1*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 189, 14, false, this, native_t0, a0); 
}
/* T[] */
_jstype.definition.GetComponents$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 189, 15, false, this, native_t0); 
}
/* Void */
_jstype.definition.GetComponentsInChildren$1$$Boolean$$List$1 = function(t0, a0/*Boolean*/, a1/*List`1*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 189, 16, false, this, native_t0, a0, a1); 
}
/* Component[] */
_jstype.definition.GetComponentsInChildren$$Type$$Boolean = function(a0/*Type*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 189, 17, false, this, a0, a1); 
}
/* Component[] */
_jstype.definition.GetComponentsInChildren$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 189, 18, false, this, a0); 
}
/* T[] */
_jstype.definition.GetComponentsInChildren$1$$Boolean = function(t0, a0/*Boolean*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 189, 19, false, this, native_t0, a0); 
}
/* Void */
_jstype.definition.GetComponentsInChildren$1$$List$1 = function(t0, a0/*List`1*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 189, 20, false, this, native_t0, a0); 
}
/* T[] */
_jstype.definition.GetComponentsInChildren$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 189, 21, false, this, native_t0); 
}
/* Component[] */
_jstype.definition.GetComponentsInParent$$Type$$Boolean = function(a0/*Type*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 189, 22, false, this, a0, a1); 
}
/* Component[] */
_jstype.definition.GetComponentsInParent$$Type = function(a0/*Type*/) { 
    
    return CS.Call(4, 189, 23, false, this, a0); 
}
/* T[] */
_jstype.definition.GetComponentsInParent$1$$Boolean = function(t0, a0/*Boolean*/) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 189, 24, false, this, native_t0, a0); 
}
/* T[] */
_jstype.definition.GetComponentsInParent$1 = function(t0) { 
        var native_t0 = t0.getNativeType();

    return CS.Call(4, 189, 25, false, this, native_t0); 
}
/* Void */
_jstype.definition.SendMessage$$String$$Object$$SendMessageOptions = function(a0/*String*/, a1/*Object*/, a2/*SendMessageOptions*/) { 
    
    return CS.Call(4, 189, 26, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SendMessage$$String$$SendMessageOptions = function(a0/*String*/, a1/*SendMessageOptions*/) { 
    
    return CS.Call(4, 189, 27, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessage$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 189, 28, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessage$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 189, 29, false, this, a0); 
}
/* Void */
_jstype.definition.SendMessageUpwards$$String$$Object$$SendMessageOptions = function(a0/*String*/, a1/*Object*/, a2/*SendMessageOptions*/) { 
    
    return CS.Call(4, 189, 30, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SendMessageUpwards$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 189, 31, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessageUpwards$$String$$SendMessageOptions = function(a0/*String*/, a1/*SendMessageOptions*/) { 
    
    return CS.Call(4, 189, 32, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SendMessageUpwards$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 189, 33, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Light
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Light",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 190, 0, true, this); }

// fields

// properties

_jstype.definition.get_type = function() { return CS.Call(2, 190, 0, false, this); }
_jstype.definition.set_type = function(v) { return CS.Call(3, 190, 0, false, this, v); }

_jstype.definition.get_color = function() { return CS.Call(2, 190, 1, false, this); }
_jstype.definition.set_color = function(v) { return CS.Call(3, 190, 1, false, this, v); }

_jstype.definition.get_intensity = function() { return CS.Call(2, 190, 2, false, this); }
_jstype.definition.set_intensity = function(v) { return CS.Call(3, 190, 2, false, this, v); }

_jstype.definition.get_shadows = function() { return CS.Call(2, 190, 3, false, this); }
_jstype.definition.set_shadows = function(v) { return CS.Call(3, 190, 3, false, this, v); }

_jstype.definition.get_shadowStrength = function() { return CS.Call(2, 190, 4, false, this); }
_jstype.definition.set_shadowStrength = function(v) { return CS.Call(3, 190, 4, false, this, v); }

_jstype.definition.get_shadowBias = function() { return CS.Call(2, 190, 5, false, this); }
_jstype.definition.set_shadowBias = function(v) { return CS.Call(3, 190, 5, false, this, v); }

_jstype.definition.get_shadowSoftness = function() { return CS.Call(2, 190, 6, false, this); }
_jstype.definition.set_shadowSoftness = function(v) { return CS.Call(3, 190, 6, false, this, v); }

_jstype.definition.get_shadowSoftnessFade = function() { return CS.Call(2, 190, 7, false, this); }
_jstype.definition.set_shadowSoftnessFade = function(v) { return CS.Call(3, 190, 7, false, this, v); }

_jstype.definition.get_range = function() { return CS.Call(2, 190, 8, false, this); }
_jstype.definition.set_range = function(v) { return CS.Call(3, 190, 8, false, this, v); }

_jstype.definition.get_spotAngle = function() { return CS.Call(2, 190, 9, false, this); }
_jstype.definition.set_spotAngle = function(v) { return CS.Call(3, 190, 9, false, this, v); }

_jstype.definition.get_cookieSize = function() { return CS.Call(2, 190, 10, false, this); }
_jstype.definition.set_cookieSize = function(v) { return CS.Call(3, 190, 10, false, this, v); }

_jstype.definition.get_cookie = function() { return CS.Call(2, 190, 11, false, this); }
_jstype.definition.set_cookie = function(v) { return CS.Call(3, 190, 11, false, this, v); }

_jstype.definition.get_flare = function() { return CS.Call(2, 190, 12, false, this); }
_jstype.definition.set_flare = function(v) { return CS.Call(3, 190, 12, false, this, v); }

_jstype.definition.get_renderMode = function() { return CS.Call(2, 190, 13, false, this); }
_jstype.definition.set_renderMode = function(v) { return CS.Call(3, 190, 13, false, this, v); }

_jstype.definition.get_alreadyLightmapped = function() { return CS.Call(2, 190, 14, false, this); }
_jstype.definition.set_alreadyLightmapped = function(v) { return CS.Call(3, 190, 14, false, this, v); }

_jstype.definition.get_cullingMask = function() { return CS.Call(2, 190, 15, false, this); }
_jstype.definition.set_cullingMask = function(v) { return CS.Call(3, 190, 15, false, this, v); }

// methods

/* static Light[]  */
_jstype.staticDefinition.GetLights = function(a0/*LightType*/, a1/*Int32*/) { 
    
    return CS.Call(4, 190, 0, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Transform
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Transform",
    baseTypeName: "UnityEngine.Component"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_position = function() { return CS.Call(2, 191, 0, false, this); }
_jstype.definition.set_position = function(v) { return CS.Call(3, 191, 0, false, this, v); }

_jstype.definition.get_localPosition = function() { return CS.Call(2, 191, 1, false, this); }
_jstype.definition.set_localPosition = function(v) { return CS.Call(3, 191, 1, false, this, v); }

_jstype.definition.get_eulerAngles = function() { return CS.Call(2, 191, 2, false, this); }
_jstype.definition.set_eulerAngles = function(v) { return CS.Call(3, 191, 2, false, this, v); }

_jstype.definition.get_localEulerAngles = function() { return CS.Call(2, 191, 3, false, this); }
_jstype.definition.set_localEulerAngles = function(v) { return CS.Call(3, 191, 3, false, this, v); }

_jstype.definition.get_right = function() { return CS.Call(2, 191, 4, false, this); }
_jstype.definition.set_right = function(v) { return CS.Call(3, 191, 4, false, this, v); }

_jstype.definition.get_up = function() { return CS.Call(2, 191, 5, false, this); }
_jstype.definition.set_up = function(v) { return CS.Call(3, 191, 5, false, this, v); }

_jstype.definition.get_forward = function() { return CS.Call(2, 191, 6, false, this); }
_jstype.definition.set_forward = function(v) { return CS.Call(3, 191, 6, false, this, v); }

_jstype.definition.get_rotation = function() { return CS.Call(2, 191, 7, false, this); }
_jstype.definition.set_rotation = function(v) { return CS.Call(3, 191, 7, false, this, v); }

_jstype.definition.get_localRotation = function() { return CS.Call(2, 191, 8, false, this); }
_jstype.definition.set_localRotation = function(v) { return CS.Call(3, 191, 8, false, this, v); }

_jstype.definition.get_localScale = function() { return CS.Call(2, 191, 9, false, this); }
_jstype.definition.set_localScale = function(v) { return CS.Call(3, 191, 9, false, this, v); }

_jstype.definition.get_parent = function() { return CS.Call(2, 191, 10, false, this); }
_jstype.definition.set_parent = function(v) { return CS.Call(3, 191, 10, false, this, v); }

_jstype.definition.get_worldToLocalMatrix = function() { return CS.Call(2, 191, 11, false, this); }
_jstype.definition.set_worldToLocalMatrix = function(v) { return CS.Call(3, 191, 11, false, this, v); }

_jstype.definition.get_localToWorldMatrix = function() { return CS.Call(2, 191, 12, false, this); }
_jstype.definition.set_localToWorldMatrix = function(v) { return CS.Call(3, 191, 12, false, this, v); }

_jstype.definition.get_root = function() { return CS.Call(2, 191, 13, false, this); }
_jstype.definition.set_root = function(v) { return CS.Call(3, 191, 13, false, this, v); }

_jstype.definition.get_childCount = function() { return CS.Call(2, 191, 14, false, this); }
_jstype.definition.set_childCount = function(v) { return CS.Call(3, 191, 14, false, this, v); }

_jstype.definition.get_lossyScale = function() { return CS.Call(2, 191, 15, false, this); }
_jstype.definition.set_lossyScale = function(v) { return CS.Call(3, 191, 15, false, this, v); }

_jstype.definition.get_hasChanged = function() { return CS.Call(2, 191, 16, false, this); }
_jstype.definition.set_hasChanged = function(v) { return CS.Call(3, 191, 16, false, this, v); }

// methods

/* Void */
_jstype.definition.DetachChildren = function() { 
    
    return CS.Call(4, 191, 0, false, this); 
}
/* Transform */
_jstype.definition.Find = function(a0/*String*/) { 
    
    return CS.Call(4, 191, 1, false, this, a0); 
}
/* Transform */
_jstype.definition.FindChild = function(a0/*String*/) { 
    
    return CS.Call(4, 191, 2, false, this, a0); 
}
/* Transform */
_jstype.definition.GetChild = function(a0/*Int32*/) { 
    
    return CS.Call(4, 191, 3, false, this, a0); 
}
/* IEnumerator */
_jstype.definition.GetEnumerator = function() { 
    
    return CS.Call(4, 191, 4, false, this); 
}
/* Int32 */
_jstype.definition.GetSiblingIndex = function() { 
    
    return CS.Call(4, 191, 5, false, this); 
}
/* Vector3 */
_jstype.definition.InverseTransformDirection$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 191, 6, false, this, a0, a1, a2); 
}
/* Vector3 */
_jstype.definition.InverseTransformDirection$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 191, 7, false, this, a0); 
}
/* Vector3 */
_jstype.definition.InverseTransformPoint$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 191, 8, false, this, a0, a1, a2); 
}
/* Vector3 */
_jstype.definition.InverseTransformPoint$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 191, 9, false, this, a0); 
}
/* Vector3 */
_jstype.definition.InverseTransformVector$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 191, 10, false, this, a0, a1, a2); 
}
/* Vector3 */
_jstype.definition.InverseTransformVector$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 191, 11, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsChildOf = function(a0/*Transform*/) { 
    
    return CS.Call(4, 191, 12, false, this, a0); 
}
/* Void */
_jstype.definition.LookAt$$Transform$$Vector3 = function(a0/*Transform*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 191, 13, false, this, a0, a1); 
}
/* Void */
_jstype.definition.LookAt$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 191, 14, false, this, a0, a1); 
}
/* Void */
_jstype.definition.LookAt$$Transform = function(a0/*Transform*/) { 
    
    return CS.Call(4, 191, 15, false, this, a0); 
}
/* Void */
_jstype.definition.LookAt$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 191, 16, false, this, a0); 
}
/* Void */
_jstype.definition.Rotate$$Single$$Single$$Single$$Space = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Space*/) { 
    
    return CS.Call(4, 191, 17, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.Rotate$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 191, 18, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.Rotate$$Vector3$$Single$$Space = function(a0/*Vector3*/, a1/*Single*/, a2/*Space*/) { 
    
    return CS.Call(4, 191, 19, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.Rotate$$Vector3$$Space = function(a0/*Vector3*/, a1/*Space*/) { 
    
    return CS.Call(4, 191, 20, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Rotate$$Vector3$$Single = function(a0/*Vector3*/, a1/*Single*/) { 
    
    return CS.Call(4, 191, 21, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Rotate$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 191, 22, false, this, a0); 
}
/* Void */
_jstype.definition.RotateAround$$Vector3$$Vector3$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 191, 23, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SetAsFirstSibling = function() { 
    
    return CS.Call(4, 191, 24, false, this); 
}
/* Void */
_jstype.definition.SetAsLastSibling = function() { 
    
    return CS.Call(4, 191, 25, false, this); 
}
/* Void */
_jstype.definition.SetParent$$Transform$$Boolean = function(a0/*Transform*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 191, 26, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetParent$$Transform = function(a0/*Transform*/) { 
    
    return CS.Call(4, 191, 27, false, this, a0); 
}
/* Void */
_jstype.definition.SetSiblingIndex = function(a0/*Int32*/) { 
    
    return CS.Call(4, 191, 28, false, this, a0); 
}
/* Vector3 */
_jstype.definition.TransformDirection$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 191, 29, false, this, a0, a1, a2); 
}
/* Vector3 */
_jstype.definition.TransformDirection$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 191, 30, false, this, a0); 
}
/* Vector3 */
_jstype.definition.TransformPoint$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 191, 31, false, this, a0, a1, a2); 
}
/* Vector3 */
_jstype.definition.TransformPoint$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 191, 32, false, this, a0); 
}
/* Vector3 */
_jstype.definition.TransformVector$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 191, 33, false, this, a0, a1, a2); 
}
/* Vector3 */
_jstype.definition.TransformVector$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 191, 34, false, this, a0); 
}
/* Void */
_jstype.definition.Translate$$Single$$Single$$Single$$Space = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Space*/) { 
    
    return CS.Call(4, 191, 35, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.Translate$$Single$$Single$$Single$$Transform = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Transform*/) { 
    
    return CS.Call(4, 191, 36, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.Translate$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 191, 37, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.Translate$$Vector3$$Space = function(a0/*Vector3*/, a1/*Space*/) { 
    
    return CS.Call(4, 191, 38, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Translate$$Vector3$$Transform = function(a0/*Vector3*/, a1/*Transform*/) { 
    
    return CS.Call(4, 191, 39, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Translate$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 191, 40, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Time
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Time",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 192, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_time = function() { return CS.Call(2, 192, 0, true); }
_jstype.staticDefinition.set_time = function(v) { return CS.Call(3, 192, 0, true, v); }

_jstype.staticDefinition.get_timeSinceLevelLoad = function() { return CS.Call(2, 192, 1, true); }
_jstype.staticDefinition.set_timeSinceLevelLoad = function(v) { return CS.Call(3, 192, 1, true, v); }

_jstype.staticDefinition.get_deltaTime = function() { return CS.Call(2, 192, 2, true); }
_jstype.staticDefinition.set_deltaTime = function(v) { return CS.Call(3, 192, 2, true, v); }

_jstype.staticDefinition.get_fixedTime = function() { return CS.Call(2, 192, 3, true); }
_jstype.staticDefinition.set_fixedTime = function(v) { return CS.Call(3, 192, 3, true, v); }

_jstype.staticDefinition.get_unscaledTime = function() { return CS.Call(2, 192, 4, true); }
_jstype.staticDefinition.set_unscaledTime = function(v) { return CS.Call(3, 192, 4, true, v); }

_jstype.staticDefinition.get_unscaledDeltaTime = function() { return CS.Call(2, 192, 5, true); }
_jstype.staticDefinition.set_unscaledDeltaTime = function(v) { return CS.Call(3, 192, 5, true, v); }

_jstype.staticDefinition.get_fixedDeltaTime = function() { return CS.Call(2, 192, 6, true); }
_jstype.staticDefinition.set_fixedDeltaTime = function(v) { return CS.Call(3, 192, 6, true, v); }

_jstype.staticDefinition.get_maximumDeltaTime = function() { return CS.Call(2, 192, 7, true); }
_jstype.staticDefinition.set_maximumDeltaTime = function(v) { return CS.Call(3, 192, 7, true, v); }

_jstype.staticDefinition.get_smoothDeltaTime = function() { return CS.Call(2, 192, 8, true); }
_jstype.staticDefinition.set_smoothDeltaTime = function(v) { return CS.Call(3, 192, 8, true, v); }

_jstype.staticDefinition.get_timeScale = function() { return CS.Call(2, 192, 9, true); }
_jstype.staticDefinition.set_timeScale = function(v) { return CS.Call(3, 192, 9, true, v); }

_jstype.staticDefinition.get_frameCount = function() { return CS.Call(2, 192, 10, true); }
_jstype.staticDefinition.set_frameCount = function(v) { return CS.Call(3, 192, 10, true, v); }

_jstype.staticDefinition.get_renderedFrameCount = function() { return CS.Call(2, 192, 11, true); }
_jstype.staticDefinition.set_renderedFrameCount = function(v) { return CS.Call(3, 192, 11, true, v); }

_jstype.staticDefinition.get_realtimeSinceStartup = function() { return CS.Call(2, 192, 12, true); }
_jstype.staticDefinition.set_realtimeSinceStartup = function(v) { return CS.Call(3, 192, 12, true, v); }

_jstype.staticDefinition.get_captureFramerate = function() { return CS.Call(2, 192, 13, true); }
_jstype.staticDefinition.set_captureFramerate = function(v) { return CS.Call(3, 192, 13, true, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Random
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Random",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 193, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_seed = function() { return CS.Call(2, 193, 0, true); }
_jstype.staticDefinition.set_seed = function(v) { return CS.Call(3, 193, 0, true, v); }

_jstype.staticDefinition.get_value = function() { return CS.Call(2, 193, 1, true); }
_jstype.staticDefinition.set_value = function(v) { return CS.Call(3, 193, 1, true, v); }

_jstype.staticDefinition.get_insideUnitSphere = function() { return CS.Call(2, 193, 2, true); }
_jstype.staticDefinition.set_insideUnitSphere = function(v) { return CS.Call(3, 193, 2, true, v); }

_jstype.staticDefinition.get_insideUnitCircle = function() { return CS.Call(2, 193, 3, true); }
_jstype.staticDefinition.set_insideUnitCircle = function(v) { return CS.Call(3, 193, 3, true, v); }

_jstype.staticDefinition.get_onUnitSphere = function() { return CS.Call(2, 193, 4, true); }
_jstype.staticDefinition.set_onUnitSphere = function(v) { return CS.Call(3, 193, 4, true, v); }

_jstype.staticDefinition.get_rotation = function() { return CS.Call(2, 193, 5, true); }
_jstype.staticDefinition.set_rotation = function(v) { return CS.Call(3, 193, 5, true, v); }

_jstype.staticDefinition.get_rotationUniform = function() { return CS.Call(2, 193, 6, true); }
_jstype.staticDefinition.set_rotationUniform = function(v) { return CS.Call(3, 193, 6, true, v); }

// methods

/* static Int32  */
_jstype.staticDefinition.Range$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 193, 0, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Range$$Single$$Single = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 193, 1, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$YieldInstruction
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.YieldInstruction",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 194, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$PlayerPrefsException
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.PlayerPrefsException",
    baseTypeName: "System.Exception"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function(a0) { CS.Call(5, 195, 0, true, this, a0); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$PlayerPrefs
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.PlayerPrefs",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 196, 0, true, this); }

// fields

// properties

// methods

/* static Void  */
_jstype.staticDefinition.DeleteAll = function() { 
    
    return CS.Call(4, 196, 0, true); 
}
/* static Void  */
_jstype.staticDefinition.DeleteKey = function(a0/*String*/) { 
    
    return CS.Call(4, 196, 1, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.GetFloat$$String$$Single = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 196, 2, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.GetFloat$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 196, 3, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.GetInt$$String$$Int32 = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 196, 4, true, a0, a1); 
}
/* static Int32  */
_jstype.staticDefinition.GetInt$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 196, 5, true, a0); 
}
/* static String  */
_jstype.staticDefinition.GetString$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 196, 6, true, a0, a1); 
}
/* static String  */
_jstype.staticDefinition.GetString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 196, 7, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.HasKey = function(a0/*String*/) { 
    
    return CS.Call(4, 196, 8, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.Save = function() { 
    
    return CS.Call(4, 196, 9, true); 
}
/* static Void  */
_jstype.staticDefinition.SetFloat = function(a0/*String*/, a1/*Single*/) { 
    
    return CS.Call(4, 196, 10, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetInt = function(a0/*String*/, a1/*Int32*/) { 
    
    return CS.Call(4, 196, 11, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.SetString = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 196, 12, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$SocialPlatforms$Range
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.SocialPlatforms.Range",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 197, 0, true, this); }
_jstype.definition.ctor$$Int32$$Int32 = function(a0, a1) { CS.Call(5, 197, 1, true, this, a0, a1); }

// fields

_jstype.fields.from =  { 
            get: function() { return CS.Call(0, 197, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 197, 0, false, this, v); } 
        };

_jstype.fields.count =  { 
            get: function() { return CS.Call(0, 197, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 197, 1, false, this, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$TextGenerationSettings
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.TextGenerationSettings",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 198, 0, true, this); }

// fields

_jstype.fields.font =  { 
            get: function() { return CS.Call(0, 198, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 0, false, this, v); } 
        };

_jstype.fields.color =  { 
            get: function() { return CS.Call(0, 198, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 1, false, this, v); } 
        };

_jstype.fields.fontSize =  { 
            get: function() { return CS.Call(0, 198, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 2, false, this, v); } 
        };

_jstype.fields.lineSpacing =  { 
            get: function() { return CS.Call(0, 198, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 3, false, this, v); } 
        };

_jstype.fields.richText =  { 
            get: function() { return CS.Call(0, 198, 4, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 4, false, this, v); } 
        };

_jstype.fields.scaleFactor =  { 
            get: function() { return CS.Call(0, 198, 5, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 5, false, this, v); } 
        };

_jstype.fields.fontStyle =  { 
            get: function() { return CS.Call(0, 198, 6, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 6, false, this, v); } 
        };

_jstype.fields.textAnchor =  { 
            get: function() { return CS.Call(0, 198, 7, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 7, false, this, v); } 
        };

_jstype.fields.resizeTextForBestFit =  { 
            get: function() { return CS.Call(0, 198, 8, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 8, false, this, v); } 
        };

_jstype.fields.resizeTextMinSize =  { 
            get: function() { return CS.Call(0, 198, 9, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 9, false, this, v); } 
        };

_jstype.fields.resizeTextMaxSize =  { 
            get: function() { return CS.Call(0, 198, 10, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 10, false, this, v); } 
        };

_jstype.fields.updateBounds =  { 
            get: function() { return CS.Call(0, 198, 11, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 11, false, this, v); } 
        };

_jstype.fields.verticalOverflow =  { 
            get: function() { return CS.Call(0, 198, 12, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 12, false, this, v); } 
        };

_jstype.fields.horizontalOverflow =  { 
            get: function() { return CS.Call(0, 198, 13, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 13, false, this, v); } 
        };

_jstype.fields.generationExtents =  { 
            get: function() { return CS.Call(0, 198, 14, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 14, false, this, v); } 
        };

_jstype.fields.pivot =  { 
            get: function() { return CS.Call(0, 198, 15, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 15, false, this, v); } 
        };

_jstype.fields.generateOutOfBounds =  { 
            get: function() { return CS.Call(0, 198, 16, false, this); }, 
            set: function(v) { return CS.Call(1, 198, 16, false, this, v); } 
        };

// properties

// methods

/* Boolean */
_jstype.definition.Equals$$TextGenerationSettings = function(a0/*TextGenerationSettings*/) { 
    
    return CS.Call(4, 198, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$JointMotor
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.JointMotor",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 199, 0, true, this); }

// fields

// properties

_jstype.definition.get_targetVelocity = function() { return CS.Call(2, 199, 0, false, this); }
_jstype.definition.set_targetVelocity = function(v) { return CS.Call(3, 199, 0, false, this, v); }

_jstype.definition.get_force = function() { return CS.Call(2, 199, 1, false, this); }
_jstype.definition.set_force = function(v) { return CS.Call(3, 199, 1, false, this, v); }

_jstype.definition.get_freeSpin = function() { return CS.Call(2, 199, 2, false, this); }
_jstype.definition.set_freeSpin = function(v) { return CS.Call(3, 199, 2, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$JointSpring
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.JointSpring",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 200, 0, true, this); }

// fields

_jstype.fields.spring =  { 
            get: function() { return CS.Call(0, 200, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 200, 0, false, this, v); } 
        };

_jstype.fields.damper =  { 
            get: function() { return CS.Call(0, 200, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 200, 1, false, this, v); } 
        };

_jstype.fields.targetPosition =  { 
            get: function() { return CS.Call(0, 200, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 200, 2, false, this, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$JointLimits
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.JointLimits",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 201, 0, true, this); }

// fields

// properties

_jstype.definition.get_min = function() { return CS.Call(2, 201, 0, false, this); }
_jstype.definition.set_min = function(v) { return CS.Call(3, 201, 0, false, this, v); }

_jstype.definition.get_minBounce = function() { return CS.Call(2, 201, 1, false, this); }
_jstype.definition.set_minBounce = function(v) { return CS.Call(3, 201, 1, false, this, v); }

_jstype.definition.get_max = function() { return CS.Call(2, 201, 2, false, this); }
_jstype.definition.set_max = function(v) { return CS.Call(3, 201, 2, false, this, v); }

_jstype.definition.get_maxBounce = function() { return CS.Call(2, 201, 3, false, this); }
_jstype.definition.set_maxBounce = function(v) { return CS.Call(3, 201, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$SoftJointLimit
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.SoftJointLimit",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 202, 0, true, this); }

// fields

// properties

_jstype.definition.get_limit = function() { return CS.Call(2, 202, 0, false, this); }
_jstype.definition.set_limit = function(v) { return CS.Call(3, 202, 0, false, this, v); }

_jstype.definition.get_spring = function() { return CS.Call(2, 202, 1, false, this); }
_jstype.definition.set_spring = function(v) { return CS.Call(3, 202, 1, false, this, v); }

_jstype.definition.get_damper = function() { return CS.Call(2, 202, 2, false, this); }
_jstype.definition.set_damper = function(v) { return CS.Call(3, 202, 2, false, this, v); }

_jstype.definition.get_bounciness = function() { return CS.Call(2, 202, 3, false, this); }
_jstype.definition.set_bounciness = function(v) { return CS.Call(3, 202, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$JointDrive
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.JointDrive",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 203, 0, true, this); }

// fields

// properties

_jstype.definition.get_mode = function() { return CS.Call(2, 203, 0, false, this); }
_jstype.definition.set_mode = function(v) { return CS.Call(3, 203, 0, false, this, v); }

_jstype.definition.get_positionSpring = function() { return CS.Call(2, 203, 1, false, this); }
_jstype.definition.set_positionSpring = function(v) { return CS.Call(3, 203, 1, false, this, v); }

_jstype.definition.get_positionDamper = function() { return CS.Call(2, 203, 2, false, this); }
_jstype.definition.set_positionDamper = function(v) { return CS.Call(3, 203, 2, false, this, v); }

_jstype.definition.get_maximumForce = function() { return CS.Call(2, 203, 3, false, this); }
_jstype.definition.set_maximumForce = function(v) { return CS.Call(3, 203, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$WheelFrictionCurve
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.WheelFrictionCurve",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 204, 0, true, this); }

// fields

// properties

_jstype.definition.get_extremumSlip = function() { return CS.Call(2, 204, 0, false, this); }
_jstype.definition.set_extremumSlip = function(v) { return CS.Call(3, 204, 0, false, this, v); }

_jstype.definition.get_extremumValue = function() { return CS.Call(2, 204, 1, false, this); }
_jstype.definition.set_extremumValue = function(v) { return CS.Call(3, 204, 1, false, this, v); }

_jstype.definition.get_asymptoteSlip = function() { return CS.Call(2, 204, 2, false, this); }
_jstype.definition.set_asymptoteSlip = function(v) { return CS.Call(3, 204, 2, false, this, v); }

_jstype.definition.get_asymptoteValue = function() { return CS.Call(2, 204, 3, false, this); }
_jstype.definition.set_asymptoteValue = function(v) { return CS.Call(3, 204, 3, false, this, v); }

_jstype.definition.get_stiffness = function() { return CS.Call(2, 204, 4, false, this); }
_jstype.definition.set_stiffness = function(v) { return CS.Call(3, 204, 4, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$WheelHit
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.WheelHit",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 205, 0, true, this); }

// fields

// properties

_jstype.definition.get_collider = function() { return CS.Call(2, 205, 0, false, this); }
_jstype.definition.set_collider = function(v) { return CS.Call(3, 205, 0, false, this, v); }

_jstype.definition.get_point = function() { return CS.Call(2, 205, 1, false, this); }
_jstype.definition.set_point = function(v) { return CS.Call(3, 205, 1, false, this, v); }

_jstype.definition.get_normal = function() { return CS.Call(2, 205, 2, false, this); }
_jstype.definition.set_normal = function(v) { return CS.Call(3, 205, 2, false, this, v); }

_jstype.definition.get_forwardDir = function() { return CS.Call(2, 205, 3, false, this); }
_jstype.definition.set_forwardDir = function(v) { return CS.Call(3, 205, 3, false, this, v); }

_jstype.definition.get_sidewaysDir = function() { return CS.Call(2, 205, 4, false, this); }
_jstype.definition.set_sidewaysDir = function(v) { return CS.Call(3, 205, 4, false, this, v); }

_jstype.definition.get_force = function() { return CS.Call(2, 205, 5, false, this); }
_jstype.definition.set_force = function(v) { return CS.Call(3, 205, 5, false, this, v); }

_jstype.definition.get_forwardSlip = function() { return CS.Call(2, 205, 6, false, this); }
_jstype.definition.set_forwardSlip = function(v) { return CS.Call(3, 205, 6, false, this, v); }

_jstype.definition.get_sidewaysSlip = function() { return CS.Call(2, 205, 7, false, this); }
_jstype.definition.set_sidewaysSlip = function(v) { return CS.Call(3, 205, 7, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$RaycastHit
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.RaycastHit",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 206, 0, true, this); }

// fields

// properties

_jstype.definition.get_point = function() { return CS.Call(2, 206, 0, false, this); }
_jstype.definition.set_point = function(v) { return CS.Call(3, 206, 0, false, this, v); }

_jstype.definition.get_normal = function() { return CS.Call(2, 206, 1, false, this); }
_jstype.definition.set_normal = function(v) { return CS.Call(3, 206, 1, false, this, v); }

_jstype.definition.get_barycentricCoordinate = function() { return CS.Call(2, 206, 2, false, this); }
_jstype.definition.set_barycentricCoordinate = function(v) { return CS.Call(3, 206, 2, false, this, v); }

_jstype.definition.get_distance = function() { return CS.Call(2, 206, 3, false, this); }
_jstype.definition.set_distance = function(v) { return CS.Call(3, 206, 3, false, this, v); }

_jstype.definition.get_triangleIndex = function() { return CS.Call(2, 206, 4, false, this); }
_jstype.definition.set_triangleIndex = function(v) { return CS.Call(3, 206, 4, false, this, v); }

_jstype.definition.get_textureCoord = function() { return CS.Call(2, 206, 5, false, this); }
_jstype.definition.set_textureCoord = function(v) { return CS.Call(3, 206, 5, false, this, v); }

_jstype.definition.get_textureCoord2 = function() { return CS.Call(2, 206, 6, false, this); }
_jstype.definition.set_textureCoord2 = function(v) { return CS.Call(3, 206, 6, false, this, v); }

_jstype.definition.get_lightmapCoord = function() { return CS.Call(2, 206, 7, false, this); }
_jstype.definition.set_lightmapCoord = function(v) { return CS.Call(3, 206, 7, false, this, v); }

_jstype.definition.get_collider = function() { return CS.Call(2, 206, 8, false, this); }
_jstype.definition.set_collider = function(v) { return CS.Call(3, 206, 8, false, this, v); }

_jstype.definition.get_rigidbody = function() { return CS.Call(2, 206, 9, false, this); }
_jstype.definition.set_rigidbody = function(v) { return CS.Call(3, 206, 9, false, this, v); }

_jstype.definition.get_transform = function() { return CS.Call(2, 206, 10, false, this); }
_jstype.definition.set_transform = function(v) { return CS.Call(3, 206, 10, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ContactPoint
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.ContactPoint",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 207, 0, true, this); }

// fields

// properties

_jstype.definition.get_point = function() { return CS.Call(2, 207, 0, false, this); }
_jstype.definition.set_point = function(v) { return CS.Call(3, 207, 0, false, this, v); }

_jstype.definition.get_normal = function() { return CS.Call(2, 207, 1, false, this); }
_jstype.definition.set_normal = function(v) { return CS.Call(3, 207, 1, false, this, v); }

_jstype.definition.get_thisCollider = function() { return CS.Call(2, 207, 2, false, this); }
_jstype.definition.set_thisCollider = function(v) { return CS.Call(3, 207, 2, false, this, v); }

_jstype.definition.get_otherCollider = function() { return CS.Call(2, 207, 3, false, this); }
_jstype.definition.set_otherCollider = function(v) { return CS.Call(3, 207, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ClothSkinningCoefficient
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.ClothSkinningCoefficient",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 208, 0, true, this); }

// fields

_jstype.fields.maxDistance =  { 
            get: function() { return CS.Call(0, 208, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 208, 0, false, this, v); } 
        };

_jstype.fields.maxDistanceBias =  { 
            get: function() { return CS.Call(0, 208, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 208, 1, false, this, v); } 
        };

_jstype.fields.collisionSphereRadius =  { 
            get: function() { return CS.Call(0, 208, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 208, 2, false, this, v); } 
        };

_jstype.fields.collisionSphereDistance =  { 
            get: function() { return CS.Call(0, 208, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 208, 3, false, this, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$RaycastHit2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.RaycastHit2D",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 209, 0, true, this); }

// fields

// properties

_jstype.definition.get_centroid = function() { return CS.Call(2, 209, 0, false, this); }
_jstype.definition.set_centroid = function(v) { return CS.Call(3, 209, 0, false, this, v); }

_jstype.definition.get_point = function() { return CS.Call(2, 209, 1, false, this); }
_jstype.definition.set_point = function(v) { return CS.Call(3, 209, 1, false, this, v); }

_jstype.definition.get_normal = function() { return CS.Call(2, 209, 2, false, this); }
_jstype.definition.set_normal = function(v) { return CS.Call(3, 209, 2, false, this, v); }

_jstype.definition.get_distance = function() { return CS.Call(2, 209, 3, false, this); }
_jstype.definition.set_distance = function(v) { return CS.Call(3, 209, 3, false, this, v); }

_jstype.definition.get_fraction = function() { return CS.Call(2, 209, 4, false, this); }
_jstype.definition.set_fraction = function(v) { return CS.Call(3, 209, 4, false, this, v); }

_jstype.definition.get_collider = function() { return CS.Call(2, 209, 5, false, this); }
_jstype.definition.set_collider = function(v) { return CS.Call(3, 209, 5, false, this, v); }

_jstype.definition.get_rigidbody = function() { return CS.Call(2, 209, 6, false, this); }
_jstype.definition.set_rigidbody = function(v) { return CS.Call(3, 209, 6, false, this, v); }

_jstype.definition.get_transform = function() { return CS.Call(2, 209, 7, false, this); }
_jstype.definition.set_transform = function(v) { return CS.Call(3, 209, 7, false, this, v); }

// methods

/* Int32 */
_jstype.definition.CompareTo = function(a0/*RaycastHit2D*/) { 
    
    return CS.Call(4, 209, 0, false, this, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Implicit = function(a0/*RaycastHit2D*/) { 
    
    return CS.Call(4, 209, 1, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$ContactPoint2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.ContactPoint2D",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 210, 0, true, this); }

// fields

// properties

_jstype.definition.get_point = function() { return CS.Call(2, 210, 0, false, this); }
_jstype.definition.set_point = function(v) { return CS.Call(3, 210, 0, false, this, v); }

_jstype.definition.get_normal = function() { return CS.Call(2, 210, 1, false, this); }
_jstype.definition.set_normal = function(v) { return CS.Call(3, 210, 1, false, this, v); }

_jstype.definition.get_collider = function() { return CS.Call(2, 210, 2, false, this); }
_jstype.definition.set_collider = function(v) { return CS.Call(3, 210, 2, false, this, v); }

_jstype.definition.get_otherCollider = function() { return CS.Call(2, 210, 3, false, this); }
_jstype.definition.set_otherCollider = function(v) { return CS.Call(3, 210, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$JointAngleLimits2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.JointAngleLimits2D",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 211, 0, true, this); }

// fields

// properties

_jstype.definition.get_min = function() { return CS.Call(2, 211, 0, false, this); }
_jstype.definition.set_min = function(v) { return CS.Call(3, 211, 0, false, this, v); }

_jstype.definition.get_max = function() { return CS.Call(2, 211, 1, false, this); }
_jstype.definition.set_max = function(v) { return CS.Call(3, 211, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$JointTranslationLimits2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.JointTranslationLimits2D",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 212, 0, true, this); }

// fields

// properties

_jstype.definition.get_min = function() { return CS.Call(2, 212, 0, false, this); }
_jstype.definition.set_min = function(v) { return CS.Call(3, 212, 0, false, this, v); }

_jstype.definition.get_max = function() { return CS.Call(2, 212, 1, false, this); }
_jstype.definition.set_max = function(v) { return CS.Call(3, 212, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$JointMotor2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.JointMotor2D",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 213, 0, true, this); }

// fields

// properties

_jstype.definition.get_motorSpeed = function() { return CS.Call(2, 213, 0, false, this); }
_jstype.definition.set_motorSpeed = function(v) { return CS.Call(3, 213, 0, false, this, v); }

_jstype.definition.get_maxMotorTorque = function() { return CS.Call(2, 213, 1, false, this); }
_jstype.definition.set_maxMotorTorque = function(v) { return CS.Call(3, 213, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$JointSuspension2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.JointSuspension2D",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 214, 0, true, this); }

// fields

// properties

_jstype.definition.get_dampingRatio = function() { return CS.Call(2, 214, 0, false, this); }
_jstype.definition.set_dampingRatio = function(v) { return CS.Call(3, 214, 0, false, this, v); }

_jstype.definition.get_frequency = function() { return CS.Call(2, 214, 1, false, this); }
_jstype.definition.set_frequency = function(v) { return CS.Call(3, 214, 1, false, this, v); }

_jstype.definition.get_angle = function() { return CS.Call(2, 214, 2, false, this); }
_jstype.definition.set_angle = function(v) { return CS.Call(3, 214, 2, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$OffMeshLinkData
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.OffMeshLinkData",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 215, 0, true, this); }

// fields

// properties

_jstype.definition.get_valid = function() { return CS.Call(2, 215, 0, false, this); }
_jstype.definition.set_valid = function(v) { return CS.Call(3, 215, 0, false, this, v); }

_jstype.definition.get_activated = function() { return CS.Call(2, 215, 1, false, this); }
_jstype.definition.set_activated = function(v) { return CS.Call(3, 215, 1, false, this, v); }

_jstype.definition.get_linkType = function() { return CS.Call(2, 215, 2, false, this); }
_jstype.definition.set_linkType = function(v) { return CS.Call(3, 215, 2, false, this, v); }

_jstype.definition.get_startPos = function() { return CS.Call(2, 215, 3, false, this); }
_jstype.definition.set_startPos = function(v) { return CS.Call(3, 215, 3, false, this, v); }

_jstype.definition.get_endPos = function() { return CS.Call(2, 215, 4, false, this); }
_jstype.definition.set_endPos = function(v) { return CS.Call(3, 215, 4, false, this, v); }

_jstype.definition.get_offMeshLink = function() { return CS.Call(2, 215, 5, false, this); }
_jstype.definition.set_offMeshLink = function(v) { return CS.Call(3, 215, 5, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$NavMeshHit
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.NavMeshHit",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 216, 0, true, this); }

// fields

// properties

_jstype.definition.get_position = function() { return CS.Call(2, 216, 0, false, this); }
_jstype.definition.set_position = function(v) { return CS.Call(3, 216, 0, false, this, v); }

_jstype.definition.get_normal = function() { return CS.Call(2, 216, 1, false, this); }
_jstype.definition.set_normal = function(v) { return CS.Call(3, 216, 1, false, this, v); }

_jstype.definition.get_distance = function() { return CS.Call(2, 216, 2, false, this); }
_jstype.definition.set_distance = function(v) { return CS.Call(3, 216, 2, false, this, v); }

_jstype.definition.get_mask = function() { return CS.Call(2, 216, 3, false, this); }
_jstype.definition.set_mask = function(v) { return CS.Call(3, 216, 3, false, this, v); }

_jstype.definition.get_hit = function() { return CS.Call(2, 216, 4, false, this); }
_jstype.definition.set_hit = function(v) { return CS.Call(3, 216, 4, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$NavMeshTriangulation
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.NavMeshTriangulation",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 217, 0, true, this); }

// fields

_jstype.fields.vertices =  { 
            get: function() { return CS.Call(0, 217, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 217, 0, false, this, v); } 
        };

_jstype.fields.indices =  { 
            get: function() { return CS.Call(0, 217, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 217, 1, false, this, v); } 
        };

_jstype.fields.layers =  { 
            get: function() { return CS.Call(0, 217, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 217, 2, false, this, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$WebCamDevice
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.WebCamDevice",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 218, 0, true, this); }

// fields

// properties

_jstype.definition.get_name = function() { return CS.Call(2, 218, 0, false, this); }
_jstype.definition.set_name = function(v) { return CS.Call(3, 218, 0, false, this, v); }

_jstype.definition.get_isFrontFacing = function() { return CS.Call(2, 218, 1, false, this); }
_jstype.definition.set_isFrontFacing = function(v) { return CS.Call(3, 218, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Keyframe
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Keyframe",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 219, 0, true, this); }
_jstype.definition.ctor$$Single$$Single = function(a0, a1) { CS.Call(5, 219, 1, true, this, a0, a1); }
_jstype.definition.ctor$$Single$$Single$$Single$$Single = function(a0, a1, a2, a3) { CS.Call(5, 219, 2, true, this, a0, a1, a2, a3); }

// fields

// properties

_jstype.definition.get_time = function() { return CS.Call(2, 219, 0, false, this); }
_jstype.definition.set_time = function(v) { return CS.Call(3, 219, 0, false, this, v); }

_jstype.definition.get_value = function() { return CS.Call(2, 219, 1, false, this); }
_jstype.definition.set_value = function(v) { return CS.Call(3, 219, 1, false, this, v); }

_jstype.definition.get_inTangent = function() { return CS.Call(2, 219, 2, false, this); }
_jstype.definition.set_inTangent = function(v) { return CS.Call(3, 219, 2, false, this, v); }

_jstype.definition.get_outTangent = function() { return CS.Call(2, 219, 3, false, this); }
_jstype.definition.set_outTangent = function(v) { return CS.Call(3, 219, 3, false, this, v); }

_jstype.definition.get_tangentMode = function() { return CS.Call(2, 219, 4, false, this); }
_jstype.definition.set_tangentMode = function(v) { return CS.Call(3, 219, 4, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AnimationInfo
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.AnimationInfo",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 220, 0, true, this); }

// fields

// properties

_jstype.definition.get_clip = function() { return CS.Call(2, 220, 0, false, this); }
_jstype.definition.set_clip = function(v) { return CS.Call(3, 220, 0, false, this, v); }

_jstype.definition.get_weight = function() { return CS.Call(2, 220, 1, false, this); }
_jstype.definition.set_weight = function(v) { return CS.Call(3, 220, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AnimatorStateInfo
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.AnimatorStateInfo",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 221, 0, true, this); }

// fields

// properties

_jstype.definition.get_nameHash = function() { return CS.Call(2, 221, 0, false, this); }
_jstype.definition.set_nameHash = function(v) { return CS.Call(3, 221, 0, false, this, v); }

_jstype.definition.get_normalizedTime = function() { return CS.Call(2, 221, 1, false, this); }
_jstype.definition.set_normalizedTime = function(v) { return CS.Call(3, 221, 1, false, this, v); }

_jstype.definition.get_length = function() { return CS.Call(2, 221, 2, false, this); }
_jstype.definition.set_length = function(v) { return CS.Call(3, 221, 2, false, this, v); }

_jstype.definition.get_tagHash = function() { return CS.Call(2, 221, 3, false, this); }
_jstype.definition.set_tagHash = function(v) { return CS.Call(3, 221, 3, false, this, v); }

_jstype.definition.get_loop = function() { return CS.Call(2, 221, 4, false, this); }
_jstype.definition.set_loop = function(v) { return CS.Call(3, 221, 4, false, this, v); }

// methods

/* Boolean */
_jstype.definition.IsName = function(a0/*String*/) { 
    
    return CS.Call(4, 221, 0, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsTag = function(a0/*String*/) { 
    
    return CS.Call(4, 221, 1, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AnimatorTransitionInfo
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.AnimatorTransitionInfo",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 222, 0, true, this); }

// fields

// properties

_jstype.definition.get_nameHash = function() { return CS.Call(2, 222, 0, false, this); }
_jstype.definition.set_nameHash = function(v) { return CS.Call(3, 222, 0, false, this, v); }

_jstype.definition.get_userNameHash = function() { return CS.Call(2, 222, 1, false, this); }
_jstype.definition.set_userNameHash = function(v) { return CS.Call(3, 222, 1, false, this, v); }

_jstype.definition.get_normalizedTime = function() { return CS.Call(2, 222, 2, false, this); }
_jstype.definition.set_normalizedTime = function(v) { return CS.Call(3, 222, 2, false, this, v); }

// methods

/* Boolean */
_jstype.definition.IsName = function(a0/*String*/) { 
    
    return CS.Call(4, 222, 0, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsUserName = function(a0/*String*/) { 
    
    return CS.Call(4, 222, 1, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$MatchTargetWeightMask
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.MatchTargetWeightMask",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 223, 0, true, this); }
_jstype.definition.ctor$$Vector3$$Single = function(a0, a1) { CS.Call(5, 223, 1, true, this, a0, a1); }

// fields

// properties

_jstype.definition.get_positionXYZWeight = function() { return CS.Call(2, 223, 0, false, this); }
_jstype.definition.set_positionXYZWeight = function(v) { return CS.Call(3, 223, 0, false, this, v); }

_jstype.definition.get_rotationWeight = function() { return CS.Call(2, 223, 1, false, this); }
_jstype.definition.set_rotationWeight = function(v) { return CS.Call(3, 223, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$SkeletonBone
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.SkeletonBone",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 224, 0, true, this); }

// fields

_jstype.fields.name =  { 
            get: function() { return CS.Call(0, 224, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 224, 0, false, this, v); } 
        };

_jstype.fields.position =  { 
            get: function() { return CS.Call(0, 224, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 224, 1, false, this, v); } 
        };

_jstype.fields.rotation =  { 
            get: function() { return CS.Call(0, 224, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 224, 2, false, this, v); } 
        };

_jstype.fields.scale =  { 
            get: function() { return CS.Call(0, 224, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 224, 3, false, this, v); } 
        };

_jstype.fields.transformModified =  { 
            get: function() { return CS.Call(0, 224, 4, false, this); }, 
            set: function(v) { return CS.Call(1, 224, 4, false, this, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$HumanLimit
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.HumanLimit",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 225, 0, true, this); }

// fields

// properties

_jstype.definition.get_useDefaultValues = function() { return CS.Call(2, 225, 0, false, this); }
_jstype.definition.set_useDefaultValues = function(v) { return CS.Call(3, 225, 0, false, this, v); }

_jstype.definition.get_min = function() { return CS.Call(2, 225, 1, false, this); }
_jstype.definition.set_min = function(v) { return CS.Call(3, 225, 1, false, this, v); }

_jstype.definition.get_max = function() { return CS.Call(2, 225, 2, false, this); }
_jstype.definition.set_max = function(v) { return CS.Call(3, 225, 2, false, this, v); }

_jstype.definition.get_center = function() { return CS.Call(2, 225, 3, false, this); }
_jstype.definition.set_center = function(v) { return CS.Call(3, 225, 3, false, this, v); }

_jstype.definition.get_axisLength = function() { return CS.Call(2, 225, 4, false, this); }
_jstype.definition.set_axisLength = function(v) { return CS.Call(3, 225, 4, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$HumanBone
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.HumanBone",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 226, 0, true, this); }

// fields

_jstype.fields.limit =  { 
            get: function() { return CS.Call(0, 226, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 226, 0, false, this, v); } 
        };

// properties

_jstype.definition.get_boneName = function() { return CS.Call(2, 226, 0, false, this); }
_jstype.definition.set_boneName = function(v) { return CS.Call(3, 226, 0, false, this, v); }

_jstype.definition.get_humanName = function() { return CS.Call(2, 226, 1, false, this); }
_jstype.definition.set_humanName = function(v) { return CS.Call(3, 226, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$HumanDescription
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.HumanDescription",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 227, 0, true, this); }

// fields

_jstype.fields.human =  { 
            get: function() { return CS.Call(0, 227, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 227, 0, false, this, v); } 
        };

_jstype.fields.skeleton =  { 
            get: function() { return CS.Call(0, 227, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 227, 1, false, this, v); } 
        };

// properties

_jstype.definition.get_upperArmTwist = function() { return CS.Call(2, 227, 0, false, this); }
_jstype.definition.set_upperArmTwist = function(v) { return CS.Call(3, 227, 0, false, this, v); }

_jstype.definition.get_lowerArmTwist = function() { return CS.Call(2, 227, 1, false, this); }
_jstype.definition.set_lowerArmTwist = function(v) { return CS.Call(3, 227, 1, false, this, v); }

_jstype.definition.get_upperLegTwist = function() { return CS.Call(2, 227, 2, false, this); }
_jstype.definition.set_upperLegTwist = function(v) { return CS.Call(3, 227, 2, false, this, v); }

_jstype.definition.get_lowerLegTwist = function() { return CS.Call(2, 227, 3, false, this); }
_jstype.definition.set_lowerLegTwist = function(v) { return CS.Call(3, 227, 3, false, this, v); }

_jstype.definition.get_armStretch = function() { return CS.Call(2, 227, 4, false, this); }
_jstype.definition.set_armStretch = function(v) { return CS.Call(3, 227, 4, false, this, v); }

_jstype.definition.get_legStretch = function() { return CS.Call(2, 227, 5, false, this); }
_jstype.definition.set_legStretch = function(v) { return CS.Call(3, 227, 5, false, this, v); }

_jstype.definition.get_feetSpacing = function() { return CS.Call(2, 227, 6, false, this); }
_jstype.definition.set_feetSpacing = function(v) { return CS.Call(3, 227, 6, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$TreeInstance
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.TreeInstance",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 228, 0, true, this); }

// fields

// properties

_jstype.definition.get_position = function() { return CS.Call(2, 228, 0, false, this); }
_jstype.definition.set_position = function(v) { return CS.Call(3, 228, 0, false, this, v); }

_jstype.definition.get_widthScale = function() { return CS.Call(2, 228, 1, false, this); }
_jstype.definition.set_widthScale = function(v) { return CS.Call(3, 228, 1, false, this, v); }

_jstype.definition.get_heightScale = function() { return CS.Call(2, 228, 2, false, this); }
_jstype.definition.set_heightScale = function(v) { return CS.Call(3, 228, 2, false, this, v); }

_jstype.definition.get_color = function() { return CS.Call(2, 228, 3, false, this); }
_jstype.definition.set_color = function(v) { return CS.Call(3, 228, 3, false, this, v); }

_jstype.definition.get_lightmapColor = function() { return CS.Call(2, 228, 4, false, this); }
_jstype.definition.set_lightmapColor = function(v) { return CS.Call(3, 228, 4, false, this, v); }

_jstype.definition.get_prototypeIndex = function() { return CS.Call(2, 228, 5, false, this); }
_jstype.definition.set_prototypeIndex = function(v) { return CS.Call(3, 228, 5, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UIVertex
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.UIVertex",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 229, 0, true, this); }

// fields

_jstype.fields.position =  { 
            get: function() { return CS.Call(0, 229, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 229, 0, false, this, v); } 
        };

_jstype.fields.normal =  { 
            get: function() { return CS.Call(0, 229, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 229, 1, false, this, v); } 
        };

_jstype.fields.color =  { 
            get: function() { return CS.Call(0, 229, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 229, 2, false, this, v); } 
        };

_jstype.fields.uv0 =  { 
            get: function() { return CS.Call(0, 229, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 229, 3, false, this, v); } 
        };

_jstype.fields.uv1 =  { 
            get: function() { return CS.Call(0, 229, 4, false, this); }, 
            set: function(v) { return CS.Call(1, 229, 4, false, this, v); } 
        };

_jstype.fields.tangent =  { 
            get: function() { return CS.Call(0, 229, 5, false, this); }, 
            set: function(v) { return CS.Call(1, 229, 5, false, this, v); } 
        };

_jstype.staticFields.simpleVert =  { 
            get: function() { return CS.Call(0, 229, 6, true); }, 
            set: function(v) { return CS.Call(1, 229, 6, true, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$LayerMask
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.LayerMask",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 230, 0, true, this); }

// fields

// properties

_jstype.definition.get_value = function() { return CS.Call(2, 230, 0, false, this); }
_jstype.definition.set_value = function(v) { return CS.Call(3, 230, 0, false, this, v); }

// methods

/* static Int32  */
_jstype.staticDefinition.GetMask = function(a0/*String[]*/) { 
    
    return CS.Call(4, 230, 0, true, jsb_formatParamsArray(0, a0, arguments)); 
}
/* static String  */
_jstype.staticDefinition.LayerToName = function(a0/*Int32*/) { 
    
    return CS.Call(4, 230, 1, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.NameToLayer = function(a0/*String*/) { 
    
    return CS.Call(4, 230, 2, true, a0); 
}
/* static LayerMask  */
_jstype.staticDefinition.op_Implicit$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 230, 3, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.op_Implicit$$LayerMask = function(a0/*LayerMask*/) { 
    
    return CS.Call(4, 230, 4, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$CombineInstance
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.CombineInstance",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 231, 0, true, this); }

// fields

// properties

_jstype.definition.get_mesh = function() { return CS.Call(2, 231, 0, false, this); }
_jstype.definition.set_mesh = function(v) { return CS.Call(3, 231, 0, false, this, v); }

_jstype.definition.get_subMeshIndex = function() { return CS.Call(2, 231, 1, false, this); }
_jstype.definition.set_subMeshIndex = function(v) { return CS.Call(3, 231, 1, false, this, v); }

_jstype.definition.get_transform = function() { return CS.Call(2, 231, 2, false, this); }
_jstype.definition.set_transform = function(v) { return CS.Call(3, 231, 2, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$BoneWeight
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.BoneWeight",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 232, 0, true, this); }

// fields

// properties

_jstype.definition.get_weight0 = function() { return CS.Call(2, 232, 0, false, this); }
_jstype.definition.set_weight0 = function(v) { return CS.Call(3, 232, 0, false, this, v); }

_jstype.definition.get_weight1 = function() { return CS.Call(2, 232, 1, false, this); }
_jstype.definition.set_weight1 = function(v) { return CS.Call(3, 232, 1, false, this, v); }

_jstype.definition.get_weight2 = function() { return CS.Call(2, 232, 2, false, this); }
_jstype.definition.set_weight2 = function(v) { return CS.Call(3, 232, 2, false, this, v); }

_jstype.definition.get_weight3 = function() { return CS.Call(2, 232, 3, false, this); }
_jstype.definition.set_weight3 = function(v) { return CS.Call(3, 232, 3, false, this, v); }

_jstype.definition.get_boneIndex0 = function() { return CS.Call(2, 232, 4, false, this); }
_jstype.definition.set_boneIndex0 = function(v) { return CS.Call(3, 232, 4, false, this, v); }

_jstype.definition.get_boneIndex1 = function() { return CS.Call(2, 232, 5, false, this); }
_jstype.definition.set_boneIndex1 = function(v) { return CS.Call(3, 232, 5, false, this, v); }

_jstype.definition.get_boneIndex2 = function() { return CS.Call(2, 232, 6, false, this); }
_jstype.definition.set_boneIndex2 = function(v) { return CS.Call(3, 232, 6, false, this, v); }

_jstype.definition.get_boneIndex3 = function() { return CS.Call(2, 232, 7, false, this); }
_jstype.definition.set_boneIndex3 = function(v) { return CS.Call(3, 232, 7, false, this, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 232, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 232, 1, false, this); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*BoneWeight*/, a1/*BoneWeight*/) { 
    
    return CS.Call(4, 232, 2, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*BoneWeight*/, a1/*BoneWeight*/) { 
    
    return CS.Call(4, 232, 3, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Particle
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Particle",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 233, 0, true, this); }

// fields

// properties

_jstype.definition.get_position = function() { return CS.Call(2, 233, 0, false, this); }
_jstype.definition.set_position = function(v) { return CS.Call(3, 233, 0, false, this, v); }

_jstype.definition.get_velocity = function() { return CS.Call(2, 233, 1, false, this); }
_jstype.definition.set_velocity = function(v) { return CS.Call(3, 233, 1, false, this, v); }

_jstype.definition.get_energy = function() { return CS.Call(2, 233, 2, false, this); }
_jstype.definition.set_energy = function(v) { return CS.Call(3, 233, 2, false, this, v); }

_jstype.definition.get_startEnergy = function() { return CS.Call(2, 233, 3, false, this); }
_jstype.definition.set_startEnergy = function(v) { return CS.Call(3, 233, 3, false, this, v); }

_jstype.definition.get_size = function() { return CS.Call(2, 233, 4, false, this); }
_jstype.definition.set_size = function(v) { return CS.Call(3, 233, 4, false, this, v); }

_jstype.definition.get_rotation = function() { return CS.Call(2, 233, 5, false, this); }
_jstype.definition.set_rotation = function(v) { return CS.Call(3, 233, 5, false, this, v); }

_jstype.definition.get_angularVelocity = function() { return CS.Call(2, 233, 6, false, this); }
_jstype.definition.set_angularVelocity = function(v) { return CS.Call(3, 233, 6, false, this, v); }

_jstype.definition.get_color = function() { return CS.Call(2, 233, 7, false, this); }
_jstype.definition.set_color = function(v) { return CS.Call(3, 233, 7, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$RenderBuffer
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.RenderBuffer",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 234, 0, true, this); }

// fields

// properties

// methods

/* IntPtr */
_jstype.definition.GetNativeRenderBufferPtr = function() { 
    
    return CS.Call(4, 234, 0, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Resolution
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Resolution",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 235, 0, true, this); }

// fields

// properties

_jstype.definition.get_width = function() { return CS.Call(2, 235, 0, false, this); }
_jstype.definition.set_width = function(v) { return CS.Call(3, 235, 0, false, this, v); }

_jstype.definition.get_height = function() { return CS.Call(2, 235, 1, false, this); }
_jstype.definition.set_height = function(v) { return CS.Call(3, 235, 1, false, this, v); }

_jstype.definition.get_refreshRate = function() { return CS.Call(2, 235, 2, false, this); }
_jstype.definition.set_refreshRate = function(v) { return CS.Call(3, 235, 2, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$CharacterInfo
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.CharacterInfo",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 236, 0, true, this); }

// fields

_jstype.fields.index =  { 
            get: function() { return CS.Call(0, 236, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 236, 0, false, this, v); } 
        };

_jstype.fields.uv =  { 
            get: function() { return CS.Call(0, 236, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 236, 1, false, this, v); } 
        };

_jstype.fields.vert =  { 
            get: function() { return CS.Call(0, 236, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 236, 2, false, this, v); } 
        };

_jstype.fields.width =  { 
            get: function() { return CS.Call(0, 236, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 236, 3, false, this, v); } 
        };

_jstype.fields.size =  { 
            get: function() { return CS.Call(0, 236, 4, false, this); }, 
            set: function(v) { return CS.Call(1, 236, 4, false, this, v); } 
        };

_jstype.fields.style =  { 
            get: function() { return CS.Call(0, 236, 5, false, this); }, 
            set: function(v) { return CS.Call(1, 236, 5, false, this, v); } 
        };

_jstype.fields.flipped =  { 
            get: function() { return CS.Call(0, 236, 6, false, this); }, 
            set: function(v) { return CS.Call(1, 236, 6, false, this, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UICharInfo
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.UICharInfo",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 237, 0, true, this); }

// fields

_jstype.fields.cursorPos =  { 
            get: function() { return CS.Call(0, 237, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 237, 0, false, this, v); } 
        };

_jstype.fields.charWidth =  { 
            get: function() { return CS.Call(0, 237, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 237, 1, false, this, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UILineInfo
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.UILineInfo",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 238, 0, true, this); }

// fields

_jstype.fields.startCharIdx =  { 
            get: function() { return CS.Call(0, 238, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 238, 0, false, this, v); } 
        };

_jstype.fields.height =  { 
            get: function() { return CS.Call(0, 238, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 238, 1, false, this, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$LOD
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.LOD",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 239, 0, true, this); }
_jstype.definition.ctor$$Single$$Renderer$Array = function(a0, a1) { CS.Call(5, 239, 1, true, this, a0, a1); }

// fields

_jstype.fields.screenRelativeTransitionHeight =  { 
            get: function() { return CS.Call(0, 239, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 239, 0, false, this, v); } 
        };

_jstype.fields.renderers =  { 
            get: function() { return CS.Call(0, 239, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 239, 1, false, this, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GradientColorKey
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.GradientColorKey",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 240, 0, true, this); }
_jstype.definition.ctor$$Color$$Single = function(a0, a1) { CS.Call(5, 240, 1, true, this, a0, a1); }

// fields

_jstype.fields.color =  { 
            get: function() { return CS.Call(0, 240, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 240, 0, false, this, v); } 
        };

_jstype.fields.time =  { 
            get: function() { return CS.Call(0, 240, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 240, 1, false, this, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$GradientAlphaKey
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.GradientAlphaKey",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 241, 0, true, this); }
_jstype.definition.ctor$$Single$$Single = function(a0, a1) { CS.Call(5, 241, 1, true, this, a0, a1); }

// fields

_jstype.fields.alpha =  { 
            get: function() { return CS.Call(0, 241, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 241, 0, false, this, v); } 
        };

_jstype.fields.time =  { 
            get: function() { return CS.Call(0, 241, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 241, 1, false, this, v); } 
        };

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Vector2
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Vector2",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 242, 0, true, this); }
_jstype.definition.ctor$$Single$$Single = function(a0, a1) { CS.Call(5, 242, 1, true, this, a0, a1); }

// fields

_jstype.staticFields.kEpsilon =  { 
            get: function() { return CS.Call(0, 242, 0, true); }, 
            set: function(v) { return CS.Call(1, 242, 0, true, v); } 
        };

_jstype.fields.x =  { 
            get: function() { return CS.Call(0, 242, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 242, 1, false, this, v); } 
        };

_jstype.fields.y =  { 
            get: function() { return CS.Call(0, 242, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 242, 2, false, this, v); } 
        };

// properties

_jstype.definition.get_Item$$Int32 = function(ind0) { return CS.Call(2, 242, 0, false, this, ind0); }
_jstype.definition.set_Item$$Int32 = function(ind0, v) { return CS.Call(3, 242, 0, false, this, ind0, v); }

_jstype.definition.get_normalized = function() { return CS.Call(2, 242, 1, false, this); }
_jstype.definition.set_normalized = function(v) { return CS.Call(3, 242, 1, false, this, v); }

_jstype.definition.get_magnitude = function() { return CS.Call(2, 242, 2, false, this); }
_jstype.definition.set_magnitude = function(v) { return CS.Call(3, 242, 2, false, this, v); }

_jstype.definition.get_sqrMagnitude = function() { return CS.Call(2, 242, 3, false, this); }
_jstype.definition.set_sqrMagnitude = function(v) { return CS.Call(3, 242, 3, false, this, v); }

_jstype.staticDefinition.get_zero = function() { return CS.Call(2, 242, 4, true); }
_jstype.staticDefinition.set_zero = function(v) { return CS.Call(3, 242, 4, true, v); }

_jstype.staticDefinition.get_one = function() { return CS.Call(2, 242, 5, true); }
_jstype.staticDefinition.set_one = function(v) { return CS.Call(3, 242, 5, true, v); }

_jstype.staticDefinition.get_up = function() { return CS.Call(2, 242, 6, true); }
_jstype.staticDefinition.set_up = function(v) { return CS.Call(3, 242, 6, true, v); }

_jstype.staticDefinition.get_right = function() { return CS.Call(2, 242, 7, true); }
_jstype.staticDefinition.set_right = function(v) { return CS.Call(3, 242, 7, true, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 242, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 242, 1, false, this); 
}
/* Void */
_jstype.definition.Normalize = function() { 
    
    return CS.Call(4, 242, 2, false, this); 
}
/* Void */
_jstype.definition.Scale$$Vector2 = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 242, 3, false, this, a0); 
}
/* Void */
_jstype.definition.Set = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 242, 4, false, this, a0, a1); 
}
/* Single */
_jstype.definition.SqrMagnitude = function() { 
    
    return CS.Call(4, 242, 5, false, this); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 242, 6, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 242, 7, false, this); 
}
/* static Single  */
_jstype.staticDefinition.Angle = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 242, 8, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.ClampMagnitude = function(a0/*Vector2*/, a1/*Single*/) { 
    
    return CS.Call(4, 242, 9, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Distance = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 242, 10, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Dot = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 242, 11, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.Lerp = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/) { 
    
    return CS.Call(4, 242, 12, true, a0, a1, a2); 
}
/* static Vector2  */
_jstype.staticDefinition.Max = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 242, 13, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.Min = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 242, 14, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.MoveTowards = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Single*/) { 
    
    return CS.Call(4, 242, 15, true, a0, a1, a2); 
}
/* static Vector2  */
_jstype.staticDefinition.op_Addition = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 242, 16, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.op_Division = function(a0/*Vector2*/, a1/*Single*/) { 
    
    return CS.Call(4, 242, 17, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 242, 18, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.op_Implicit$$Vector2 = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 242, 19, true, a0); 
}
/* static Vector2  */
_jstype.staticDefinition.op_Implicit$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 242, 20, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 242, 21, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.op_Multiply$$Vector2$$Single = function(a0/*Vector2*/, a1/*Single*/) { 
    
    return CS.Call(4, 242, 22, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.op_Multiply$$Single$$Vector2 = function(a0/*Single*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 242, 23, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.op_Subtraction = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 242, 24, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.op_UnaryNegation = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 242, 25, true, a0); 
}
/* static Vector2  */
_jstype.staticDefinition.Scale$$Vector2$$Vector2 = function(a0/*Vector2*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 242, 26, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.SmoothDamp$$Vector2$$Vector2$$Vector2$$Single$$Single$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Vector2&*/, a3/*Single*/, a4/*Single*/, a5/*Single*/) { 
    
    return CS.Call(4, 242, 27, true, a0, a1, a2, a3, a4, a5); 
}
/* static Vector2  */
_jstype.staticDefinition.SmoothDamp$$Vector2$$Vector2$$Vector2$$Single$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Vector2&*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 242, 28, true, a0, a1, a2, a3, a4); 
}
/* static Vector2  */
_jstype.staticDefinition.SmoothDamp$$Vector2$$Vector2$$Vector2$$Single = function(a0/*Vector2*/, a1/*Vector2*/, a2/*Vector2&*/, a3/*Single*/) { 
    
    return CS.Call(4, 242, 29, true, a0, a1, a2, a3); 
}
/* static Single  */
_jstype.staticDefinition.SqrMagnitude$$Vector2 = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 242, 30, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Vector3
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Vector3",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 243, 0, true, this); }
_jstype.definition.ctor$$Single$$Single$$Single = function(a0, a1, a2) { CS.Call(5, 243, 1, true, this, a0, a1, a2); }
_jstype.definition.ctor$$Single$$Single = function(a0, a1) { CS.Call(5, 243, 2, true, this, a0, a1); }

// fields

_jstype.staticFields.kEpsilon =  { 
            get: function() { return CS.Call(0, 243, 0, true); }, 
            set: function(v) { return CS.Call(1, 243, 0, true, v); } 
        };

_jstype.fields.x =  { 
            get: function() { return CS.Call(0, 243, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 243, 1, false, this, v); } 
        };

_jstype.fields.y =  { 
            get: function() { return CS.Call(0, 243, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 243, 2, false, this, v); } 
        };

_jstype.fields.z =  { 
            get: function() { return CS.Call(0, 243, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 243, 3, false, this, v); } 
        };

// properties

_jstype.definition.get_Item$$Int32 = function(ind0) { return CS.Call(2, 243, 0, false, this, ind0); }
_jstype.definition.set_Item$$Int32 = function(ind0, v) { return CS.Call(3, 243, 0, false, this, ind0, v); }

_jstype.definition.get_normalized = function() { return CS.Call(2, 243, 1, false, this); }
_jstype.definition.set_normalized = function(v) { return CS.Call(3, 243, 1, false, this, v); }

_jstype.definition.get_magnitude = function() { return CS.Call(2, 243, 2, false, this); }
_jstype.definition.set_magnitude = function(v) { return CS.Call(3, 243, 2, false, this, v); }

_jstype.definition.get_sqrMagnitude = function() { return CS.Call(2, 243, 3, false, this); }
_jstype.definition.set_sqrMagnitude = function(v) { return CS.Call(3, 243, 3, false, this, v); }

_jstype.staticDefinition.get_zero = function() { return CS.Call(2, 243, 4, true); }
_jstype.staticDefinition.set_zero = function(v) { return CS.Call(3, 243, 4, true, v); }

_jstype.staticDefinition.get_one = function() { return CS.Call(2, 243, 5, true); }
_jstype.staticDefinition.set_one = function(v) { return CS.Call(3, 243, 5, true, v); }

_jstype.staticDefinition.get_forward = function() { return CS.Call(2, 243, 6, true); }
_jstype.staticDefinition.set_forward = function(v) { return CS.Call(3, 243, 6, true, v); }

_jstype.staticDefinition.get_back = function() { return CS.Call(2, 243, 7, true); }
_jstype.staticDefinition.set_back = function(v) { return CS.Call(3, 243, 7, true, v); }

_jstype.staticDefinition.get_up = function() { return CS.Call(2, 243, 8, true); }
_jstype.staticDefinition.set_up = function(v) { return CS.Call(3, 243, 8, true, v); }

_jstype.staticDefinition.get_down = function() { return CS.Call(2, 243, 9, true); }
_jstype.staticDefinition.set_down = function(v) { return CS.Call(3, 243, 9, true, v); }

_jstype.staticDefinition.get_left = function() { return CS.Call(2, 243, 10, true); }
_jstype.staticDefinition.set_left = function(v) { return CS.Call(3, 243, 10, true, v); }

_jstype.staticDefinition.get_right = function() { return CS.Call(2, 243, 11, true); }
_jstype.staticDefinition.set_right = function(v) { return CS.Call(3, 243, 11, true, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 243, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 243, 1, false, this); 
}
/* Void */
_jstype.definition.Normalize = function() { 
    
    return CS.Call(4, 243, 2, false, this); 
}
/* Void */
_jstype.definition.Scale$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 243, 3, false, this, a0); 
}
/* Void */
_jstype.definition.Set = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 243, 4, false, this, a0, a1, a2); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 243, 5, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 243, 6, false, this); 
}
/* static Single  */
_jstype.staticDefinition.Angle = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 243, 7, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.ClampMagnitude = function(a0/*Vector3*/, a1/*Single*/) { 
    
    return CS.Call(4, 243, 8, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.Cross = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 243, 9, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Distance = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 243, 10, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Dot = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 243, 11, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.Lerp = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 243, 12, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.Magnitude = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 243, 13, true, a0); 
}
/* static Vector3  */
_jstype.staticDefinition.Max = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 243, 14, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.Min = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 243, 15, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.MoveTowards = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 243, 16, true, a0, a1, a2); 
}
/* static Vector3  */
_jstype.staticDefinition.Normalize$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 243, 17, true, a0); 
}
/* static Vector3  */
_jstype.staticDefinition.op_Addition = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 243, 18, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.op_Division = function(a0/*Vector3*/, a1/*Single*/) { 
    
    return CS.Call(4, 243, 19, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 243, 20, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 243, 21, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.op_Multiply$$Single$$Vector3 = function(a0/*Single*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 243, 22, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.op_Multiply$$Vector3$$Single = function(a0/*Vector3*/, a1/*Single*/) { 
    
    return CS.Call(4, 243, 23, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.op_Subtraction = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 243, 24, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.op_UnaryNegation = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 243, 25, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.OrthoNormalize$$Vector3$$Vector3$$Vector3 = function(a0/*Vector3&*/, a1/*Vector3&*/, a2/*Vector3&*/) { 
    
    return CS.Call(4, 243, 26, true, a0, a1, a2); 
}
/* static Void  */
_jstype.staticDefinition.OrthoNormalize$$Vector3$$Vector3 = function(a0/*Vector3&*/, a1/*Vector3&*/) { 
    
    return CS.Call(4, 243, 27, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.Project = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 243, 28, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.ProjectOnPlane = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 243, 29, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.Reflect = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 243, 30, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.RotateTowards = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 243, 31, true, a0, a1, a2, a3); 
}
/* static Vector3  */
_jstype.staticDefinition.Scale$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 243, 32, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.Slerp = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Single*/) { 
    
    return CS.Call(4, 243, 33, true, a0, a1, a2); 
}
/* static Vector3  */
_jstype.staticDefinition.SmoothDamp$$Vector3$$Vector3$$Vector3$$Single$$Single$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Vector3&*/, a3/*Single*/, a4/*Single*/, a5/*Single*/) { 
    
    return CS.Call(4, 243, 34, true, a0, a1, a2, a3, a4, a5); 
}
/* static Vector3  */
_jstype.staticDefinition.SmoothDamp$$Vector3$$Vector3$$Vector3$$Single$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Vector3&*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 243, 35, true, a0, a1, a2, a3, a4); 
}
/* static Vector3  */
_jstype.staticDefinition.SmoothDamp$$Vector3$$Vector3$$Vector3$$Single = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Vector3&*/, a3/*Single*/) { 
    
    return CS.Call(4, 243, 36, true, a0, a1, a2, a3); 
}
/* static Single  */
_jstype.staticDefinition.SqrMagnitude = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 243, 37, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Color
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Color",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 244, 0, true, this); }
_jstype.definition.ctor$$Single$$Single$$Single$$Single = function(a0, a1, a2, a3) { CS.Call(5, 244, 1, true, this, a0, a1, a2, a3); }
_jstype.definition.ctor$$Single$$Single$$Single = function(a0, a1, a2) { CS.Call(5, 244, 2, true, this, a0, a1, a2); }

// fields

_jstype.fields.r =  { 
            get: function() { return CS.Call(0, 244, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 244, 0, false, this, v); } 
        };

_jstype.fields.g =  { 
            get: function() { return CS.Call(0, 244, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 244, 1, false, this, v); } 
        };

_jstype.fields.b =  { 
            get: function() { return CS.Call(0, 244, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 244, 2, false, this, v); } 
        };

_jstype.fields.a =  { 
            get: function() { return CS.Call(0, 244, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 244, 3, false, this, v); } 
        };

// properties

_jstype.staticDefinition.get_red = function() { return CS.Call(2, 244, 0, true); }
_jstype.staticDefinition.set_red = function(v) { return CS.Call(3, 244, 0, true, v); }

_jstype.staticDefinition.get_green = function() { return CS.Call(2, 244, 1, true); }
_jstype.staticDefinition.set_green = function(v) { return CS.Call(3, 244, 1, true, v); }

_jstype.staticDefinition.get_blue = function() { return CS.Call(2, 244, 2, true); }
_jstype.staticDefinition.set_blue = function(v) { return CS.Call(3, 244, 2, true, v); }

_jstype.staticDefinition.get_white = function() { return CS.Call(2, 244, 3, true); }
_jstype.staticDefinition.set_white = function(v) { return CS.Call(3, 244, 3, true, v); }

_jstype.staticDefinition.get_black = function() { return CS.Call(2, 244, 4, true); }
_jstype.staticDefinition.set_black = function(v) { return CS.Call(3, 244, 4, true, v); }

_jstype.staticDefinition.get_yellow = function() { return CS.Call(2, 244, 5, true); }
_jstype.staticDefinition.set_yellow = function(v) { return CS.Call(3, 244, 5, true, v); }

_jstype.staticDefinition.get_cyan = function() { return CS.Call(2, 244, 6, true); }
_jstype.staticDefinition.set_cyan = function(v) { return CS.Call(3, 244, 6, true, v); }

_jstype.staticDefinition.get_magenta = function() { return CS.Call(2, 244, 7, true); }
_jstype.staticDefinition.set_magenta = function(v) { return CS.Call(3, 244, 7, true, v); }

_jstype.staticDefinition.get_gray = function() { return CS.Call(2, 244, 8, true); }
_jstype.staticDefinition.set_gray = function(v) { return CS.Call(3, 244, 8, true, v); }

_jstype.staticDefinition.get_grey = function() { return CS.Call(2, 244, 9, true); }
_jstype.staticDefinition.set_grey = function(v) { return CS.Call(3, 244, 9, true, v); }

_jstype.staticDefinition.get_clear = function() { return CS.Call(2, 244, 10, true); }
_jstype.staticDefinition.set_clear = function(v) { return CS.Call(3, 244, 10, true, v); }

_jstype.definition.get_grayscale = function() { return CS.Call(2, 244, 11, false, this); }
_jstype.definition.set_grayscale = function(v) { return CS.Call(3, 244, 11, false, this, v); }

_jstype.definition.get_linear = function() { return CS.Call(2, 244, 12, false, this); }
_jstype.definition.set_linear = function(v) { return CS.Call(3, 244, 12, false, this, v); }

_jstype.definition.get_gamma = function() { return CS.Call(2, 244, 13, false, this); }
_jstype.definition.set_gamma = function(v) { return CS.Call(3, 244, 13, false, this, v); }

_jstype.definition.get_Item$$Int32 = function(ind0) { return CS.Call(2, 244, 14, false, this, ind0); }
_jstype.definition.set_Item$$Int32 = function(ind0, v) { return CS.Call(3, 244, 14, false, this, ind0, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 244, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 244, 1, false, this); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 244, 2, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 244, 3, false, this); 
}
/* static Color  */
_jstype.staticDefinition.Lerp = function(a0/*Color*/, a1/*Color*/, a2/*Single*/) { 
    
    return CS.Call(4, 244, 4, true, a0, a1, a2); 
}
/* static Color  */
_jstype.staticDefinition.op_Addition = function(a0/*Color*/, a1/*Color*/) { 
    
    return CS.Call(4, 244, 5, true, a0, a1); 
}
/* static Color  */
_jstype.staticDefinition.op_Division = function(a0/*Color*/, a1/*Single*/) { 
    
    return CS.Call(4, 244, 6, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Color*/, a1/*Color*/) { 
    
    return CS.Call(4, 244, 7, true, a0, a1); 
}
/* static Color  */
_jstype.staticDefinition.op_Implicit$$Vector4 = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 244, 8, true, a0); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Implicit$$Color = function(a0/*Color*/) { 
    
    return CS.Call(4, 244, 9, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Color*/, a1/*Color*/) { 
    
    return CS.Call(4, 244, 10, true, a0, a1); 
}
/* static Color  */
_jstype.staticDefinition.op_Multiply$$Color$$Color = function(a0/*Color*/, a1/*Color*/) { 
    
    return CS.Call(4, 244, 11, true, a0, a1); 
}
/* static Color  */
_jstype.staticDefinition.op_Multiply$$Color$$Single = function(a0/*Color*/, a1/*Single*/) { 
    
    return CS.Call(4, 244, 12, true, a0, a1); 
}
/* static Color  */
_jstype.staticDefinition.op_Multiply$$Single$$Color = function(a0/*Single*/, a1/*Color*/) { 
    
    return CS.Call(4, 244, 13, true, a0, a1); 
}
/* static Color  */
_jstype.staticDefinition.op_Subtraction = function(a0/*Color*/, a1/*Color*/) { 
    
    return CS.Call(4, 244, 14, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Color32
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Color32",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 245, 0, true, this); }
_jstype.definition.ctor$$Byte$$Byte$$Byte$$Byte = function(a0, a1, a2, a3) { CS.Call(5, 245, 1, true, this, a0, a1, a2, a3); }

// fields

_jstype.fields.r =  { 
            get: function() { return CS.Call(0, 245, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 245, 0, false, this, v); } 
        };

_jstype.fields.g =  { 
            get: function() { return CS.Call(0, 245, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 245, 1, false, this, v); } 
        };

_jstype.fields.b =  { 
            get: function() { return CS.Call(0, 245, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 245, 2, false, this, v); } 
        };

_jstype.fields.a =  { 
            get: function() { return CS.Call(0, 245, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 245, 3, false, this, v); } 
        };

// properties

// methods

/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 245, 0, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 245, 1, false, this); 
}
/* static Color32  */
_jstype.staticDefinition.Lerp = function(a0/*Color32*/, a1/*Color32*/, a2/*Single*/) { 
    
    return CS.Call(4, 245, 2, true, a0, a1, a2); 
}
/* static Color  */
_jstype.staticDefinition.op_Implicit$$Color32 = function(a0/*Color32*/) { 
    
    return CS.Call(4, 245, 3, true, a0); 
}
/* static Color32  */
_jstype.staticDefinition.op_Implicit$$Color = function(a0/*Color*/) { 
    
    return CS.Call(4, 245, 4, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Quaternion
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Quaternion",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 246, 0, true, this); }
_jstype.definition.ctor$$Single$$Single$$Single$$Single = function(a0, a1, a2, a3) { CS.Call(5, 246, 1, true, this, a0, a1, a2, a3); }

// fields

_jstype.staticFields.kEpsilon =  { 
            get: function() { return CS.Call(0, 246, 0, true); }, 
            set: function(v) { return CS.Call(1, 246, 0, true, v); } 
        };

_jstype.fields.x =  { 
            get: function() { return CS.Call(0, 246, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 246, 1, false, this, v); } 
        };

_jstype.fields.y =  { 
            get: function() { return CS.Call(0, 246, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 246, 2, false, this, v); } 
        };

_jstype.fields.z =  { 
            get: function() { return CS.Call(0, 246, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 246, 3, false, this, v); } 
        };

_jstype.fields.w =  { 
            get: function() { return CS.Call(0, 246, 4, false, this); }, 
            set: function(v) { return CS.Call(1, 246, 4, false, this, v); } 
        };

// properties

_jstype.definition.get_Item$$Int32 = function(ind0) { return CS.Call(2, 246, 0, false, this, ind0); }
_jstype.definition.set_Item$$Int32 = function(ind0, v) { return CS.Call(3, 246, 0, false, this, ind0, v); }

_jstype.staticDefinition.get_identity = function() { return CS.Call(2, 246, 1, true); }
_jstype.staticDefinition.set_identity = function(v) { return CS.Call(3, 246, 1, true, v); }

_jstype.definition.get_eulerAngles = function() { return CS.Call(2, 246, 2, false, this); }
_jstype.definition.set_eulerAngles = function(v) { return CS.Call(3, 246, 2, false, this, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 246, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 246, 1, false, this); 
}
/* Void */
_jstype.definition.Set = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 246, 2, false, this, a0, a1, a2, a3); 
}
/* Void */
_jstype.definition.SetFromToRotation = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 246, 3, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetLookRotation$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 246, 4, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetLookRotation$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 246, 5, false, this, a0); 
}
/* Void */
_jstype.definition.ToAngleAxis = function(a0/*Single&*/, a1/*Vector3&*/) { 
    
    return CS.Call(4, 246, 6, false, this, a0, a1); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 246, 7, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 246, 8, false, this); 
}
/* static Single  */
_jstype.staticDefinition.Angle = function(a0/*Quaternion*/, a1/*Quaternion*/) { 
    
    return CS.Call(4, 246, 9, true, a0, a1); 
}
/* static Quaternion  */
_jstype.staticDefinition.AngleAxis = function(a0/*Single*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 246, 10, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Dot = function(a0/*Quaternion*/, a1/*Quaternion*/) { 
    
    return CS.Call(4, 246, 11, true, a0, a1); 
}
/* static Quaternion  */
_jstype.staticDefinition.Euler$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 246, 12, true, a0, a1, a2); 
}
/* static Quaternion  */
_jstype.staticDefinition.Euler$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 246, 13, true, a0); 
}
/* static Quaternion  */
_jstype.staticDefinition.FromToRotation = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 246, 14, true, a0, a1); 
}
/* static Quaternion  */
_jstype.staticDefinition.Inverse = function(a0/*Quaternion*/) { 
    
    return CS.Call(4, 246, 15, true, a0); 
}
/* static Quaternion  */
_jstype.staticDefinition.Lerp = function(a0/*Quaternion*/, a1/*Quaternion*/, a2/*Single*/) { 
    
    return CS.Call(4, 246, 16, true, a0, a1, a2); 
}
/* static Quaternion  */
_jstype.staticDefinition.LookRotation$$Vector3$$Vector3 = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 246, 17, true, a0, a1); 
}
/* static Quaternion  */
_jstype.staticDefinition.LookRotation$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 246, 18, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Quaternion*/, a1/*Quaternion*/) { 
    
    return CS.Call(4, 246, 19, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Quaternion*/, a1/*Quaternion*/) { 
    
    return CS.Call(4, 246, 20, true, a0, a1); 
}
/* static Vector3  */
_jstype.staticDefinition.op_Multiply$$Quaternion$$Vector3 = function(a0/*Quaternion*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 246, 21, true, a0, a1); 
}
/* static Quaternion  */
_jstype.staticDefinition.op_Multiply$$Quaternion$$Quaternion = function(a0/*Quaternion*/, a1/*Quaternion*/) { 
    
    return CS.Call(4, 246, 22, true, a0, a1); 
}
/* static Quaternion  */
_jstype.staticDefinition.RotateTowards = function(a0/*Quaternion*/, a1/*Quaternion*/, a2/*Single*/) { 
    
    return CS.Call(4, 246, 23, true, a0, a1, a2); 
}
/* static Quaternion  */
_jstype.staticDefinition.Slerp = function(a0/*Quaternion*/, a1/*Quaternion*/, a2/*Single*/) { 
    
    return CS.Call(4, 246, 24, true, a0, a1, a2); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Rect
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Rect",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 247, 0, true, this); }
_jstype.definition.ctor$$Single$$Single$$Single$$Single = function(a0, a1, a2, a3) { CS.Call(5, 247, 1, true, this, a0, a1, a2, a3); }
_jstype.definition.ctor$$Rect = function(a0) { CS.Call(5, 247, 2, true, this, a0); }

// fields

// properties

_jstype.definition.get_x = function() { return CS.Call(2, 247, 0, false, this); }
_jstype.definition.set_x = function(v) { return CS.Call(3, 247, 0, false, this, v); }

_jstype.definition.get_y = function() { return CS.Call(2, 247, 1, false, this); }
_jstype.definition.set_y = function(v) { return CS.Call(3, 247, 1, false, this, v); }

_jstype.definition.get_position = function() { return CS.Call(2, 247, 2, false, this); }
_jstype.definition.set_position = function(v) { return CS.Call(3, 247, 2, false, this, v); }

_jstype.definition.get_center = function() { return CS.Call(2, 247, 3, false, this); }
_jstype.definition.set_center = function(v) { return CS.Call(3, 247, 3, false, this, v); }

_jstype.definition.get_min = function() { return CS.Call(2, 247, 4, false, this); }
_jstype.definition.set_min = function(v) { return CS.Call(3, 247, 4, false, this, v); }

_jstype.definition.get_max = function() { return CS.Call(2, 247, 5, false, this); }
_jstype.definition.set_max = function(v) { return CS.Call(3, 247, 5, false, this, v); }

_jstype.definition.get_width = function() { return CS.Call(2, 247, 6, false, this); }
_jstype.definition.set_width = function(v) { return CS.Call(3, 247, 6, false, this, v); }

_jstype.definition.get_height = function() { return CS.Call(2, 247, 7, false, this); }
_jstype.definition.set_height = function(v) { return CS.Call(3, 247, 7, false, this, v); }

_jstype.definition.get_size = function() { return CS.Call(2, 247, 8, false, this); }
_jstype.definition.set_size = function(v) { return CS.Call(3, 247, 8, false, this, v); }

_jstype.definition.get_xMin = function() { return CS.Call(2, 247, 9, false, this); }
_jstype.definition.set_xMin = function(v) { return CS.Call(3, 247, 9, false, this, v); }

_jstype.definition.get_yMin = function() { return CS.Call(2, 247, 10, false, this); }
_jstype.definition.set_yMin = function(v) { return CS.Call(3, 247, 10, false, this, v); }

_jstype.definition.get_xMax = function() { return CS.Call(2, 247, 11, false, this); }
_jstype.definition.set_xMax = function(v) { return CS.Call(3, 247, 11, false, this, v); }

_jstype.definition.get_yMax = function() { return CS.Call(2, 247, 12, false, this); }
_jstype.definition.set_yMax = function(v) { return CS.Call(3, 247, 12, false, this, v); }

// methods

/* Boolean */
_jstype.definition.Contains$$Vector3$$Boolean = function(a0/*Vector3*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 247, 0, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.Contains$$Vector2 = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 247, 1, false, this, a0); 
}
/* Boolean */
_jstype.definition.Contains$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 247, 2, false, this, a0); 
}
/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 247, 3, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 247, 4, false, this); 
}
/* Boolean */
_jstype.definition.Overlaps$$Rect$$Boolean = function(a0/*Rect*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 247, 5, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.Overlaps$$Rect = function(a0/*Rect*/) { 
    
    return CS.Call(4, 247, 6, false, this, a0); 
}
/* Void */
_jstype.definition.Set = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 247, 7, false, this, a0, a1, a2, a3); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 247, 8, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 247, 9, false, this); 
}
/* static Rect  */
_jstype.staticDefinition.MinMaxRect = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 247, 10, true, a0, a1, a2, a3); 
}
/* static Vector2  */
_jstype.staticDefinition.NormalizedToPoint = function(a0/*Rect*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 247, 11, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Rect*/, a1/*Rect*/) { 
    
    return CS.Call(4, 247, 12, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Rect*/, a1/*Rect*/) { 
    
    return CS.Call(4, 247, 13, true, a0, a1); 
}
/* static Vector2  */
_jstype.staticDefinition.PointToNormalized = function(a0/*Rect*/, a1/*Vector2*/) { 
    
    return CS.Call(4, 247, 14, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Matrix4x4
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Matrix4x4",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 248, 0, true, this); }

// fields

_jstype.fields.m00 =  { 
            get: function() { return CS.Call(0, 248, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 248, 0, false, this, v); } 
        };

_jstype.fields.m10 =  { 
            get: function() { return CS.Call(0, 248, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 248, 1, false, this, v); } 
        };

_jstype.fields.m20 =  { 
            get: function() { return CS.Call(0, 248, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 248, 2, false, this, v); } 
        };

_jstype.fields.m30 =  { 
            get: function() { return CS.Call(0, 248, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 248, 3, false, this, v); } 
        };

_jstype.fields.m01 =  { 
            get: function() { return CS.Call(0, 248, 4, false, this); }, 
            set: function(v) { return CS.Call(1, 248, 4, false, this, v); } 
        };

_jstype.fields.m11 =  { 
            get: function() { return CS.Call(0, 248, 5, false, this); }, 
            set: function(v) { return CS.Call(1, 248, 5, false, this, v); } 
        };

_jstype.fields.m21 =  { 
            get: function() { return CS.Call(0, 248, 6, false, this); }, 
            set: function(v) { return CS.Call(1, 248, 6, false, this, v); } 
        };

_jstype.fields.m31 =  { 
            get: function() { return CS.Call(0, 248, 7, false, this); }, 
            set: function(v) { return CS.Call(1, 248, 7, false, this, v); } 
        };

_jstype.fields.m02 =  { 
            get: function() { return CS.Call(0, 248, 8, false, this); }, 
            set: function(v) { return CS.Call(1, 248, 8, false, this, v); } 
        };

_jstype.fields.m12 =  { 
            get: function() { return CS.Call(0, 248, 9, false, this); }, 
            set: function(v) { return CS.Call(1, 248, 9, false, this, v); } 
        };

_jstype.fields.m22 =  { 
            get: function() { return CS.Call(0, 248, 10, false, this); }, 
            set: function(v) { return CS.Call(1, 248, 10, false, this, v); } 
        };

_jstype.fields.m32 =  { 
            get: function() { return CS.Call(0, 248, 11, false, this); }, 
            set: function(v) { return CS.Call(1, 248, 11, false, this, v); } 
        };

_jstype.fields.m03 =  { 
            get: function() { return CS.Call(0, 248, 12, false, this); }, 
            set: function(v) { return CS.Call(1, 248, 12, false, this, v); } 
        };

_jstype.fields.m13 =  { 
            get: function() { return CS.Call(0, 248, 13, false, this); }, 
            set: function(v) { return CS.Call(1, 248, 13, false, this, v); } 
        };

_jstype.fields.m23 =  { 
            get: function() { return CS.Call(0, 248, 14, false, this); }, 
            set: function(v) { return CS.Call(1, 248, 14, false, this, v); } 
        };

_jstype.fields.m33 =  { 
            get: function() { return CS.Call(0, 248, 15, false, this); }, 
            set: function(v) { return CS.Call(1, 248, 15, false, this, v); } 
        };

// properties

_jstype.definition.get_Item$$Int32$$Int32 = function(ind0, ind1) { return CS.Call(2, 248, 0, false, this, ind0, ind1); }
_jstype.definition.set_Item$$Int32$$Int32 = function(ind0, ind1, v) { return CS.Call(3, 248, 0, false, this, ind0, ind1, v); }

_jstype.definition.get_Item$$Int32 = function(ind0) { return CS.Call(2, 248, 1, false, this, ind0); }
_jstype.definition.set_Item$$Int32 = function(ind0, v) { return CS.Call(3, 248, 1, false, this, ind0, v); }

_jstype.definition.get_inverse = function() { return CS.Call(2, 248, 2, false, this); }
_jstype.definition.set_inverse = function(v) { return CS.Call(3, 248, 2, false, this, v); }

_jstype.definition.get_transpose = function() { return CS.Call(2, 248, 3, false, this); }
_jstype.definition.set_transpose = function(v) { return CS.Call(3, 248, 3, false, this, v); }

_jstype.definition.get_isIdentity = function() { return CS.Call(2, 248, 4, false, this); }
_jstype.definition.set_isIdentity = function(v) { return CS.Call(3, 248, 4, false, this, v); }

_jstype.staticDefinition.get_zero = function() { return CS.Call(2, 248, 5, true); }
_jstype.staticDefinition.set_zero = function(v) { return CS.Call(3, 248, 5, true, v); }

_jstype.staticDefinition.get_identity = function() { return CS.Call(2, 248, 6, true); }
_jstype.staticDefinition.set_identity = function(v) { return CS.Call(3, 248, 6, true, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 248, 0, false, this, a0); 
}
/* Vector4 */
_jstype.definition.GetColumn = function(a0/*Int32*/) { 
    
    return CS.Call(4, 248, 1, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 248, 2, false, this); 
}
/* Vector4 */
_jstype.definition.GetRow = function(a0/*Int32*/) { 
    
    return CS.Call(4, 248, 3, false, this, a0); 
}
/* Vector3 */
_jstype.definition.MultiplyPoint = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 248, 4, false, this, a0); 
}
/* Vector3 */
_jstype.definition.MultiplyPoint3x4 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 248, 5, false, this, a0); 
}
/* Vector3 */
_jstype.definition.MultiplyVector = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 248, 6, false, this, a0); 
}
/* Void */
_jstype.definition.SetColumn = function(a0/*Int32*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 248, 7, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetRow = function(a0/*Int32*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 248, 8, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetTRS = function(a0/*Vector3*/, a1/*Quaternion*/, a2/*Vector3*/) { 
    
    return CS.Call(4, 248, 9, false, this, a0, a1, a2); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 248, 10, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 248, 11, false, this); 
}
/* static Matrix4x4  */
_jstype.staticDefinition.Inverse = function(a0/*Matrix4x4*/) { 
    
    return CS.Call(4, 248, 12, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Matrix4x4*/, a1/*Matrix4x4*/) { 
    
    return CS.Call(4, 248, 13, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Matrix4x4*/, a1/*Matrix4x4*/) { 
    
    return CS.Call(4, 248, 14, true, a0, a1); 
}
/* static Matrix4x4  */
_jstype.staticDefinition.op_Multiply$$Matrix4x4$$Matrix4x4 = function(a0/*Matrix4x4*/, a1/*Matrix4x4*/) { 
    
    return CS.Call(4, 248, 15, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Multiply$$Matrix4x4$$Vector4 = function(a0/*Matrix4x4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 248, 16, true, a0, a1); 
}
/* static Matrix4x4  */
_jstype.staticDefinition.Ortho = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/, a4/*Single*/, a5/*Single*/) { 
    
    return CS.Call(4, 248, 17, true, a0, a1, a2, a3, a4, a5); 
}
/* static Matrix4x4  */
_jstype.staticDefinition.Perspective = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 248, 18, true, a0, a1, a2, a3); 
}
/* static Matrix4x4  */
_jstype.staticDefinition.Scale = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 248, 19, true, a0); 
}
/* static Matrix4x4  */
_jstype.staticDefinition.Transpose = function(a0/*Matrix4x4*/) { 
    
    return CS.Call(4, 248, 20, true, a0); 
}
/* static Matrix4x4  */
_jstype.staticDefinition.TRS = function(a0/*Vector3*/, a1/*Quaternion*/, a2/*Vector3*/) { 
    
    return CS.Call(4, 248, 21, true, a0, a1, a2); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Bounds
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Bounds",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 249, 0, true, this); }
_jstype.definition.ctor$$Vector3$$Vector3 = function(a0, a1) { CS.Call(5, 249, 1, true, this, a0, a1); }

// fields

// properties

_jstype.definition.get_center = function() { return CS.Call(2, 249, 0, false, this); }
_jstype.definition.set_center = function(v) { return CS.Call(3, 249, 0, false, this, v); }

_jstype.definition.get_size = function() { return CS.Call(2, 249, 1, false, this); }
_jstype.definition.set_size = function(v) { return CS.Call(3, 249, 1, false, this, v); }

_jstype.definition.get_extents = function() { return CS.Call(2, 249, 2, false, this); }
_jstype.definition.set_extents = function(v) { return CS.Call(3, 249, 2, false, this, v); }

_jstype.definition.get_min = function() { return CS.Call(2, 249, 3, false, this); }
_jstype.definition.set_min = function(v) { return CS.Call(3, 249, 3, false, this, v); }

_jstype.definition.get_max = function() { return CS.Call(2, 249, 4, false, this); }
_jstype.definition.set_max = function(v) { return CS.Call(3, 249, 4, false, this, v); }

// methods

/* Boolean */
_jstype.definition.Contains = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 249, 0, false, this, a0); 
}
/* Void */
_jstype.definition.Encapsulate$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 249, 1, false, this, a0); 
}
/* Void */
_jstype.definition.Encapsulate$$Bounds = function(a0/*Bounds*/) { 
    
    return CS.Call(4, 249, 2, false, this, a0); 
}
/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 249, 3, false, this, a0); 
}
/* Void */
_jstype.definition.Expand$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 249, 4, false, this, a0); 
}
/* Void */
_jstype.definition.Expand$$Single = function(a0/*Single*/) { 
    
    return CS.Call(4, 249, 5, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 249, 6, false, this); 
}
/* Boolean */
_jstype.definition.IntersectRay$$Ray$$Single = function(a0/*Ray*/, a1/*Single&*/) { 
    
    return CS.Call(4, 249, 7, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.IntersectRay$$Ray = function(a0/*Ray*/) { 
    
    return CS.Call(4, 249, 8, false, this, a0); 
}
/* Boolean */
_jstype.definition.Intersects = function(a0/*Bounds*/) { 
    
    return CS.Call(4, 249, 9, false, this, a0); 
}
/* Void */
_jstype.definition.SetMinMax = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 249, 10, false, this, a0, a1); 
}
/* Single */
_jstype.definition.SqrDistance = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 249, 11, false, this, a0); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 249, 12, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 249, 13, false, this); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Bounds*/, a1/*Bounds*/) { 
    
    return CS.Call(4, 249, 14, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Bounds*/, a1/*Bounds*/) { 
    
    return CS.Call(4, 249, 15, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Vector4
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Vector4",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 250, 0, true, this); }
_jstype.definition.ctor$$Single$$Single$$Single$$Single = function(a0, a1, a2, a3) { CS.Call(5, 250, 1, true, this, a0, a1, a2, a3); }
_jstype.definition.ctor$$Single$$Single$$Single = function(a0, a1, a2) { CS.Call(5, 250, 2, true, this, a0, a1, a2); }
_jstype.definition.ctor$$Single$$Single = function(a0, a1) { CS.Call(5, 250, 3, true, this, a0, a1); }

// fields

_jstype.staticFields.kEpsilon =  { 
            get: function() { return CS.Call(0, 250, 0, true); }, 
            set: function(v) { return CS.Call(1, 250, 0, true, v); } 
        };

_jstype.fields.x =  { 
            get: function() { return CS.Call(0, 250, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 250, 1, false, this, v); } 
        };

_jstype.fields.y =  { 
            get: function() { return CS.Call(0, 250, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 250, 2, false, this, v); } 
        };

_jstype.fields.z =  { 
            get: function() { return CS.Call(0, 250, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 250, 3, false, this, v); } 
        };

_jstype.fields.w =  { 
            get: function() { return CS.Call(0, 250, 4, false, this); }, 
            set: function(v) { return CS.Call(1, 250, 4, false, this, v); } 
        };

// properties

_jstype.definition.get_Item$$Int32 = function(ind0) { return CS.Call(2, 250, 0, false, this, ind0); }
_jstype.definition.set_Item$$Int32 = function(ind0, v) { return CS.Call(3, 250, 0, false, this, ind0, v); }

_jstype.definition.get_normalized = function() { return CS.Call(2, 250, 1, false, this); }
_jstype.definition.set_normalized = function(v) { return CS.Call(3, 250, 1, false, this, v); }

_jstype.definition.get_magnitude = function() { return CS.Call(2, 250, 2, false, this); }
_jstype.definition.set_magnitude = function(v) { return CS.Call(3, 250, 2, false, this, v); }

_jstype.definition.get_sqrMagnitude = function() { return CS.Call(2, 250, 3, false, this); }
_jstype.definition.set_sqrMagnitude = function(v) { return CS.Call(3, 250, 3, false, this, v); }

_jstype.staticDefinition.get_zero = function() { return CS.Call(2, 250, 4, true); }
_jstype.staticDefinition.set_zero = function(v) { return CS.Call(3, 250, 4, true, v); }

_jstype.staticDefinition.get_one = function() { return CS.Call(2, 250, 5, true); }
_jstype.staticDefinition.set_one = function(v) { return CS.Call(3, 250, 5, true, v); }

// methods

/* Boolean */
_jstype.definition.Equals = function(a0/*Object*/) { 
    
    return CS.Call(4, 250, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 250, 1, false, this); 
}
/* Void */
_jstype.definition.Normalize = function() { 
    
    return CS.Call(4, 250, 2, false, this); 
}
/* Void */
_jstype.definition.Scale$$Vector4 = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 250, 3, false, this, a0); 
}
/* Void */
_jstype.definition.Set = function(a0/*Single*/, a1/*Single*/, a2/*Single*/, a3/*Single*/) { 
    
    return CS.Call(4, 250, 4, false, this, a0, a1, a2, a3); 
}
/* Single */
_jstype.definition.SqrMagnitude = function() { 
    
    return CS.Call(4, 250, 5, false, this); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 250, 6, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 250, 7, false, this); 
}
/* static Single  */
_jstype.staticDefinition.Distance = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 250, 8, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Dot = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 250, 9, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.Lerp = function(a0/*Vector4*/, a1/*Vector4*/, a2/*Single*/) { 
    
    return CS.Call(4, 250, 10, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.Magnitude = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 250, 11, true, a0); 
}
/* static Vector4  */
_jstype.staticDefinition.Max = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 250, 12, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.Min = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 250, 13, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.MoveTowards = function(a0/*Vector4*/, a1/*Vector4*/, a2/*Single*/) { 
    
    return CS.Call(4, 250, 14, true, a0, a1, a2); 
}
/* static Vector4  */
_jstype.staticDefinition.Normalize$$Vector4 = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 250, 15, true, a0); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Addition = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 250, 16, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Division = function(a0/*Vector4*/, a1/*Single*/) { 
    
    return CS.Call(4, 250, 17, true, a0, a1); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Equality = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 250, 18, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Implicit$$Vector3 = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 250, 19, true, a0); 
}
/* static Vector2  */
_jstype.staticDefinition.op_Implicit$$Vector4 = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 250, 20, true, a0); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Implicit$$Vector2 = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 250, 21, true, a0); 
}
/* static Vector3  */
_jstype.staticDefinition.op_Implicit$$Vector4 = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 250, 22, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.op_Inequality = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 250, 23, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Multiply$$Vector4$$Single = function(a0/*Vector4*/, a1/*Single*/) { 
    
    return CS.Call(4, 250, 24, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Multiply$$Single$$Vector4 = function(a0/*Single*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 250, 25, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.op_Subtraction = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 250, 26, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.op_UnaryNegation = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 250, 27, true, a0); 
}
/* static Vector4  */
_jstype.staticDefinition.Project = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 250, 28, true, a0, a1); 
}
/* static Vector4  */
_jstype.staticDefinition.Scale$$Vector4$$Vector4 = function(a0/*Vector4*/, a1/*Vector4*/) { 
    
    return CS.Call(4, 250, 29, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.SqrMagnitude$$Vector4 = function(a0/*Vector4*/) { 
    
    return CS.Call(4, 250, 30, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Ray
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Ray",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 251, 0, true, this); }
_jstype.definition.ctor$$Vector3$$Vector3 = function(a0, a1) { CS.Call(5, 251, 1, true, this, a0, a1); }

// fields

// properties

_jstype.definition.get_origin = function() { return CS.Call(2, 251, 0, false, this); }
_jstype.definition.set_origin = function(v) { return CS.Call(3, 251, 0, false, this, v); }

_jstype.definition.get_direction = function() { return CS.Call(2, 251, 1, false, this); }
_jstype.definition.set_direction = function(v) { return CS.Call(3, 251, 1, false, this, v); }

// methods

/* Vector3 */
_jstype.definition.GetPoint = function(a0/*Single*/) { 
    
    return CS.Call(4, 251, 0, false, this, a0); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 251, 1, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 251, 2, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Ray2D
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Ray2D",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 252, 0, true, this); }
_jstype.definition.ctor$$Vector2$$Vector2 = function(a0, a1) { CS.Call(5, 252, 1, true, this, a0, a1); }

// fields

// properties

_jstype.definition.get_origin = function() { return CS.Call(2, 252, 0, false, this); }
_jstype.definition.set_origin = function(v) { return CS.Call(3, 252, 0, false, this, v); }

_jstype.definition.get_direction = function() { return CS.Call(2, 252, 1, false, this); }
_jstype.definition.set_direction = function(v) { return CS.Call(3, 252, 1, false, this, v); }

// methods

/* Vector2 */
_jstype.definition.GetPoint = function(a0/*Single*/) { 
    
    return CS.Call(4, 252, 0, false, this, a0); 
}
/* String */
_jstype.definition.toString$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 252, 1, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 252, 2, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Plane
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Plane",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 253, 0, true, this); }
_jstype.definition.ctor$$Vector3$$Vector3 = function(a0, a1) { CS.Call(5, 253, 1, true, this, a0, a1); }
_jstype.definition.ctor$$Vector3$$Single = function(a0, a1) { CS.Call(5, 253, 2, true, this, a0, a1); }
_jstype.definition.ctor$$Vector3$$Vector3$$Vector3 = function(a0, a1, a2) { CS.Call(5, 253, 3, true, this, a0, a1, a2); }

// fields

// properties

_jstype.definition.get_normal = function() { return CS.Call(2, 253, 0, false, this); }
_jstype.definition.set_normal = function(v) { return CS.Call(3, 253, 0, false, this, v); }

_jstype.definition.get_distance = function() { return CS.Call(2, 253, 1, false, this); }
_jstype.definition.set_distance = function(v) { return CS.Call(3, 253, 1, false, this, v); }

// methods

/* Single */
_jstype.definition.GetDistanceToPoint = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 253, 0, false, this, a0); 
}
/* Boolean */
_jstype.definition.GetSide = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 253, 1, false, this, a0); 
}
/* Boolean */
_jstype.definition.Raycast = function(a0/*Ray*/, a1/*Single&*/) { 
    
    return CS.Call(4, 253, 2, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.SameSide = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 253, 3, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Set3Points = function(a0/*Vector3*/, a1/*Vector3*/, a2/*Vector3*/) { 
    
    return CS.Call(4, 253, 4, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.SetNormalAndPosition = function(a0/*Vector3*/, a1/*Vector3*/) { 
    
    return CS.Call(4, 253, 5, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Mathf
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Mathf",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 254, 0, true, this); }

// fields

_jstype.staticFields.PI =  { 
            get: function() { return CS.Call(0, 254, 0, true); }, 
            set: function(v) { return CS.Call(1, 254, 0, true, v); } 
        };

_jstype.staticFields.Infinity =  { 
            get: function() { return CS.Call(0, 254, 1, true); }, 
            set: function(v) { return CS.Call(1, 254, 1, true, v); } 
        };

_jstype.staticFields.NegativeInfinity =  { 
            get: function() { return CS.Call(0, 254, 2, true); }, 
            set: function(v) { return CS.Call(1, 254, 2, true, v); } 
        };

_jstype.staticFields.Deg2Rad =  { 
            get: function() { return CS.Call(0, 254, 3, true); }, 
            set: function(v) { return CS.Call(1, 254, 3, true, v); } 
        };

_jstype.staticFields.Rad2Deg =  { 
            get: function() { return CS.Call(0, 254, 4, true); }, 
            set: function(v) { return CS.Call(1, 254, 4, true, v); } 
        };

_jstype.staticFields.Epsilon =  { 
            get: function() { return CS.Call(0, 254, 5, true); }, 
            set: function(v) { return CS.Call(1, 254, 5, true, v); } 
        };

// properties

// methods

/* static Single  */
_jstype.staticDefinition.Abs$$Single = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 0, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.Abs$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 254, 1, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Acos = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 2, true, a0); 
}
/* static Boolean  */
_jstype.staticDefinition.Approximately = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 254, 3, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Asin = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 4, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Atan = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 5, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Atan2 = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 254, 6, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Ceil = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 7, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.CeilToInt = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 8, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.Clamp$$Int32$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/, a2/*Int32*/) { 
    
    return CS.Call(4, 254, 9, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.Clamp$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 254, 10, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.Clamp01 = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 11, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.ClosestPowerOfTwo = function(a0/*Int32*/) { 
    
    return CS.Call(4, 254, 12, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Cos = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 13, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.DeltaAngle = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 254, 14, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Exp = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 15, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Floor = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 16, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.FloorToInt = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 17, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Gamma = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 254, 18, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.GammaToLinearSpace = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 19, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.InverseLerp = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 254, 20, true, a0, a1, a2); 
}
/* static Boolean  */
_jstype.staticDefinition.IsPowerOfTwo = function(a0/*Int32*/) { 
    
    return CS.Call(4, 254, 21, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Lerp = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 254, 22, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.LerpAngle = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 254, 23, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.LinearToGammaSpace = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 24, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Log$$Single$$Single = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 254, 25, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Log$$Single = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 26, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Log10 = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 27, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Max$$Single$$Single = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 254, 28, true, a0, a1); 
}
/* static Int32  */
_jstype.staticDefinition.Max$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 254, 29, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Max$$Single$Array = function(a0/*Single[]*/) { 
    
    return CS.Call(4, 254, 30, true, jsb_formatParamsArray(0, a0, arguments)); 
}
/* static Int32  */
_jstype.staticDefinition.Max$$Int32$Array = function(a0/*Int32[]*/) { 
    
    return CS.Call(4, 254, 31, true, jsb_formatParamsArray(0, a0, arguments)); 
}
/* static Single  */
_jstype.staticDefinition.Min$$Single$$Single = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 254, 32, true, a0, a1); 
}
/* static Int32  */
_jstype.staticDefinition.Min$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 254, 33, true, a0, a1); 
}
/* static Int32  */
_jstype.staticDefinition.Min$$Int32$Array = function(a0/*Int32[]*/) { 
    
    return CS.Call(4, 254, 34, true, jsb_formatParamsArray(0, a0, arguments)); 
}
/* static Single  */
_jstype.staticDefinition.Min$$Single$Array = function(a0/*Single[]*/) { 
    
    return CS.Call(4, 254, 35, true, jsb_formatParamsArray(0, a0, arguments)); 
}
/* static Single  */
_jstype.staticDefinition.MoveTowards = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 254, 36, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.MoveTowardsAngle = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 254, 37, true, a0, a1, a2); 
}
/* static Int32  */
_jstype.staticDefinition.NextPowerOfTwo = function(a0/*Int32*/) { 
    
    return CS.Call(4, 254, 38, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.PerlinNoise = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 254, 39, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.PingPong = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 254, 40, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Pow = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 254, 41, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Repeat = function(a0/*Single*/, a1/*Single*/) { 
    
    return CS.Call(4, 254, 42, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.Round = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 43, true, a0); 
}
/* static Int32  */
_jstype.staticDefinition.RoundToInt = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 44, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Sign = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 45, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Sin = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 46, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.SmoothDamp$$Single$$Single$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single&*/, a3/*Single*/, a4/*Single*/, a5/*Single*/) { 
    
    return CS.Call(4, 254, 47, true, a0, a1, a2, a3, a4, a5); 
}
/* static Single  */
_jstype.staticDefinition.SmoothDamp$$Single$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single&*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 254, 48, true, a0, a1, a2, a3, a4); 
}
/* static Single  */
_jstype.staticDefinition.SmoothDamp$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single&*/, a3/*Single*/) { 
    
    return CS.Call(4, 254, 49, true, a0, a1, a2, a3); 
}
/* static Single  */
_jstype.staticDefinition.SmoothDampAngle$$Single$$Single$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single&*/, a3/*Single*/, a4/*Single*/, a5/*Single*/) { 
    
    return CS.Call(4, 254, 50, true, a0, a1, a2, a3, a4, a5); 
}
/* static Single  */
_jstype.staticDefinition.SmoothDampAngle$$Single$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single&*/, a3/*Single*/, a4/*Single*/) { 
    
    return CS.Call(4, 254, 51, true, a0, a1, a2, a3, a4); 
}
/* static Single  */
_jstype.staticDefinition.SmoothDampAngle$$Single$$Single$$Single$$Single = function(a0/*Single*/, a1/*Single*/, a2/*Single&*/, a3/*Single*/) { 
    
    return CS.Call(4, 254, 52, true, a0, a1, a2, a3); 
}
/* static Single  */
_jstype.staticDefinition.SmoothStep = function(a0/*Single*/, a1/*Single*/, a2/*Single*/) { 
    
    return CS.Call(4, 254, 53, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.Sqrt = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 54, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.Tan = function(a0/*Single*/) { 
    
    return CS.Call(4, 254, 55, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Touch
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.Touch",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 255, 0, true, this); }

// fields

// properties

_jstype.definition.get_fingerId = function() { return CS.Call(2, 255, 0, false, this); }
_jstype.definition.set_fingerId = function(v) { return CS.Call(3, 255, 0, false, this, v); }

_jstype.definition.get_position = function() { return CS.Call(2, 255, 1, false, this); }
_jstype.definition.set_position = function(v) { return CS.Call(3, 255, 1, false, this, v); }

_jstype.definition.get_rawPosition = function() { return CS.Call(2, 255, 2, false, this); }
_jstype.definition.set_rawPosition = function(v) { return CS.Call(3, 255, 2, false, this, v); }

_jstype.definition.get_deltaPosition = function() { return CS.Call(2, 255, 3, false, this); }
_jstype.definition.set_deltaPosition = function(v) { return CS.Call(3, 255, 3, false, this, v); }

_jstype.definition.get_deltaTime = function() { return CS.Call(2, 255, 4, false, this); }
_jstype.definition.set_deltaTime = function(v) { return CS.Call(3, 255, 4, false, this, v); }

_jstype.definition.get_tapCount = function() { return CS.Call(2, 255, 5, false, this); }
_jstype.definition.set_tapCount = function(v) { return CS.Call(3, 255, 5, false, this, v); }

_jstype.definition.get_phase = function() { return CS.Call(2, 255, 6, false, this); }
_jstype.definition.set_phase = function(v) { return CS.Call(3, 255, 6, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$AccelerationEvent
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.AccelerationEvent",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 256, 0, true, this); }

// fields

// properties

_jstype.definition.get_acceleration = function() { return CS.Call(2, 256, 0, false, this); }
_jstype.definition.set_acceleration = function(v) { return CS.Call(3, 256, 0, false, this, v); }

_jstype.definition.get_deltaTime = function() { return CS.Call(2, 256, 1, false, this); }
_jstype.definition.set_deltaTime = function(v) { return CS.Call(3, 256, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$LocationInfo
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.LocationInfo",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 257, 0, true, this); }

// fields

// properties

_jstype.definition.get_latitude = function() { return CS.Call(2, 257, 0, false, this); }
_jstype.definition.set_latitude = function(v) { return CS.Call(3, 257, 0, false, this, v); }

_jstype.definition.get_longitude = function() { return CS.Call(2, 257, 1, false, this); }
_jstype.definition.set_longitude = function(v) { return CS.Call(3, 257, 1, false, this, v); }

_jstype.definition.get_altitude = function() { return CS.Call(2, 257, 2, false, this); }
_jstype.definition.set_altitude = function(v) { return CS.Call(3, 257, 2, false, this, v); }

_jstype.definition.get_horizontalAccuracy = function() { return CS.Call(2, 257, 3, false, this); }
_jstype.definition.set_horizontalAccuracy = function(v) { return CS.Call(3, 257, 3, false, this, v); }

_jstype.definition.get_verticalAccuracy = function() { return CS.Call(2, 257, 4, false, this); }
_jstype.definition.set_verticalAccuracy = function(v) { return CS.Call(3, 257, 4, false, this, v); }

_jstype.definition.get_timestamp = function() { return CS.Call(2, 257, 5, false, this); }
_jstype.definition.set_timestamp = function(v) { return CS.Call(3, 257, 5, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Diagnostics$Stopwatch
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Diagnostics.Stopwatch",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 258, 0, true, this); }

// fields

_jstype.staticFields.Frequency =  { 
            get: function() { return CS.Call(0, 258, 0, true); }, 
            set: function(v) { return CS.Call(1, 258, 0, true, v); } 
        };

_jstype.staticFields.IsHighResolution =  { 
            get: function() { return CS.Call(0, 258, 1, true); }, 
            set: function(v) { return CS.Call(1, 258, 1, true, v); } 
        };

// properties

_jstype.definition.get_Elapsed = function() { return CS.Call(2, 258, 0, false, this); }
_jstype.definition.set_Elapsed = function(v) { return CS.Call(3, 258, 0, false, this, v); }

_jstype.definition.get_ElapsedMilliseconds = function() { return CS.Call(2, 258, 1, false, this); }
_jstype.definition.set_ElapsedMilliseconds = function(v) { return CS.Call(3, 258, 1, false, this, v); }

_jstype.definition.get_ElapsedTicks = function() { return CS.Call(2, 258, 2, false, this); }
_jstype.definition.set_ElapsedTicks = function(v) { return CS.Call(3, 258, 2, false, this, v); }

_jstype.definition.get_IsRunning = function() { return CS.Call(2, 258, 3, false, this); }
_jstype.definition.set_IsRunning = function(v) { return CS.Call(3, 258, 3, false, this, v); }

// methods

/* Void */
_jstype.definition.Reset = function() { 
    
    return CS.Call(4, 258, 0, false, this); 
}
/* Void */
_jstype.definition.Start = function() { 
    
    return CS.Call(4, 258, 1, false, this); 
}
/* Void */
_jstype.definition.Stop = function() { 
    
    return CS.Call(4, 258, 2, false, this); 
}
/* static Int64  */
_jstype.staticDefinition.GetTimestamp = function() { 
    
    return CS.Call(4, 258, 3, true); 
}
/* static Stopwatch  */
_jstype.staticDefinition.StartNew = function() { 
    
    return CS.Call(4, 258, 4, true); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$MovieTexture
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.MovieTexture",
    baseTypeName: "UnityEngine.Texture"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 259, 0, true, this); }

// fields

// properties

_jstype.definition.get_audioClip = function() { return CS.Call(2, 259, 0, false, this); }
_jstype.definition.set_audioClip = function(v) { return CS.Call(3, 259, 0, false, this, v); }

_jstype.definition.get_loop = function() { return CS.Call(2, 259, 1, false, this); }
_jstype.definition.set_loop = function(v) { return CS.Call(3, 259, 1, false, this, v); }

_jstype.definition.get_isPlaying = function() { return CS.Call(2, 259, 2, false, this); }
_jstype.definition.set_isPlaying = function(v) { return CS.Call(3, 259, 2, false, this, v); }

_jstype.definition.get_isReadyToPlay = function() { return CS.Call(2, 259, 3, false, this); }
_jstype.definition.set_isReadyToPlay = function(v) { return CS.Call(3, 259, 3, false, this, v); }

_jstype.definition.get_duration = function() { return CS.Call(2, 259, 4, false, this); }
_jstype.definition.set_duration = function(v) { return CS.Call(3, 259, 4, false, this, v); }

// methods

/* Void */
_jstype.definition.Pause = function() { 
    
    return CS.Call(4, 259, 0, false, this); 
}
/* Void */
_jstype.definition.Play = function() { 
    
    return CS.Call(4, 259, 1, false, this); 
}
/* Void */
_jstype.definition.Stop = function() { 
    
    return CS.Call(4, 259, 2, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Motion
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Motion",
    baseTypeName: "UnityEngine.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$IEventSystemHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.IEventSystemHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$IPointerEnterHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.IPointerEnterHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnPointerEnter = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 262, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$IPointerExitHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.IPointerExitHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnPointerExit = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 263, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$IPointerDownHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.IPointerDownHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnPointerDown = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 264, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$IPointerUpHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.IPointerUpHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnPointerUp = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 265, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$IPointerClickHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.IPointerClickHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnPointerClick = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 266, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$IBeginDragHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.IBeginDragHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnBeginDrag = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 267, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$IInitializePotentialDragHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.IInitializePotentialDragHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnInitializePotentialDrag = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 268, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$IDragHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.IDragHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnDrag = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 269, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$IEndDragHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.IEndDragHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnEndDrag = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 270, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$IDropHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.IDropHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnDrop = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 271, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$IScrollHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.IScrollHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnScroll = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 272, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$IUpdateSelectedHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.IUpdateSelectedHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnUpdateSelected = function(a0/*BaseEventData*/) { 
    
    return CS.Call(4, 273, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$ISelectHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.ISelectHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnSelect = function(a0/*BaseEventData*/) { 
    
    return CS.Call(4, 274, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$IDeselectHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.IDeselectHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnDeselect = function(a0/*BaseEventData*/) { 
    
    return CS.Call(4, 275, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$IMoveHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.IMoveHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnMove = function(a0/*AxisEventData*/) { 
    
    return CS.Call(4, 276, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$ISubmitHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.ISubmitHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnSubmit = function(a0/*BaseEventData*/) { 
    
    return CS.Call(4, 277, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$ICancelHandler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.EventSystems.ICancelHandler",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.OnCancel = function(a0/*BaseEventData*/) { 
    
    return CS.Call(4, 278, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$ICanvasElement
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.UI.ICanvasElement",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_transform = function() { return CS.Call(2, 279, 0, false, this); }
_jstype.definition.set_transform = function(v) { return CS.Call(3, 279, 0, false, this, v); }

// methods

/* Boolean */
_jstype.definition.IsDestroyed = function() { 
    
    return CS.Call(4, 279, 0, false, this); 
}
/* Void */
_jstype.definition.Rebuild = function(a0/*CanvasUpdate*/) { 
    
    return CS.Call(4, 279, 1, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$IMask
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.UI.IMask",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Boolean */
_jstype.definition.MaskEnabled = function() { 
    
    return CS.Call(4, 280, 0, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$IMaskable
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.UI.IMaskable",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.ParentMaskStateChanged = function() { 
    
    return CS.Call(4, 281, 0, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$ILayoutElement
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.UI.ILayoutElement",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_minWidth = function() { return CS.Call(2, 282, 0, false, this); }
_jstype.definition.set_minWidth = function(v) { return CS.Call(3, 282, 0, false, this, v); }

_jstype.definition.get_preferredWidth = function() { return CS.Call(2, 282, 1, false, this); }
_jstype.definition.set_preferredWidth = function(v) { return CS.Call(3, 282, 1, false, this, v); }

_jstype.definition.get_flexibleWidth = function() { return CS.Call(2, 282, 2, false, this); }
_jstype.definition.set_flexibleWidth = function(v) { return CS.Call(3, 282, 2, false, this, v); }

_jstype.definition.get_minHeight = function() { return CS.Call(2, 282, 3, false, this); }
_jstype.definition.set_minHeight = function(v) { return CS.Call(3, 282, 3, false, this, v); }

_jstype.definition.get_preferredHeight = function() { return CS.Call(2, 282, 4, false, this); }
_jstype.definition.set_preferredHeight = function(v) { return CS.Call(3, 282, 4, false, this, v); }

_jstype.definition.get_flexibleHeight = function() { return CS.Call(2, 282, 5, false, this); }
_jstype.definition.set_flexibleHeight = function(v) { return CS.Call(3, 282, 5, false, this, v); }

_jstype.definition.get_layoutPriority = function() { return CS.Call(2, 282, 6, false, this); }
_jstype.definition.set_layoutPriority = function(v) { return CS.Call(3, 282, 6, false, this, v); }

// methods

/* Void */
_jstype.definition.CalculateLayoutInputHorizontal = function() { 
    
    return CS.Call(4, 282, 0, false, this); 
}
/* Void */
_jstype.definition.CalculateLayoutInputVertical = function() { 
    
    return CS.Call(4, 282, 1, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$ILayoutController
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.UI.ILayoutController",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.SetLayoutHorizontal = function() { 
    
    return CS.Call(4, 283, 0, false, this); 
}
/* Void */
_jstype.definition.SetLayoutVertical = function() { 
    
    return CS.Call(4, 283, 1, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$ILayoutGroup
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.UI.ILayoutGroup",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$ILayoutSelfController
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.UI.ILayoutSelfController",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$ILayoutIgnorer
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.UI.ILayoutIgnorer",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_ignoreLayout = function() { return CS.Call(2, 286, 0, false, this); }
_jstype.definition.set_ignoreLayout = function(v) { return CS.Call(3, 286, 0, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$IMaterialModifier
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.UI.IMaterialModifier",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Material */
_jstype.definition.GetModifiedMaterial = function(a0/*Material*/) { 
    
    return CS.Call(4, 287, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$IVertexModifier
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Interface",
    fullname: "UnityEngine.UI.IVertexModifier",
    
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.ModifyVertices = function(a0/*List`1*/) { 
    
    return CS.Call(4, 288, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$EventSystem
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.EventSystems.EventSystem",
    baseTypeName: "UnityEngine.EventSystems.UIBehaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.staticDefinition.get_current = function() { return CS.Call(2, 289, 0, true); }
_jstype.staticDefinition.set_current = function(v) { return CS.Call(3, 289, 0, true, v); }

_jstype.definition.get_sendNavigationEvents = function() { return CS.Call(2, 289, 1, false, this); }
_jstype.definition.set_sendNavigationEvents = function(v) { return CS.Call(3, 289, 1, false, this, v); }

_jstype.definition.get_pixelDragThreshold = function() { return CS.Call(2, 289, 2, false, this); }
_jstype.definition.set_pixelDragThreshold = function(v) { return CS.Call(3, 289, 2, false, this, v); }

_jstype.definition.get_currentInputModule = function() { return CS.Call(2, 289, 3, false, this); }
_jstype.definition.set_currentInputModule = function(v) { return CS.Call(3, 289, 3, false, this, v); }

_jstype.definition.get_firstSelectedGameObject = function() { return CS.Call(2, 289, 4, false, this); }
_jstype.definition.set_firstSelectedGameObject = function(v) { return CS.Call(3, 289, 4, false, this, v); }

_jstype.definition.get_currentSelectedGameObject = function() { return CS.Call(2, 289, 5, false, this); }
_jstype.definition.set_currentSelectedGameObject = function(v) { return CS.Call(3, 289, 5, false, this, v); }

_jstype.definition.get_alreadySelecting = function() { return CS.Call(2, 289, 6, false, this); }
_jstype.definition.set_alreadySelecting = function(v) { return CS.Call(3, 289, 6, false, this, v); }

// methods

/* Boolean */
_jstype.definition.IsPointerOverGameObject$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 289, 0, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsPointerOverGameObject = function() { 
    
    return CS.Call(4, 289, 1, false, this); 
}
/* Void */
_jstype.definition.RaycastAll = function(a0/*PointerEventData*/, a1/*List`1*/) { 
    
    return CS.Call(4, 289, 2, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetSelectedGameObject$$GameObject$$BaseEventData = function(a0/*GameObject*/, a1/*BaseEventData*/) { 
    
    return CS.Call(4, 289, 3, false, this, a0, a1); 
}
/* Void */
_jstype.definition.SetSelectedGameObject$$GameObject = function(a0/*GameObject*/) { 
    
    return CS.Call(4, 289, 4, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 289, 5, false, this); 
}
/* Void */
_jstype.definition.UpdateModules = function() { 
    
    return CS.Call(4, 289, 6, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$EventTrigger$TriggerEvent
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.EventSystems.EventTrigger.TriggerEvent",
    baseTypeName: "UnityEngine.Events.UnityEvent$1"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 290, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$UIBehaviour
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.EventSystems.UIBehaviour",
    baseTypeName: "UnityEngine.MonoBehaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Boolean */
_jstype.definition.IsActive = function() { 
    
    return CS.Call(4, 291, 0, false, this); 
}
/* Boolean */
_jstype.definition.IsDestroyed = function() { 
    
    return CS.Call(4, 291, 1, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$AxisEventData
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.EventSystems.AxisEventData",
    baseTypeName: "UnityEngine.EventSystems.BaseEventData"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function(a0) { CS.Call(5, 292, 0, true, this, a0); }

// fields

// properties

_jstype.definition.get_moveVector = function() { return CS.Call(2, 292, 0, false, this); }
_jstype.definition.set_moveVector = function(v) { return CS.Call(3, 292, 0, false, this, v); }

_jstype.definition.get_moveDir = function() { return CS.Call(2, 292, 1, false, this); }
_jstype.definition.set_moveDir = function(v) { return CS.Call(3, 292, 1, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$BaseEventData
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.EventSystems.BaseEventData",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function(a0) { CS.Call(5, 293, 0, true, this, a0); }

// fields

// properties

_jstype.definition.get_used = function() { return CS.Call(2, 293, 0, false, this); }
_jstype.definition.set_used = function(v) { return CS.Call(3, 293, 0, false, this, v); }

_jstype.definition.get_currentInputModule = function() { return CS.Call(2, 293, 1, false, this); }
_jstype.definition.set_currentInputModule = function(v) { return CS.Call(3, 293, 1, false, this, v); }

_jstype.definition.get_selectedObject = function() { return CS.Call(2, 293, 2, false, this); }
_jstype.definition.set_selectedObject = function(v) { return CS.Call(3, 293, 2, false, this, v); }

// methods

/* Void */
_jstype.definition.Reset = function() { 
    
    return CS.Call(4, 293, 0, false, this); 
}
/* Void */
_jstype.definition.Use = function() { 
    
    return CS.Call(4, 293, 1, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$PointerEventData
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.EventSystems.PointerEventData",
    baseTypeName: "UnityEngine.EventSystems.BaseEventData"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function(a0) { CS.Call(5, 294, 0, true, this, a0); }

// fields

// properties

_jstype.definition.get_pointerEnter = function() { return CS.Call(2, 294, 0, false, this); }
_jstype.definition.set_pointerEnter = function(v) { return CS.Call(3, 294, 0, false, this, v); }

_jstype.definition.get_rawPointerPress = function() { return CS.Call(2, 294, 1, false, this); }
_jstype.definition.set_rawPointerPress = function(v) { return CS.Call(3, 294, 1, false, this, v); }

_jstype.definition.get_pointerDrag = function() { return CS.Call(2, 294, 2, false, this); }
_jstype.definition.set_pointerDrag = function(v) { return CS.Call(3, 294, 2, false, this, v); }

_jstype.definition.get_pointerCurrentRaycast = function() { return CS.Call(2, 294, 3, false, this); }
_jstype.definition.set_pointerCurrentRaycast = function(v) { return CS.Call(3, 294, 3, false, this, v); }

_jstype.definition.get_pointerPressRaycast = function() { return CS.Call(2, 294, 4, false, this); }
_jstype.definition.set_pointerPressRaycast = function(v) { return CS.Call(3, 294, 4, false, this, v); }

_jstype.definition.get_eligibleForClick = function() { return CS.Call(2, 294, 5, false, this); }
_jstype.definition.set_eligibleForClick = function(v) { return CS.Call(3, 294, 5, false, this, v); }

_jstype.definition.get_pointerId = function() { return CS.Call(2, 294, 6, false, this); }
_jstype.definition.set_pointerId = function(v) { return CS.Call(3, 294, 6, false, this, v); }

_jstype.definition.get_position = function() { return CS.Call(2, 294, 7, false, this); }
_jstype.definition.set_position = function(v) { return CS.Call(3, 294, 7, false, this, v); }

_jstype.definition.get_delta = function() { return CS.Call(2, 294, 8, false, this); }
_jstype.definition.set_delta = function(v) { return CS.Call(3, 294, 8, false, this, v); }

_jstype.definition.get_pressPosition = function() { return CS.Call(2, 294, 9, false, this); }
_jstype.definition.set_pressPosition = function(v) { return CS.Call(3, 294, 9, false, this, v); }

_jstype.definition.get_clickTime = function() { return CS.Call(2, 294, 10, false, this); }
_jstype.definition.set_clickTime = function(v) { return CS.Call(3, 294, 10, false, this, v); }

_jstype.definition.get_clickCount = function() { return CS.Call(2, 294, 11, false, this); }
_jstype.definition.set_clickCount = function(v) { return CS.Call(3, 294, 11, false, this, v); }

_jstype.definition.get_scrollDelta = function() { return CS.Call(2, 294, 12, false, this); }
_jstype.definition.set_scrollDelta = function(v) { return CS.Call(3, 294, 12, false, this, v); }

_jstype.definition.get_useDragThreshold = function() { return CS.Call(2, 294, 13, false, this); }
_jstype.definition.set_useDragThreshold = function(v) { return CS.Call(3, 294, 13, false, this, v); }

_jstype.definition.get_dragging = function() { return CS.Call(2, 294, 14, false, this); }
_jstype.definition.set_dragging = function(v) { return CS.Call(3, 294, 14, false, this, v); }

_jstype.definition.get_button = function() { return CS.Call(2, 294, 15, false, this); }
_jstype.definition.set_button = function(v) { return CS.Call(3, 294, 15, false, this, v); }

_jstype.definition.get_enterEventCamera = function() { return CS.Call(2, 294, 16, false, this); }
_jstype.definition.set_enterEventCamera = function(v) { return CS.Call(3, 294, 16, false, this, v); }

_jstype.definition.get_pressEventCamera = function() { return CS.Call(2, 294, 17, false, this); }
_jstype.definition.set_pressEventCamera = function(v) { return CS.Call(3, 294, 17, false, this, v); }

_jstype.definition.get_pointerPress = function() { return CS.Call(2, 294, 18, false, this); }
_jstype.definition.set_pointerPress = function(v) { return CS.Call(3, 294, 18, false, this, v); }

// methods

/* Boolean */
_jstype.definition.IsPointerMoving = function() { 
    
    return CS.Call(4, 294, 0, false, this); 
}
/* Boolean */
_jstype.definition.IsScrolling = function() { 
    
    return CS.Call(4, 294, 1, false, this); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 294, 2, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$BaseInputModule
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.EventSystems.BaseInputModule",
    baseTypeName: "UnityEngine.EventSystems.UIBehaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.ActivateModule = function() { 
    
    return CS.Call(4, 295, 0, false, this); 
}
/* Void */
_jstype.definition.DeactivateModule = function() { 
    
    return CS.Call(4, 295, 1, false, this); 
}
/* Boolean */
_jstype.definition.IsModuleSupported = function() { 
    
    return CS.Call(4, 295, 2, false, this); 
}
/* Boolean */
_jstype.definition.IsPointerOverGameObject = function(a0/*Int32*/) { 
    
    return CS.Call(4, 295, 3, false, this, a0); 
}
/* Void */
_jstype.definition.Process = function() { 
    
    return CS.Call(4, 295, 4, false, this); 
}
/* Boolean */
_jstype.definition.ShouldActivateModule = function() { 
    
    return CS.Call(4, 295, 5, false, this); 
}
/* Void */
_jstype.definition.UpdateModule = function() { 
    
    return CS.Call(4, 295, 6, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$PointerInputModule
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.EventSystems.PointerInputModule",
    baseTypeName: "UnityEngine.EventSystems.BaseInputModule"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

_jstype.staticFields.kMouseLeftId =  { 
            get: function() { return CS.Call(0, 296, 0, true); }, 
            set: function(v) { return CS.Call(1, 296, 0, true, v); } 
        };

_jstype.staticFields.kMouseRightId =  { 
            get: function() { return CS.Call(0, 296, 1, true); }, 
            set: function(v) { return CS.Call(1, 296, 1, true, v); } 
        };

_jstype.staticFields.kMouseMiddleId =  { 
            get: function() { return CS.Call(0, 296, 2, true); }, 
            set: function(v) { return CS.Call(1, 296, 2, true, v); } 
        };

_jstype.staticFields.kFakeTouchesId =  { 
            get: function() { return CS.Call(0, 296, 3, true); }, 
            set: function(v) { return CS.Call(1, 296, 3, true, v); } 
        };

// properties

// methods

/* Boolean */
_jstype.definition.IsPointerOverGameObject = function(a0/*Int32*/) { 
    
    return CS.Call(4, 296, 0, false, this, a0); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 296, 1, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$StandaloneInputModule
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.EventSystems.StandaloneInputModule",
    baseTypeName: "UnityEngine.EventSystems.PointerInputModule"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_allowActivationOnMobileDevice = function() { return CS.Call(2, 297, 0, false, this); }
_jstype.definition.set_allowActivationOnMobileDevice = function(v) { return CS.Call(3, 297, 0, false, this, v); }

_jstype.definition.get_inputActionsPerSecond = function() { return CS.Call(2, 297, 1, false, this); }
_jstype.definition.set_inputActionsPerSecond = function(v) { return CS.Call(3, 297, 1, false, this, v); }

_jstype.definition.get_horizontalAxis = function() { return CS.Call(2, 297, 2, false, this); }
_jstype.definition.set_horizontalAxis = function(v) { return CS.Call(3, 297, 2, false, this, v); }

_jstype.definition.get_verticalAxis = function() { return CS.Call(2, 297, 3, false, this); }
_jstype.definition.set_verticalAxis = function(v) { return CS.Call(3, 297, 3, false, this, v); }

_jstype.definition.get_submitButton = function() { return CS.Call(2, 297, 4, false, this); }
_jstype.definition.set_submitButton = function(v) { return CS.Call(3, 297, 4, false, this, v); }

_jstype.definition.get_cancelButton = function() { return CS.Call(2, 297, 5, false, this); }
_jstype.definition.set_cancelButton = function(v) { return CS.Call(3, 297, 5, false, this, v); }

// methods

/* Void */
_jstype.definition.ActivateModule = function() { 
    
    return CS.Call(4, 297, 0, false, this); 
}
/* Void */
_jstype.definition.DeactivateModule = function() { 
    
    return CS.Call(4, 297, 1, false, this); 
}
/* Boolean */
_jstype.definition.IsModuleSupported = function() { 
    
    return CS.Call(4, 297, 2, false, this); 
}
/* Void */
_jstype.definition.Process = function() { 
    
    return CS.Call(4, 297, 3, false, this); 
}
/* Boolean */
_jstype.definition.ShouldActivateModule = function() { 
    
    return CS.Call(4, 297, 4, false, this); 
}
/* Void */
_jstype.definition.UpdateModule = function() { 
    
    return CS.Call(4, 297, 5, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$TouchInputModule
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.EventSystems.TouchInputModule",
    baseTypeName: "UnityEngine.EventSystems.PointerInputModule"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_allowActivationOnStandalone = function() { return CS.Call(2, 298, 0, false, this); }
_jstype.definition.set_allowActivationOnStandalone = function(v) { return CS.Call(3, 298, 0, false, this, v); }

// methods

/* Void */
_jstype.definition.DeactivateModule = function() { 
    
    return CS.Call(4, 298, 0, false, this); 
}
/* Boolean */
_jstype.definition.IsModuleSupported = function() { 
    
    return CS.Call(4, 298, 1, false, this); 
}
/* Void */
_jstype.definition.Process = function() { 
    
    return CS.Call(4, 298, 2, false, this); 
}
/* Boolean */
_jstype.definition.ShouldActivateModule = function() { 
    
    return CS.Call(4, 298, 3, false, this); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 298, 4, false, this); 
}
/* Void */
_jstype.definition.UpdateModule = function() { 
    
    return CS.Call(4, 298, 5, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$BaseRaycaster
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.EventSystems.BaseRaycaster",
    baseTypeName: "UnityEngine.EventSystems.UIBehaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_eventCamera = function() { return CS.Call(2, 299, 0, false, this); }
_jstype.definition.set_eventCamera = function(v) { return CS.Call(3, 299, 0, false, this, v); }

_jstype.definition.get_sortOrderPriority = function() { return CS.Call(2, 299, 1, false, this); }
_jstype.definition.set_sortOrderPriority = function(v) { return CS.Call(3, 299, 1, false, this, v); }

_jstype.definition.get_renderOrderPriority = function() { return CS.Call(2, 299, 2, false, this); }
_jstype.definition.set_renderOrderPriority = function(v) { return CS.Call(3, 299, 2, false, this, v); }

// methods

/* Void */
_jstype.definition.Raycast = function(a0/*PointerEventData*/, a1/*List`1*/) { 
    
    return CS.Call(4, 299, 0, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$Physics2DRaycaster
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.EventSystems.Physics2DRaycaster",
    baseTypeName: "UnityEngine.EventSystems.PhysicsRaycaster"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.Raycast = function(a0/*PointerEventData*/, a1/*List`1*/) { 
    
    return CS.Call(4, 300, 0, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$PhysicsRaycaster
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.EventSystems.PhysicsRaycaster",
    baseTypeName: "UnityEngine.EventSystems.BaseRaycaster"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_eventCamera = function() { return CS.Call(2, 301, 0, false, this); }
_jstype.definition.set_eventCamera = function(v) { return CS.Call(3, 301, 0, false, this, v); }

_jstype.definition.get_depth = function() { return CS.Call(2, 301, 1, false, this); }
_jstype.definition.set_depth = function(v) { return CS.Call(3, 301, 1, false, this, v); }

_jstype.definition.get_finalEventMask = function() { return CS.Call(2, 301, 2, false, this); }
_jstype.definition.set_finalEventMask = function(v) { return CS.Call(3, 301, 2, false, this, v); }

_jstype.definition.get_eventMask = function() { return CS.Call(2, 301, 3, false, this); }
_jstype.definition.set_eventMask = function(v) { return CS.Call(3, 301, 3, false, this, v); }

// methods

/* Void */
_jstype.definition.Raycast = function(a0/*PointerEventData*/, a1/*List`1*/) { 
    
    return CS.Call(4, 301, 0, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$AnimationTriggers
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.AnimationTriggers",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 302, 0, true, this); }

// fields

// properties

_jstype.definition.get_normalTrigger = function() { return CS.Call(2, 302, 0, false, this); }
_jstype.definition.set_normalTrigger = function(v) { return CS.Call(3, 302, 0, false, this, v); }

_jstype.definition.get_highlightedTrigger = function() { return CS.Call(2, 302, 1, false, this); }
_jstype.definition.set_highlightedTrigger = function(v) { return CS.Call(3, 302, 1, false, this, v); }

_jstype.definition.get_pressedTrigger = function() { return CS.Call(2, 302, 2, false, this); }
_jstype.definition.set_pressedTrigger = function(v) { return CS.Call(3, 302, 2, false, this, v); }

_jstype.definition.get_disabledTrigger = function() { return CS.Call(2, 302, 3, false, this); }
_jstype.definition.set_disabledTrigger = function(v) { return CS.Call(3, 302, 3, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$Button
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.Button",
    baseTypeName: "UnityEngine.UI.Selectable"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_onClick = function() { return CS.Call(2, 303, 0, false, this); }
_jstype.definition.set_onClick = function(v) { return CS.Call(3, 303, 0, false, this, v); }

// methods

/* Void */
_jstype.definition.OnPointerClick = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 303, 0, false, this, a0); 
}
/* Void */
_jstype.definition.OnSubmit = function(a0/*BaseEventData*/) { 
    
    return CS.Call(4, 303, 1, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$Button$ButtonClickedEvent
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.Button.ButtonClickedEvent",
    baseTypeName: "UnityEngine.Events.UnityEvent"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 304, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$CanvasUpdateRegistry
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.CanvasUpdateRegistry",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.staticDefinition.get_instance = function() { return CS.Call(2, 305, 0, true); }
_jstype.staticDefinition.set_instance = function(v) { return CS.Call(3, 305, 0, true, v); }

// methods

/* static Boolean  */
_jstype.staticDefinition.IsRebuildingGraphics = function() { 
    
    return CS.Call(4, 305, 0, true); 
}
/* static Boolean  */
_jstype.staticDefinition.IsRebuildingLayout = function() { 
    
    return CS.Call(4, 305, 1, true); 
}
/* static Void  */
_jstype.staticDefinition.RegisterCanvasElementForGraphicRebuild = function(a0/*ICanvasElement*/) { 
    
    return CS.Call(4, 305, 2, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.RegisterCanvasElementForLayoutRebuild = function(a0/*ICanvasElement*/) { 
    
    return CS.Call(4, 305, 3, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.UnRegisterCanvasElementForRebuild = function(a0/*ICanvasElement*/) { 
    
    return CS.Call(4, 305, 4, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$Graphic
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.Graphic",
    baseTypeName: "UnityEngine.EventSystems.UIBehaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.staticDefinition.get_defaultGraphicMaterial = function() { return CS.Call(2, 306, 0, true); }
_jstype.staticDefinition.set_defaultGraphicMaterial = function(v) { return CS.Call(3, 306, 0, true, v); }

_jstype.definition.get_color = function() { return CS.Call(2, 306, 1, false, this); }
_jstype.definition.set_color = function(v) { return CS.Call(3, 306, 1, false, this, v); }

_jstype.definition.get_depth = function() { return CS.Call(2, 306, 2, false, this); }
_jstype.definition.set_depth = function(v) { return CS.Call(3, 306, 2, false, this, v); }

_jstype.definition.get_rectTransform = function() { return CS.Call(2, 306, 3, false, this); }
_jstype.definition.set_rectTransform = function(v) { return CS.Call(3, 306, 3, false, this, v); }

_jstype.definition.get_canvas = function() { return CS.Call(2, 306, 4, false, this); }
_jstype.definition.set_canvas = function(v) { return CS.Call(3, 306, 4, false, this, v); }

_jstype.definition.get_canvasRenderer = function() { return CS.Call(2, 306, 5, false, this); }
_jstype.definition.set_canvasRenderer = function(v) { return CS.Call(3, 306, 5, false, this, v); }

_jstype.definition.get_defaultMaterial = function() { return CS.Call(2, 306, 6, false, this); }
_jstype.definition.set_defaultMaterial = function(v) { return CS.Call(3, 306, 6, false, this, v); }

_jstype.definition.get_material = function() { return CS.Call(2, 306, 7, false, this); }
_jstype.definition.set_material = function(v) { return CS.Call(3, 306, 7, false, this, v); }

_jstype.definition.get_materialForRendering = function() { return CS.Call(2, 306, 8, false, this); }
_jstype.definition.set_materialForRendering = function(v) { return CS.Call(3, 306, 8, false, this, v); }

_jstype.definition.get_mainTexture = function() { return CS.Call(2, 306, 9, false, this); }
_jstype.definition.set_mainTexture = function(v) { return CS.Call(3, 306, 9, false, this, v); }

// methods

/* Void */
_jstype.definition.CrossFadeAlpha = function(a0/*Single*/, a1/*Single*/, a2/*Boolean*/) { 
    
    return CS.Call(4, 306, 0, false, this, a0, a1, a2); 
}
/* Void */
_jstype.definition.CrossFadeColor$$Color$$Single$$Boolean$$Boolean = function(a0/*Color*/, a1/*Single*/, a2/*Boolean*/, a3/*Boolean*/) { 
    
    return CS.Call(4, 306, 1, false, this, a0, a1, a2, a3); 
}
/* Rect */
_jstype.definition.GetPixelAdjustedRect = function() { 
    
    return CS.Call(4, 306, 2, false, this); 
}
/* Vector2 */
_jstype.definition.PixelAdjustPoint = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 306, 3, false, this, a0); 
}
/* Boolean */
_jstype.definition.Raycast = function(a0/*Vector2*/, a1/*Camera*/) { 
    
    return CS.Call(4, 306, 4, false, this, a0, a1); 
}
/* Void */
_jstype.definition.Rebuild = function(a0/*CanvasUpdate*/) { 
    
    return CS.Call(4, 306, 5, false, this, a0); 
}
/* Void */
_jstype.definition.RegisterDirtyLayoutCallback = function(a0/*UnityAction*/) { 
    
    return CS.Call(4, 306, 6, false, this, a0); 
}
/* Void */
_jstype.definition.RegisterDirtyMaterialCallback = function(a0/*UnityAction*/) { 
    
    return CS.Call(4, 306, 7, false, this, a0); 
}
/* Void */
_jstype.definition.RegisterDirtyVerticesCallback = function(a0/*UnityAction*/) { 
    
    return CS.Call(4, 306, 8, false, this, a0); 
}
/* Void */
_jstype.definition.SetAllDirty = function() { 
    
    return CS.Call(4, 306, 9, false, this); 
}
/* Void */
_jstype.definition.SetLayoutDirty = function() { 
    
    return CS.Call(4, 306, 10, false, this); 
}
/* Void */
_jstype.definition.SetMaterialDirty = function() { 
    
    return CS.Call(4, 306, 11, false, this); 
}
/* Void */
_jstype.definition.SetNativeSize = function() { 
    
    return CS.Call(4, 306, 12, false, this); 
}
/* Void */
_jstype.definition.SetVerticesDirty = function() { 
    
    return CS.Call(4, 306, 13, false, this); 
}
/* Void */
_jstype.definition.UnregisterDirtyLayoutCallback = function(a0/*UnityAction*/) { 
    
    return CS.Call(4, 306, 14, false, this, a0); 
}
/* Void */
_jstype.definition.UnregisterDirtyMaterialCallback = function(a0/*UnityAction*/) { 
    
    return CS.Call(4, 306, 15, false, this, a0); 
}
/* Void */
_jstype.definition.UnregisterDirtyVerticesCallback = function(a0/*UnityAction*/) { 
    
    return CS.Call(4, 306, 16, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$GraphicRaycaster
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.GraphicRaycaster",
    baseTypeName: "UnityEngine.EventSystems.BaseRaycaster"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_sortOrderPriority = function() { return CS.Call(2, 307, 0, false, this); }
_jstype.definition.set_sortOrderPriority = function(v) { return CS.Call(3, 307, 0, false, this, v); }

_jstype.definition.get_renderOrderPriority = function() { return CS.Call(2, 307, 1, false, this); }
_jstype.definition.set_renderOrderPriority = function(v) { return CS.Call(3, 307, 1, false, this, v); }

_jstype.definition.get_ignoreReversedGraphics = function() { return CS.Call(2, 307, 2, false, this); }
_jstype.definition.set_ignoreReversedGraphics = function(v) { return CS.Call(3, 307, 2, false, this, v); }

_jstype.definition.get_blockingObjects = function() { return CS.Call(2, 307, 3, false, this); }
_jstype.definition.set_blockingObjects = function(v) { return CS.Call(3, 307, 3, false, this, v); }

_jstype.definition.get_eventCamera = function() { return CS.Call(2, 307, 4, false, this); }
_jstype.definition.set_eventCamera = function(v) { return CS.Call(3, 307, 4, false, this, v); }

// methods

/* Void */
_jstype.definition.Raycast$$PointerEventData$$List$1$RaycastResult = function(a0/*PointerEventData*/, a1/*List`1*/) { 
    
    return CS.Call(4, 307, 0, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$GraphicRegistry
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.GraphicRegistry",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.staticDefinition.get_instance = function() { return CS.Call(2, 308, 0, true); }
_jstype.staticDefinition.set_instance = function(v) { return CS.Call(3, 308, 0, true, v); }

// methods

/* static IList`1  */
_jstype.staticDefinition.GetGraphicsForCanvas = function(a0/*Canvas*/) { 
    
    return CS.Call(4, 308, 0, true, a0); 
}
/* static Void  */
_jstype.staticDefinition.RegisterGraphicForCanvas = function(a0/*Canvas*/, a1/*Graphic*/) { 
    
    return CS.Call(4, 308, 1, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.UnregisterGraphicForCanvas = function(a0/*Canvas*/, a1/*Graphic*/) { 
    
    return CS.Call(4, 308, 2, true, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$Image
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.Image",
    baseTypeName: "UnityEngine.UI.MaskableGraphic"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_sprite = function() { return CS.Call(2, 309, 0, false, this); }
_jstype.definition.set_sprite = function(v) { return CS.Call(3, 309, 0, false, this, v); }

_jstype.definition.get_overrideSprite = function() { return CS.Call(2, 309, 1, false, this); }
_jstype.definition.set_overrideSprite = function(v) { return CS.Call(3, 309, 1, false, this, v); }

_jstype.definition.get_type = function() { return CS.Call(2, 309, 2, false, this); }
_jstype.definition.set_type = function(v) { return CS.Call(3, 309, 2, false, this, v); }

_jstype.definition.get_preserveAspect = function() { return CS.Call(2, 309, 3, false, this); }
_jstype.definition.set_preserveAspect = function(v) { return CS.Call(3, 309, 3, false, this, v); }

_jstype.definition.get_fillCenter = function() { return CS.Call(2, 309, 4, false, this); }
_jstype.definition.set_fillCenter = function(v) { return CS.Call(3, 309, 4, false, this, v); }

_jstype.definition.get_fillMethod = function() { return CS.Call(2, 309, 5, false, this); }
_jstype.definition.set_fillMethod = function(v) { return CS.Call(3, 309, 5, false, this, v); }

_jstype.definition.get_fillAmount = function() { return CS.Call(2, 309, 6, false, this); }
_jstype.definition.set_fillAmount = function(v) { return CS.Call(3, 309, 6, false, this, v); }

_jstype.definition.get_fillClockwise = function() { return CS.Call(2, 309, 7, false, this); }
_jstype.definition.set_fillClockwise = function(v) { return CS.Call(3, 309, 7, false, this, v); }

_jstype.definition.get_fillOrigin = function() { return CS.Call(2, 309, 8, false, this); }
_jstype.definition.set_fillOrigin = function(v) { return CS.Call(3, 309, 8, false, this, v); }

_jstype.definition.get_eventAlphaThreshold = function() { return CS.Call(2, 309, 9, false, this); }
_jstype.definition.set_eventAlphaThreshold = function(v) { return CS.Call(3, 309, 9, false, this, v); }

_jstype.definition.get_mainTexture = function() { return CS.Call(2, 309, 10, false, this); }
_jstype.definition.set_mainTexture = function(v) { return CS.Call(3, 309, 10, false, this, v); }

_jstype.definition.get_hasBorder = function() { return CS.Call(2, 309, 11, false, this); }
_jstype.definition.set_hasBorder = function(v) { return CS.Call(3, 309, 11, false, this, v); }

_jstype.definition.get_pixelsPerUnit = function() { return CS.Call(2, 309, 12, false, this); }
_jstype.definition.set_pixelsPerUnit = function(v) { return CS.Call(3, 309, 12, false, this, v); }

_jstype.definition.get_minWidth = function() { return CS.Call(2, 309, 13, false, this); }
_jstype.definition.set_minWidth = function(v) { return CS.Call(3, 309, 13, false, this, v); }

_jstype.definition.get_preferredWidth = function() { return CS.Call(2, 309, 14, false, this); }
_jstype.definition.set_preferredWidth = function(v) { return CS.Call(3, 309, 14, false, this, v); }

_jstype.definition.get_flexibleWidth = function() { return CS.Call(2, 309, 15, false, this); }
_jstype.definition.set_flexibleWidth = function(v) { return CS.Call(3, 309, 15, false, this, v); }

_jstype.definition.get_minHeight = function() { return CS.Call(2, 309, 16, false, this); }
_jstype.definition.set_minHeight = function(v) { return CS.Call(3, 309, 16, false, this, v); }

_jstype.definition.get_preferredHeight = function() { return CS.Call(2, 309, 17, false, this); }
_jstype.definition.set_preferredHeight = function(v) { return CS.Call(3, 309, 17, false, this, v); }

_jstype.definition.get_flexibleHeight = function() { return CS.Call(2, 309, 18, false, this); }
_jstype.definition.set_flexibleHeight = function(v) { return CS.Call(3, 309, 18, false, this, v); }

_jstype.definition.get_layoutPriority = function() { return CS.Call(2, 309, 19, false, this); }
_jstype.definition.set_layoutPriority = function(v) { return CS.Call(3, 309, 19, false, this, v); }

// methods

/* Void */
_jstype.definition.CalculateLayoutInputHorizontal = function() { 
    
    return CS.Call(4, 309, 0, false, this); 
}
/* Void */
_jstype.definition.CalculateLayoutInputVertical = function() { 
    
    return CS.Call(4, 309, 1, false, this); 
}
/* Boolean */
_jstype.definition.IsRaycastLocationValid = function(a0/*Vector2*/, a1/*Camera*/) { 
    
    return CS.Call(4, 309, 2, false, this, a0, a1); 
}
/* Void */
_jstype.definition.OnAfterDeserialize = function() { 
    
    return CS.Call(4, 309, 3, false, this); 
}
/* Void */
_jstype.definition.OnBeforeSerialize = function() { 
    
    return CS.Call(4, 309, 4, false, this); 
}
/* Void */
_jstype.definition.SetNativeSize = function() { 
    
    return CS.Call(4, 309, 5, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$InputField
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.InputField",
    baseTypeName: "UnityEngine.UI.Selectable"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_shouldHideMobileInput = function() { return CS.Call(2, 310, 0, false, this); }
_jstype.definition.set_shouldHideMobileInput = function(v) { return CS.Call(3, 310, 0, false, this, v); }

_jstype.definition.get_text = function() { return CS.Call(2, 310, 1, false, this); }
_jstype.definition.set_text = function(v) { return CS.Call(3, 310, 1, false, this, v); }

_jstype.definition.get_isFocused = function() { return CS.Call(2, 310, 2, false, this); }
_jstype.definition.set_isFocused = function(v) { return CS.Call(3, 310, 2, false, this, v); }

_jstype.definition.get_caretBlinkRate = function() { return CS.Call(2, 310, 3, false, this); }
_jstype.definition.set_caretBlinkRate = function(v) { return CS.Call(3, 310, 3, false, this, v); }

_jstype.definition.get_textComponent = function() { return CS.Call(2, 310, 4, false, this); }
_jstype.definition.set_textComponent = function(v) { return CS.Call(3, 310, 4, false, this, v); }

_jstype.definition.get_placeholder = function() { return CS.Call(2, 310, 5, false, this); }
_jstype.definition.set_placeholder = function(v) { return CS.Call(3, 310, 5, false, this, v); }

_jstype.definition.get_selectionColor = function() { return CS.Call(2, 310, 6, false, this); }
_jstype.definition.set_selectionColor = function(v) { return CS.Call(3, 310, 6, false, this, v); }

_jstype.definition.get_onEndEdit = function() { return CS.Call(2, 310, 7, false, this); }
_jstype.definition.set_onEndEdit = function(v) { return CS.Call(3, 310, 7, false, this, v); }

_jstype.definition.get_onValueChange = function() { return CS.Call(2, 310, 8, false, this); }
_jstype.definition.set_onValueChange = function(v) { return CS.Call(3, 310, 8, false, this, v); }

_jstype.definition.get_characterLimit = function() { return CS.Call(2, 310, 9, false, this); }
_jstype.definition.set_characterLimit = function(v) { return CS.Call(3, 310, 9, false, this, v); }

_jstype.definition.get_contentType = function() { return CS.Call(2, 310, 10, false, this); }
_jstype.definition.set_contentType = function(v) { return CS.Call(3, 310, 10, false, this, v); }

_jstype.definition.get_lineType = function() { return CS.Call(2, 310, 11, false, this); }
_jstype.definition.set_lineType = function(v) { return CS.Call(3, 310, 11, false, this, v); }

_jstype.definition.get_inputType = function() { return CS.Call(2, 310, 12, false, this); }
_jstype.definition.set_inputType = function(v) { return CS.Call(3, 310, 12, false, this, v); }

_jstype.definition.get_keyboardType = function() { return CS.Call(2, 310, 13, false, this); }
_jstype.definition.set_keyboardType = function(v) { return CS.Call(3, 310, 13, false, this, v); }

_jstype.definition.get_characterValidation = function() { return CS.Call(2, 310, 14, false, this); }
_jstype.definition.set_characterValidation = function(v) { return CS.Call(3, 310, 14, false, this, v); }

_jstype.definition.get_multiLine = function() { return CS.Call(2, 310, 15, false, this); }
_jstype.definition.set_multiLine = function(v) { return CS.Call(3, 310, 15, false, this, v); }

_jstype.definition.get_asteriskChar = function() { return CS.Call(2, 310, 16, false, this); }
_jstype.definition.set_asteriskChar = function(v) { return CS.Call(3, 310, 16, false, this, v); }

_jstype.definition.get_wasCanceled = function() { return CS.Call(2, 310, 17, false, this); }
_jstype.definition.set_wasCanceled = function(v) { return CS.Call(3, 310, 17, false, this, v); }

_jstype.definition.get_caretPosition = function() { return CS.Call(2, 310, 18, false, this); }
_jstype.definition.set_caretPosition = function(v) { return CS.Call(3, 310, 18, false, this, v); }

_jstype.definition.get_selectionAnchorPosition = function() { return CS.Call(2, 310, 19, false, this); }
_jstype.definition.set_selectionAnchorPosition = function(v) { return CS.Call(3, 310, 19, false, this, v); }

_jstype.definition.get_selectionFocusPosition = function() { return CS.Call(2, 310, 20, false, this); }
_jstype.definition.set_selectionFocusPosition = function(v) { return CS.Call(3, 310, 20, false, this, v); }

// methods

/* Void */
_jstype.definition.ActivateInputField = function() { 
    
    return CS.Call(4, 310, 0, false, this); 
}
/* Void */
_jstype.definition.DeactivateInputField = function() { 
    
    return CS.Call(4, 310, 1, false, this); 
}
/* Void */
_jstype.definition.MoveTextEnd = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 310, 2, false, this, a0); 
}
/* Void */
_jstype.definition.MoveTextStart = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 310, 3, false, this, a0); 
}
/* Void */
_jstype.definition.OnBeginDrag = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 310, 4, false, this, a0); 
}
/* Void */
_jstype.definition.OnDeselect = function(a0/*BaseEventData*/) { 
    
    return CS.Call(4, 310, 5, false, this, a0); 
}
/* Void */
_jstype.definition.OnDrag = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 310, 6, false, this, a0); 
}
/* Void */
_jstype.definition.OnEndDrag = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 310, 7, false, this, a0); 
}
/* Void */
_jstype.definition.OnPointerClick = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 310, 8, false, this, a0); 
}
/* Void */
_jstype.definition.OnPointerDown = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 310, 9, false, this, a0); 
}
/* Void */
_jstype.definition.OnSelect = function(a0/*BaseEventData*/) { 
    
    return CS.Call(4, 310, 10, false, this, a0); 
}
/* Void */
_jstype.definition.OnSubmit = function(a0/*BaseEventData*/) { 
    
    return CS.Call(4, 310, 11, false, this, a0); 
}
/* Void */
_jstype.definition.OnUpdateSelected = function(a0/*BaseEventData*/) { 
    
    return CS.Call(4, 310, 12, false, this, a0); 
}
/* Void */
_jstype.definition.ProcessEvent = function(a0/*Event*/) { 
    
    return CS.Call(4, 310, 13, false, this, a0); 
}
/* Void */
_jstype.definition.Rebuild = function(a0/*CanvasUpdate*/) { 
    
    return CS.Call(4, 310, 14, false, this, a0); 
}
/* Vector2 */
_jstype.definition.ScreenToLocal = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 310, 15, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$InputField$SubmitEvent
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.InputField.SubmitEvent",
    baseTypeName: "UnityEngine.Events.UnityEvent$1"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 311, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$InputField$OnChangeEvent
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.InputField.OnChangeEvent",
    baseTypeName: "UnityEngine.Events.UnityEvent$1"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 312, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$MaskableGraphic
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.MaskableGraphic",
    baseTypeName: "UnityEngine.UI.Graphic"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_maskable = function() { return CS.Call(2, 313, 0, false, this); }
_jstype.definition.set_maskable = function(v) { return CS.Call(3, 313, 0, false, this, v); }

_jstype.definition.get_material = function() { return CS.Call(2, 313, 1, false, this); }
_jstype.definition.set_material = function(v) { return CS.Call(3, 313, 1, false, this, v); }

// methods

/* Void */
_jstype.definition.ParentMaskStateChanged = function() { 
    
    return CS.Call(4, 313, 0, false, this); 
}
/* Void */
_jstype.definition.SetMaterialDirty = function() { 
    
    return CS.Call(4, 313, 1, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$RawImage
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.RawImage",
    baseTypeName: "UnityEngine.UI.MaskableGraphic"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_mainTexture = function() { return CS.Call(2, 314, 0, false, this); }
_jstype.definition.set_mainTexture = function(v) { return CS.Call(3, 314, 0, false, this, v); }

_jstype.definition.get_texture = function() { return CS.Call(2, 314, 1, false, this); }
_jstype.definition.set_texture = function(v) { return CS.Call(3, 314, 1, false, this, v); }

_jstype.definition.get_uvRect = function() { return CS.Call(2, 314, 2, false, this); }
_jstype.definition.set_uvRect = function(v) { return CS.Call(3, 314, 2, false, this, v); }

// methods

/* Void */
_jstype.definition.SetNativeSize = function() { 
    
    return CS.Call(4, 314, 0, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$Scrollbar
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.Scrollbar",
    baseTypeName: "UnityEngine.UI.Selectable"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_handleRect = function() { return CS.Call(2, 315, 0, false, this); }
_jstype.definition.set_handleRect = function(v) { return CS.Call(3, 315, 0, false, this, v); }

_jstype.definition.get_direction = function() { return CS.Call(2, 315, 1, false, this); }
_jstype.definition.set_direction = function(v) { return CS.Call(3, 315, 1, false, this, v); }

_jstype.definition.get_value = function() { return CS.Call(2, 315, 2, false, this); }
_jstype.definition.set_value = function(v) { return CS.Call(3, 315, 2, false, this, v); }

_jstype.definition.get_size = function() { return CS.Call(2, 315, 3, false, this); }
_jstype.definition.set_size = function(v) { return CS.Call(3, 315, 3, false, this, v); }

_jstype.definition.get_numberOfSteps = function() { return CS.Call(2, 315, 4, false, this); }
_jstype.definition.set_numberOfSteps = function(v) { return CS.Call(3, 315, 4, false, this, v); }

_jstype.definition.get_onValueChanged = function() { return CS.Call(2, 315, 5, false, this); }
_jstype.definition.set_onValueChanged = function(v) { return CS.Call(3, 315, 5, false, this, v); }

// methods

/* Selectable */
_jstype.definition.FindSelectableOnDown = function() { 
    
    return CS.Call(4, 315, 0, false, this); 
}
/* Selectable */
_jstype.definition.FindSelectableOnLeft = function() { 
    
    return CS.Call(4, 315, 1, false, this); 
}
/* Selectable */
_jstype.definition.FindSelectableOnRight = function() { 
    
    return CS.Call(4, 315, 2, false, this); 
}
/* Selectable */
_jstype.definition.FindSelectableOnUp = function() { 
    
    return CS.Call(4, 315, 3, false, this); 
}
/* Void */
_jstype.definition.OnBeginDrag = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 315, 4, false, this, a0); 
}
/* Void */
_jstype.definition.OnDrag = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 315, 5, false, this, a0); 
}
/* Void */
_jstype.definition.OnInitializePotentialDrag = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 315, 6, false, this, a0); 
}
/* Void */
_jstype.definition.OnMove = function(a0/*AxisEventData*/) { 
    
    return CS.Call(4, 315, 7, false, this, a0); 
}
/* Void */
_jstype.definition.OnPointerDown = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 315, 8, false, this, a0); 
}
/* Void */
_jstype.definition.OnPointerUp = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 315, 9, false, this, a0); 
}
/* Void */
_jstype.definition.Rebuild = function(a0/*CanvasUpdate*/) { 
    
    return CS.Call(4, 315, 10, false, this, a0); 
}
/* Void */
_jstype.definition.SetDirection = function(a0/*Direction*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 315, 11, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$Scrollbar$ScrollEvent
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.Scrollbar.ScrollEvent",
    baseTypeName: "UnityEngine.Events.UnityEvent$1"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 316, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$ScrollRect
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.ScrollRect",
    baseTypeName: "UnityEngine.EventSystems.UIBehaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_content = function() { return CS.Call(2, 317, 0, false, this); }
_jstype.definition.set_content = function(v) { return CS.Call(3, 317, 0, false, this, v); }

_jstype.definition.get_horizontal = function() { return CS.Call(2, 317, 1, false, this); }
_jstype.definition.set_horizontal = function(v) { return CS.Call(3, 317, 1, false, this, v); }

_jstype.definition.get_vertical = function() { return CS.Call(2, 317, 2, false, this); }
_jstype.definition.set_vertical = function(v) { return CS.Call(3, 317, 2, false, this, v); }

_jstype.definition.get_movementType = function() { return CS.Call(2, 317, 3, false, this); }
_jstype.definition.set_movementType = function(v) { return CS.Call(3, 317, 3, false, this, v); }

_jstype.definition.get_elasticity = function() { return CS.Call(2, 317, 4, false, this); }
_jstype.definition.set_elasticity = function(v) { return CS.Call(3, 317, 4, false, this, v); }

_jstype.definition.get_inertia = function() { return CS.Call(2, 317, 5, false, this); }
_jstype.definition.set_inertia = function(v) { return CS.Call(3, 317, 5, false, this, v); }

_jstype.definition.get_decelerationRate = function() { return CS.Call(2, 317, 6, false, this); }
_jstype.definition.set_decelerationRate = function(v) { return CS.Call(3, 317, 6, false, this, v); }

_jstype.definition.get_scrollSensitivity = function() { return CS.Call(2, 317, 7, false, this); }
_jstype.definition.set_scrollSensitivity = function(v) { return CS.Call(3, 317, 7, false, this, v); }

_jstype.definition.get_horizontalScrollbar = function() { return CS.Call(2, 317, 8, false, this); }
_jstype.definition.set_horizontalScrollbar = function(v) { return CS.Call(3, 317, 8, false, this, v); }

_jstype.definition.get_verticalScrollbar = function() { return CS.Call(2, 317, 9, false, this); }
_jstype.definition.set_verticalScrollbar = function(v) { return CS.Call(3, 317, 9, false, this, v); }

_jstype.definition.get_onValueChanged = function() { return CS.Call(2, 317, 10, false, this); }
_jstype.definition.set_onValueChanged = function(v) { return CS.Call(3, 317, 10, false, this, v); }

_jstype.definition.get_velocity = function() { return CS.Call(2, 317, 11, false, this); }
_jstype.definition.set_velocity = function(v) { return CS.Call(3, 317, 11, false, this, v); }

_jstype.definition.get_normalizedPosition = function() { return CS.Call(2, 317, 12, false, this); }
_jstype.definition.set_normalizedPosition = function(v) { return CS.Call(3, 317, 12, false, this, v); }

_jstype.definition.get_horizontalNormalizedPosition = function() { return CS.Call(2, 317, 13, false, this); }
_jstype.definition.set_horizontalNormalizedPosition = function(v) { return CS.Call(3, 317, 13, false, this, v); }

_jstype.definition.get_verticalNormalizedPosition = function() { return CS.Call(2, 317, 14, false, this); }
_jstype.definition.set_verticalNormalizedPosition = function(v) { return CS.Call(3, 317, 14, false, this, v); }

// methods

/* Boolean */
_jstype.definition.IsActive = function() { 
    
    return CS.Call(4, 317, 0, false, this); 
}
/* Void */
_jstype.definition.OnBeginDrag = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 317, 1, false, this, a0); 
}
/* Void */
_jstype.definition.OnDrag = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 317, 2, false, this, a0); 
}
/* Void */
_jstype.definition.OnEndDrag = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 317, 3, false, this, a0); 
}
/* Void */
_jstype.definition.OnInitializePotentialDrag = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 317, 4, false, this, a0); 
}
/* Void */
_jstype.definition.OnScroll = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 317, 5, false, this, a0); 
}
/* Void */
_jstype.definition.Rebuild = function(a0/*CanvasUpdate*/) { 
    
    return CS.Call(4, 317, 6, false, this, a0); 
}
/* Void */
_jstype.definition.StopMovement = function() { 
    
    return CS.Call(4, 317, 7, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$ScrollRect$ScrollRectEvent
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.ScrollRect.ScrollRectEvent",
    baseTypeName: "UnityEngine.Events.UnityEvent$1"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 318, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$Selectable
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.Selectable",
    baseTypeName: "UnityEngine.EventSystems.UIBehaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.staticDefinition.get_allSelectables = function() { return CS.Call(2, 319, 0, true); }
_jstype.staticDefinition.set_allSelectables = function(v) { return CS.Call(3, 319, 0, true, v); }

_jstype.definition.get_navigation = function() { return CS.Call(2, 319, 1, false, this); }
_jstype.definition.set_navigation = function(v) { return CS.Call(3, 319, 1, false, this, v); }

_jstype.definition.get_transition = function() { return CS.Call(2, 319, 2, false, this); }
_jstype.definition.set_transition = function(v) { return CS.Call(3, 319, 2, false, this, v); }

_jstype.definition.get_colors = function() { return CS.Call(2, 319, 3, false, this); }
_jstype.definition.set_colors = function(v) { return CS.Call(3, 319, 3, false, this, v); }

_jstype.definition.get_spriteState = function() { return CS.Call(2, 319, 4, false, this); }
_jstype.definition.set_spriteState = function(v) { return CS.Call(3, 319, 4, false, this, v); }

_jstype.definition.get_animationTriggers = function() { return CS.Call(2, 319, 5, false, this); }
_jstype.definition.set_animationTriggers = function(v) { return CS.Call(3, 319, 5, false, this, v); }

_jstype.definition.get_targetGraphic = function() { return CS.Call(2, 319, 6, false, this); }
_jstype.definition.set_targetGraphic = function(v) { return CS.Call(3, 319, 6, false, this, v); }

_jstype.definition.get_interactable = function() { return CS.Call(2, 319, 7, false, this); }
_jstype.definition.set_interactable = function(v) { return CS.Call(3, 319, 7, false, this, v); }

_jstype.definition.get_image = function() { return CS.Call(2, 319, 8, false, this); }
_jstype.definition.set_image = function(v) { return CS.Call(3, 319, 8, false, this, v); }

_jstype.definition.get_animator = function() { return CS.Call(2, 319, 9, false, this); }
_jstype.definition.set_animator = function(v) { return CS.Call(3, 319, 9, false, this, v); }

// methods

/* Selectable */
_jstype.definition.FindSelectable = function(a0/*Vector3*/) { 
    
    return CS.Call(4, 319, 0, false, this, a0); 
}
/* Selectable */
_jstype.definition.FindSelectableOnDown = function() { 
    
    return CS.Call(4, 319, 1, false, this); 
}
/* Selectable */
_jstype.definition.FindSelectableOnLeft = function() { 
    
    return CS.Call(4, 319, 2, false, this); 
}
/* Selectable */
_jstype.definition.FindSelectableOnRight = function() { 
    
    return CS.Call(4, 319, 3, false, this); 
}
/* Selectable */
_jstype.definition.FindSelectableOnUp = function() { 
    
    return CS.Call(4, 319, 4, false, this); 
}
/* Boolean */
_jstype.definition.IsInteractable = function() { 
    
    return CS.Call(4, 319, 5, false, this); 
}
/* Void */
_jstype.definition.OnDeselect = function(a0/*BaseEventData*/) { 
    
    return CS.Call(4, 319, 6, false, this, a0); 
}
/* Void */
_jstype.definition.OnMove = function(a0/*AxisEventData*/) { 
    
    return CS.Call(4, 319, 7, false, this, a0); 
}
/* Void */
_jstype.definition.OnPointerDown = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 319, 8, false, this, a0); 
}
/* Void */
_jstype.definition.OnPointerEnter = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 319, 9, false, this, a0); 
}
/* Void */
_jstype.definition.OnPointerExit = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 319, 10, false, this, a0); 
}
/* Void */
_jstype.definition.OnPointerUp = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 319, 11, false, this, a0); 
}
/* Void */
_jstype.definition.OnSelect = function(a0/*BaseEventData*/) { 
    
    return CS.Call(4, 319, 12, false, this, a0); 
}
/* Void */
_jstype.definition.Select = function() { 
    
    return CS.Call(4, 319, 13, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$Slider
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.Slider",
    baseTypeName: "UnityEngine.UI.Selectable"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_fillRect = function() { return CS.Call(2, 320, 0, false, this); }
_jstype.definition.set_fillRect = function(v) { return CS.Call(3, 320, 0, false, this, v); }

_jstype.definition.get_handleRect = function() { return CS.Call(2, 320, 1, false, this); }
_jstype.definition.set_handleRect = function(v) { return CS.Call(3, 320, 1, false, this, v); }

_jstype.definition.get_direction = function() { return CS.Call(2, 320, 2, false, this); }
_jstype.definition.set_direction = function(v) { return CS.Call(3, 320, 2, false, this, v); }

_jstype.definition.get_minValue = function() { return CS.Call(2, 320, 3, false, this); }
_jstype.definition.set_minValue = function(v) { return CS.Call(3, 320, 3, false, this, v); }

_jstype.definition.get_maxValue = function() { return CS.Call(2, 320, 4, false, this); }
_jstype.definition.set_maxValue = function(v) { return CS.Call(3, 320, 4, false, this, v); }

_jstype.definition.get_wholeNumbers = function() { return CS.Call(2, 320, 5, false, this); }
_jstype.definition.set_wholeNumbers = function(v) { return CS.Call(3, 320, 5, false, this, v); }

_jstype.definition.get_value = function() { return CS.Call(2, 320, 6, false, this); }
_jstype.definition.set_value = function(v) { return CS.Call(3, 320, 6, false, this, v); }

_jstype.definition.get_normalizedValue = function() { return CS.Call(2, 320, 7, false, this); }
_jstype.definition.set_normalizedValue = function(v) { return CS.Call(3, 320, 7, false, this, v); }

_jstype.definition.get_onValueChanged = function() { return CS.Call(2, 320, 8, false, this); }
_jstype.definition.set_onValueChanged = function(v) { return CS.Call(3, 320, 8, false, this, v); }

// methods

/* Selectable */
_jstype.definition.FindSelectableOnDown = function() { 
    
    return CS.Call(4, 320, 0, false, this); 
}
/* Selectable */
_jstype.definition.FindSelectableOnLeft = function() { 
    
    return CS.Call(4, 320, 1, false, this); 
}
/* Selectable */
_jstype.definition.FindSelectableOnRight = function() { 
    
    return CS.Call(4, 320, 2, false, this); 
}
/* Selectable */
_jstype.definition.FindSelectableOnUp = function() { 
    
    return CS.Call(4, 320, 3, false, this); 
}
/* Void */
_jstype.definition.OnDrag = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 320, 4, false, this, a0); 
}
/* Void */
_jstype.definition.OnInitializePotentialDrag = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 320, 5, false, this, a0); 
}
/* Void */
_jstype.definition.OnMove = function(a0/*AxisEventData*/) { 
    
    return CS.Call(4, 320, 6, false, this, a0); 
}
/* Void */
_jstype.definition.OnPointerDown = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 320, 7, false, this, a0); 
}
/* Void */
_jstype.definition.Rebuild = function(a0/*CanvasUpdate*/) { 
    
    return CS.Call(4, 320, 8, false, this, a0); 
}
/* Void */
_jstype.definition.SetDirection = function(a0/*Direction*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 320, 9, false, this, a0, a1); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$Slider$SliderEvent
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.Slider.SliderEvent",
    baseTypeName: "UnityEngine.Events.UnityEvent$1"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 321, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$StencilMaterial
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.StencilMaterial",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* static Material  */
_jstype.staticDefinition.Add = function(a0/*Material*/, a1/*Int32*/) { 
    
    return CS.Call(4, 322, 0, true, a0, a1); 
}
/* static Void  */
_jstype.staticDefinition.Remove = function(a0/*Material*/) { 
    
    return CS.Call(4, 322, 1, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$Text
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.Text",
    baseTypeName: "UnityEngine.UI.MaskableGraphic"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_cachedTextGenerator = function() { return CS.Call(2, 323, 0, false, this); }
_jstype.definition.set_cachedTextGenerator = function(v) { return CS.Call(3, 323, 0, false, this, v); }

_jstype.definition.get_cachedTextGeneratorForLayout = function() { return CS.Call(2, 323, 1, false, this); }
_jstype.definition.set_cachedTextGeneratorForLayout = function(v) { return CS.Call(3, 323, 1, false, this, v); }

_jstype.definition.get_defaultMaterial = function() { return CS.Call(2, 323, 2, false, this); }
_jstype.definition.set_defaultMaterial = function(v) { return CS.Call(3, 323, 2, false, this, v); }

_jstype.definition.get_mainTexture = function() { return CS.Call(2, 323, 3, false, this); }
_jstype.definition.set_mainTexture = function(v) { return CS.Call(3, 323, 3, false, this, v); }

_jstype.definition.get_font = function() { return CS.Call(2, 323, 4, false, this); }
_jstype.definition.set_font = function(v) { return CS.Call(3, 323, 4, false, this, v); }

_jstype.definition.get_text = function() { return CS.Call(2, 323, 5, false, this); }
_jstype.definition.set_text = function(v) { return CS.Call(3, 323, 5, false, this, v); }

_jstype.definition.get_supportRichText = function() { return CS.Call(2, 323, 6, false, this); }
_jstype.definition.set_supportRichText = function(v) { return CS.Call(3, 323, 6, false, this, v); }

_jstype.definition.get_resizeTextForBestFit = function() { return CS.Call(2, 323, 7, false, this); }
_jstype.definition.set_resizeTextForBestFit = function(v) { return CS.Call(3, 323, 7, false, this, v); }

_jstype.definition.get_resizeTextMinSize = function() { return CS.Call(2, 323, 8, false, this); }
_jstype.definition.set_resizeTextMinSize = function(v) { return CS.Call(3, 323, 8, false, this, v); }

_jstype.definition.get_resizeTextMaxSize = function() { return CS.Call(2, 323, 9, false, this); }
_jstype.definition.set_resizeTextMaxSize = function(v) { return CS.Call(3, 323, 9, false, this, v); }

_jstype.definition.get_alignment = function() { return CS.Call(2, 323, 10, false, this); }
_jstype.definition.set_alignment = function(v) { return CS.Call(3, 323, 10, false, this, v); }

_jstype.definition.get_fontSize = function() { return CS.Call(2, 323, 11, false, this); }
_jstype.definition.set_fontSize = function(v) { return CS.Call(3, 323, 11, false, this, v); }

_jstype.definition.get_horizontalOverflow = function() { return CS.Call(2, 323, 12, false, this); }
_jstype.definition.set_horizontalOverflow = function(v) { return CS.Call(3, 323, 12, false, this, v); }

_jstype.definition.get_verticalOverflow = function() { return CS.Call(2, 323, 13, false, this); }
_jstype.definition.set_verticalOverflow = function(v) { return CS.Call(3, 323, 13, false, this, v); }

_jstype.definition.get_lineSpacing = function() { return CS.Call(2, 323, 14, false, this); }
_jstype.definition.set_lineSpacing = function(v) { return CS.Call(3, 323, 14, false, this, v); }

_jstype.definition.get_fontStyle = function() { return CS.Call(2, 323, 15, false, this); }
_jstype.definition.set_fontStyle = function(v) { return CS.Call(3, 323, 15, false, this, v); }

_jstype.definition.get_pixelsPerUnit = function() { return CS.Call(2, 323, 16, false, this); }
_jstype.definition.set_pixelsPerUnit = function(v) { return CS.Call(3, 323, 16, false, this, v); }

_jstype.definition.get_minWidth = function() { return CS.Call(2, 323, 17, false, this); }
_jstype.definition.set_minWidth = function(v) { return CS.Call(3, 323, 17, false, this, v); }

_jstype.definition.get_preferredWidth = function() { return CS.Call(2, 323, 18, false, this); }
_jstype.definition.set_preferredWidth = function(v) { return CS.Call(3, 323, 18, false, this, v); }

_jstype.definition.get_flexibleWidth = function() { return CS.Call(2, 323, 19, false, this); }
_jstype.definition.set_flexibleWidth = function(v) { return CS.Call(3, 323, 19, false, this, v); }

_jstype.definition.get_minHeight = function() { return CS.Call(2, 323, 20, false, this); }
_jstype.definition.set_minHeight = function(v) { return CS.Call(3, 323, 20, false, this, v); }

_jstype.definition.get_preferredHeight = function() { return CS.Call(2, 323, 21, false, this); }
_jstype.definition.set_preferredHeight = function(v) { return CS.Call(3, 323, 21, false, this, v); }

_jstype.definition.get_flexibleHeight = function() { return CS.Call(2, 323, 22, false, this); }
_jstype.definition.set_flexibleHeight = function(v) { return CS.Call(3, 323, 22, false, this, v); }

_jstype.definition.get_layoutPriority = function() { return CS.Call(2, 323, 23, false, this); }
_jstype.definition.set_layoutPriority = function(v) { return CS.Call(3, 323, 23, false, this, v); }

// methods

/* Void */
_jstype.definition.CalculateLayoutInputHorizontal = function() { 
    
    return CS.Call(4, 323, 0, false, this); 
}
/* Void */
_jstype.definition.CalculateLayoutInputVertical = function() { 
    
    return CS.Call(4, 323, 1, false, this); 
}
/* Void */
_jstype.definition.FontTextureChanged = function() { 
    
    return CS.Call(4, 323, 2, false, this); 
}
/* TextGenerationSettings */
_jstype.definition.GetGenerationSettings = function(a0/*Vector2*/) { 
    
    return CS.Call(4, 323, 3, false, this, a0); 
}
/* static Vector2  */
_jstype.staticDefinition.GetTextAnchorPivot = function(a0/*TextAnchor*/) { 
    
    return CS.Call(4, 323, 4, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$Toggle
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.Toggle",
    baseTypeName: "UnityEngine.UI.Selectable"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

_jstype.fields.toggleTransition =  { 
            get: function() { return CS.Call(0, 324, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 324, 0, false, this, v); } 
        };

_jstype.fields.graphic =  { 
            get: function() { return CS.Call(0, 324, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 324, 1, false, this, v); } 
        };

_jstype.fields.onValueChanged =  { 
            get: function() { return CS.Call(0, 324, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 324, 2, false, this, v); } 
        };

// properties

_jstype.definition.get_group = function() { return CS.Call(2, 324, 0, false, this); }
_jstype.definition.set_group = function(v) { return CS.Call(3, 324, 0, false, this, v); }

_jstype.definition.get_isOn = function() { return CS.Call(2, 324, 1, false, this); }
_jstype.definition.set_isOn = function(v) { return CS.Call(3, 324, 1, false, this, v); }

// methods

/* Void */
_jstype.definition.OnPointerClick = function(a0/*PointerEventData*/) { 
    
    return CS.Call(4, 324, 0, false, this, a0); 
}
/* Void */
_jstype.definition.OnSubmit = function(a0/*BaseEventData*/) { 
    
    return CS.Call(4, 324, 1, false, this, a0); 
}
/* Void */
_jstype.definition.Rebuild = function(a0/*CanvasUpdate*/) { 
    
    return CS.Call(4, 324, 2, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$Toggle$ToggleEvent
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.Toggle.ToggleEvent",
    baseTypeName: "UnityEngine.Events.UnityEvent$1"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 325, 0, true, this); }

// fields

// properties

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$ToggleGroup
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.ToggleGroup",
    baseTypeName: "UnityEngine.EventSystems.UIBehaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_allowSwitchOff = function() { return CS.Call(2, 326, 0, false, this); }
_jstype.definition.set_allowSwitchOff = function(v) { return CS.Call(3, 326, 0, false, this, v); }

// methods

/* IEnumerable`1 */
_jstype.definition.ActiveToggles = function() { 
    
    return CS.Call(4, 326, 0, false, this); 
}
/* Boolean */
_jstype.definition.AnyTogglesOn = function() { 
    
    return CS.Call(4, 326, 1, false, this); 
}
/* Void */
_jstype.definition.NotifyToggleOn = function(a0/*Toggle*/) { 
    
    return CS.Call(4, 326, 2, false, this, a0); 
}
/* Void */
_jstype.definition.RegisterToggle = function(a0/*Toggle*/) { 
    
    return CS.Call(4, 326, 3, false, this, a0); 
}
/* Void */
_jstype.definition.SetAllTogglesOff = function() { 
    
    return CS.Call(4, 326, 4, false, this); 
}
/* Void */
_jstype.definition.UnregisterToggle = function(a0/*Toggle*/) { 
    
    return CS.Call(4, 326, 5, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$AspectRatioFitter
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.AspectRatioFitter",
    baseTypeName: "UnityEngine.EventSystems.UIBehaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_aspectMode = function() { return CS.Call(2, 327, 0, false, this); }
_jstype.definition.set_aspectMode = function(v) { return CS.Call(3, 327, 0, false, this, v); }

_jstype.definition.get_aspectRatio = function() { return CS.Call(2, 327, 1, false, this); }
_jstype.definition.set_aspectRatio = function(v) { return CS.Call(3, 327, 1, false, this, v); }

// methods

/* Void */
_jstype.definition.SetLayoutHorizontal = function() { 
    
    return CS.Call(4, 327, 0, false, this); 
}
/* Void */
_jstype.definition.SetLayoutVertical = function() { 
    
    return CS.Call(4, 327, 1, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$CanvasScaler
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.CanvasScaler",
    baseTypeName: "UnityEngine.EventSystems.UIBehaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_uiScaleMode = function() { return CS.Call(2, 328, 0, false, this); }
_jstype.definition.set_uiScaleMode = function(v) { return CS.Call(3, 328, 0, false, this, v); }

_jstype.definition.get_referencePixelsPerUnit = function() { return CS.Call(2, 328, 1, false, this); }
_jstype.definition.set_referencePixelsPerUnit = function(v) { return CS.Call(3, 328, 1, false, this, v); }

_jstype.definition.get_scaleFactor = function() { return CS.Call(2, 328, 2, false, this); }
_jstype.definition.set_scaleFactor = function(v) { return CS.Call(3, 328, 2, false, this, v); }

_jstype.definition.get_referenceResolution = function() { return CS.Call(2, 328, 3, false, this); }
_jstype.definition.set_referenceResolution = function(v) { return CS.Call(3, 328, 3, false, this, v); }

_jstype.definition.get_screenMatchMode = function() { return CS.Call(2, 328, 4, false, this); }
_jstype.definition.set_screenMatchMode = function(v) { return CS.Call(3, 328, 4, false, this, v); }

_jstype.definition.get_matchWidthOrHeight = function() { return CS.Call(2, 328, 5, false, this); }
_jstype.definition.set_matchWidthOrHeight = function(v) { return CS.Call(3, 328, 5, false, this, v); }

_jstype.definition.get_physicalUnit = function() { return CS.Call(2, 328, 6, false, this); }
_jstype.definition.set_physicalUnit = function(v) { return CS.Call(3, 328, 6, false, this, v); }

_jstype.definition.get_fallbackScreenDPI = function() { return CS.Call(2, 328, 7, false, this); }
_jstype.definition.set_fallbackScreenDPI = function(v) { return CS.Call(3, 328, 7, false, this, v); }

_jstype.definition.get_defaultSpriteDPI = function() { return CS.Call(2, 328, 8, false, this); }
_jstype.definition.set_defaultSpriteDPI = function(v) { return CS.Call(3, 328, 8, false, this, v); }

_jstype.definition.get_dynamicPixelsPerUnit = function() { return CS.Call(2, 328, 9, false, this); }
_jstype.definition.set_dynamicPixelsPerUnit = function(v) { return CS.Call(3, 328, 9, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$ContentSizeFitter
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.ContentSizeFitter",
    baseTypeName: "UnityEngine.EventSystems.UIBehaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_horizontalFit = function() { return CS.Call(2, 329, 0, false, this); }
_jstype.definition.set_horizontalFit = function(v) { return CS.Call(3, 329, 0, false, this, v); }

_jstype.definition.get_verticalFit = function() { return CS.Call(2, 329, 1, false, this); }
_jstype.definition.set_verticalFit = function(v) { return CS.Call(3, 329, 1, false, this, v); }

// methods

/* Void */
_jstype.definition.SetLayoutHorizontal = function() { 
    
    return CS.Call(4, 329, 0, false, this); 
}
/* Void */
_jstype.definition.SetLayoutVertical = function() { 
    
    return CS.Call(4, 329, 1, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$GridLayoutGroup
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.GridLayoutGroup",
    baseTypeName: "UnityEngine.UI.LayoutGroup"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_startCorner = function() { return CS.Call(2, 330, 0, false, this); }
_jstype.definition.set_startCorner = function(v) { return CS.Call(3, 330, 0, false, this, v); }

_jstype.definition.get_startAxis = function() { return CS.Call(2, 330, 1, false, this); }
_jstype.definition.set_startAxis = function(v) { return CS.Call(3, 330, 1, false, this, v); }

_jstype.definition.get_cellSize = function() { return CS.Call(2, 330, 2, false, this); }
_jstype.definition.set_cellSize = function(v) { return CS.Call(3, 330, 2, false, this, v); }

_jstype.definition.get_spacing = function() { return CS.Call(2, 330, 3, false, this); }
_jstype.definition.set_spacing = function(v) { return CS.Call(3, 330, 3, false, this, v); }

_jstype.definition.get_constraint = function() { return CS.Call(2, 330, 4, false, this); }
_jstype.definition.set_constraint = function(v) { return CS.Call(3, 330, 4, false, this, v); }

_jstype.definition.get_constraintCount = function() { return CS.Call(2, 330, 5, false, this); }
_jstype.definition.set_constraintCount = function(v) { return CS.Call(3, 330, 5, false, this, v); }

// methods

/* Void */
_jstype.definition.CalculateLayoutInputHorizontal = function() { 
    
    return CS.Call(4, 330, 0, false, this); 
}
/* Void */
_jstype.definition.CalculateLayoutInputVertical = function() { 
    
    return CS.Call(4, 330, 1, false, this); 
}
/* Void */
_jstype.definition.SetLayoutHorizontal = function() { 
    
    return CS.Call(4, 330, 2, false, this); 
}
/* Void */
_jstype.definition.SetLayoutVertical = function() { 
    
    return CS.Call(4, 330, 3, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$HorizontalLayoutGroup
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.HorizontalLayoutGroup",
    baseTypeName: "UnityEngine.UI.HorizontalOrVerticalLayoutGroup"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.CalculateLayoutInputHorizontal = function() { 
    
    return CS.Call(4, 331, 0, false, this); 
}
/* Void */
_jstype.definition.CalculateLayoutInputVertical = function() { 
    
    return CS.Call(4, 331, 1, false, this); 
}
/* Void */
_jstype.definition.SetLayoutHorizontal = function() { 
    
    return CS.Call(4, 331, 2, false, this); 
}
/* Void */
_jstype.definition.SetLayoutVertical = function() { 
    
    return CS.Call(4, 331, 3, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$HorizontalOrVerticalLayoutGroup
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.HorizontalOrVerticalLayoutGroup",
    baseTypeName: "UnityEngine.UI.LayoutGroup"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_spacing = function() { return CS.Call(2, 332, 0, false, this); }
_jstype.definition.set_spacing = function(v) { return CS.Call(3, 332, 0, false, this, v); }

_jstype.definition.get_childForceExpandWidth = function() { return CS.Call(2, 332, 1, false, this); }
_jstype.definition.set_childForceExpandWidth = function(v) { return CS.Call(3, 332, 1, false, this, v); }

_jstype.definition.get_childForceExpandHeight = function() { return CS.Call(2, 332, 2, false, this); }
_jstype.definition.set_childForceExpandHeight = function(v) { return CS.Call(3, 332, 2, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$LayoutElement
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.LayoutElement",
    baseTypeName: "UnityEngine.EventSystems.UIBehaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_ignoreLayout = function() { return CS.Call(2, 333, 0, false, this); }
_jstype.definition.set_ignoreLayout = function(v) { return CS.Call(3, 333, 0, false, this, v); }

_jstype.definition.get_minWidth = function() { return CS.Call(2, 333, 1, false, this); }
_jstype.definition.set_minWidth = function(v) { return CS.Call(3, 333, 1, false, this, v); }

_jstype.definition.get_minHeight = function() { return CS.Call(2, 333, 2, false, this); }
_jstype.definition.set_minHeight = function(v) { return CS.Call(3, 333, 2, false, this, v); }

_jstype.definition.get_preferredWidth = function() { return CS.Call(2, 333, 3, false, this); }
_jstype.definition.set_preferredWidth = function(v) { return CS.Call(3, 333, 3, false, this, v); }

_jstype.definition.get_preferredHeight = function() { return CS.Call(2, 333, 4, false, this); }
_jstype.definition.set_preferredHeight = function(v) { return CS.Call(3, 333, 4, false, this, v); }

_jstype.definition.get_flexibleWidth = function() { return CS.Call(2, 333, 5, false, this); }
_jstype.definition.set_flexibleWidth = function(v) { return CS.Call(3, 333, 5, false, this, v); }

_jstype.definition.get_flexibleHeight = function() { return CS.Call(2, 333, 6, false, this); }
_jstype.definition.set_flexibleHeight = function(v) { return CS.Call(3, 333, 6, false, this, v); }

_jstype.definition.get_layoutPriority = function() { return CS.Call(2, 333, 7, false, this); }
_jstype.definition.set_layoutPriority = function(v) { return CS.Call(3, 333, 7, false, this, v); }

// methods

/* Void */
_jstype.definition.CalculateLayoutInputHorizontal = function() { 
    
    return CS.Call(4, 333, 0, false, this); 
}
/* Void */
_jstype.definition.CalculateLayoutInputVertical = function() { 
    
    return CS.Call(4, 333, 1, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$LayoutGroup
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.LayoutGroup",
    baseTypeName: "UnityEngine.EventSystems.UIBehaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_padding = function() { return CS.Call(2, 334, 0, false, this); }
_jstype.definition.set_padding = function(v) { return CS.Call(3, 334, 0, false, this, v); }

_jstype.definition.get_childAlignment = function() { return CS.Call(2, 334, 1, false, this); }
_jstype.definition.set_childAlignment = function(v) { return CS.Call(3, 334, 1, false, this, v); }

_jstype.definition.get_minWidth = function() { return CS.Call(2, 334, 2, false, this); }
_jstype.definition.set_minWidth = function(v) { return CS.Call(3, 334, 2, false, this, v); }

_jstype.definition.get_preferredWidth = function() { return CS.Call(2, 334, 3, false, this); }
_jstype.definition.set_preferredWidth = function(v) { return CS.Call(3, 334, 3, false, this, v); }

_jstype.definition.get_flexibleWidth = function() { return CS.Call(2, 334, 4, false, this); }
_jstype.definition.set_flexibleWidth = function(v) { return CS.Call(3, 334, 4, false, this, v); }

_jstype.definition.get_minHeight = function() { return CS.Call(2, 334, 5, false, this); }
_jstype.definition.set_minHeight = function(v) { return CS.Call(3, 334, 5, false, this, v); }

_jstype.definition.get_preferredHeight = function() { return CS.Call(2, 334, 6, false, this); }
_jstype.definition.set_preferredHeight = function(v) { return CS.Call(3, 334, 6, false, this, v); }

_jstype.definition.get_flexibleHeight = function() { return CS.Call(2, 334, 7, false, this); }
_jstype.definition.set_flexibleHeight = function(v) { return CS.Call(3, 334, 7, false, this, v); }

_jstype.definition.get_layoutPriority = function() { return CS.Call(2, 334, 8, false, this); }
_jstype.definition.set_layoutPriority = function(v) { return CS.Call(3, 334, 8, false, this, v); }

// methods

/* Void */
_jstype.definition.CalculateLayoutInputHorizontal = function() { 
    
    return CS.Call(4, 334, 0, false, this); 
}
/* Void */
_jstype.definition.CalculateLayoutInputVertical = function() { 
    
    return CS.Call(4, 334, 1, false, this); 
}
/* Void */
_jstype.definition.SetLayoutHorizontal = function() { 
    
    return CS.Call(4, 334, 2, false, this); 
}
/* Void */
_jstype.definition.SetLayoutVertical = function() { 
    
    return CS.Call(4, 334, 3, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$LayoutUtility
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.LayoutUtility",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* static Single  */
_jstype.staticDefinition.GetFlexibleHeight = function(a0/*RectTransform*/) { 
    
    return CS.Call(4, 335, 0, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.GetFlexibleSize = function(a0/*RectTransform*/, a1/*Int32*/) { 
    
    return CS.Call(4, 335, 1, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.GetFlexibleWidth = function(a0/*RectTransform*/) { 
    
    return CS.Call(4, 335, 2, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.GetLayoutProperty$$RectTransform$$Func$2$ILayoutElement$Single$$Single$$ILayoutElement = function(a0/*RectTransform*/, a1/*Func`2*/, a2/*Single*/, a3/*ILayoutElement&*/) { 
    
    return CS.Call(4, 335, 3, true, a0, a1, a2, a3); 
}
/* static Single  */
_jstype.staticDefinition.GetLayoutProperty$$RectTransform$$Func$2$ILayoutElement$Single$$Single = function(a0/*RectTransform*/, a1/*Func`2*/, a2/*Single*/) { 
    
    return CS.Call(4, 335, 4, true, a0, a1, a2); 
}
/* static Single  */
_jstype.staticDefinition.GetMinHeight = function(a0/*RectTransform*/) { 
    
    return CS.Call(4, 335, 5, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.GetMinSize = function(a0/*RectTransform*/, a1/*Int32*/) { 
    
    return CS.Call(4, 335, 6, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.GetMinWidth = function(a0/*RectTransform*/) { 
    
    return CS.Call(4, 335, 7, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.GetPreferredHeight = function(a0/*RectTransform*/) { 
    
    return CS.Call(4, 335, 8, true, a0); 
}
/* static Single  */
_jstype.staticDefinition.GetPreferredSize = function(a0/*RectTransform*/, a1/*Int32*/) { 
    
    return CS.Call(4, 335, 9, true, a0, a1); 
}
/* static Single  */
_jstype.staticDefinition.GetPreferredWidth = function(a0/*RectTransform*/) { 
    
    return CS.Call(4, 335, 10, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$VerticalLayoutGroup
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.VerticalLayoutGroup",
    baseTypeName: "UnityEngine.UI.HorizontalOrVerticalLayoutGroup"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.CalculateLayoutInputHorizontal = function() { 
    
    return CS.Call(4, 336, 0, false, this); 
}
/* Void */
_jstype.definition.CalculateLayoutInputVertical = function() { 
    
    return CS.Call(4, 336, 1, false, this); 
}
/* Void */
_jstype.definition.SetLayoutHorizontal = function() { 
    
    return CS.Call(4, 336, 2, false, this); 
}
/* Void */
_jstype.definition.SetLayoutVertical = function() { 
    
    return CS.Call(4, 336, 3, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$Mask
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.Mask",
    baseTypeName: "UnityEngine.EventSystems.UIBehaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_showMaskGraphic = function() { return CS.Call(2, 337, 0, false, this); }
_jstype.definition.set_showMaskGraphic = function(v) { return CS.Call(3, 337, 0, false, this, v); }

_jstype.definition.get_rectTransform = function() { return CS.Call(2, 337, 1, false, this); }
_jstype.definition.set_rectTransform = function(v) { return CS.Call(3, 337, 1, false, this, v); }

// methods

/* Material */
_jstype.definition.GetModifiedMaterial = function(a0/*Material*/) { 
    
    return CS.Call(4, 337, 0, false, this, a0); 
}
/* Boolean */
_jstype.definition.IsRaycastLocationValid = function(a0/*Vector2*/, a1/*Camera*/) { 
    
    return CS.Call(4, 337, 1, false, this, a0, a1); 
}
/* Boolean */
_jstype.definition.MaskEnabled = function() { 
    
    return CS.Call(4, 337, 2, false, this); 
}
/* Void */
_jstype.definition.OnSiblingGraphicEnabledDisabled = function() { 
    
    return CS.Call(4, 337, 3, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$BaseVertexEffect
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.BaseVertexEffect",
    baseTypeName: "UnityEngine.EventSystems.UIBehaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.ModifyVertices = function(a0/*List`1*/) { 
    
    return CS.Call(4, 338, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$Outline
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.Outline",
    baseTypeName: "UnityEngine.UI.Shadow"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.ModifyVertices = function(a0/*List`1*/) { 
    
    return CS.Call(4, 339, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$PositionAsUV1
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.PositionAsUV1",
    baseTypeName: "UnityEngine.UI.BaseVertexEffect"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.ModifyVertices = function(a0/*List`1*/) { 
    
    return CS.Call(4, 340, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$Shadow
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.UI.Shadow",
    baseTypeName: "UnityEngine.UI.BaseVertexEffect"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_effectColor = function() { return CS.Call(2, 341, 0, false, this); }
_jstype.definition.set_effectColor = function(v) { return CS.Call(3, 341, 0, false, this, v); }

_jstype.definition.get_effectDistance = function() { return CS.Call(2, 341, 1, false, this); }
_jstype.definition.set_effectDistance = function(v) { return CS.Call(3, 341, 1, false, this, v); }

_jstype.definition.get_useGraphicAlpha = function() { return CS.Call(2, 341, 2, false, this); }
_jstype.definition.set_useGraphicAlpha = function(v) { return CS.Call(3, 341, 2, false, this, v); }

// methods

/* Void */
_jstype.definition.ModifyVertices = function(a0/*List`1*/) { 
    
    return CS.Call(4, 341, 0, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$EventSystems$RaycastResult
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.EventSystems.RaycastResult",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 342, 0, true, this); }

// fields

_jstype.fields.module =  { 
            get: function() { return CS.Call(0, 342, 0, false, this); }, 
            set: function(v) { return CS.Call(1, 342, 0, false, this, v); } 
        };

_jstype.fields.distance =  { 
            get: function() { return CS.Call(0, 342, 1, false, this); }, 
            set: function(v) { return CS.Call(1, 342, 1, false, this, v); } 
        };

_jstype.fields.index =  { 
            get: function() { return CS.Call(0, 342, 2, false, this); }, 
            set: function(v) { return CS.Call(1, 342, 2, false, this, v); } 
        };

_jstype.fields.depth =  { 
            get: function() { return CS.Call(0, 342, 3, false, this); }, 
            set: function(v) { return CS.Call(1, 342, 3, false, this, v); } 
        };

_jstype.fields.sortingLayer =  { 
            get: function() { return CS.Call(0, 342, 4, false, this); }, 
            set: function(v) { return CS.Call(1, 342, 4, false, this, v); } 
        };

_jstype.fields.sortingOrder =  { 
            get: function() { return CS.Call(0, 342, 5, false, this); }, 
            set: function(v) { return CS.Call(1, 342, 5, false, this, v); } 
        };

_jstype.fields.worldPosition =  { 
            get: function() { return CS.Call(0, 342, 6, false, this); }, 
            set: function(v) { return CS.Call(1, 342, 6, false, this, v); } 
        };

_jstype.fields.worldNormal =  { 
            get: function() { return CS.Call(0, 342, 7, false, this); }, 
            set: function(v) { return CS.Call(1, 342, 7, false, this, v); } 
        };

_jstype.fields.screenPosition =  { 
            get: function() { return CS.Call(0, 342, 8, false, this); }, 
            set: function(v) { return CS.Call(1, 342, 8, false, this, v); } 
        };

// properties

_jstype.definition.get_gameObject = function() { return CS.Call(2, 342, 0, false, this); }
_jstype.definition.set_gameObject = function(v) { return CS.Call(3, 342, 0, false, this, v); }

_jstype.definition.get_isValid = function() { return CS.Call(2, 342, 1, false, this); }
_jstype.definition.set_isValid = function(v) { return CS.Call(3, 342, 1, false, this, v); }

// methods

/* Void */
_jstype.definition.Clear = function() { 
    
    return CS.Call(4, 342, 0, false, this); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 342, 1, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$ColorBlock
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.UI.ColorBlock",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 343, 0, true, this); }

// fields

// properties

_jstype.definition.get_normalColor = function() { return CS.Call(2, 343, 0, false, this); }
_jstype.definition.set_normalColor = function(v) { return CS.Call(3, 343, 0, false, this, v); }

_jstype.definition.get_highlightedColor = function() { return CS.Call(2, 343, 1, false, this); }
_jstype.definition.set_highlightedColor = function(v) { return CS.Call(3, 343, 1, false, this, v); }

_jstype.definition.get_pressedColor = function() { return CS.Call(2, 343, 2, false, this); }
_jstype.definition.set_pressedColor = function(v) { return CS.Call(3, 343, 2, false, this, v); }

_jstype.definition.get_disabledColor = function() { return CS.Call(2, 343, 3, false, this); }
_jstype.definition.set_disabledColor = function(v) { return CS.Call(3, 343, 3, false, this, v); }

_jstype.definition.get_colorMultiplier = function() { return CS.Call(2, 343, 4, false, this); }
_jstype.definition.set_colorMultiplier = function(v) { return CS.Call(3, 343, 4, false, this, v); }

_jstype.definition.get_fadeDuration = function() { return CS.Call(2, 343, 5, false, this); }
_jstype.definition.set_fadeDuration = function(v) { return CS.Call(3, 343, 5, false, this, v); }

_jstype.staticDefinition.get_defaultColorBlock = function() { return CS.Call(2, 343, 6, true); }
_jstype.staticDefinition.set_defaultColorBlock = function(v) { return CS.Call(3, 343, 6, true, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$FontData
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.UI.FontData",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 344, 0, true, this); }

// fields

// properties

_jstype.staticDefinition.get_defaultFontData = function() { return CS.Call(2, 344, 0, true); }
_jstype.staticDefinition.set_defaultFontData = function(v) { return CS.Call(3, 344, 0, true, v); }

_jstype.definition.get_font = function() { return CS.Call(2, 344, 1, false, this); }
_jstype.definition.set_font = function(v) { return CS.Call(3, 344, 1, false, this, v); }

_jstype.definition.get_fontSize = function() { return CS.Call(2, 344, 2, false, this); }
_jstype.definition.set_fontSize = function(v) { return CS.Call(3, 344, 2, false, this, v); }

_jstype.definition.get_fontStyle = function() { return CS.Call(2, 344, 3, false, this); }
_jstype.definition.set_fontStyle = function(v) { return CS.Call(3, 344, 3, false, this, v); }

_jstype.definition.get_bestFit = function() { return CS.Call(2, 344, 4, false, this); }
_jstype.definition.set_bestFit = function(v) { return CS.Call(3, 344, 4, false, this, v); }

_jstype.definition.get_minSize = function() { return CS.Call(2, 344, 5, false, this); }
_jstype.definition.set_minSize = function(v) { return CS.Call(3, 344, 5, false, this, v); }

_jstype.definition.get_maxSize = function() { return CS.Call(2, 344, 6, false, this); }
_jstype.definition.set_maxSize = function(v) { return CS.Call(3, 344, 6, false, this, v); }

_jstype.definition.get_alignment = function() { return CS.Call(2, 344, 7, false, this); }
_jstype.definition.set_alignment = function(v) { return CS.Call(3, 344, 7, false, this, v); }

_jstype.definition.get_richText = function() { return CS.Call(2, 344, 8, false, this); }
_jstype.definition.set_richText = function(v) { return CS.Call(3, 344, 8, false, this, v); }

_jstype.definition.get_horizontalOverflow = function() { return CS.Call(2, 344, 9, false, this); }
_jstype.definition.set_horizontalOverflow = function(v) { return CS.Call(3, 344, 9, false, this, v); }

_jstype.definition.get_verticalOverflow = function() { return CS.Call(2, 344, 10, false, this); }
_jstype.definition.set_verticalOverflow = function(v) { return CS.Call(3, 344, 10, false, this, v); }

_jstype.definition.get_lineSpacing = function() { return CS.Call(2, 344, 11, false, this); }
_jstype.definition.set_lineSpacing = function(v) { return CS.Call(3, 344, 11, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$Navigation
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.UI.Navigation",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 345, 0, true, this); }

// fields

// properties

_jstype.definition.get_mode = function() { return CS.Call(2, 345, 0, false, this); }
_jstype.definition.set_mode = function(v) { return CS.Call(3, 345, 0, false, this, v); }

_jstype.definition.get_selectOnUp = function() { return CS.Call(2, 345, 1, false, this); }
_jstype.definition.set_selectOnUp = function(v) { return CS.Call(3, 345, 1, false, this, v); }

_jstype.definition.get_selectOnDown = function() { return CS.Call(2, 345, 2, false, this); }
_jstype.definition.set_selectOnDown = function(v) { return CS.Call(3, 345, 2, false, this, v); }

_jstype.definition.get_selectOnLeft = function() { return CS.Call(2, 345, 3, false, this); }
_jstype.definition.set_selectOnLeft = function(v) { return CS.Call(3, 345, 3, false, this, v); }

_jstype.definition.get_selectOnRight = function() { return CS.Call(2, 345, 4, false, this); }
_jstype.definition.set_selectOnRight = function(v) { return CS.Call(3, 345, 4, false, this, v); }

_jstype.staticDefinition.get_defaultNavigation = function() { return CS.Call(2, 345, 5, true); }
_jstype.staticDefinition.set_defaultNavigation = function(v) { return CS.Call(3, 345, 5, true, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$SpriteState
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.UI.SpriteState",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 346, 0, true, this); }

// fields

// properties

_jstype.definition.get_highlightedSprite = function() { return CS.Call(2, 346, 0, false, this); }
_jstype.definition.set_highlightedSprite = function(v) { return CS.Call(3, 346, 0, false, this, v); }

_jstype.definition.get_pressedSprite = function() { return CS.Call(2, 346, 1, false, this); }
_jstype.definition.set_pressedSprite = function(v) { return CS.Call(3, 346, 1, false, this, v); }

_jstype.definition.get_disabledSprite = function() { return CS.Call(2, 346, 2, false, this); }
_jstype.definition.set_disabledSprite = function(v) { return CS.Call(3, 346, 2, false, this, v); }

// methods


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$UI$LayoutRebuilder
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Struct",
    fullname: "UnityEngine.UI.LayoutRebuilder",
    baseTypeName: "System.ValueType"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

_jstype.definition.get_transform = function() { return CS.Call(2, 347, 0, false, this); }
_jstype.definition.set_transform = function(v) { return CS.Call(3, 347, 0, false, this, v); }

// methods

/* Boolean */
_jstype.definition.Equals$$LayoutRebuilder = function(a0/*LayoutRebuilder*/) { 
    
    return CS.Call(4, 347, 0, false, this, a0); 
}
/* Int32 */
_jstype.definition.GetHashCode = function() { 
    
    return CS.Call(4, 347, 1, false, this); 
}
/* Boolean */
_jstype.definition.IsDestroyed = function() { 
    
    return CS.Call(4, 347, 2, false, this); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 347, 3, false, this); 
}
/* static Void  */
_jstype.staticDefinition.MarkLayoutForRebuild = function(a0/*RectTransform*/) { 
    
    return CS.Call(4, 347, 4, true, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// System$Text$StringBuilder
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "System.Text.StringBuilder",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor$$String$$Int32$$Int32$$Int32 = function(a0, a1, a2, a3) { CS.Call(5, 348, 0, true, this, a0, a1, a2, a3); }
_jstype.definition.ctor = function() { CS.Call(5, 348, 1, true, this); }
_jstype.definition.ctor$$Int32 = function(a0) { CS.Call(5, 348, 2, true, this, a0); }
_jstype.definition.ctor$$Int32$$Int32 = function(a0, a1) { CS.Call(5, 348, 3, true, this, a0, a1); }
_jstype.definition.ctor$$String = function(a0) { CS.Call(5, 348, 4, true, this, a0); }
_jstype.definition.ctor$$String$$Int32 = function(a0, a1) { CS.Call(5, 348, 5, true, this, a0, a1); }

// fields

// properties

_jstype.definition.get_MaxCapacity = function() { return CS.Call(2, 348, 0, false, this); }
_jstype.definition.set_MaxCapacity = function(v) { return CS.Call(3, 348, 0, false, this, v); }

_jstype.definition.get_Capacity = function() { return CS.Call(2, 348, 1, false, this); }
_jstype.definition.set_Capacity = function(v) { return CS.Call(3, 348, 1, false, this, v); }

_jstype.definition.get_Length = function() { return CS.Call(2, 348, 2, false, this); }
_jstype.definition.set_Length = function(v) { return CS.Call(3, 348, 2, false, this, v); }

_jstype.definition.get_Chars$$Int32 = function(ind0) { return CS.Call(2, 348, 3, false, this, ind0); }
_jstype.definition.set_Chars$$Int32 = function(ind0, v) { return CS.Call(3, 348, 3, false, this, ind0, v); }

// methods

/* StringBuilder */
_jstype.definition.Append$$Char$Array$$Int32$$Int32 = function(a0/*Char[]*/, a1/*Int32*/, a2/*Int32*/) { 
    
    return CS.Call(4, 348, 0, false, this, a0, a1, a2); 
}
/* StringBuilder */
_jstype.definition.Append$$String$$Int32$$Int32 = function(a0/*String*/, a1/*Int32*/, a2/*Int32*/) { 
    
    return CS.Call(4, 348, 1, false, this, a0, a1, a2); 
}
/* StringBuilder */
_jstype.definition.Append$$Char$$Int32 = function(a0/*Char*/, a1/*Int32*/) { 
    
    return CS.Call(4, 348, 2, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Append$$Int64 = function(a0/*Int64*/) { 
    
    return CS.Call(4, 348, 3, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Object = function(a0/*Object*/) { 
    
    return CS.Call(4, 348, 4, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Int32 = function(a0/*Int32*/) { 
    
    return CS.Call(4, 348, 5, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Double = function(a0/*Double*/) { 
    
    return CS.Call(4, 348, 6, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Int16 = function(a0/*Int16*/) { 
    
    return CS.Call(4, 348, 7, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$SByte = function(a0/*SByte*/) { 
    
    return CS.Call(4, 348, 8, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$UInt64 = function(a0/*UInt64*/) { 
    
    return CS.Call(4, 348, 9, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Char = function(a0/*Char*/) { 
    
    return CS.Call(4, 348, 10, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$UInt32 = function(a0/*UInt32*/) { 
    
    return CS.Call(4, 348, 11, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Single = function(a0/*Single*/) { 
    
    return CS.Call(4, 348, 12, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$UInt16 = function(a0/*UInt16*/) { 
    
    return CS.Call(4, 348, 13, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 348, 14, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Char$Array = function(a0/*Char[]*/) { 
    
    return CS.Call(4, 348, 15, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Boolean = function(a0/*Boolean*/) { 
    
    return CS.Call(4, 348, 16, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Decimal = function(a0/*Decimal*/) { 
    
    return CS.Call(4, 348, 17, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Append$$Byte = function(a0/*Byte*/) { 
    
    return CS.Call(4, 348, 18, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.AppendFormat$$String$$Object$$Object$$Object = function(a0/*String*/, a1/*Object*/, a2/*Object*/, a3/*Object*/) { 
    
    return CS.Call(4, 348, 19, false, this, a0, a1, a2, a3); 
}
/* StringBuilder */
_jstype.definition.AppendFormat$$IFormatProvider$$String$$Object$Array = function(a0/*IFormatProvider*/, a1/*String*/, a2/*Object[]*/) { 
    
    return CS.Call(4, 348, 20, false, this, a0, a1, jsb_formatParamsArray(2, a2, arguments)); 
}
/* StringBuilder */
_jstype.definition.AppendFormat$$String$$Object$$Object = function(a0/*String*/, a1/*Object*/, a2/*Object*/) { 
    
    return CS.Call(4, 348, 21, false, this, a0, a1, a2); 
}
/* StringBuilder */
_jstype.definition.AppendFormat$$String$$Object = function(a0/*String*/, a1/*Object*/) { 
    
    return CS.Call(4, 348, 22, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.AppendFormat$$String$$Object$Array = function(a0/*String*/, a1/*Object[]*/) { 
    
    return CS.Call(4, 348, 23, false, this, a0, jsb_formatParamsArray(1, a1, arguments)); 
}
/* StringBuilder */
_jstype.definition.AppendLine$$String = function(a0/*String*/) { 
    
    return CS.Call(4, 348, 24, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.AppendLine = function() { 
    
    return CS.Call(4, 348, 25, false, this); 
}
/* Void */
_jstype.definition.CopyTo = function(a0/*Int32*/, a1/*Char[]*/, a2/*Int32*/, a3/*Int32*/) { 
    
    return CS.Call(4, 348, 26, false, this, a0, a1, a2, a3); 
}
/* Int32 */
_jstype.definition.EnsureCapacity = function(a0/*Int32*/) { 
    
    return CS.Call(4, 348, 27, false, this, a0); 
}
/* Boolean */
_jstype.definition.Equals$$StringBuilder = function(a0/*StringBuilder*/) { 
    
    return CS.Call(4, 348, 28, false, this, a0); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Char$Array$$Int32$$Int32 = function(a0/*Int32*/, a1/*Char[]*/, a2/*Int32*/, a3/*Int32*/) { 
    
    return CS.Call(4, 348, 29, false, this, a0, a1, a2, a3); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$String$$Int32 = function(a0/*Int32*/, a1/*String*/, a2/*Int32*/) { 
    
    return CS.Call(4, 348, 30, false, this, a0, a1, a2); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Int64 = function(a0/*Int32*/, a1/*Int64*/) { 
    
    return CS.Call(4, 348, 31, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Object = function(a0/*Int32*/, a1/*Object*/) { 
    
    return CS.Call(4, 348, 32, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Double = function(a0/*Int32*/, a1/*Double*/) { 
    
    return CS.Call(4, 348, 33, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Int16 = function(a0/*Int32*/, a1/*Int16*/) { 
    
    return CS.Call(4, 348, 34, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 348, 35, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$UInt16 = function(a0/*Int32*/, a1/*UInt16*/) { 
    
    return CS.Call(4, 348, 36, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$UInt32 = function(a0/*Int32*/, a1/*UInt32*/) { 
    
    return CS.Call(4, 348, 37, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Single = function(a0/*Int32*/, a1/*Single*/) { 
    
    return CS.Call(4, 348, 38, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$SByte = function(a0/*Int32*/, a1/*SByte*/) { 
    
    return CS.Call(4, 348, 39, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$UInt64 = function(a0/*Int32*/, a1/*UInt64*/) { 
    
    return CS.Call(4, 348, 40, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Boolean = function(a0/*Int32*/, a1/*Boolean*/) { 
    
    return CS.Call(4, 348, 41, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$String = function(a0/*Int32*/, a1/*String*/) { 
    
    return CS.Call(4, 348, 42, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Char$Array = function(a0/*Int32*/, a1/*Char[]*/) { 
    
    return CS.Call(4, 348, 43, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Decimal = function(a0/*Int32*/, a1/*Decimal*/) { 
    
    return CS.Call(4, 348, 44, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Char = function(a0/*Int32*/, a1/*Char*/) { 
    
    return CS.Call(4, 348, 45, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Insert$$Int32$$Byte = function(a0/*Int32*/, a1/*Byte*/) { 
    
    return CS.Call(4, 348, 46, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Remove = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 348, 47, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Replace$$Char$$Char$$Int32$$Int32 = function(a0/*Char*/, a1/*Char*/, a2/*Int32*/, a3/*Int32*/) { 
    
    return CS.Call(4, 348, 48, false, this, a0, a1, a2, a3); 
}
/* StringBuilder */
_jstype.definition.Replace$$String$$String$$Int32$$Int32 = function(a0/*String*/, a1/*String*/, a2/*Int32*/, a3/*Int32*/) { 
    
    return CS.Call(4, 348, 49, false, this, a0, a1, a2, a3); 
}
/* StringBuilder */
_jstype.definition.Replace$$String$$String = function(a0/*String*/, a1/*String*/) { 
    
    return CS.Call(4, 348, 50, false, this, a0, a1); 
}
/* StringBuilder */
_jstype.definition.Replace$$Char$$Char = function(a0/*Char*/, a1/*Char*/) { 
    
    return CS.Call(4, 348, 51, false, this, a0, a1); 
}
/* String */
_jstype.definition.toString$$Int32$$Int32 = function(a0/*Int32*/, a1/*Int32*/) { 
    
    return CS.Call(4, 348, 52, false, this, a0, a1); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 348, 53, false, this); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Events$UnityEventBase
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Events.UnityEventBase",
    baseTypeName: "System.Object"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Int32 */
_jstype.definition.GetPersistentEventCount = function() { 
    
    return CS.Call(4, 349, 0, false, this); 
}
/* String */
_jstype.definition.GetPersistentMethodName = function(a0/*Int32*/) { 
    
    return CS.Call(4, 349, 1, false, this, a0); 
}
/* Object */
_jstype.definition.GetPersistentTarget = function(a0/*Int32*/) { 
    
    return CS.Call(4, 349, 2, false, this, a0); 
}
/* Void */
_jstype.definition.RemoveAllListeners = function() { 
    
    return CS.Call(4, 349, 3, false, this); 
}
/* Void */
_jstype.definition.SetPersistentListenerState = function(a0/*Int32*/, a1/*UnityEventCallState*/) { 
    
    return CS.Call(4, 349, 4, false, this, a0, a1); 
}
/* String */
_jstype.definition.toString = function() { 
    
    return CS.Call(4, 349, 5, false, this); 
}
/* static MethodInfo  */
_jstype.staticDefinition.GetValidMethodInfo = function(a0/*Object*/, a1/*String*/, a2/*Type[]*/) { 
    
    return CS.Call(4, 349, 6, true, a0, a1, a2); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Events$UnityEvent<>
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Events.UnityEvent$1",
    baseTypeName: "UnityEngine.Events.UnityEventBase"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}



// fields

// properties

// methods

/* Void */
_jstype.definition.AddListener$$UnityAction$1 = function(a0/*UnityAction`1*/) { 
    
    return CS.Call(4, 350, 0, false, this, a0); 
}
/* Void */
_jstype.definition.Invoke$$T0 = function(a0/*T0*/) { 
    
    return CS.Call(4, 350, 1, false, this, a0); 
}
/* Void */
_jstype.definition.RemoveListener$$UnityAction$1 = function(a0/*UnityAction`1*/) { 
    
    return CS.Call(4, 350, 2, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Events$UnityEvent
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Events.UnityEvent",
    baseTypeName: "UnityEngine.Events.UnityEventBase"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 351, 0, true, this); }

// fields

// properties

// methods

/* Void */
_jstype.definition.AddListener$$UnityAction = function(a0/*UnityAction*/) { 
    
    return CS.Call(4, 351, 0, false, this, a0); 
}
/* Void */
_jstype.definition.Invoke = function() { 
    
    return CS.Call(4, 351, 1, false, this); 
}
/* Void */
_jstype.definition.RemoveListener$$UnityAction = function(a0/*UnityAction*/) { 
    
    return CS.Call(4, 351, 2, false, this, a0); 
}

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];

// UnityEngine$Canvas
_jstype = 
{
    definition: {},
    staticDefinition: {},
    fields: {},
    staticFields: {},
    assemblyName: "",
    Kind: "Class",
    fullname: "UnityEngine.Canvas",
    baseTypeName: "UnityEngine.Behaviour"
};

var _found = false;
for (var i = 0; i < JsTypes.length; i++) {
    if (JsTypes[i].fullname == _jstype.fullname) {
        JsTypes[i] = _jstype;
        _found = true;
        break;
    }
}
if (!_found) {
    JsTypes.push(_jstype);
}


_jstype.definition.ctor = function() { CS.Call(5, 352, 0, true, this); }

// fields

// properties

_jstype.definition.get_renderMode = function() { return CS.Call(2, 352, 0, false, this); }
_jstype.definition.set_renderMode = function(v) { return CS.Call(3, 352, 0, false, this, v); }

_jstype.definition.get_isRootCanvas = function() { return CS.Call(2, 352, 1, false, this); }
_jstype.definition.set_isRootCanvas = function(v) { return CS.Call(3, 352, 1, false, this, v); }

_jstype.definition.get_worldCamera = function() { return CS.Call(2, 352, 2, false, this); }
_jstype.definition.set_worldCamera = function(v) { return CS.Call(3, 352, 2, false, this, v); }

_jstype.definition.get_pixelRect = function() { return CS.Call(2, 352, 3, false, this); }
_jstype.definition.set_pixelRect = function(v) { return CS.Call(3, 352, 3, false, this, v); }

_jstype.definition.get_scaleFactor = function() { return CS.Call(2, 352, 4, false, this); }
_jstype.definition.set_scaleFactor = function(v) { return CS.Call(3, 352, 4, false, this, v); }

_jstype.definition.get_referencePixelsPerUnit = function() { return CS.Call(2, 352, 5, false, this); }
_jstype.definition.set_referencePixelsPerUnit = function(v) { return CS.Call(3, 352, 5, false, this, v); }

_jstype.definition.get_overridePixelPerfect = function() { return CS.Call(2, 352, 6, false, this); }
_jstype.definition.set_overridePixelPerfect = function(v) { return CS.Call(3, 352, 6, false, this, v); }

_jstype.definition.get_pixelPerfect = function() { return CS.Call(2, 352, 7, false, this); }
_jstype.definition.set_pixelPerfect = function(v) { return CS.Call(3, 352, 7, false, this, v); }

_jstype.definition.get_planeDistance = function() { return CS.Call(2, 352, 8, false, this); }
_jstype.definition.set_planeDistance = function(v) { return CS.Call(3, 352, 8, false, this, v); }

_jstype.definition.get_renderOrder = function() { return CS.Call(2, 352, 9, false, this); }
_jstype.definition.set_renderOrder = function(v) { return CS.Call(3, 352, 9, false, this, v); }

_jstype.definition.get_overrideSorting = function() { return CS.Call(2, 352, 10, false, this); }
_jstype.definition.set_overrideSorting = function(v) { return CS.Call(3, 352, 10, false, this, v); }

_jstype.definition.get_sortingOrder = function() { return CS.Call(2, 352, 11, false, this); }
_jstype.definition.set_sortingOrder = function(v) { return CS.Call(3, 352, 11, false, this, v); }

_jstype.definition.get_sortingLayerID = function() { return CS.Call(2, 352, 12, false, this); }
_jstype.definition.set_sortingLayerID = function(v) { return CS.Call(3, 352, 12, false, this, v); }

_jstype.definition.get_cachedSortingLayerValue = function() { return CS.Call(2, 352, 13, false, this); }
_jstype.definition.set_cachedSortingLayerValue = function(v) { return CS.Call(3, 352, 13, false, this, v); }

_jstype.definition.get_sortingLayerName = function() { return CS.Call(2, 352, 14, false, this); }
_jstype.definition.set_sortingLayerName = function(v) { return CS.Call(3, 352, 14, false, this, v); }

// methods

/* static Void  */
_jstype.staticDefinition.ForceUpdateCanvases = function() { 
    
    return CS.Call(4, 352, 0, true); 
}
/* static Material  */
_jstype.staticDefinition.GetDefaultCanvasMaterial = function() { 
    
    return CS.Call(4, 352, 1, true); 
}
/* static Material  */
_jstype.staticDefinition.GetDefaultCanvasTextMaterial = function() { 
    
    return CS.Call(4, 352, 2, true); 
}
