using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using MVC_Practical_9;
using MVC_Practical_9.Controllers;
using System.Web.Mvc;

namespace UnitTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            
            Test3Controller test3Controller = new Test3Controller();
            var result = test3Controller.Index()   ;
            Assert.AreEqual(result, "Hello World");
        }
    }
}
