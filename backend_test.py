import requests
import json

# Backend URL from environment
BACKEND_URL = "https://motion-launch-810.preview.emergentagent.com/api"

def test_root_endpoint():
    """Test the root endpoint"""
    print("\n=== Testing Root Endpoint ===")
    try:
        response = requests.get(f"{BACKEND_URL}/")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        assert response.json() == {"message": "Hello World"}, "Unexpected response"
        print("✅ Root endpoint working")
        return True
    except Exception as e:
        print(f"❌ Root endpoint failed: {str(e)}")
        return False

def test_create_status_check():
    """Test creating a status check"""
    print("\n=== Testing Create Status Check ===")
    try:
        payload = {"client_name": "Pilgrif Ventures Test Client"}
        response = requests.post(f"{BACKEND_URL}/status", json=payload)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        data = response.json()
        assert "id" in data, "Missing 'id' field"
        assert data["client_name"] == "Pilgrif Ventures Test Client", "Client name mismatch"
        assert "timestamp" in data, "Missing 'timestamp' field"
        print("✅ Create status check working")
        return True, data["id"]
    except Exception as e:
        print(f"❌ Create status check failed: {str(e)}")
        return False, None

def test_get_status_checks():
    """Test getting all status checks"""
    print("\n=== Testing Get Status Checks ===")
    try:
        response = requests.get(f"{BACKEND_URL}/status")
        print(f"Status Code: {response.status_code}")
        data = response.json()
        print(f"Number of status checks: {len(data)}")
        if len(data) > 0:
            print(f"Sample record: {json.dumps(data[0], indent=2)}")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        assert isinstance(data, list), "Expected list response"
        print("✅ Get status checks working")
        return True
    except Exception as e:
        print(f"❌ Get status checks failed: {str(e)}")
        return False

def main():
    print("=" * 60)
    print("BACKEND API TESTING - Pilgrif Ventures Corporate Website")
    print("=" * 60)
    
    results = {
        "root_endpoint": False,
        "create_status": False,
        "get_status": False
    }
    
    # Test root endpoint
    results["root_endpoint"] = test_root_endpoint()
    
    # Test create status check
    create_result, status_id = test_create_status_check()
    results["create_status"] = create_result
    
    # Test get status checks
    results["get_status"] = test_get_status_checks()
    
    # Summary
    print("\n" + "=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)
    total = len(results)
    passed = sum(1 for v in results.values() if v)
    print(f"Total Tests: {total}")
    print(f"Passed: {passed}")
    print(f"Failed: {total - passed}")
    print("\nDetailed Results:")
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"  {test_name}: {status}")
    
    if passed == total:
        print("\n🎉 All backend API tests passed!")
    else:
        print(f"\n⚠️  {total - passed} test(s) failed")
    
    return passed == total

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
