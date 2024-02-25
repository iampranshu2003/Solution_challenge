package com.example.solutionchallengeapp

import android.app.Activity
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.constraintlayout.widget.ConstraintLayout
import com.google.android.gms.auth.api.signin.GoogleSignInAccount
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.android.gms.tasks.Task
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.GoogleAuthProvider

class LoginActivity : AppCompatActivity() {
    private lateinit var firebaseAuth: FirebaseAuth
    private lateinit var SignUp: TextView
    private lateinit var GoogleButton: ConstraintLayout
    private lateinit var LoginButton: ConstraintLayout
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)
        firebaseAuth = FirebaseAuth.getInstance()
        SignUp = findViewById(R.id.signUpTv)
        GoogleButton = findViewById(R.id.gSignInBtn)

        LoginButton = findViewById(R.id.LoginButton)
        LoginButton.setOnClickListener {
            val email = findViewById<EditText>(R.id.et_user_name).text.toString()
            val Password = findViewById<EditText>(R.id.editTextTextPassword).text.toString()
            if (email.isNotEmpty() && Password.isNotEmpty()) {

                firebaseAuth.signInWithEmailAndPassword(email, Password).addOnCompleteListener {
                    if (it.isSuccessful) {
                        val intent = Intent(this, DemoActivity::class.java)
                        startActivity(intent)
                    } else {
                        Toast.makeText(this, it.exception.toString(), Toast.LENGTH_SHORT).show()

                    }
                }
            } else {
                Toast.makeText(this, "Empty Fields Are not Allowed !!", Toast.LENGTH_SHORT).show()

            }
        }
        SignUp.setOnClickListener {
            val intent = Intent(this, RegisterActivity::class.java)
            startActivity(intent)
        }

    }
    override fun onStart() {
        super.onStart()
        val currentUser = firebaseAuth.currentUser
        if (currentUser != null) {
            val intent = Intent(this, DemoActivity::class.java)
            startActivity(intent)
        }
    }

}