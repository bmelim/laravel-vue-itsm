<?php
namespace App\Http\Controllers\Auth;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use App\User; 
use Illuminate\Support\Facades\Auth; 
use App\Http\Requests\RegisterRequest;
use Validator;

class ApiAuthController extends Controller 
{
    public $successStatus = 200;
  
    public function register(RegisterRequest $request) {    
        $input = $request->all();  
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input); 
        $success['token'] =  $user->createToken('AppName')->accessToken;
        return response()->json(['success'=>$success], $this->successStatus); 
    }
    
    
    public function login(){ 
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
        $user = Auth::user(); 
        $token =  $user->createToken('PersonalAccessToken'); 
            return response()->json($token, $this->successStatus); 
        } else{ 
        return response()->json(['error'=>'Unauthorised'], 401); 
        } 
    }
    
    public function getUser() {
        $user = Auth::user();
        return response()->json(['success' => $user], $this->successStatus); 
    }
} 